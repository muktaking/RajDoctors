/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const flatMenu = require("./src/utils/meta.data").flatMenu
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
  "doctorId",
  "lang",
  "rating", // kept a String: pages sort on it exactly as before
  "isNew",
  "badges",
  "clinicalExpertise",
  ...[1, 2].flatMap(n => CHAMBER_PARTS.map(p => `chamber${n}${p}`)),
  ...CLEAN_FIELDS,
]
const SHOW_CHAMBER2_WITHOUT_PHONE = false
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
    // Chamber 1 is listed when it has any data. Chamber 2 is listed only when
    // it has a phone number: that is the rule the site always used, and some
    // rows hold unpublished chamber-2 details (e.g. a residence) without a
    // phone. Set SHOW_CHAMBER2_WITHOUT_PHONE to true to publish those as well.
    .filter(c =>
      c.number === 1 || SHOW_CHAMBER2_WITHOUT_PHONE
        ? c.name || c.address || c.phone || c.visitTime || c.hours
        : c.phone
    )

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
    chambers: { type: "[DoctorChamber!]!", resolve: chambersOf },
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

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Doctor") {
    // Same input and rule as before the schema cleanup, so every URL is unchanged.
    const slug = (node.name || "").toLowerCase().replace(/(\.?\s)/g, "-")
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const doctorTemplate = path.resolve("./src/templates/doctor/doctor.js")
  const res = await graphql(`
    query {
      allDoctor {
        nodes {
          fields {
            slug
          }
          doctorId
          lang
          specialty
        }
      }
      allImg: allFile(
        filter: { relativePath: { regex: "/doctor/.*[png|jpeg|jpg|svg]$/" } }
      ) {
        edges {
          node {
            relativePath
            publicURL
          }
        }
      }
      img: file(relativePath: { eq: "doctor/default.png" }) {
        publicURL
      }
    }
  `)
  // Handle errors
  if (res.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  // doctors.csv keeps the old file order (main list first, then isNew rows),
  // which the duplicate-slug rule below relies on.
  // Some rows share a slug (same name, or a bn row written in English).
  // Gatsby 2 kept the FIRST row for a duplicated path while Gatsby 5 keeps the
  // last one, so skip later duplicates to keep the published pages unchanged.
  const createdDoctorPaths = new Set()
  res.data.allDoctor.nodes.forEach(doctor => {
    const language = doctor.lang
    const locale = language !== "en" ? `/${language}` : ""
    const path = `/doctor/${doctor.fields.slug}`
    if (createdDoctorPaths.has(path)) {
      reporter.warn(
        `Duplicate doctor slug ${path} (doctorId ${doctor.doctorId}, ${language}) skipped`
      )
      return
    }
    createdDoctorPaths.add(path)
    const img = res.data.allImg.edges.filter(({ node }) =>
      node.relativePath.includes("doctor/" + doctor.doctorId + "_")
    )
    const imgDefault = {
      src: img.length > 0 ? img[0].node.publicURL : res.data.img.publicURL,
    }
    createPage({
      component: doctorTemplate,
      path,
      context: {
        doctorId: doctor.doctorId,
        specialty: doctor.specialty,
        lang: language,
        slug: doctor.fields.slug,
        imgSrc: imgDefault.src,
      },
    })
  })

  // pages based on speciality
  const speacialityTemplate = path.resolve(
    "./src/templates/speciality/specialityWrapper.js"
  )
  const speciality = flatMenu
  speciality.forEach(spec => {
    createPage({
      component: speacialityTemplate,
      path: "/speciality/" + spec.toLowerCase(),
      context: {
        specialty: spec,
      },
    })
  })

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
