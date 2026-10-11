import { graphql, useStaticQuery } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"
import PropTypes from "prop-types"
import React from "react"
import Ad from "../ad"
import Doctor from "./doctor"

const Doctors = ({ data }) => {
  const queryData = useStaticQuery(graphql`
    query {
      all: allDoctorListsCsv {
        nodes {
          id
          uid
          Name
          Rating
          Speciality
          Degree
          Designation
          Institute
          contact1
          loc1
          visitTime1
          lang
          Badges
          fields {
            slug
          }
        }
      }

      allCopy: allDoctorListsCopyCsv {
        nodes {
          id
          uid
          Name
          Rating
          Speciality
          Degree
          Designation
          Institute
          contact1
          loc1
          visitTime1
          lang
          Badges
          fields {
            slug
          }
        }
      }
    }
  `)

  // Making useIntl available in the code
  const intl = useIntl()
  // Merge without mutating the cached static query result (pushing into it
  // made the list grow on every render).
  const allNodes = [...queryData.all.nodes, ...queryData.allCopy.nodes]
  // Use language iso for the routes
  //const locale = intl.locale !== "en" ? `/${intl.locale}` : ""
  return data.map((doctor, i) => {
    const doctorFilterByLocale = allNodes.filter(
      node => node.uid === doctor.uid && node.lang === intl.locale
    )[0]
    if (doctorFilterByLocale === undefined) return
    const docCom = (
      <>
        { i % 3 === 0 && i !== 0 ? (
          <Ad height={"90px"} />
        ) : null}
        <Doctor
          key={i}
          data={doctorFilterByLocale}
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
