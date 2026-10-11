#!/usr/bin/env node
/*
 * Convert old-format RajDoctors CSV files to the current schema (docs/DATA.md).
 *
 * Doctors (default type) — merges a district's old files into one CSV:
 *   node scripts/migrate-doctor-csv.js --district rajshahi \
 *     --out src/data/doctors/rajshahi.csv \
 *     src/data/doctorLists.csv --new src/data/doctorListsCopy.csv
 *
 *   Files are written in the order given; a file preceded by --new gets
 *   isNew=true on its rows. Order matters: when two rows produce the same
 *   slug, the FIRST row wins (gatsby-node.js), so keep the main list first.
 *
 * Telemedicine doctors / carousel:
 *   node scripts/migrate-doctor-csv.js --type telemedicine --out out.csv in.csv
 *   node scripts/migrate-doctor-csv.js --type carousel     --out out.csv in.csv
 *
 * Options:
 *   --type doctors|telemedicine|carousel   (default: doctors)
 *   --out <file>        output file (default: print to stdout)
 *   --new <file>        (doctors) input whose rows are marked isNew=true
 *   --district <slug>   (doctors) set the district column (e.g. rajshahi, dhaka);
 *                       must be an entry of src/data/districts.json
 *   --repair            fix cells split by an unquoted "&amp;" (shifted rows),
 *                       decode &amp; and name a headerless SpecialityDetails
 *                       column (needed for the Dhaka/Sylhet exports)
 *   --repair-log <file> write one line per repaired row to <file>
 *   --drop-blank        drop rows where every cell is empty (off by default,
 *                       because blank rows currently produce a /doctor/ page)
 *   --force             overwrite --out if it exists
 *
 * Cell values are copied verbatim (including the "*" separators); only the
 * column names/order change. Files already in the new format pass through.
 * No dependencies: run it with plain Node (>= 14).
 */
"use strict"
const fs = require("fs")
const path = require("path")

// ---- schemas --------------------------------------------------------------
const SCHEMAS = {
  doctors: {
    columns: [
      "district", "doctorId", "lang", "name", "specialty", "degrees", "designation",
      "institute", "rating", "fee", "badges", "isNew",
      "chamber1Name", "chamber1Address", "chamber1Phone", "chamber1VisitTime",
      "chamber1Hours", "chamber1Days", "chamber1OffDays",
      "chamber2Name", "chamber2Address", "chamber2Phone", "chamber2VisitTime",
      "chamber2Hours", "chamber2Days", "chamber2OffDays",
      "protocol", "clinicalExpertise",
    ],
    // old header (trimmed, case-insensitive) -> new column
    aliases: {
      district: "district", uid: "doctorId", lang: "lang", name: "name", rating: "rating",
      degree: "degrees", speciality: "specialty", designation: "designation",
      institute: "institute",
      loc1: "chamber1Name", locdetail1: "chamber1Address",
      contact1: "chamber1Phone", visittime1: "chamber1VisitTime",
      opentime1: "chamber1Hours", opendate1: "chamber1Days",
      closedate1: "chamber1OffDays",
      loc2: "chamber2Name", locdetail2: "chamber2Address",
      contact2: "chamber2Phone", visittime2: "chamber2VisitTime",
      opentime2: "chamber2Hours", opendate2: "chamber2Days",
      closedate2: "chamber2OffDays",
      protocol: "protocol", fee: "fee", badges: "badges",
      clinicalexpertise: "clinicalExpertise",
      // seen in a stray file: a free-text description of the specialty
      specialitydetails: "clinicalExpertise",
    },
  },
  telemedicine: {
    columns: [
      "id", "name", "specialty", "degrees", "skills", "designation",
      "institute", "fee", "consultationTime", "offDays", "phone", "email",
      "whatsapp", "telegram", "otherContacts",
    ],
    aliases: {
      id: "id", name: "name", speciality: "specialty", degree: "degrees",
      skill: "skills", designation: "designation", institute: "institute",
      fee: "fee", consultationtime: "consultationTime", closetime: "offDays",
      contactnumber: "phone", email: "email", whatsapp: "whatsapp",
      telegram: "telegram", othercontacts: "otherContacts",
    },
  },
  carousel: {
    // "id" is renamed to "slot": gatsby-transformer-csv uses an "id" column as
    // the Gatsby node id, which collided with the telemedicine ids ("1", "2").
    columns: [
      "slot", "doctorId", "name", "specialty", "degrees", "designation",
      "institute", "phone", "chamberName",
    ],
    aliases: {
      id: "slot", uid: "doctorId", name: "name", speciality: "specialty",
      degree: "degrees", designation: "designation", institute: "institute",
      contactnumber: "phone", chamberlocation: "chamberName",
    },
  },
}

