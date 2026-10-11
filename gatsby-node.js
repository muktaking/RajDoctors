/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const fs = require("fs")
const flatMenu = require("./src/utils/meta.data").flatMenu
const DISTRICT_DATA = require("./src/data/districts.json")
const DISTRICTS = DISTRICT_DATA.districts
const ENABLED = DISTRICTS.filter(d => d.enabled)
const districtBySlug = slug => DISTRICTS.find(d => d.slug === slug)
// ---------------------------------------------------------------------------
// Data schema (see docs/DATA.md). src/data/doctors.csv becomes `Doctor` nodes
// (typeName set in gatsby-config.js). Every CSV column is a String, declared
// explicitly so an all-empty column never disappears from the schema.
// Text fields resolve to a cleaned value: the CSV uses "*" instead of a comma,
// so "MBBS* MD" is returned as "MBBS, MD". List-like columns are exposed as
// lists. `raw` gives the untouched CSV row values when needed.
// ---------------------------------------------------------------------------
const cleanText = v => (v ? String(v).replace(/\s*\*\s*/g, ", ") : "")
const splitList = v =>
  v
    ? String(v)
        .split(/\*|\r?\n/)
        .map(s => s.trim())
        .filter(Boolean)
    : []
const BADGES = ["Topper", "Popular", "Busy", "Trusted"] // order of the "0*0*1*1" flags
const CHAMBER_PARTS = ["Name", "Address", "Phone", "VisitTime", "Hours", "Days", "OffDays"]
const CLEAN_FIELDS = [
  "name",
  "specialty",
  "degrees",
  "designation",
  "institute",
  "fee",
  "protocol",
]
const RAW_FIELDS = [
  "district",
  "doctorId",
  "lang",
  "rating", // kept a String: pages sort on it exactly as before
  "isNew",
  "badges",
  "clinicalExpertise",
  ...[1, 2].flatMap(n => CHAMBER_PARTS.map(p => `chamber${n}${p}`)),
  ...CLEAN_FIELDS,
]
const chambersOf = source =>
  [1, 2]
    .map(n => {
      const get = p => source[`chamber${n}${p}`] || ""
      return {
        number: n,
        name: cleanText(get("Name")),
        address: cleanText(get("Address")),
        phone: cleanText(get("Phone")),
        phones: splitList(get("Phone")),
        visitTime: cleanText(get("VisitTime")),
        hours: cleanText(get("Hours")),
        days: cleanText(get("Days")),
        offDays: cleanText(get("OffDays")),
      }
    })
    // A chamber is listed when it has a name, address, phone or time.
    .filter(c => c.name || c.address || c.phone || c.visitTime || c.hours)

// Lookups used by the `localized` and `photo` resolvers. Built on first use and
// dropped whenever a Doctor or doctor photo node is (re)created, so
// `gatsby develop` picks up CSV / photo edits.
let doctorIndex = null // "district|doctorId|lang" -> node id (first row wins);
// also "district|lang" -> true for every language a district has rows in
let photoIndex = null // "district/doctorId" -> File node id; "default" -> default.png
const PHOTO_DIR = /^doctor\/([^/]+)\/([^_/]+)_[^/]+\.(png|jpe?g|svg|webp)$/i
async function getDoctorIndex(nodeModel) {
  if (doctorIndex) return doctorIndex
  const { entries } = await nodeModel.findAll({ type: "Doctor" })
  const map = new Map()
  for (const n of entries) {
    const key = `${n.district}|${n.doctorId}|${n.lang}`
    if (!map.has(key)) map.set(key, n.id)
    map.set(`${n.district}|${n.lang}`, true)
  }
  return (doctorIndex = map)
}
async function getPhotoIndex(nodeModel) {
  if (photoIndex) return photoIndex
  const { entries } = await nodeModel.findAll({
    type: "File",
    query: { filter: { sourceInstanceName: { eq: "images" } } },
  })
  const map = new Map()
  for (const f of entries) {
    if (f.relativePath === "doctor/default.png") map.set("default", f.id)
    const m = PHOTO_DIR.exec(f.relativePath)
    if (m && !map.has(`${m[1]}/${m[2]}`)) map.set(`${m[1]}/${m[2]}`, f.id)
  }
  return (photoIndex = map)
}

