import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { useIntl } from "gatsby-plugin-intl"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import DoctorsWrapper from "../components/doctors/doctorsWrapper"
//imports components
import Layout from "../components/layout"
import SEO from "../components/seo"

const Doctors = () => {
  // Making useIntl available in the code
  const intl = useIntl()

  const data = useStaticQuery(graphql`
    query {
      # Main list first, then the isNew rows, each by rating (same order as
      # the two separate lists had before they were merged into doctors.csv).
      all: allDoctor(sort: [{ isNew: ASC }, { rating: DESC }]) {
        nodes {
          id
          doctorId
          name
          rating
          designation
          institute
          degrees
          badges
          chambers {
            phone
          }
          fields {
            slug
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
  `)
  const allNodes = data.all.nodes
  const top3Schema = allNodes.slice(0, 3).map(
    (doc, i) => `
   {"@type": "ListItem",
   "position": "${i + 1}",
   "item": {
    "@type": "Person",
    "name": "${doc.name}",
    "url": "${"https://rajdoctors.com" + `/doctor/` + doc.fields.slug}",
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
  return (
    <Layout>
      <SEO
        schema={schema}
        title={intl.formatMessage({ id: `adl.${process.env.GATSBY_DISTRICT}` })}
        description={intl.formatMessage({
          id: `seo.doctors.des.${process.env.GATSBY_DISTRICT}`,
          defaultMessage:
            `Lists of all doctors with thier chamber location, duration and contact information at ${process.env.GATSBY_DISTRICT} city in bangladesh`,
        })}
        useDefault={false}
      />
      <Container fluid className="p-0">
        <div className="hero non-landing">
          <Row noGutters>
            <Col md={6} className="">
              <div className="text-center">
                <h1 className="text-uppercase mt-5">
                  {intl.formatMessage({ id: `adl.${process.env.GATSBY_DISTRICT}` })}
                </h1>
              </div>
            </Col>
            <Col md={6}>
              <GatsbyImage image={data.img.childImageSharp.gatsbyImageData} alt="" />
            </Col>
          </Row>
        </div>
        <hr className="w-75" />
        <div className="main">
          <DoctorsWrapper data={{ all: { nodes: allNodes } }} />
        </div>
      </Container>
    </Layout>
  )
}

export default Doctors
