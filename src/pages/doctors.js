import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import ReactPaginate from "react-paginate"
import Layout from "../components/layout"
import Doctors from "../components/doctors"
import SEO from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"

import HeroImg from "../images/Doctor And Patient.jpg"

const perPage = 6
let offset = 0

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      all: allDoctorListsCsv {
        nodes {
          id
          uid
          Name
          Degree
          contact1
          loc1
          visitTime1
        }
      }
    }
  `)
  const pageCount = Math.ceil(data.all.nodes.length / 10)
  //const [currentPage, setCurrentPage] = useState(0)
  const [doctorsList, setDoctorsList] = useState(
    data.all.nodes.slice(offset, offset + perPage)
  )

  const onHandleClick = ({ selected }) => {
    offset = selected * perPage
    //setCurrentPage(selected)
    setDoctorsList(data.all.nodes.slice(offset, offset + perPage))
  }
  return (
    <Layout>
      <SEO
        title="Doctors"
        description="Lists of all doctors at rajshahi city in bangladesh"
      />
      <Container fluid className="p-0">
        <div className="hero non-landing">
          <Row noGutters>
            <Col md={6} className="">
              <div className="text-center">
                <h1 className="text-uppercase mt-5">List of All Doctors</h1>
              </div>
            </Col>
            <Col md={6}>
              <img src={HeroImg} alt="hero" height="300px" />
            </Col>
          </Row>
        </div>
        <hr className="w-75" />
        <div className="main">
          <div className="med-section">
            <h3 className="text-center">All Doctors List</h3>
            <div className="divider"></div>
            <div className="med-card">
              <Doctors data={doctorsList} />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <ReactPaginate
              previousLabel={"<<"}
              nextLabel={">>"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={onHandleClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
            />
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default IndexPage
