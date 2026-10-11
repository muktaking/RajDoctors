/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const flatMenu = require("./src/utils/meta.data").flatMenu
// Explicit types so ClinicalExpertise is always a String field, even when every
// row in a CSV leaves it empty (Gatsby would otherwise not infer the field).
module.exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type DoctorListsCsv implements Node @infer {
      ClinicalExpertise: String
    }
    type DoctorListsCopyCsv implements Node @infer {
      ClinicalExpertise: String
    }
  `)
}

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNode, createNodeField } = actions
  if (node.internal.type === "DoctorListsCsv" || node.internal.type === "DoctorListsCopyCsv") {
    //if (node.lang === "en") {
    //const slug = node.Name.replace(/\s|\./g, "_") + "_" + node.uid
    const slug = node.Name.toLowerCase().replace(/(\.?\s)/g, "-")
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
    //}
  }
  // Transform the new node here and create a new node or
  // create a new node field.
}

module.exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const doctorTemplate = path.resolve("./src/templates/doctor/doctor.js")
  const res = await graphql(`
    query {
      allDoctorListsCsv: allDoctorListsCsv {
        edges {
          node {
            fields {
              slug
            }
            id
            uid
            Name
            lang
            Speciality
          }
        }
      }
      allDoctorListsCopyCsv: allDoctorListsCopyCsv {
        edges {
          node {
            fields {
              slug
            }
            id
            uid
            Name
            lang
            Speciality
          }
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
  // res.data.allDoctorListsCsv.edges = res.data.allDoctorListsCsv.edges.filter(
  //   edge => edge.node.lang === "en"
  // )
  res.data.allDoctorListsCsv.edges.push(...res.data.allDoctorListsCopyCsv.edges)
  // Some rows share a slug (same name, or a bn row written in English).
  // Gatsby 2 kept the FIRST row for a duplicated path while Gatsby 5 keeps the
  // last one, so skip later duplicates to keep the published pages unchanged.
  const createdDoctorPaths = new Set()
  res.data.allDoctorListsCsv.edges.forEach(edge => {
    const language = edge.node.lang
    const locale = language !== "en" ? `/${language}` : ""
    //const path = `/doctor/${edge.node.uid}-${language}`
    const path = `/doctor/${edge.node.fields.slug}`
    if (createdDoctorPaths.has(path)) {
      reporter.warn(
        `Duplicate doctor slug ${path} (uid ${edge.node.uid}, ${language}) skipped`
      )
      return
    }
    createdDoctorPaths.add(path)
    const img = res.data.allImg.edges.filter(({ node }) =>
      node.relativePath.includes("doctor/" + edge.node.uid + "_")
    )
    const imgDefault = {
      src: img.length > 0 ? img[0].node.publicURL : res.data.img.publicURL,
    }
    createPage({
      component: doctorTemplate,
      //path: "/doctor/" + edge.node.id,
      // path:
      //   "/doctor/" +
      //   edge.node.Name.replace(/\s/g, "%20") +
      //   "+uid=" +
      //   edge.node.uid,
      path,
      context: {
        //pagePath: edge.node.fields.slug,
        uid: edge.node.uid,
        Speciality: edge.node.Speciality,
        lang: language,
        slug: edge.node.fields.slug,
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
        Speciality: spec,
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
