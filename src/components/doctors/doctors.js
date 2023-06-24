import { graphql, useStaticQuery } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"
import PropTypes from "prop-types"
import React from "react"
import Ad from "../ad"
import Doctor from "./doctor"

const Doctors = ({ data, index }) => {
  const queryData = useStaticQuery(graphql`
    query {
      all: allDoctorListsCsv {
        nodes {
          id
          uid
          Name
          Rating
          Degree
          contact1
          loc1
          visitTime1
          lang
          fields {
            slug
          }
        }
      }

      img: file(relativePath: { eq: "pakhighorAd02.png" }) {
        childImageSharp {
          fluid(maxWidth: 350, maxHeight: 210) {
            # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  // img: file(relativePath: { eq: "pakhighorAd02.png" }) {
  //   childImageSharp {
  //     # Specify the image processing specifications right in the query.
  //     # Makes it trivial to update as your page's design changes.
  //     fixed(width: 350, height: 210) {
  //       ...GatsbyImageSharpFixed
  //     }
  //   }
  // }

  // Making useIntl available in the code
  const intl = useIntl()
  // Use language iso for the routes
  //const locale = intl.locale !== "en" ? `/${intl.locale}` : ""
  return data.map((doctor, i) => {
    const doctorFilterByLocale = queryData.all.nodes.filter(
      node => node.uid === doctor.uid && node.lang === intl.locale
    )[0]
    if (doctorFilterByLocale === undefined) return
    const docCom = (
      <>
        {i % 2 === 0 && i !== 0 ? (
          <Ad
            title="Pakhighor- Get you pet birds"
            contact="01701256115"
            imgData={queryData.img.childImageSharp.fluid}
          />
        ) : null}
        <Doctor
          key={i}
          name={doctorFilterByLocale ? doctorFilterByLocale.Name : ""}
          rating={doctorFilterByLocale.Rating}
          speciality={doctorFilterByLocale.Degree}
          contact={doctorFilterByLocale.contact1}
          location={doctorFilterByLocale.loc1}
          time={doctorFilterByLocale.visitTime1}
          link={doctorFilterByLocale.fields.slug}
          uid={doctorFilterByLocale.uid}
          index={index}
        />
      </>
    )
    return docCom
  })
}

Doctors.propTypes = {
  data: PropTypes.object,
  index: PropTypes.bool, // is it index page or not
}

export default Doctors
