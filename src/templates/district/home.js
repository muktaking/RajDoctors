import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
// Import hook
import { useIntl } from "gatsby-plugin-intl"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Doctors from "../../components/doctors/doctors"
import Emergency from "../../components/emergency"
//importing component
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Share from "../../components/share"
import Ad from "../../components/ad"

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

// Home page of one district (/<district>/), created in gatsby-node.js.
// Top 3 doctors by rating for three specialities of this district.
export const query = graphql`
  query($district: String!, $language: String!) {
    med: allDoctor(
      filter: { district: { eq: $district }, specialty: { eq: "Medicine" } }
      limit: 3
      sort: { rating: DESC }
    ) {
      nodes {
        id
        localized(lang: $language, fallback: true) {
          ...DoctorCard
        }
      }
    }
    sur: allDoctor(
      filter: { district: { eq: $district }, specialty: { eq: "Surgery" } }
      limit: 3
      sort: { rating: DESC }
    ) {
      nodes {
        id
        localized(lang: $language, fallback: true) {
          ...DoctorCard
        }
      }
    }
    gy: allDoctor(
      filter: { district: { eq: $district }, specialty: { eq: "Gynaecology" } }
      limit: 3
      sort: { rating: DESC }
    ) {
      nodes {
        id
        localized(lang: $language, fallback: true) {
          ...DoctorCard
        }
      }
    }
  }
`

const IndexPage = ({ data, pageContext }) => {
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
        <Emergency snippetVeiw={true} data={pageContext.emergency} />
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
