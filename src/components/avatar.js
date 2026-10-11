import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

// `image` is the doctor's photo (Doctor.photo.childImageSharp.gatsbyImageData,
// see the DoctorCard fragment). Doctor.photo already falls back to
// doctor/default.png; the static query covers rows queried without a photo.
const Avatar = props => {
  const { image, height, width, alt = "", border = ".3rem solid #FFF" } = props
  const data = useStaticQuery(graphql`
    query {
      img: file(relativePath: { eq: "doctor/default.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 512, height: 512, placeholder: BLURRED)
        }
      }
    }
  `)
  const imgDefault = {
    src: image || data.img.childImageSharp.gatsbyImageData,
    height: height || 65,
    width: width || 65,
  }
  return (
    <GatsbyImage
      image={imgDefault.src}
      alt={alt}
      className={props.className}
      style={{
        width: imgDefault.width + "px",
        height: imgDefault.height + "px",
        border
      }}
    />
  )
}

export default Avatar
