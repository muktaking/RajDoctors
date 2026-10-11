import { graphql } from "gatsby"
import { injectIntl } from "gatsby-plugin-intl"
import React from "react"
//importing components
import RelatedDoctors from "../../components/doctor-page/related-doctors"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import CardSquare from "../../components/cards/cardSquare"
import { districtMessage, districtPath, useDistrict } from "../../utils/district"

// district + doctorId + lang identify one row of src/data/doctors/<district>.csv
// (page context set in gatsby-node.js). Text fields are already cleaned
// ("*" -> ", ").
export const query = graphql`
  query(
    $district: String!
    $doctorId: String!
    $lang: String!
    $specialty: String
    $language: String!
  ) {
    doc: doctor(
      district: { eq: $district }
      doctorId: { eq: $doctorId }
      lang: { eq: $lang }
    ) {
      ...DoctorCard
      doctorId
      name
      rating
      degrees
      designation
      institute
      specialty
      fee
      badges
      protocol
      clinicalExpertise
      chambers {
        number
        name
        address
        phone
        phones
        visitTime
        hours
      }
      fields {
        slug
      }
    }
    # "You may find helpful": same speciality in this district, main list
    # first, then isNew rows, each by rating.
    docs: allDoctor(
      filter: { district: { eq: $district }, specialty: { eq: $specialty } }
      sort: [{ isNew: ASC }, { rating: DESC }]
      limit: 6
    ) {
      nodes {
        id
        localized(lang: $language, fallback: true) {
          ...DoctorCard
        }
      }
    }
  }
`
// img: file(relativePath: { eq: "pakhighorAd02.png" }) {
//   childImageSharp {
//     # Specify the image processing specifications right in the query.
//     # Makes it trivial to update as your page's design changes.
//     fixed(width: 350, height: 210) {
//       ...GatsbyImageSharpFixed
//     }
//   }
// }

const Doctor = ({ intl, pageContext, ...props }) => {
  // Internationalization
  //const intl = useIntl()
  //const locale = intl.locale !== "en" ? `/${intl.locale}` : ""
  const district = useDistrict()
  const doc = props.data.doc
  const { name, specialty, designation, institute, chambers, fields } = doc
  const chamber = n => chambers.find(c => c.number === n) || {}
  const chamber1 = chamber(1)
  const chamber2 = chamber(2)

  const docs = props.data.docs.nodes
  const schema = `
{
  "@context": "https://schema.org/",
  "@type": "Person",
  "name": "${name}",
  "url": "${"https://rajdoctors.com" + districtPath(district, "/doctor/") + fields.slug}",
  "image": "${"https://rajdoctors.com" + pageContext.imgSrc}",
  "jobTitle": "${designation}",
  "worksFor": {
    "@type": "Organization",
    "name": "${institute}"
  },
  "telephone": "${(chamber1.phone || "") + ", " + (chamber2.phone || "")}"  
}
`
  return (
    <Layout>
      <SEO
        title={`${name} | ${designation} ${intl.formatMessage({
          id: "at",
        })} ${institute}`}
        useDefault={false}
        description={` ${specialty} ${intl.formatMessage({
          id: "Specialist",
        })}. ${intl.formatMessage({
          id: "chamber.contact-info",
        })}: ${chamber1.phone || ""}, ${chamber2.phone || ""}, ${intl.formatMessage({
          id: "chamber.location",
        })}: ${chamber1.address || ""} ${intl.formatMessage({
          id: "chamber.time",
        })}: ${chamber1.visitTime || ""} ${districtMessage(intl, "arcib", district)}`}
        schema={schema}
      />
      <div className="dp">
        <CardSquare data={doc} />
        <RelatedDoctors data={docs} />
      </div>
    </Layout>
  )
}

export default injectIntl(Doctor)
