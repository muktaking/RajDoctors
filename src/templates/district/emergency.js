import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { useIntl } from "gatsby-plugin-intl"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Emergency from "../../components/emergency"
//imports components
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { districtName, useDistrict } from "../../utils/district"
import Breadcrumbs from "../../components/nav/breadcrumbs"

export const query = graphql`
  query {
    img: file(relativePath: { eq: "hero1.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        gatsbyImageData(layout: FIXED, height: 300, placeholder: BLURRED)
      }
    }
  }
`

// /<district>/emergency/ — numbers from src/data/emergency/<district>.json
const EmergencyPage = ({ data, pageContext }) => {
  // Making useIntl available in the code
  const intl = useIntl()
  const district = useDistrict()
  const where = district ? ` | ${districtName(intl, district)}` : ""

  return (
    <Layout>
      <SEO
        title={`All Emergency Numbers${where}`}
        description="all emergency numbers including ambulence of fireservice , public and private hospitals and clinic"
        useDefault={false}
      />
      <Breadcrumbs items={[{ label: districtName(intl, district), to: `/${district.slug}/` }, { label: intl.formatMessage({ id: "nav.emergency" }), to: `/${district.slug}/emergency/` }]} />
      <Container fluid className="p-0">
        <div className="hero non-landing">
          <Row noGutters>
            <Col md={6} className="">
              <div className="text-center">
                <h1 className="text-uppercase mt-5">All Emergency Numbers</h1>
              </div>
            </Col>
            <Col md={6}>
              <GatsbyImage image={data.img.childImageSharp.gatsbyImageData} alt="" />
            </Col>
          </Row>
        </div>
        <hr className="w-75" />
        <div className="main">
          <Emergency data={pageContext.emergency} />
        </div>
      </Container>
    </Layout>
  )
}

export default EmergencyPage
