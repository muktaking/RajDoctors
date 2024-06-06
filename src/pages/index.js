import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
// Import hook
import { useIntl } from "gatsby-plugin-intl"
import React from "react"
import { Carousel, Col, Container, Row } from "react-bootstrap"
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
      med: allDoctorListsCsv(
        filter: { Speciality: { eq: "Medicine" } }
        limit: 3
        sort: { fields: Rating, order: DESC }
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
        limit: 3
        sort: { fields: Rating, order: DESC }
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
        limit: 3
        sort: { fields: Rating, order: DESC }
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
      medCopy: allDoctorListsCopyCsv(
        filter: { Speciality: { eq: "Medicine" } }
        limit: 3
        sort: { fields: Rating, order: DESC }
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
      surCopy: allDoctorListsCopyCsv(
        filter: { Speciality: { eq: "Surgery" } }
        limit: 3
        sort: { fields: Rating, order: DESC }
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
      gyCopy: allDoctorListsCopyCsv(
        filter: { Speciality: { eq: "Gynaecology" } }
        limit: 3
        sort: { fields: Rating, order: DESC }
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
      carousel: allCarouselDataCsv {
        nodes {
          id
          uid
          name
          speciality
          degree
          designation
          institute
          contactNumber
          ChamberLocation
        }
      }

      carouselImg: allFile(
        filter: {
          relativePath: { regex: "/promotional/.*[png|jpeg|jpg|svg]$/" }
        }
      ) {
        edges {
          node {
            relativePath
            childImageSharp {
              # Specify the image processing specifications right in the query.
              # Makes it trivial to update as your page's design changes.
              fluid(maxWidth: 400, maxHeight: 400) {
                # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
                ...GatsbyImageSharpFluid
              }
            }
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
    }
  `)
  // Making useIntl available in the code
  const intl = useIntl()
  data.med.nodes.push(...data.medCopy.nodes)
  data.sur.nodes.push(...data.surCopy.nodes)
  data.gy.nodes.push(...data.gyCopy.nodes)
  const gallary = [
    { title: intl.formatMessage({ id: "tms" }), speciality: 'medicine', data: data.med.nodes },
    { title: intl.formatMessage({ id: "tss" }), speciality:'surgery', data: data.sur.nodes },
    { title: intl.formatMessage({ id: "tgs" }), speciality: 'gynaecology', data: data.gy.nodes },
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
