import React from "react"

import Doctor from "./doctor"

const Doctors = ({ data }) => {
  return data.map((doctor, index) => (
    <Doctor
      key={index}
      name={doctor.Name}
      speciality={doctor.Degree}
      contact={doctor.contact1}
      location={doctor.loc1}
      time={doctor.visitTime1}
      link={doctor.uid}
    />
  ))
}

export default Doctors
