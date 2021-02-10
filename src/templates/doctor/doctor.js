import { graphql } from "gatsby"
import { injectIntl } from "gatsby-plugin-intl"
import React from "react"
import { Badge, Jumbotron } from "react-bootstrap"
import { FaStar } from "react-icons/fa"
import Avatar from "../../components/avatar"
//importing components
import Doctors from "../../components/doctors/doctors"
import Emergency from "../../components/emergency"
import Flag from "../../components/flag"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Share from "../../components/share"


//uid: { eq: $uid }, lang: { eq: $lang }
//$uid: String!, $lang: String!
export const query = graphql`
  query($uid: String!, $lang: String!) {
    doc: doctorListsCsv(uid: { eq: $uid }, lang: { eq: $lang }) {
      uid
      Degree
      Name
      Rating
      Designation
      Institute
      Speciality
      contact1
      contact2
      loc1
      loc2
      locDetail1
      locDetail2
      visitTime1
      visitTime2
      fields {
        slug
      }
    }
    docs: allDoctorListsCsv(sort: {fields: Rating, order: DESC}) {
      nodes {
        id
        uid
        Name
        Rating
        Degree
        Speciality
        contact1
        loc1
        visitTime1
        fields {
          slug
        }
        lang
      }
    }
  }
`

const Doctor = ({ intl, pageContext, ...props }) => {
  // Internationalization
  //const intl = useIntl()
  //const locale = intl.locale !== "en" ? `/${intl.locale}` : ""

  const {
    uid,
    Name,
    Rating,
    Degree,
    Speciality,
    Designation,
    Institute,
    contact1,
    contact2,
    locDetail1,
    locDetail2,
    visitTime1,
    visitTime2,
    fields,
  } = props.data.doc

  const docs =  props.data.docs.nodes.filter(e=>e.Speciality ===props.data.doc.Speciality).slice(0,6)
  const schema = `
{
  "@context": "https://schema.org/",
  "@type": "Person",
  "name": "${Name.replace(/\*/, ",")}",
  "url": "${"https://rajdoctors.com" + `/doctor/` + fields.slug}",
  "image": "${"https://rajdoctors.com" + pageContext.imgSrc}",
  "jobTitle": "${Designation.replace(/\*/, ",")}",
  "worksFor": {
    "@type": "Organization",
    "name": "${Institute.replace(/\*/, ",")}"
  },
  "telephone": "${
    contact1.replace(/\*/, ",") + ", " + contact2.replace(/\*/, ",")
  }"  
}
`
  return (
    <Layout>
      <SEO
        title={`${Name.replace(/\*/, ",")} | ${Designation.replace(
          /\*/,
          ","
        )} ${intl.formatMessage({
          id: "at",
        })} ${Institute.replace(/\*/, ",")}`}
        useDefault={false}
        description={` ${Speciality.replace(/\*/, ",")} ${intl.formatMessage({
          id: "Specialist",
        })}. ${intl.formatMessage({
          id: "chamber.contact-info",
        })}: ${contact1.replace(/\*/g, ",")}, ${
          contact2 ? contact2.replace(/\*/g, ",") : ""
        }, ${intl.formatMessage({
          id: "chamber.location",
        })}: ${locDetail1.replace(/\*/g, ",")} ${intl.formatMessage({
          id: "chamber.time",
        })}: ${visitTime1.replace(/\*/g, ",")} ${intl.formatMessage({
          id: "at rajshahi city in bangladesh",
        })}`}
        schema={schema}
      />
      <Jumbotron>
        <div className="doctor-heading">
          <div className="avatar ml-5 mb-2">
            <Avatar height="200" width="200" img={uid} />
          </div>
          <h1>
            {Name}
            <Flag uid={uid} className="" />
          </h1>
          <p>
            <Badge variant="warning">{Degree.replace(/\*/, ",")}</Badge>
            <Badge pill variant="dark" className="rating ml-3">
              <FaStar />
              <span className="pl-2">{Rating && Rating}</span>
              
            </Badge>
            
          </p>
        </div>
        <div className="doctor-body px-3 pt-1">
          <div className="designation">
            <h5>{intl.formatMessage({ id: "designation" })}</h5>
            <p className="text-muted pl-3">
              {`${Designation.replace(/\*/, ",")} ${intl.formatMessage({
                id: "at",
              })} ${Institute.replace(/\*/, ",")}`}
            </p>
          </div>
          <div className="chamber">
            <h5>{intl.formatMessage({ id: "ci" })}</h5>
            <div className="pl-3 d-flex flex-wrap justify-content-start mt-2">
              <div
                className="card bg-light mb-3 mr-3"
                style={{ maxWidth: "22rem" }}
              >
                <div className="card-header">
                  {intl.formatMessage({ id: "chamber.one" })}
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    {intl.formatMessage({ id: "chamber.contact-info" })}
                  </h5>
                  <p className="card-text">
                    <Badge variant="warning">
                      {contact1.replace(/\*/g, ",")}
                    </Badge>
                  </p>
                  <h5 className="card-title">
                    {intl.formatMessage({ id: "chamber.location" })}
                  </h5>
                  <p className="card-text">{locDetail1.replace(/\*/g, ",")}</p>
                  <h5 className="card-title">
                    {intl.formatMessage({ id: "chamber.time" })}
                  </h5>
                  <p className="card-text">{visitTime1.replace(/\*/g, ",")}</p>
                </div>
              </div>
              {locDetail2 && (
                <div
                  className="card bg-light mb-3"
                  style={{ maxWidth: "22rem" }}
                >
                  <div className="card-header">
                    {intl.formatMessage({ id: "chamber.two" })}
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      {intl.formatMessage({ id: "chamber.contact-info" })}
                    </h5>
                    <p className="card-text">
                      <Badge variant="warning">
                        {contact2.replace(/\*/g, ",")}
                      </Badge>
                    </p>
                    <h5 className="card-title">
                      {intl.formatMessage({ id: "chamber.location" })}
                    </h5>
                    <p className="card-text">
                      {locDetail2.replace(/\*/g, ",")}
                    </p>
                    <h5 className="card-title">
                      {intl.formatMessage({ id: "chamber.time" })}
                    </h5>
                    <p className="card-text">
                      {visitTime2.replace(/\*/g, ",")}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <Share />
        <Emergency snippetVeiw={true}/>
        <div className="main">
          <div className="med-section">
            <h3 className="text-center">{"You may find helpful"}</h3>
            <div className="divider"></div>
            <div className="med-card">
              <Doctors data={docs} index={true} />
            </div>
          </div>
        </div>
      </Jumbotron>
      
    </Layout>
  )
}

export default injectIntl(Doctor)
