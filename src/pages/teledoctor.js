import { Link, graphql} from "gatsby"
import Img from "gatsby-image"
import { injectIntl} from "gatsby-plugin-intl"
import React from "react"
import { Badge, Card, Col, Container, Row } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
//imports components

export const query = graphql`
  query {
    teledocs: allTelemediDoctorListsCsv {
        nodes {
          id
          name
          degree
          fee
          skill
        }
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

const TeleDocs = ({ intl,...props }) => {
    console.log(props.data.teledocs)
  // Making useIntl available in the code
//   const {
//     id,
//     name,
//     degree,
//     speciality,
//     skill,
//     fee,
//   } = props.data.teledocs

  return (
    <Layout>
      <SEO
        title={`Telemedicine Doctors List| Rajdoctors Telemedicine`}
        useDefault={false}
        description={`Telemedicine Doctors Lists at rajdoctors.com. Get telemedicine service at low cost at your doorstep.`}
      />
      <hr />
      <Container fluid className="p-0">
        <h3 className="text-center pb-3">Rajdoctors Telemedicine Service</h3>
        <div className="px-3 pb-3">টেলিমেডিসিন সেবা পেতে, প্রথমে <a href={process.env.GATSBY_ADD_TELEMEDICINE_CLIENT} target="_blank">এই ফর্মটি</a> যথাযথভাবে পূরণ করবেন। পরবর্তীতে, আমরা আপনার সাথে যোগাযোগ করব। যোগাযোগের পরে, <a href="https://shop.bkash.com/medionexam01521500642/pay/bdt300/DBZSNq" target="_blank">এই বিকাশ লিংকে</a> গিয়ে টেলিমেডিসিন সেবা চার্জ ৩০০ টাকা দিবেন । পরবর্তীতে আপনাকে sms এর মাধ্যমে কন্সাল্টেশন এর টাইম জানিয়ে দেওয়া হবে। যেকোন সমস্যার জন্য যোগাযোগ করুন - +880-1641622541, +880133343723 অথবা মেইল করুনঃ help@rajdoctors.com</div>
        <div className="d-flex flex-wrap justify-content-center">
            {
                props.data?.teledocs.nodes.map((doc)=> <Card className="mx-2 my-1" style={{ width: "300px", backgroundColor: "#DDE6ED" }}>
                <div style={{ backgroundColor: "#FFF" }} className="py-3">
                  <Img
                    fluid={props.data.allImg.edges.filter(({ node }) =>
                        node.relativePath.includes("/" + doc.id + ".")
                         )[0].node.childImageSharp.fluid}
                    style={{ borderRadius: "50%", width: "200px", margin: "auto" }}
                    className='shadow'
                  />
                </div>
    
                <Card.Body className="">
                    <Link to={`${doc.id}`}>
                        <Card.Title className="">{"Dr. " + doc.name}</Card.Title>
                    </Link>
                  
                  <p className="" style={{fontSize: '12px'}}>{doc.degree}</p>
                  <hr />
                  <Card.Text className="text-muted">
                    Interested in:{" "}
                    {doc.skill.split(",").map(deg => (
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
                    টেলিমেডিসিন সেবা পেতে <a href={process.env.GATSBY_ADD_TELEMEDICINE_CLIENT} target="_blank">এই ফর্মটি</a> পূরণ করূন।
                  </Card.Text>
                </Card.Body>
              </Card>)
            }
          
        </div>
      </Container>
    </Layout>
  )
}

export default injectIntl(TeleDocs)