module.exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  const fields = {
    doctorId: "String",
    lang: "String",
    rating: "String",
    isNew: {
      type: "Boolean!",
      resolve: s => String(s.isNew).trim().toLowerCase() === "true",
    },
    badges: {
      type: "[String!]!",
      description: "Earned badge names, e.g. [\"Busy\", \"Trusted\"]",
      // same rule the card used before: every flag that is not 0 is earned
      resolve: s =>
        (s.badges ? String(s.badges).split("*") : [])
          .map((flag, i) => (parseInt(flag, 10) === 0 ? null : BADGES[i]))
          .filter(Boolean),
    },
    clinicalExpertise: {
      type: "[String!]!",
      resolve: s => splitList(s.clinicalExpertise),
    },
    district: "String",
    chambers: { type: "[DoctorChamber!]!", resolve: chambersOf },
    photo: {
      type: "File",
      description:
        "src/images/doctor/<district>/<doctorId>_*.(jpg|png|...), else doctor/default.png",
      resolve: async (s, args, { nodeModel }) => {
        const map = await getPhotoIndex(nodeModel)
        const id = map.get(`${s.district}/${s.doctorId}`) || map.get("default")
        return id ? nodeModel.getNodeById({ id, type: "File" }) : null
      },
    },
    localized: {
      type: "Doctor",
      description:
        "The row of the same doctor (district + doctorId) in `lang`. With fallback: true the row itself is returned when the district has no rows at all in that language (e.g. Bangla pages of an English-only district); a district that has Bangla rows keeps the old rule (no row -> not listed).",
      args: { lang: "String!", fallback: { type: "Boolean", defaultValue: false } },
      resolve: async (s, { lang, fallback }, { nodeModel }) => {
        const map = await getDoctorIndex(nodeModel)
        const id = map.get(`${s.district}|${s.doctorId}|${lang}`)
        if (id) return nodeModel.getNodeById({ id, type: "Doctor" })
        return fallback && !map.has(`${s.district}|${lang}`) ? s : null
      },
    },
    raw: { type: "DoctorRaw!", resolve: s => s },
    fields: "DoctorFields",
  }
  CLEAN_FIELDS.forEach(f => {
    fields[f] = { type: "String!", resolve: s => cleanText(s[f]) }
  })
  const rawFields = {}
  RAW_FIELDS.forEach(f => {
    rawFields[f] = { type: "String", resolve: s => s[f] || "" }
  })
  createTypes([
    schema.buildObjectType({
      name: "Doctor",
      interfaces: ["Node"],
      extensions: { infer: false },
      fields,
    }),
    schema.buildObjectType({ name: "DoctorRaw", fields: rawFields }),
    `
    type DoctorFields {
      slug: String
    }
    type DoctorChamber {
      number: Int!
      name: String!
      address: String!
      phone: String!
      phones: [String!]!
      visitTime: String!
      hours: String!
      days: String!
      offDays: String!
    }
    type TelemediDoctorListsCsv implements Node @infer {
      name: String
      specialty: String
      degrees: String
      skills: String
      designation: String
      institute: String
      fee: String
      consultationTime: String
      offDays: String
      phone: String
      email: String
      whatsapp: String
      telegram: String
      otherContacts: String
    }
    `,
  ])
}

// Slug of a doctor row, per district (districts.json `slugStyle`):
//  "name"    -> "dr-azizul-haque"          (Rajshahi: the old rajdoctors.com URLs)
//  "name_id" -> "dr-shayda-ali_emrlDu"     (the URLs the district sub-domains used)
const nameSlug = name => (name || "").toLowerCase().replace(/(\.?\s)/g, "-")
const doctorSlug = (node, district) =>
  district && district.slugStyle === "name_id"
    ? `${nameSlug(node.name)}_${node.doctorId}`
    : nameSlug(node.name)

