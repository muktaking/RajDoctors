import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col, Card, Badge } from "react-bootstrap"

import { flatMenu } from "../../meta.data"
import HeroImg from "../images/Doctor And Patient.jpg"
import { FaPoll } from "react-icons/fa"
//import Heart from "../images/heart.jpg"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allDoctorListsCsv {
        nodes {
          Speciality
        }
      }
    }
  `)
  const specArray = data.allDoctorListsCsv.nodes.map(spec => spec.Speciality)

  return (
    <Layout>
      <SEO
        title="Speciality"
        description="Categories of All Speciality of Doctors"
      />
      <Container fluid className="p-0">
        <div className="hero non-landing">
          <Row noGutters>
            <Col md={6} className="">
              <div className="text-center">
                <h1 className="text-uppercase mt-5">
                  Categories of All Speciality of Doctors{" "}
                </h1>
              </div>
            </Col>
            <Col md={6}>
              <img src={HeroImg} alt="hero" height="300px" />
            </Col>
          </Row>
        </div>
        <hr className="w-75" />
        <div className="main">
          <div className="med-section">
            <h3 className="text-center">All Speciality</h3>
            <div className="divider"></div>
            <div className="med-card">
              {flatMenu.map(spec => (
                <div className="speciality" key={spec}>
                  <Card style={{ width: "18rem" }} bg="light" text={"dark"}>
                    {/* <Card.Img variant="top" src={Heart} /> */}
                    <Card.Header>{spec}</Card.Header>
                    <Card.Body>
                      <Card.Title>
                        <FaPoll size={"36px"} />
                        Doctors Found{" "}
                        <Badge variant="warning">
                          {specArray.filter(v => v === spec).length}
                        </Badge>
                      </Card.Title>
                      {/* <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text> */}
                      <Link to={`/speciality/${spec.toLowerCase()}`}>
                        Enter
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

export default IndexPage
