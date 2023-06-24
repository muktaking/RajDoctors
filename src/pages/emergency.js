import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { useIntl } from "gatsby-plugin-intl"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Emergency from "../components/emergency"
//imports components
import Layout from "../components/layout"
import SEO from "../components/seo"

const EmergencyPage = () => {
  // Making useIntl available in the code
  const intl = useIntl()

  const data = useStaticQuery(graphql`
    query {
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
        title="All Emergency Numbers"
        description="all emergency numbers including ambulence of fireservice , public and private hospitals and clinic"
        useDefault={false}
      />
      <Container fluid className="p-0">
        <div className="hero non-landing">
          <Row noGutters>
            <Col md={6} className="">
              <div className="text-center">
                <h1 className="text-uppercase mt-5">All Emergency Numbers</h1>
              </div>
            </Col>
            <Col md={6}>
              <Img fixed={data.img.childImageSharp.fixed} />
            </Col>
          </Row>
        </div>
        <hr className="w-75" />
        <div className="main">
          <Emergency />
        </div>
      </Container>
    </Layout>
  )
}

export default EmergencyPage
