import React from "react"
import { graphql } from "gatsby"
import { Badge, Jumbotron } from "react-bootstrap"

import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl"
//importing components
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Share from "../../components/share"
import Flag from "../../components/flag"
import Avatar from "../../components/avatar"

//uid: { eq: $uid }, lang: { eq: $lang }
//$uid: String!, $lang: String!
export const query = graphql`
  query($uid: String!, $lang: String!) {
    doctorListsCsv(uid: { eq: $uid }, lang: { eq: $lang }) {
      uid
      Degree
      Name
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
  }
`

const Doctor = ({ intl, pageContext, ...props }) => {
  // Internationalization
  //const intl = useIntl()
  //const locale = intl.locale !== "en" ? `/${intl.locale}` : ""

  const {
    uid,
    Name,
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
  } = props.data.doctorListsCsv
  const schema = `
{
  "@context": "https://schema.org/",
  "@type": "Person",
  "name": ${Name},
  "url": ${"https://rajdoctors.com" + `/doctor/` + fields.slug},
  "image": ${"https://rajdoctors.com" + pageContext.imgSrc},
  "jobTitle": ${Designation},
  "worksFor": {
    "@type": "Organization",
    "name": ${Institute}
  },
  "telephone": ${contact1 + ", " + contact2}  
}
`
  return (
    <Layout>
      <SEO
        title={`${Name} | ${Designation} ${intl.formatMessage({
          id: "at",
        })} ${Institute}`}
        useDefault={false}
        description={` ${Speciality} ${intl.formatMessage({
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
            <Badge variant="warning">{Degree}</Badge>
          </p>
        </div>
        <div className="doctor-body px-3 pt-1">
          <div className="designation">
            <h5>{intl.formatMessage({ id: "designation" })}</h5>
            <p className="text-muted pl-3">
              {`${Designation} ${intl.formatMessage({
                id: "at",
              })} ${Institute}`}
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
      </Jumbotron>
    </Layout>
  )
}

export default injectIntl(Doctor)
