import React from "react"
import { graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Speciality from "./speciality"

import { menuWithSynonyms } from "../../utils/meta.data"

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const query = graphql`
  query($Speciality: String!) {
    allDoctorListsCsv(filter: { Speciality: { eq: $Speciality } }) {
      nodes {
        Degree
        Name
        Designation
        Institute
        contact1
        loc1
        visitTime1
        id
        uid

        fields {
          slug
        }
      }
    }
  }
`

const SpecialityWrapper = ({ pageContext, data }) => {
  const intl = useIntl()
  let speciality = pageContext.Speciality.toLowerCase()
  speciality = menuWithSynonyms
    .filter(item => item[0].toLowerCase() === speciality)[0]
    .join(" and ")

  let top3 = data.allDoctorListsCsv.nodes
    .slice(0, 3)
    .reduce(
      (accumulator, currentValue) => accumulator + `${currentValue.Name}; `,
      ""
    )
  //, Contact: ${currentValue.contact1.replace(/\*/g,",")}
  top3 =
    intl.locale === "en"
      ? `Top Doctors: ${top3} at rajshahi city in bangladesh`
      : "- তাদের চেম্বারের লোকেশন, সময় ও সিরিয়লের নাম্বারসহ প্রয়োজনীয় তথ্য"

  const top3Schema = data.allDoctorListsCsv.nodes.slice(0, 3).map(
    (doc, i) => `
   {"@type": "ListItem",
   "position": "${i + 1}",
   "item": {
    "@type": "Person",
    "name": "${doc.Name.replace(/\*/, ",")}",
    "url": "${"https://rajdoctors.com" + `/doctor/` + doc.fields.slug}",
    "jobTitle": "${doc.Designation.replace(/\*/, ",")}",
    "worksFor": {
      "@type": "Organization",
      "name": "${doc.Institute.replace(/\*/, ",")}"
    },
    "telephone": "${doc.contact1.replace(/\*/, ",")}" 
   }}
   `
  )
  const schema = `{
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [${top3Schema}]
  }`
  return (
    <Layout>
      <SEO
        schema={schema}
        title={intl.formatMessage({
          id: capitalizeFirstLetter(speciality),
        })}
        description={[
          intl.formatMessage({
            id: "adl",
          }),
          intl.formatMessage({
            id: capitalizeFirstLetter(speciality),
          }),
          intl.formatMessage({
            id: "Speciality",
          }),
          top3,
        ].join(" ")}
      />
      <Speciality speciality={speciality} data={data} />
    </Layout>
  )
}

export default React.memo(SpecialityWrapper)
