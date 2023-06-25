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
  res.data.allDoctorListsCsv.edges.forEach(edge => {
    const language = edge.node.lang
    const locale = language !== "en" ? `/${language}` : ""
    //const path = `/doctor/${edge.node.uid}-${language}`
    const path = `/doctor/${edge.node.fields.slug}`
    img = res.data.allImg.edges.filter(({ node }) =>
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
  // const resTeleDoctor = await graphql(`
  //   query {
  //     allTelemediDoctorLists: allTelemediDoctorListsCsv {
  //       edges {
  //         node {
  //           id
  //         }
  //       }
  //     }
  //   }
  // `)
  // Handle errors
  // if (resTeleDoctor.errors) {
  //   reporter.panicOnBuild(`Error while running GraphQL query.`)
  //   return
  // }
  // const teledoctorTemplate = path.resolve(
  //   "./src/templates/teledoctor/teledoctor.js"
  // )
  // resTeleDoctor.data.allTelemediDoctorLists.edges.forEach(edge => {
  //   const path = `/teledoctor/${edge.node.id}`
  //   createPage({
  //     component: teledoctorTemplate,
  //     path,
  //     context: {
  //       //pagePath: edge.node.fields.slug,
  //       id: edge.node.id,
  //       imgRelativePath: `teledoctor/${edge.node.id}.jpg`
  //     },
  //   })
  // })
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