// ---- tiny RFC 4180 CSV parser / writer ------------------------------------
function parseCsv(text) {
  if (text.charCodeAt(0) === 0xfeff) text = text.slice(1) // BOM
  const rows = []
  let row = [], cell = "", i = 0, quoted = false
  while (i < text.length) {
    const c = text[i]
    if (quoted) {
      if (c === '"') {
        if (text[i + 1] === '"') { cell += '"'; i += 2; continue }
        quoted = false; i++; continue
      }
      cell += c; i++; continue
    }
    if (c === '"') { quoted = true; i++; continue }
    if (c === ",") { row.push(cell); cell = ""; i++; continue }
    if (c === "\r" && text[i + 1] === "\n") i++
    if (c === "\n" || c === "\r") { row.push(cell); rows.push(row); row = []; cell = ""; i++; continue }
    cell += c; i++
  }
  if (cell !== "" || row.length) { row.push(cell); rows.push(row) }
  return rows
}
const quote = v => (/[",\r\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v)
const toCsv = rows => rows.map(r => r.map(quote).join(",")).join("\n") + "\n"

// ---- conversion -----------------------------------------------------------
// --repair: fix damage seen in the district exports (Dhaka, Sylhet, ...).
// 1. An unquoted "&amp;" turned into "&amp," and split one cell in two
//    ("4pm to 8pm (Closed: Wed &amp" | " Friday)"). The pieces are joined
//    back; when the split pushed the rest of the row one cell to the right
//    (detected by data in columns past the last header column) the row is
//    shifted back left, otherwise the freed cell is left empty.
// 2. HTML entities (&amp; &amp) become "&".
// 3. A headerless column right after Fee is the SpecialityDetails column
//    (Dhaka's doctorListsCopy.csv lost that header).
function repairRows(rows, file, warn, log) {
  const header = rows[0].map(h => h.trim())
  const fee = header.findIndex(h => h.toLowerCase() === "fee")
  const hasDetails = header.some(h => ["specialitydetails", "clinicalexpertise"].includes(h.toLowerCase()))
  if (fee >= 0 && !hasDetails && header[fee + 1] === "") {
    rows[0][fee + 1] = "SpecialityDetails"
    header[fee + 1] = "SpecialityDetails"
    warn(`${file}: repair: headerless column ${fee + 2} after Fee treated as SpecialityDetails`)
  }
  let last = header.length - 1
  while (last > 0 && header[last] === "") last--
  const decode = v => v.replace(/&amp;?/g, "&")
  for (let n = 1; n < rows.length; n++) {
    const r = rows[n]
    const id = r[0]
    for (let i = 0; i < r.length - 1; i++) {
      if (!/&amp$/.test(r[i].trimEnd()) || !/^\s/.test(r[i + 1])) continue
      const before = `${header[i]}="${r[i]}" | ${header[i + 1] || "#" + (i + 2)}="${r[i + 1]}"`
      r[i] = r[i].trimEnd() + ";" + r[i + 1]
      const overflow = r.slice(last + 1).some(v => v.trim() !== "")
      if (overflow) { r.splice(i + 1, 1); r.push("") } else r[i + 1] = ""
      log.push(`${file}: row ${n + 1} (uid ${id}): joined ${before} -> ${header[i]}="${decode(r[i])}"${overflow ? ", rest of row shifted left" : ""}`)
      i--
    }
    for (let i = 0; i < r.length; i++) r[i] = decode(r[i])
  }
}

function convertFile(file, schema, extra, warn, forceExtra, repair, log) {
  const rows = parseCsv(fs.readFileSync(file, "utf8"))
  if (!rows.length) return []
  if (repair) repairRows(rows, file, warn, log)
  const header = rows[0].map(h => h.trim())
  const lookup = {}
  for (const c of schema.columns) lookup[c.toLowerCase()] = c
  const map = header.map(h => {
    const k = h.toLowerCase()
    const target = schema.aliases[k] || lookup[k] // old name or already new
    if (!target) warn(`${file}: ${h ? `unknown column "${h}"` : "unnamed column"} dropped`)
    return target
  })
  const out = []
  for (const r of rows.slice(1)) {
    const obj = {}
    map.forEach((col, i) => {
      if (!col) return
      const v = r[i] === undefined ? "" : r[i]
      // never let an alias (e.g. SpecialityDetails) overwrite real data
      if (obj[col] && !v) return
      if (obj[col] && v) { warn(`${file}: two columns map to ${col}; keeping the first`); return }
      obj[col] = v
    })
    // extra (isNew) fills empty cells; --new files always get isNew=true
    for (const [k, v] of Object.entries(extra)) {
      if (k === "district") {
        if (obj.district && obj.district !== v) warn(`${file}: district "${obj.district}" replaced by --district ${v}`)
        obj.district = v
      } else if (forceExtra || !obj[k]) obj[k] = v
    }
    out.push(schema.columns.map(c => (obj[c] === undefined ? "" : obj[c])))
  }
  return out
}

// Pick the schema whose old or new column names match the most header cells.
function detectType(header) {
  let best = null, bestScore = 0
  for (const [type, s] of Object.entries(SCHEMAS)) {
    const names = new Set([...Object.keys(s.aliases), ...s.columns.map(c => c.toLowerCase())])
    const score = header.filter(h => names.has(h.trim().toLowerCase())).length / Math.max(header.length, 1)
    if (score > bestScore) { best = type; bestScore = score }
  }
  return best
}

function main(argv) {
  const args = { type: "doctors", inputs: [], dropBlank: false, force: false }
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]
    if (a === "--type") { args.type = argv[++i]; args.typeGiven = true }
    else if (a === "--out") args.out = argv[++i]
    else if (a === "--new") args.inputs.push({ file: argv[++i], isNew: true })
    else if (a === "--district") args.district = argv[++i]
    else if (a === "--repair") args.repair = true
    else if (a === "--repair-log") args.repairLog = argv[++i]
    else if (a === "--drop-blank") args.dropBlank = true
    else if (a === "--force") args.force = true
    else if (a === "-h" || a === "--help") { console.log(fs.readFileSync(__filename, "utf8").split("*/")[0]); return 0 }
    else if (a.startsWith("--")) throw new Error(`unknown option ${a}`)
    else args.inputs.push({ file: a, isNew: false })
  }
  if (!args.typeGiven) {
    // refuse to silently convert e.g. a telemedicine file as a doctors file
    const header = parseCsv(fs.readFileSync(args.inputs[0].file, "utf8").split(/\r?\n/)[0])[0] || []
    const guess = detectType(header)
    if (guess && guess !== args.type) throw new Error(`${args.inputs[0].file} looks like a "${guess}" file; pass --type ${guess}`)
  }
  if (args.district) {
    if (args.type !== "doctors") throw new Error("--district is only for --type doctors")
    const list = path.join(__dirname, "..", "src", "data", "districts.json")
    if (fs.existsSync(list)) {
      const known = JSON.parse(fs.readFileSync(list, "utf8")).districts.map(d => d.slug)
      if (!known.includes(args.district)) throw new Error(`unknown district "${args.district}" (see src/data/districts.json)`)
    }
  }
  const schema = SCHEMAS[args.type]
  if (!schema) throw new Error(`--type must be one of ${Object.keys(SCHEMAS).join(", ")}`)
  if (!args.inputs.length) throw new Error("no input files (see --help)")
  if (args.type !== "doctors" && args.inputs.some(x => x.isNew)) throw new Error("--new is only for --type doctors")
  if (args.out && fs.existsSync(args.out) && !args.force) throw new Error(`${args.out} exists (use --force)`)

  const warnings = []
  const repairLog = []
  const warn = m => { if (!warnings.includes(m)) warnings.push(m) }
  let rows = []
  for (const { file, isNew } of args.inputs) {
    const extra = args.type === "doctors" ? { isNew: isNew ? "true" : "false" } : {}
    if (args.district) extra.district = args.district
    const converted = convertFile(file, schema, extra, warn, isNew, args.repair, repairLog)
    console.error(`${file}: ${converted.length} rows${isNew ? " (isNew=true)" : ""}`)
    rows.push(...converted)
  }
  const autoCols = ["isNew", "district"].map(c => schema.columns.indexOf(c))
  const blank = r => r.every((v, i) => autoCols.includes(i) || v.trim() === "")
  if (args.type === "doctors") {
    const missing = rows.filter(r => !blank(r) && !r[schema.columns.indexOf("district")]).length
    if (missing) warn(`${missing} row(s) have no district (use --district <slug>)`)
  }
  const blanks = rows.filter(blank).length
  if (blanks) console.error(`${blanks} blank row(s) ${args.dropBlank ? "dropped" : "kept (use --drop-blank to remove)"}`)
  if (args.repair) {
    console.error(`repair: ${repairLog.length} split cell(s) joined`)
    if (args.repairLog) fs.writeFileSync(args.repairLog, repairLog.join("\n") + "\n")
  }
  if (args.dropBlank) rows = rows.filter(r => !blank(r))
  warnings.forEach(w => console.error("warning: " + w))

  const csv = toCsv([schema.columns, ...rows])
  if (args.out) {
    fs.mkdirSync(path.dirname(path.resolve(args.out)), { recursive: true })
    fs.writeFileSync(args.out, csv)
    console.error(`wrote ${rows.length} rows to ${args.out}`)
  } else process.stdout.write(csv)
  return 0
}

if (require.main === module) {
  try { process.exitCode = main(process.argv.slice(2)) }
  catch (e) { console.error("error: " + e.message); process.exitCode = 1 }
}
module.exports = { parseCsv, toCsv, SCHEMAS, convertFile }
