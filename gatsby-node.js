/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const flatMenu = require("./src/utils/meta.data").flatMenu
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNode, createNodeField } = actions
  if (node.internal.type === "DoctorListsCsv") {
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
      allDoctorListsCsv {
        edges {
          node {
            fields {
              slug
            }
            id
            uid
            Name
            lang
          }
        }
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
  res.data.allDoctorListsCsv.edges.forEach(edge => {
    const language = edge.node.lang
    const locale = language !== "en" ? `/${language}` : ""
    //const path = `/doctor/${edge.node.uid}-${language}`
    const path = `/doctor/${edge.node.fields.slug}`
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
        lang: language,
        slug: edge.node.fields.slug,
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
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  if (
    page.path.includes("/en/") ||
    (page.path.includes("/bn/") && page.context.lang === "en") ||
    (!page.path.includes("/bn/") && page.context.lang === "bn")
  ) {
    deletePage(page)
  }
}
