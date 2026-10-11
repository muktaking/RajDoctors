import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Avatar = (props) => {
  let { img, height, width } = props
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
              gatsbyImageData(layout: FIXED, width: 512, height: 512, placeholder: BLURRED)
            }
          }
        }
      }
      img: file(relativePath: { eq: "doctor/default.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          gatsbyImageData(layout: FIXED, width: 512, height: 512, placeholder: BLURRED)
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
        ? img[0].node.childImageSharp.gatsbyImageData
        : data.img.childImageSharp.gatsbyImageData,
    height: height || 65,
    width: width || 65,
  }
  return (
    <GatsbyImage
      image={imgDefault.src}
      alt=""
      className={props.className}
      style={{
        width: imgDefault.width + "px",
        height: imgDefault.height + "px",
        border: '.3rem solid #FFF'
      }}
    />
  )
}

export default Avatar