module.exports.onCreateNode = ({ node, actions, getNode, reporter }) => {
  const { createNodeField } = actions
  if (node.internal.type === "File" && /^doctor\//.test(node.relativePath || "")) {
    photoIndex = null
  }
  if (node.internal.type === "Doctor") {
    doctorIndex = null
    const file = node.parent && getNode(node.parent)
    const district = districtBySlug(node.district)
    if (!district) {
      reporter.warn(
        `Doctor ${node.doctorId} in ${file ? file.relativePath : "?"} has unknown district "${node.district}"`
      )
    } else if (file && file.name !== node.district) {
      reporter.warn(
        `Doctor ${node.doctorId}: district "${node.district}" in ${file.relativePath} (file name differs)`
      )
    }
    createNodeField({
      node,
      name: "slug",
      value: doctorSlug(node, district),
    })
  }
}

// Search: one elasticlunr index per district, written to
// public/search/<district>.json and fetched by the search box on first use
// (the old single index was a static query shipped with every page).
function writeSearchIndexes(nodes, reporter) {
  const elasticlunr = require("elasticlunr")
  const dir = path.join(__dirname, "public", "search")
  fs.mkdirSync(dir, { recursive: true })
  for (const district of ENABLED) {
    const index = elasticlunr()
    index.setRef("id")
    index.addField("name")
    index.addField("specialty")
    index.saveDocument(true)
    nodes
      .filter(n => n.district === district.slug)
      .forEach(n =>
        index.addDoc({
          id: n.id,
          name: n.name,
          specialty: n.specialty,
          slug: n.fields.slug,
          lang: n.lang,
          district: n.district,
        })
      )
    fs.writeFileSync(path.join(dir, `${district.slug}.json`), JSON.stringify(index.toJSON()))
  }
  reporter.info(`Search indexes written to public/search/ (${ENABLED.map(d => d.slug).join(", ")})`)
}

const tpl = p => path.resolve(`./src/templates/${p}`)
// Per-district emergency numbers (src/data/emergency/<district>.json); the
// national list is used when a district has no file yet.
const emergencyOf = slug => {
  const file = path.join(__dirname, "src", "data", "emergency", `${slug}.json`)
  const fallback = path.join(__dirname, "src", "data", "emergency", "_national.json")
  return JSON.parse(fs.readFileSync(fs.existsSync(file) ? file : fallback, "utf8"))
}
const DOCTORS_PER_PAGE = 6

