import React, { useState } from "react"
import ReactPaginate from "react-paginate"
import Doctors from "./doctors"
import { Container } from "react-bootstrap"

// declaring some global variable
const perPage = 6
let offset = 0

const Speciality = ({ location, data }) => {
  const pageCount = Math.ceil(data.allDoctorListsCsv.nodes.length / 10)
  //const [currentPage, setCurrentPage] = useState(0)
  const [doctorsList, setDoctorsList] = useState(
    data.allDoctorListsCsv.nodes.slice(offset, offset + perPage)
  )

  const onHandleClick = ({ selected }) => {
    offset = selected * perPage
    //setCurrentPage(selected)
    setDoctorsList(data.allDoctorListsCsv.nodes.slice(offset, offset + perPage))
  }

  return (
    <Container fluid className="p-0">
      <div className="main">
        <div className="med-section">
          <h3 className="text-center">
            List Of Doctors in{" "}
            {location.pathname.split("/").reverse()[0].replace(/%20/g, " ")}{" "}
            Speciality
          </h3>
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
  )
}

export default React.memo(Speciality)
