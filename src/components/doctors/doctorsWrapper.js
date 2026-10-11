/* 

It is a wrapper of doctors and pegination component to reduce the dom manupulation

*/
import { useIntl } from "gatsby-plugin-intl"
import * as _ from "lodash"
import PropTypes from "prop-types"
import React, { useState } from "react"
import ReactPaginate from "react-paginate"
import Doctors from "./doctors"

//declaring some global variables
const perPage = 6
let offset = 0

const DoctorsWrapper = ({ data }) => {
  // Sort a copy: assigning back into data.all.nodes mutated the cached query
  // result, so every render dropped one more doctor (slice(1)).
  const nodes = _.sortBy(data.all.nodes, ["Rating"]).slice(1).reverse()
  const intl = useIntl()

  const pageCount = Math.ceil(nodes.length / 10)
  const [doctorsList, setDoctorsList] = useState(
    nodes.slice(offset, offset + perPage)
  )
  const onHandleClick = ({ selected }) => {
    offset = selected * perPage
    setDoctorsList(nodes.slice(offset, offset + perPage))
  }
  return (
    <>
      <div className="med-section">
        <h3 className="text-center">{intl.formatMessage({ id: `adl.${process.env.GATSBY_DISTRICT}` })}</h3>
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

DoctorsWrapper.propTypes = {
  data: PropTypes.object,
}

export default DoctorsWrapper
