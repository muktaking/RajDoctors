import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
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
import Ad from "../components/ad"

//
const ContentSection = ({ title, speciality, data }) => (
  <>
    <div className="med-section">
      <h3 className="text-center">{title}</h3>
      <div className="divider"></div>
      <div className="med-card">
        <Doctors speciality={speciality} data={data} index={true} />
      </div>
    </div>
  </>
)

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      # Top 3 doctors by rating per section (all rows of doctors.csv).
      med: allDoctor(
        filter: { specialty: { eq: "Medicine" } }
        limit: 3
        sort: { rating: DESC }
      ) {
        nodes {
          id
          doctorId
          fields {
            slug
          }
          lang
        }
      }
      sur: allDoctor(
        filter: { specialty: { eq: "Surgery" } }
        limit: 3
        sort: { rating: DESC }
      ) {
        nodes {
          id
          doctorId
          fields {
            slug
          }
          lang
        }
      }
      gy: allDoctor(
        filter: { specialty: { eq: "Gynaecology" } }
        limit: 3
        sort: { rating: DESC }
      ) {
        nodes {
          id
          doctorId
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
    }
  `)
  // Making useIntl available in the code
  const intl = useIntl()
  const medNodes = data.med.nodes
  const surNodes = data.sur.nodes
  const gyNodes = data.gy.nodes
  const gallary = [
    { title: intl.formatMessage({ id: "tms" }), speciality: 'medicine', data: medNodes },
    { title: intl.formatMessage({ id: "tss" }), speciality:'surgery', data: surNodes },
    { title: intl.formatMessage({ id: "tgs" }), speciality: 'gynaecology', data: gyNodes },
  ]

  return (
    <Layout>
      <SEO />
      <Container fluid className="p-0">
        <div className="hero">
            <div className="my-auto">
              <div className="text-center">
                <h1 className="text-uppercase">
                  {intl.formatMessage({ id: "siteMetaData.title" })}
                </h1>
                <p className="text-muted lead px-3 mb-2">
                  {intl.formatMessage({ id: "siteMetaData.description" })}
                </p>
                <Share />
              </div>
            </div>  
        </div>
        <Ad height={'90px'} />
        <Emergency snippetVeiw={true} />
        <div className="main">
          {gallary.map((item, index) => (
            <>
              <ContentSection
                key={item.title}
                title={item.title}
                speciality={item.speciality}
                data={item.data}
              />
              <Ad height={"90px"} />
              <hr className="w-25" />
            </>
          ))}
        </div>
      </Container>
    </Layout>
  )
}

export default IndexPage
