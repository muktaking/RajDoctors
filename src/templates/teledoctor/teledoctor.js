import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { injectIntl, useIntl } from "gatsby-plugin-intl"
import React from "react"
import { Badge, Card, Col, Container, Row } from "react-bootstrap"
//imports components
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Share from "../../components/share"
import Breadcrumbs from "../../components/nav/breadcrumbs"

export const query = graphql`
  query($id: String!) {
    teledoc: telemediDoctorListsCsv(id: { eq: $id }) {
      id
      name
      specialty
      skills
      degrees
      designation
      institute
      consultationTime
      offDays
      fee
      phone
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
            gatsbyImageData(layout: CONSTRAINED, width: 280, placeholder: NONE)
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
    degrees,
    specialty,
    skills,
    designation,
    institute,
    fee,
    consultationTime,
    offDays,
  } = props.data.teledoc
  const img = props.data.allImg.edges.filter(({ node }) =>
    node.relativePath.includes("/" + id + ".")
  )
  return (
    <Layout>
      <SEO
        title={`${"Dr. " + name} | ${specialty}`}
        useDefault={false}
        description={` ${skills} ${intl.formatMessage({
          id: "Specialist",
        })}`}
      />
      <hr />
      <Breadcrumbs
        items={[
          { label: intl.formatMessage({ id: "nav.telemedicine" }), to: "/teledoctor/" },
          { label: "Dr. " + name, to: `/teledoctor/${id}/` },
        ]}
      />
      <Container fluid className="md-page">
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
          <Card className="md-tele" style={{ width: "100%", maxWidth: "420px" }}>
            <div className="md-tele__photo">
              <GatsbyImage image={img[0].node.childImageSharp.gatsbyImageData} alt={"Dr. " + name}
                style={{ borderRadius: "50%", width: "200px", margin: "auto", display: "block" }}
              />
            </div>

            <Card.Body className="">
              <Card.Title as="h1" className="text-center h4">{"Dr. " + name}</Card.Title>
              <Card.Text className="text-center">{degrees}</Card.Text>
              <hr />
              <Card.Text className="text-muted">
                Interested in:{" "}
                {skills.split(",").map((deg, i) => (
                  <Badge
                    key={i}
                    pill
                    className="mr-1 my-1 px-2 py-1"
                    style={{ fontSize: "11px" }}
                  >
                    {deg}
                  </Badge>
                ))}
              </Card.Text>

              <Card.Text className="text-center">
                <Badge className="mr-2 mb-2 text-wrap">
                  Available on: {consultationTime}
                </Badge>
                <Badge>Offday: {offDays}</Badge>
              </Card.Text>
              <Card.Text className="text-center">
                Telemedicine Service Fee: <Badge className="">{300 + " tk"}</Badge>
              </Card.Text>
              <Card.Text className="text-center">
                টেলিমেডিসিন সেবা পেতে <a href={process.env.GATSBY_ADD_TELEMEDICINE_CLIENT} target="_blank" rel="noreferrer">এই ফর্মটি</a> পূরণ করূন।
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
