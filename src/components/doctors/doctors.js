import { graphql, useStaticQuery } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"
import PropTypes from "prop-types"
import React from "react"
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
    }
  `)
  // Making useIntl available in the code
  const intl = useIntl()
  // Use language iso for the routes
  //const locale = intl.locale !== "en" ? `/${intl.locale}` : ""
  return data.map((doctor, i) => {
    const doctorFilterByLocale = queryData.all.nodes.filter(
      node => node.uid === doctor.uid && node.lang === intl.locale
    )[0]
    return (
      <Doctor
        key={i}
        name={doctorFilterByLocale.Name}
        rating={doctorFilterByLocale.Rating}
        speciality={doctorFilterByLocale.Degree}
        contact={doctorFilterByLocale.contact1}
        location={doctorFilterByLocale.loc1}
        time={doctorFilterByLocale.visitTime1}
        link={doctorFilterByLocale.fields.slug}
        uid={doctorFilterByLocale.uid}
        index={index}
      />
    )
  })
}

Doctors.propTypes = {
  data: PropTypes.object,
  index: PropTypes.bool, // is it index page or not
}

export default Doctors
