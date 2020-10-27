import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Badge, Jumbotron } from "react-bootstrap"
import SEO from "../components/seo"

import Share from "../components//share"

export const query = graphql`
  query($id: String!) {
    doctorListsCsv(id: { eq: $id }) {
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
    }
  }
`

const Doctor = props => {
  const {
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
  } = props.data.doctorListsCsv

  return (
    <Layout>
      <SEO
        title={`${Name}`}
        description={` ${Speciality} specialist: Details chamber list, contact information and visiting time at rajshahi city in bangladesh`}
      />
      <Jumbotron>
        <div className="doctor-heading">
          <h1>{Name}</h1>
          <p>
            <Badge variant="warning">{Degree}</Badge>
          </p>
        </div>
        <div className="doctor-body px-3 pt-1">
          <div className="designation">
            <h5>Designation</h5>
            <p className="text-muted pl-3">
              {Designation} at {Institute}
            </p>
          </div>
          <div className="chamber">
            <h5>Chamber Information</h5>
            <div className="pl-3 d-flex flex-wrap justify-content-start mt-2">
              <div
                className="card bg-light mb-3 mr-3"
                style={{ maxWidth: "22rem" }}
              >
                <div className="card-header">Chamber One</div>
                <div className="card-body">
                  <h5 className="card-title">Contact Info</h5>
                  <p className="card-text">
                    <Badge variant="warning">
                      {contact1.replace(/\*/g, ",")}
                    </Badge>
                  </p>
                  <h5 className="card-title">Location</h5>
                  <p className="card-text">{locDetail1.replace(/\*/g, ",")}</p>
                  <h5 className="card-title">Visit Time</h5>
                  <p className="card-text">{visitTime1.replace(/\*/g, ",")}</p>
                </div>
              </div>
              {locDetail2 && (
                <div
                  className="card bg-light mb-3"
                  style={{ maxWidth: "22rem" }}
                >
                  <div className="card-header">Chamber Two</div>
                  <div className="card-body">
                    <h5 className="card-title">Contact Info</h5>
                    <p className="card-text">
                      <Badge variant="warning">
                        {contact2.replace(/\*/g, ",")}
                      </Badge>
                    </p>
                    <h5 className="card-title">Location</h5>
                    <p className="card-text">
                      {locDetail2.replace(/\*/g, ",")}
                    </p>
                    <h5 className="card-title">Visit Time</h5>
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

export default Doctor
