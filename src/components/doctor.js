import React from "react"
import { Link } from "gatsby"
import { Badge, Card } from "react-bootstrap"
import {
  FaUserMd,
  FaStethoscope,
  FaAddressBook,
  FaHospitalSymbol,
  FaHourglass,
} from "react-icons/fa"

const Doctor = ({ name, speciality, contact, location, time, link }) => {
  return (
    <Card style={{ width: "24rem" }}>
      <Card.Body>
        <Card.Title>
          <FaUserMd /> <span>{name.trim().replace(/\*/g, ",")}</span>
        </Card.Title>
        <hr />
        <Card.Subtitle className="d-flex align-items-center text-muted pl-1">
          <FaStethoscope />
          <Badge variant="light" className="doctor-item-content">
            {speciality.trim().replace(/\*/g, ",")}
          </Badge>
        </Card.Subtitle>

        <div className="pl-1">
          <div className="d-flex align-items-center">
            <FaAddressBook />
            <Badge className="doctor-item-content">
              {contact.trim().replace(/\*/g, ",")}
            </Badge>
          </div>
          <div className="d-flex align-items-center">
            <FaHospitalSymbol />
            <Badge className="doctor-item-content">
              {location.trim().replace(/\*/g, ",")}
            </Badge>
          </div>
          <div className="d-flex align-items-center ">
            <FaHourglass />
            <Badge className="doctor-item-content">
              {time.trim().replace(/\*/g, ",")}
            </Badge>
          </div>
        </div>
        <br />
        <Link to={"/doctor/" + link}>More...</Link>
      </Card.Body>
    </Card>
  )
}

export default Doctor
