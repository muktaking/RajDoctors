/*
  List of doctors with pagination. Each page of the list is its own static
  page (/<district>/doctors/, /<district>/doctors/2/, ...) created in
  gatsby-node.js, so a page only carries the 6 doctors it shows.
*/
import { navigate, useIntl } from "gatsby-plugin-intl"
import PropTypes from "prop-types"
import React from "react"
import ReactPaginate from "react-paginate"
import Doctors from "./doctors"
import { districtMessage, districtPath, useDistrict } from "../../utils/district"

const DoctorsWrapper = ({ data, currentPage, pageCount }) => {
  const intl = useIntl()
  const district = useDistrict()
  const pagePath = n => districtPath(district, n === 1 ? "/doctors/" : `/doctors/${n}/`)
  const locale = intl.locale !== "en" ? `/${intl.locale}` : ""
  return (
    <>
      <div className="med-section">
        <h3 className="text-center">{districtMessage(intl, "adl", district)}</h3>
        <div className="divider"></div>
        <div className="med-card">
          <Doctors data={data.all.nodes} />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <ReactPaginate
          previousLabel={"<<"}
          nextLabel={">>"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          forcePage={currentPage - 1}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          hrefBuilder={n => `${locale}${pagePath(n)}`}
          onPageChange={({ selected }) => navigate(pagePath(selected + 1))}
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
  currentPage: PropTypes.number,
  pageCount: PropTypes.number,
}

export default DoctorsWrapper
