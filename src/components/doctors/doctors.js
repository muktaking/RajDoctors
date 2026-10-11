import { useIntl } from "gatsby-plugin-intl"
import PropTypes from "prop-types"
import React from "react"
import Ad from "../ad"
import Doctor from "./doctor"

// `data` is a list of Doctor nodes queried with
//   localized(lang: $language, fallback: true) { ...DoctorCard }
// i.e. each doctor's row in the page language (or the row itself when the
// district has no row in that language, e.g. Bangla on /bn/dhaka/).
const Doctors = ({ data }) => {
  useIntl()
  return data.map((doctor, i) => {
    // localized is null when the doctor has no row in the page language
    // (only happens in districts that do have rows in that language): skip it
    const card = doctor && ("localized" in doctor ? doctor.localized : doctor)
    if (!card || !card.fields) return null
    return (
      <React.Fragment key={card.id || i}>
        {i % 3 === 0 && i !== 0 ? <Ad height={"90px"} /> : null}
        <Doctor data={card} />
      </React.Fragment>
    )
  })
}

Doctors.propTypes = {
  data: PropTypes.array,
  index: PropTypes.bool, // is it index page or not
}

export default Doctors
