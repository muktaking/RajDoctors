import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Container, Row, Col } from "react-bootstrap"

import { useIntl } from "gatsby-plugin-intl"

//imports components
import Layout from "../components/layout"
import SEO from "../components/seo"
import DoctorsWrapper from "../components/doctors/doctorsWrapper"

const Doctors = () => {
  // Making useIntl available in the code
  const intl = useIntl()

  const data = useStaticQuery(graphql`
    query {
      all: allDoctorListsCsv {
        nodes {
          id
          uid
          Name
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
  return (
    <Layout>
      <SEO
        title="Doctors"
        description="Lists of all doctors with thier chamber location, duration and contact information at rajshahi city in bangladesh"
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
