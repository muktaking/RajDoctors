import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Avatar = ({ img, height, width }) => {
  const data = useStaticQuery(graphql`
    query {
      allImg: allFile(
        filter: { relativePath: { regex: "/doctor/.*[png|jpeg|jpg|svg]$/" } }
      ) {
        edges {
          node {
            relativePath
            childImageSharp {
              # Specify the image processing specifications right in the query.
              # Makes it trivial to update as your page's design changes.
              fixed(width: 512, height: 512) {
                # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
      img: file(relativePath: { eq: "doctor/default.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 512, height: 512) {
            # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  if (img) {
    img = data.allImg.edges.filter(({ node }) =>
      node.relativePath.includes("doctor/" + img + "_")
    )
  }
  const imgDefault = {
    src:
      img.length > 0
        ? img[0].node.childImageSharp.fixed
        : data.img.childImageSharp.fixed,
    height: height || 65,
    width: width || 65,
  }
  return (
    <Img
      fixed={imgDefault.src}
      style={{
        width: imgDefault.width + "px",
        height: imgDefault.height + "px",
        marginRight: "10px",
      }}
    />
  )
}

export default Avatar
