import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col, Card, Badge } from "react-bootstrap"
import { FaPoll } from "react-icons/fa"
import { useIntl, Link } from "gatsby-plugin-intl"
//imports components
import Layout from "../components/layout"
import Seo from "../components/seo"

//imports utils
import { flatMenu } from "../utils/meta.data"

const Speciality = () => {
  const intl = useIntl()

  const data = useStaticQuery(graphql`
    query {
      allDoctorListsCsv {
        nodes {
          Speciality
          lang
        }
      }
    }
  `)
  const specArray = data.allDoctorListsCsv.nodes.map(spec => spec.Speciality)
  const specDesArray = [
    "Medicine",
    "Gynaecology",
    "Surgery",
    "Orthopaedics",
    "Paediatrics",
  ]
  return (
    <Layout>
      <Seo
        title={
          intl.formatMessage({ id: "Speciality" }) +
          " | " +
          intl.formatMessage({ id: `siteMetaData.tagLine.${process.env.GATSBY_DISTRICT}` })
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
              <StaticImage
                src="https://placehold.co/600x400"
                placeholder="blurred"
                layout="fixed"
                width= {200}
                height= {200}
              />
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
                        <FaPoll size={"36px"} />
                        {intl.formatMessage({ id: "Doctors Found" })}{" "}
                        <Badge variant="warning">
                          {specArray.filter(v => v === spec).length}
                        </Badge>
                      </Card.Title>
                      {/* <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text> */}
                      <Link to={`/speciality/${spec.toLowerCase()}/`}>
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
