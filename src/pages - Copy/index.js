import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
// Import hook
import { useIntl } from "gatsby-plugin-intl"
import React from "react"
import { Carousel, Col, Container, Row } from "react-bootstrap"
import Doctors from "../components/doctors/doctors"
import Emergency from "../components/emergency"
//importing component
import Layout from "../components/layout"
import Seo from "../components/seo"
import Share from "../components/share"

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
    <hr className="w-25" />
  </>
)

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      med: allDoctorListsCsv(
        filter: { Speciality: { eq: "Medicine" } }
        limit: 5
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
        limit: 5
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
        limit: 5
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
  const gallary = [
    { title: intl.formatMessage({ id: "tms" }), speciality: 'medicine', data: data.med.nodes },
    { title: intl.formatMessage({ id: "tss" }), speciality:'surgery', data: data.sur.nodes },
    { title: intl.formatMessage({ id: "tgs" }), speciality: 'gynaecology', data: data.gy.nodes },
  ]

  return (
    <Layout>
      <Seo />
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
              <div className="mt-3">
                <Carousel className="">
                  {data.carouselImg.edges.map(edge => (
                    <Carousel.Item>
                      <StaticImage
                      src="https://placehold.co/600x400"
                      placeholder="blurred"
                      layout="fixed"
                      width= {200}
                      height= {200}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>

            </Col>
          </Row>
        </div>
        <hr className="w-75" />
        <Emergency snippetVeiw={true} />
        <div className="main">
          {gallary.map((item, index) => (
            <ContentSection
              key={item.title}
              title={item.title}
              speciality={item.speciality}
              data={item.data}
            />
          ))}
        </div>
      </Container>
    </Layout>
  )
}

export default IndexPage
