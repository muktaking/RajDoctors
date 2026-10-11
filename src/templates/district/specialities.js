import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Container, Row, Col, Card, Badge } from "react-bootstrap"
import { FaPoll } from "react-icons/fa"
import { useIntl, Link } from "gatsby-plugin-intl"
//imports components
import Layout from "../../components/layout"
import SEO from "../../components/seo"

//imports utils
import { flatMenu } from "../../utils/meta.data"
import { districtMessage, districtName, districtPath, useDistrict } from "../../utils/district"
import Breadcrumbs from "../../components/nav/breadcrumbs"

// /<district>/speciality/: every speciality with its number of doctor rows.
export const query = graphql`
  query($district: String!) {
    doctors: allDoctor(filter: { district: { eq: $district } }) {
      group(field: { specialty: SELECT }) {
        fieldValue
        totalCount
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

const Speciality = ({ data }) => {
  const intl = useIntl()
  const district = useDistrict()

  const counts = Object.fromEntries(data.doctors.group.map(g => [g.fieldValue, g.totalCount]))
  const specDesArray = [
    "Medicine",
    "Gynaecology",
    "Surgery",
    "Orthopaedics",
    "Paediatrics",
  ]
  return (
    <Layout>
      <SEO
        title={
          intl.formatMessage({ id: "Speciality" }) +
          " | " +
          districtMessage(intl, "siteMetaData.tagLine", district)
        }
        useDefault={false}
        description={
          `${intl.formatMessage({
            id: "List of All Doctor's Speciality",
          })}-` +
          specDesArray.map(spec => intl.formatMessage({ id: spec })) +
          " " +
          intl.formatMessage({ id: "more" })
        }
      />
      <Breadcrumbs items={[{ label: districtName(intl, district), to: `/${district.slug}/` }, { label: intl.formatMessage({ id: "nav.specialties" }), to: `/${district.slug}/speciality/` }]} />
      <Container fluid className="p-0">
        <div className="hero non-landing">
          <Row noGutters>
            <Col md={6} className="">
              <div className="text-center">
                <h1 className="text-uppercase mt-5">
                  {intl.formatMessage({
                    id: "List of All Doctor's Speciality",
                  })}
                </h1>
              </div>
            </Col>
            <Col md={6}>
              {/* <img src={HeroImg} alt="hero" height="300px" /> */}
              <GatsbyImage image={data.img.childImageSharp.gatsbyImageData} alt="" />
            </Col>
          </Row>
        </div>
        <hr className="w-75" />
        <div className="main">
          <div className="med-section">
            <h3 className="text-center">
              {intl.formatMessage({ id: "Speciality" })}
            </h3>
            <div className="divider"></div>
            <div className="med-card">
              {flatMenu.map(spec => (
                <div className="speciality" key={spec}>
                  <Card style={{ width: "18rem" }} bg="light" text={"dark"}>
                    {/* <Card.Img variant="top" src={Heart} /> */}
                    <Card.Header>
                      {intl.formatMessage({ id: `${spec}` })}
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>
                        <FaPoll size={"36px"} aria-hidden="true" />
                        {intl.formatMessage({ id: "Doctors Found" })}{" "}
                        <Badge variant="warning">
                          {counts[spec] || 0}
                        </Badge>
                      </Card.Title>
                      {/* <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text> */}
                      <Link className="stretched-link" to={districtPath(district, `/speciality/${spec.toLowerCase()}/`)}>
                        {intl.formatMessage({ id: "Enter" })}
                      </Link>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          <div className="d-flex justify-content-center"></div>
        </div>
      </Container>
    </Layout>
  )
}

export default React.memo(Speciality)
