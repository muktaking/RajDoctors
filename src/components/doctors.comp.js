import React, { useState } from "react"
import ReactPaginate from "react-paginate"
import Doctors from "../components/doctors"

const perPage = 6
let offset = 0

const DoctorsComp = ({ data }) => {
  const pageCount = Math.ceil(data.all.nodes.length / 10)
  const [doctorsList, setDoctorsList] = useState(
    data.all.nodes.slice(offset, offset + perPage)
  )

  const onHandleClick = ({ selected }) => {
    offset = selected * perPage
    setDoctorsList(data.all.nodes.slice(offset, offset + perPage))
  }
  return (
    <>
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
    </>
  )
}

export default DoctorsComp
