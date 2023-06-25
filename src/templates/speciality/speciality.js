import React, { useState } from "react"
import ReactPaginate from "react-paginate"
import { Container } from "react-bootstrap"
import { useIntl } from "gatsby-plugin-intl"
//importing component
import Doctors from "../../components/doctors/doctors"

// declaring some global variable
const perPage = 6
let offset = 0

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const Speciality = ({ speciality, data }) => {
  // Making useIntl available in the code
  const intl = useIntl()
  const pageCount = Math.ceil(data.allDoctorListsCsv.nodes.length / perPage)
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
            {`${intl.formatMessage({
              id: `adl.${process.env.GATSBY_DISTRICT}`,
            })} ${intl.formatMessage({
              id: `${capitalizeFirstLetter(speciality)}`,
            })}  ${intl.formatMessage({ id: "Speciality" })}`}
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
