import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Doctors from "../components/doctors"
import SEO from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"

//importing component
import Share from "../components/share"

//import HeroImg from "../images/hero.jpg"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      med: allDoctorListsCsv(
        filter: { Speciality: { eq: "Medicine" } }
        limit: 6
      ) {
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
      sur: allDoctorListsCsv(
        filter: { Speciality: { eq: "Surgery" } }
        limit: 6
      ) {
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
      gy: allDoctorListsCsv(
        filter: { Speciality: { eq: "Gynaecology" } }
        limit: 6
      ) {
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
      site: site {
        siteMetadata {
          title
          description
          url
        }
      }
      img: file(relativePath: { eq: "hero1.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxHeight: 450) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="RajDoctors" />
      <Container fluid className="p-0">
        <div className="hero">
          <Row noGutters>
            <Col md={6} className="my-auto">
              <div className="text-center">
                <h1 className="text-uppercase">Raj Doctors</h1>
                <p className="text-muted lead p-3">
                  Find Doctor's Chamber's Location, Time, Contact Information
                  and Details.
                </p>
                <Share />
              </div>
            </Col>
            <Col md={6}>
              <Img fluid={data.img.childImageSharp.fluid} />
              {/* <img src={HeroImg} alt="hero" height="450px" width="100%" /> */}
            </Col>
          </Row>
        </div>
        <hr className="w-75" />
        <div className="main">
          <div className="med-section">
            <h3 className="text-center">Top Medicine Specialist</h3>
            <div className="divider"></div>
            <div className="med-card">
              <Doctors data={data.med.nodes} />
            </div>
          </div>
          <hr className="w-25" />
          <div className="med-section">
            <h3 className="text-center">Top Surgery Specialist</h3>
            <div className="divider"></div>
            <div className="med-card">
              <Doctors data={data.sur.nodes} />
            </div>
          </div>
          <hr className="w-25" />
          <div className="med-section">
            <h3 className="text-center">Top Gynaecology Specialist</h3>
            <div className="divider"></div>
            <div className="med-card">
              <Doctors data={data.gy.nodes} />
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default IndexPage
