import { graphql } from "gatsby"
import { injectIntl } from "gatsby-plugin-intl"
import React from "react"
import Ad from "../../components/ad"
//importing components
import Doctors from "../../components/doctors/doctors"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import CardSquare from "../../components/cards/cardSquare"

// doctorId + lang identify one row of src/data/doctors.csv (page context set in
// gatsby-node.js). Text fields are already cleaned ("*" -> ", ").
export const query = graphql`
  query($doctorId: String!, $lang: String!) {
    doc: doctor(doctorId: { eq: $doctorId }, lang: { eq: $lang }) {
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
    # Main list first, then isNew rows, each by rating (the order the two
    # separate lists had before the merge), for "You may find helpful".
    docs: allDoctor(sort: [{ isNew: ASC }, { rating: DESC }]) {
      nodes {
        id
        doctorId
        specialty
        lang
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
  const doc = props.data.doc
  const { name, specialty, designation, institute, chambers, fields } = doc
  const chamber = n => chambers.find(c => c.number === n) || {}
  const chamber1 = chamber(1)
  const chamber2 = chamber(2)

  const docs = props.data.docs.nodes
    .filter(e => e.specialty === specialty)
    .slice(0, 6)
  const schema = `
{
  "@context": "https://schema.org/",
  "@type": "Person",
  "name": "${name}",
  "url": "${"https://rajdoctors.com" + `/doctor/` + fields.slug}",
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
        })}: ${chamber1.visitTime || ""} ${intl.formatMessage({
          id: `arcib.${process.env.GATSBY_DISTRICT}`,
        })}`}
        schema={schema}
      />
      <CardSquare data={doc} />
        <div className="main">
          <div className="med-section">
            <h3 className="text-center">{"You may find helpful"}</h3>
            <div className="divider"></div>
            <div className="med-card">
              <Doctors data={docs} index={true} />
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default injectIntl(Doctor)
