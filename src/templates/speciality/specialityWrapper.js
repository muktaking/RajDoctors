import { graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"
import * as _ from "lodash"
import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { menuWithSynonyms } from "../../utils/meta.data"
import Speciality from "./speciality"
import { districtMessage, districtName, districtPath, useDistrict } from "../../utils/district"
import Breadcrumbs from "../../components/nav/breadcrumbs"

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const query = graphql`
  query($district: String!, $specialty: String!, $language: String!) {
    doctors: allDoctor(
      filter: { district: { eq: $district }, specialty: { eq: $specialty } }
    ) {
      nodes {
        id
        doctorId
        localized(lang: $language, fallback: true) {
          ...DoctorCard
        }
        name
        rating
        degrees
        designation
        institute
        chambers {
          phone
        }
        fields {
          slug
        }
      }
    }
  }
`

const SpecialityWrapper = ({ pageContext, data }) => {
  
  // Sort a copy (never mutate the page query data).
  const allNodes = _.sortBy(data.doctors.nodes, ["rating"]).reverse()
  const intl = useIntl()
  const district = useDistrict()
  let speciality = pageContext.specialty.toLowerCase()
  speciality = menuWithSynonyms
    .filter(item => item[0].toLowerCase() === speciality)[0]
    .join(" and ")

  let top3 = allNodes
    .slice(0, 3)
    .reduce(
      (accumulator, currentValue) => accumulator + `${currentValue.name}; `,
      ""
    )
  top3 =
    intl.locale === "en"
      ? `Top Doctors: ${top3} at ${district.en.toLowerCase()} city in bangladesh`
      : "- তাদের চেম্বারের লোকেশন, সময় ও সিরিয়লের নাম্বারসহ প্রয়োজনীয় তথ্য"

  const top3Schema = allNodes.slice(0, 3).map(
    (doc, i) => `
   {"@type": "ListItem",
   "position": "${i + 1}",
   "item": {
    "@type": "Person",
    "name": "${doc.name}",
    "url": "${"https://rajdoctors.com" + districtPath(district, "/doctor/") + doc.fields.slug}",
    "jobTitle": "${doc.designation}",
    "worksFor": {
      "@type": "Organization",
      "name": "${doc.institute}"
    },
    "telephone": "${doc.chambers.length ? doc.chambers[0].phone : ""}" 
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
          districtMessage(intl, "adl", district),
          intl.formatMessage({
            id: capitalizeFirstLetter(speciality),
          }),
          intl.formatMessage({
            id: "Speciality",
          }),
          top3,
        ].join(" ")}
      />
      <Breadcrumbs
        items={[
          { label: districtName(intl, district), to: `/${district.slug}/` },
          { label: intl.formatMessage({ id: "nav.specialties" }), to: `/${district.slug}/speciality/` },
          { label: intl.formatMessage({ id: capitalizeFirstLetter(speciality) }), to: `/${district.slug}/speciality/${pageContext.specialty.toLowerCase()}/` },
        ]}
      />
      <Speciality
        speciality={speciality}
        doctors={allNodes}
      />
    </Layout>
  )
}

export default React.memo(SpecialityWrapper)
