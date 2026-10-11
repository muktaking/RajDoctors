import { useIntl } from "gatsby-plugin-intl"
import PropTypes from "prop-types"
import React from "react"
import Ad from "../ad"
import Doctor from "./doctor"

// `data` is a list of Doctor nodes queried with
//   localized(lang: $language, fallback: true) { ...DoctorCard }
// i.e. each doctor's row in the page language (or the row itself when the
// district has no row in that language, e.g. Bangla on /bn/dhaka/).
// `ad`: one in-feed ad after the first full block of cards (6, or all of
// them when the page lists 3-5); never more than one per list.
const AD_AFTER = 6
const Doctors = ({ data, ad = false }) => {
  useIntl()
  const shown = data.filter(d => {
    const c = d && ("localized" in d ? d.localized : d)
    return c && c.fields
  }).length
  const adAt = ad && shown >= 3 ? Math.min(AD_AFTER, shown) : -1
  let n = 0
  return data.map((doctor, i) => {
    // localized is null when the doctor has no row in the page language
    // (only happens in districts that do have rows in that language): skip it
    const card = doctor && ("localized" in doctor ? doctor.localized : doctor)
    if (!card || !card.fields) return null
    return (
      <React.Fragment key={card.id || i}>
        <Doctor data={card} />
        {++n === adAt ? <Ad variant="infeed" className="ad-slot--row" /> : null}
      </React.Fragment>
    )
  })
}

Doctors.propTypes = {
  data: PropTypes.array,
  index: PropTypes.bool, // is it index page or not
  ad: PropTypes.bool, // show the in-feed ad
}

export default Doctors
