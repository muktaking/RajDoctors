import PropTypes from "prop-types"
import React from "react"
import DoctorMiniCard from "../doctor-page/doctor-mini-card"

// One card in a doctor list (home, all doctors, speciality pages). Same compact
// card as "You may find helpful" on the doctor page.
const Doctor = ({ data }) => <DoctorMiniCard data={data} />

Doctor.propTypes = {
  data: PropTypes.object,
}

export default Doctor
