import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { injectIntl, useIntl } from "gatsby-plugin-intl"
import React from "react"
import { Badge, Card, Col, Container, Row } from "react-bootstrap"
//imports components
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Share from "../../components/share"

export const query = graphql`
  query($id: String!) {
    teledoc: telemediDoctorListsCsv(id: { eq: $id }) {
      id
      name
      speciality
      skill
      degree
      designation
      institute
      consultationTime
      closeTime
      fee
      contactNumber
      email
      whatsapp
    }

    allImg: allFile(
      filter: { relativePath: { regex: "/teledoctor/.*[png|jpeg|jpg|svg]$/" } }
    ) {
      edges {
        node {
          relativePath
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid(maxWidth: 280) {
              # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`

const TeleDoc = ({ intl, pageContext, ...props }) => {
  // Making useIntl available in the code
  const {
    id,
    name,
    degree,
    speciality,
    skill,
    designation,
    institute,
    fee,
    consultationTime,
    closeTime,
  } = props.data.teledoc
  const img = props.data.allImg.edges.filter(({ node }) =>
    node.relativePath.includes("/" + id + ".")
  )
  return (
    <Layout>
      <SEO
        title={`${"Dr. " + name.replace(/\*/, ",")} | ${speciality}`}
        useDefault={false}
        description={` ${skill.replace(/\*/, ",")} ${intl.formatMessage({
          id: "Specialist",
        })}`}
      />
      <hr />
      <Container fluid className="p-0">
        {/* <div className="hero non-landing">
          <Row noGutters>
            <Col md={6} className="">
              <div className="text-center">
                <h1 className="text-uppercase mt-5">
                  {intl.formatMessage({ id: "adl" })}
                </h1>
              </div>
            </Col>
          
          </Row>
        </div>
        <hr className="w-75" /> */}
        <div className="d-flex justify-content-center">
          <Card style={{ width: "300px", backgroundColor: "#DDE6ED" }}>
            <div style={{ backgroundColor: "#FFF" }} className="py-3">
              <Img
                fluid={img[0].node.childImageSharp.fluid}
                style={{ borderRadius: "50%", width: "200px", margin: "auto" }}
              />
            </div>

            <Card.Body className="">
              <Card.Title className="text-center">{"Dr. " + name}</Card.Title>
              <Card.Text className="text-center">{degree}</Card.Text>
              <hr />
              <Card.Text className="text-muted">
                Interested in:{" "}
                {skill.split(",").map(deg => (
                  <Badge
                    pill
                    variant="dark"
                    className="shadow mr-1 my-1 px-2 py-1 text-white"
                    style={{ fontSize: "10px" }}
                  >
                    {deg}
                  </Badge>
                ))}
              </Card.Text>

              <Card.Text className="text-center">
                <Badge className="mr-2 mb-2 text-wrap">
                  Available on: {consultationTime}
                </Badge>
                <Badge>Offday: {closeTime}</Badge>
              </Card.Text>
              <Card.Text className="text-center">
                Consultation Fee: <Badge className="">{fee + " tk"}</Badge>
              </Card.Text>
              <Card.Text className="text-center">
                For online consultation, Please call at 16007
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Share />
            </Card.Footer>
          </Card>
        </div>
      </Container>
    </Layout>
  )
}

export default injectIntl(TeleDoc)
