import React from "react"

import Doctor from "./doctor"

const Doctors = ({ data, index }) => {
  return data.map((doctor, i) => (
    <Doctor
      key={i}
      name={doctor.Name}
      speciality={doctor.Degree}
      contact={doctor.contact1}
      location={doctor.loc1}
      time={doctor.visitTime1}
      link={doctor.uid}
      uid={doctor.uid}
      index={index}
    />
  ))
}

export default Doctors
