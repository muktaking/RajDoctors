import { Link, graphql} from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { injectIntl} from "gatsby-plugin-intl"
import React from "react"
import { Badge, Card, Col, Container, Row } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Ad from "../components/ad"
//imports components

export const query = graphql`
  query {
    teledocs: allTelemediDoctorListsCsv {
        nodes {
          id
          name
          degrees
          fee
          skills
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
            gatsbyImageData(layout: CONSTRAINED, width: 280, placeholder: NONE)
          }
        }
      }
    }
  }
`

const TeleDocs = ({ intl,...props }) => {
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
      <Container fluid className="md-page">
        <h1 className="md-page-title text-center" id="raj-telemed-heading">Rajdoctors Telemedicine Service</h1>
        <div className="md-note">টেলিমেডিসিন সেবা পেতে, প্রথমে <a href={process.env.GATSBY_ADD_TELEMEDICINE_CLIENT} target="_blank">এই ফর্মটি</a> যথাযথভাবে পূরণ করবেন। পরবর্তীতে, আমরা আপনার সাথে যোগাযোগ করব। যোগাযোগের পরে, <a href="https://shop.bkash.com/medionexam01521500642/pay/bdt300/DBZSNq" target="_blank" rel='noreferrer'>এই বিকাশ লিংকে</a> গিয়ে টেলিমেডিসিন সেবা চার্জ ৩০০ টাকা দিবেন । পরবর্তীতে আপনাকে sms এর মাধ্যমে কন্সাল্টেশন এর টাইম জানিয়ে দেওয়া হবে। যেকোন সমস্যার জন্য যোগাযোগ করুন - +880-1641622541, +880133343723 অথবা মেইল করুনঃ help@rajdoctors.com</div>
        <div className="md-grid">
            {
                props.data?.teledocs.nodes.map((doc)=> <Card key={doc.id} className="md-tele">
                <div className="md-tele__photo">
                  <GatsbyImage image={props.data.allImg.edges.filter(({ node }) =>
                        node.relativePath.includes("/" + doc.id + ".")
                         )[0].node.childImageSharp.gatsbyImageData} alt={"Dr. " + doc.name}
                    style={{ borderRadius: "50%", width: "160px", margin: "auto", display: "block" }}
                  />
                </div>
    
                <Card.Body className="">
                    <Link to={`${doc.id}`}>
                        <Card.Title className="">{"Dr. " + doc.name}</Card.Title>
                    </Link>
                  
                  <p className="" style={{fontSize: '12px'}}>{doc.degrees}</p>
                  <hr />
                  <Card.Text className="text-muted">
                    Interested in:{" "}
                    {doc.skills.split(",").map((deg, i) => (
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
                    টেলিমেডিসিন সেবা পেতে <a href={process.env.GATSBY_ADD_TELEMEDICINE_CLIENT} target="_blank">এই ফর্মটি</a> পূরণ করূন।
                  </Card.Text>
                  <Card.Text>
                  <Link to={`${doc.id}`}>
                        More...
                    </Link>
                  </Card.Text>
                </Card.Body>
              </Card>)
            }
          
        </div>
      </Container>
      {/* one ad above the footer */}
      <Ad variant="block" className="ad-slot--footer" />
    </Layout>
  )
}

export default injectIntl(TeleDocs)
