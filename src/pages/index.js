import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
// Import hook
import { useIntl } from "gatsby-plugin-intl"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Doctors from "../components/doctors/doctors"
import Emergency from "../components/emergency"
//importing component
import Layout from "../components/layout"
import SEO from "../components/seo"
import Share from "../components/share"



//
const ContentSection = ({ title, data }) => (
  <>
    <div className="med-section">
      <h3 className="text-center">{title}</h3>
      <div className="divider"></div>
      <div className="med-card">
        <Doctors data={data} index={true} />
      </div>
    </div>
    <hr className="w-25" />
  </>
)

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      med: allDoctorListsCsv(
        filter: { Speciality: { eq: "Medicine" } }
        limit: 5
        sort: {fields: Rating, order: DESC}
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
          lang
        }
      }
      sur: allDoctorListsCsv(
        filter: { Speciality: { eq: "Surgery" } }
        limit: 6
        sort: {fields: Rating, order: DESC}
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
          lang
        }
      }
      gy: allDoctorListsCsv(
        filter: { Speciality: { eq: "Gynaecology" } }
        limit: 6
        sort: {fields: Rating, order: DESC}
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
          lang
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
  // Making useIntl available in the code
  const intl = useIntl()
  // Use language iso for the routes
  const locale = intl.locale !== "en" ? `/${intl.locale}` : ""

  const gallary = [
    { title: intl.formatMessage({ id: "tms" }), data: data.med.nodes },
    { title: intl.formatMessage({ id: "tss" }), data: data.sur.nodes },
    { title: intl.formatMessage({ id: "tgs" }), data: data.gy.nodes },
  ]

  return (
    <Layout>
      <SEO />
      <Container fluid className="p-0">
        <div className="hero">
          <Row noGutters>
            <Col md={6} className="my-auto">
              <div className="text-center">
                <h1 className="text-uppercase">
                  {intl.formatMessage({ id: "siteMetaData.title" })}
                </h1>
                <p className="text-muted lead p-3">
                  {intl.formatMessage({ id: "siteMetaData.description" })}
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
        <Emergency snippetVeiw={true}/>
        <div className="main">
          {gallary.map((item, index) => (
            <ContentSection
              key={item.title}
              title={item.title}
              data={item.data}
            />
          ))}
          {/* <div className="med-section">
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
          </div> */}
        </div>
      </Container>
    </Layout>
  )
}

export default IndexPage
