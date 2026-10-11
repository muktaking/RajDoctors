import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { useIntl } from "gatsby-plugin-intl"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import DoctorsWrapper from "../../components/doctors/doctorsWrapper"
//imports components
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { districtMessage, districtPath, useDistrict } from "../../utils/district"

// /<district>/doctors/ and /<district>/doctors/<n>/ (gatsby-node.js decides the
// order and passes the ids shown on this page plus the 3 used in the schema).
export const query = graphql`
  query($queryIds: [String!]!, $language: String!) {
    all: allDoctor(filter: { id: { in: $queryIds } }) {
      nodes {
        id
        name
        designation
        institute
        chambers {
          phone
        }
        fields {
          slug
        }
        localized(lang: $language, fallback: true) {
          ...DoctorCard
        }
      }
    }
    img: file(relativePath: { eq: "hero1.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        gatsbyImageData(layout: FIXED, height: 300, placeholder: BLURRED)
      }
    }
  }
`

const Doctors = ({ data, pageContext }) => {
  // Making useIntl available in the code
  const intl = useIntl()
  const district = useDistrict()
  const byId = new Map(data.all.nodes.map(n => [n.id, n]))
  const pick = ids => ids.map(id => byId.get(id)).filter(Boolean)
  const pageNodes = pick(pageContext.ids)
  const top3Schema = pick(pageContext.schemaIds).map(
    (doc, i) => `
   {"@type": "ListItem",
   "position": "${i + 1}",
   "item": {
    "@type": "Person",
    "name": "${doc.name}",
    "url": "${"https://rajdoctors.com" + districtPath(district, "/doctor/") + doc.fields.slug}",
    "jobTitle":"${doc.designation}",
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
  const title = districtMessage(intl, "adl", district)
  return (
    <Layout>
      <SEO
        schema={schema}
        title={
          pageContext.currentPage > 1
            ? `${title} | ${intl.formatMessage(
                { id: "district.page" },
                { page: pageContext.currentPage, pages: pageContext.pageCount }
              )}`
            : title
        }
        description={districtMessage(intl, "seo.doctors.des", district)}
        useDefault={false}
      />
      <Container fluid className="p-0">
        <div className="hero non-landing">
          <Row noGutters>
            <Col md={6} className="">
              <div className="text-center">
                <h1 className="text-uppercase mt-5">{title}</h1>
              </div>
            </Col>
            <Col md={6}>
              <GatsbyImage image={data.img.childImageSharp.gatsbyImageData} alt="" />
            </Col>
          </Row>
        </div>
        <hr className="w-75" />
        <div className="main">
          <DoctorsWrapper
            data={{ all: { nodes: pageNodes } }}
            currentPage={pageContext.currentPage}
            pageCount={pageContext.pageCount}
          />
        </div>
      </Container>
    </Layout>
  )
}

export default Doctors
