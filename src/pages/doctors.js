import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
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
      all: allDoctorListsCsv(sort: {fields: Rating, order: DESC}) {
        nodes {
          id
          uid
          Name
          Rating
          Designation
          Institute
          Degree
          contact1
          loc1
          visitTime1
          fields {
            slug
          }
        }
      }
      img: file(relativePath: { eq: "hero1.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  const top3Schema = data.all.nodes.slice(0, 3).map(
    (doc, i) => `
   {"@type": "ListItem",
   "position": "${i + 1}",
   "item": {
    "@type": "Person",
    "name": "${doc.Name.replace(/\*/, ",")}",
    "url": "${"https://rajdoctors.com" + `/doctor/` + doc.fields.slug}",
    "jobTitle":"${doc.Designation.replace(/\*/, ",")}",
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
        title={intl.formatMessage({ id: "adl" })}
        description={intl.formatMessage({
          id: "seo.doctors.des",
          defaultMessage:
            "Lists of all doctors with thier chamber location, duration and contact information at rajshahi city in bangladesh",
        })}
        useDefault={false}
      />
      <Container fluid className="p-0">
        <div className="hero non-landing">
          <Row noGutters>
            <Col md={6} className="">
              <div className="text-center">
                <h1 className="text-uppercase mt-5">
                  {intl.formatMessage({ id: "adl" })}
                </h1>
              </div>
            </Col>
            <Col md={6}>
              <Img fixed={data.img.childImageSharp.fixed} />
            </Col>
          </Row>
        </div>
        <hr className="w-75" />
        <div className="main">
          <DoctorsWrapper data={data} />
        </div>
      </Container>
    </Layout>
  )
}

export default Doctors
