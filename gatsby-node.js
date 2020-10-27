/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const flatMenu = require("./meta.data").flatMenu
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNode, createNodeField } = actions
  if (node.internal.type === "DoctorListsCsv") {
    const slug = node.Name.replace(/\s|\./g, "%20")
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
  // Transform the new node here and create a new node or
  // create a new node field.
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const doctorTemplate = path.resolve("./src/templates/doctor.js")
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
          }
        }
      }
    }
  `)

  res.data.allDoctorListsCsv.edges.forEach(edge => {
    const path = "/doctor/" + edge.node.uid
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
        id: edge.node.id,
      },
    })
  })

  // pages based on speciality
  const speacialityTemplate = path.resolve("./src/templates/speciality.js")
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