module.exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const doctorTemplate = tpl("doctor/doctor.js")
  const res = await graphql(`
    query {
      allDoctor(sort: [{ isNew: ASC }, { rating: DESC }]) {
        nodes {
          id
          fields {
            slug
          }
          district
          doctorId
          lang
          name
          specialty
          rating
          photo {
            publicURL
          }
        }
      }
      unsorted: allDoctor {
        nodes {
          id
          district
          fields {
            slug
          }
          doctorId
          lang
          name
          specialty
          photo {
            publicURL
          }
        }
      }
    }
  `)
  // Handle errors
  if (res.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query: ${res.errors}`)
    return
  }
  const enabled = new Set(ENABLED.map(d => d.slug))
  const skippedDistricts = {}
  const stats = {}

  for (const district of ENABLED) {
    const d = district.slug
    const unsorted = res.data.unsorted.nodes.filter(n => n.district === d)
    if (!unsorted.length) {
      reporter.warn(`District ${d} is enabled but has no rows (src/data/doctors/${d}.csv)`)
    }
    const base = { district: d }

    // District home, all-doctors list (paginated), speciality index, emergency
    const emergency = emergencyOf(d)
    createPage({
      component: tpl("district/home.js"),
      path: `/${d}/`,
      context: base, // (emergency numbers card removed from the home page)
    })
    createPage({
      component: tpl("district/emergency.js"),
      path: `/${d}/emergency/`,
      context: { ...base, emergency },
    })
    createPage({
      component: tpl("district/specialities.js"),
      path: `/${d}/speciality/`,
      context: base,
    })

    // /<d>/doctors/ lists the doctors in the order the old client-side list
    // used: sorted (isNew, rating desc), then lodash sortBy rating, drop the
    // first, reverse. One static page per 6 doctors (was client-side state).
    const sorted = res.data.allDoctor.nodes.filter(n => n.district === d)
    const listed = require("lodash").sortBy(sorted, ["rating"]).slice(1).reverse()
    const pageCount = Math.max(1, Math.ceil(listed.length / DOCTORS_PER_PAGE))
    const schemaIds = sorted.slice(0, 3).map(n => n.id)
    for (let i = 0; i < pageCount; i++) {
      const ids = listed.slice(i * DOCTORS_PER_PAGE, (i + 1) * DOCTORS_PER_PAGE).map(n => n.id)
      createPage({
        component: tpl("district/doctors.js"),
        path: i === 0 ? `/${d}/doctors/` : `/${d}/doctors/${i + 1}/`,
        context: {
          ...base,
          ids,
          schemaIds,
          queryIds: [...new Set([...ids, ...schemaIds])],
          currentPage: i + 1,
          pageCount,
        },
      })
    }

    // Doctor pages. Rows sharing a slug inside a district: the FIRST row (CSV
    // order) wins, as Gatsby 2 did on the single-district site.
    const created = new Set()
    let count = 0
    unsorted.forEach(doctor => {
      const pagePath = `/${d}/doctor/${doctor.fields.slug}`
      if (created.has(pagePath)) {
        reporter.warn(
          `Duplicate doctor slug ${pagePath} (doctorId ${doctor.doctorId}, ${doctor.lang}) skipped`
        )
        return
      }
      created.add(pagePath)
      count++
      createPage({
        component: doctorTemplate,
        path: pagePath,
        context: {
          ...base,
          doctorId: doctor.doctorId,
          specialty: doctor.specialty,
          lang: doctor.lang,
          slug: doctor.fields.slug,
          imgSrc: doctor.photo ? doctor.photo.publicURL : "",
        },
      })
    })

    // pages based on speciality
    flatMenu.forEach(spec => {
      createPage({
        component: tpl("speciality/specialityWrapper.js"),
        path: `/${d}/speciality/${spec.toLowerCase()}`,
        context: { ...base, specialty: spec },
      })
    })
    stats[d] = { rows: unsorted.length, doctorPages: count, listPages: pageCount }
  }
  res.data.unsorted.nodes.forEach(n => {
    if (!enabled.has(n.district)) skippedDistricts[n.district] = (skippedDistricts[n.district] || 0) + 1
  })
  Object.entries(skippedDistricts).forEach(([d, n]) =>
    reporter.warn(`${n} doctor row(s) of district "${d}" skipped (not enabled in districts.json)`)
  )
  reporter.info(`District pages: ${JSON.stringify(stats)}`)

  // Dev only: old single-district (default district = Rajshahi) URLs ->
  // /<default>/... so old bookmarks work in `gatsby develop`. Production uses
  // static/.htaccess (scripts/generate-htaccess.js), which covers the same paths.
  if (process.env.NODE_ENV === "development" && enabled.has(DISTRICT_DATA.defaultDistrict)) {
    const def = DISTRICT_DATA.defaultDistrict
    const rest = new Set(["doctors/", "speciality/", "emergency/"])
    flatMenu.forEach(spec => rest.add(`speciality/${spec.toLowerCase()}`))
    res.data.unsorted.nodes
      .filter(n => n.district === def && n.fields.slug)
      .forEach(n => rest.add(`doctor/${n.fields.slug}`))
    let n = 0
    for (const prefix of ["/", "/en/", "/bn/"]) {
      for (const r of rest) {
        const to = `${prefix}${def}/${r}`
        for (const from of new Set([`${prefix}${r}`, `${prefix}${r.replace(/\/$/, "")}`, `${prefix}${r.replace(/\/?$/, "/")}`])) {
          actions.createRedirect({ fromPath: from, toPath: to, isPermanent: true, redirectInBrowser: true })
          n++
        }
      }
    }
    reporter.info(`Dev redirects for old ${def} URLs: ${n}`)
  }

  writeSearchIndexes(res.data.unsorted.nodes.filter(n => enabled.has(n.district)), reporter)

  // pages based on teledoctor
  const resTeleDoctor = await graphql(`
    query {
      allTelemediDoctorLists: allTelemediDoctorListsCsv {
        edges {
          node {
            id
          }
        }
      }
    }
  `)
  //Handle errors
  if (resTeleDoctor.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  const teledoctorTemplate = path.resolve(
    "./src/templates/teledoctor/teledoctor.js"
  )
  resTeleDoctor.data.allTelemediDoctorLists.edges.forEach(edge => {
    const path = `/teledoctor/${edge.node.id}`
    createPage({
      component: teledoctorTemplate,
      path,
      context: {
        //pagePath: edge.node.fields.slug,
        id: edge.node.id,
        imgRelativePath: `teledoctor/${edge.node.id}.jpg`
      },
    })
  })
}

// exports.onCreatePage = ({ page, actions }) => {
//   const { createPage, deletePage } = actions
//   if (
//     page.path.includes("/en/") ||
//     (page.path.includes("/bn/") && page.context.lang === "en") ||
//     (!page.path.includes("/bn/") && page.context.lang === "bn")
//   ) {
//     deletePage(page)
//   }
// }

// gatsby-plugin-intl v5 requires `@formatjs/*/locale-data/${locale}` dynamically,
// which makes webpack bundle every locale (~2.7 MB). Only en and bn are used.
module.exports.onCreateWebpackConfig = ({ actions, plugins }) => {
  actions.setWebpackConfig({
    plugins: [
      plugins.contextReplacement(
        /@formatjs[\\/]intl-(pluralrules|relativetimeformat)[\\/]locale-data$/,
        /^\.\/(en|bn)(\.js)?$/
      ),
    ],
  })
}

// Gatsby 2 gave file-system pages (src/pages/*) a trailing slash ("/about-us/").
// Gatsby 5 with trailingSlash: "ignore" creates them as "/about-us". Restore the
// old paths so page paths, links and sitemap URLs stay identical. This runs on
// the pages gatsby-plugin-intl has already localised (context.intl is set).
module.exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  const fromPagesDir = page.component.includes(
    `${path.sep}src${path.sep}pages${path.sep}`
  )
  if (
    !fromPagesDir ||
    !page.context ||
    !page.context.intl ||
    page.path === "/" ||
    page.path.endsWith("/") ||
    page.path.endsWith(".html")
  ) {
    return
  }
  const withSlash = p => (p.endsWith("/") || p.endsWith(".html") ? p : p + "/")
  deletePage(page)
  createPage({
    ...page,
    path: withSlash(page.path),
    context: {
      ...page.context,
      intl: {
        ...page.context.intl,
        originalPath: withSlash(page.context.intl.originalPath),
      },
    },
  })
}

// gatsby-plugin-sitemap v6 writes sitemap-index.xml + sitemap-0.xml, while
// robots.txt and search consoles point at /sitemap.xml (Gatsby 2 output).
// Keep /sitemap.xml as the same <urlset> document it used to be.
module.exports.onPostBuild = ({ reporter }) => {
  const fs = require("fs")
  const pub = path.join(__dirname, "public")
  const chunks = fs.readdirSync(pub).filter(f => /^sitemap-\d+\.xml$/.test(f))
  if (chunks.length === 1) {
    fs.copyFileSync(path.join(pub, chunks[0]), path.join(pub, "sitemap.xml"))
  } else if (chunks.length > 1) {
    fs.copyFileSync(
      path.join(pub, "sitemap-index.xml"),
      path.join(pub, "sitemap.xml")
    )
  } else {
    reporter.warn("No sitemap chunk found; /sitemap.xml not written")
  }
}
