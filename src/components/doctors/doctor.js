import { Link, useIntl } from "gatsby-plugin-intl"
import PropTypes from "prop-types"
import React from "react"
import { Badge, Card } from "react-bootstrap"
import {
  FaAddressBook,
  FaHospitalSymbol,
  FaHourglass,
  FaStar,
  FaStethoscope,
} from "react-icons/fa"
import Avatar from "../avatar"
import Flag from "../flag"

const Doctor = ({
  name,
  rating,
  speciality,
  contact,
  location,
  time,
  link,
  uid,
  index,
}) => {
  // Making useIntl available in the code
  const intl = useIntl()
  // Use language iso for the routes
  //const locale = intl.locale !== "en" ? `/${intl.locale}` : ""

  return (
    <Card style={{ width: "24rem" }}>
      <Card.Body>
        <Badge pill variant="dark" className="rating ml-2 mb-3 float-right">
          <FaStar size="2em" />
          <span className="pr-1">{rating && rating}</span>
        </Badge>
        <Card.Title className="d-flex align-items-center">
          {/* <FaUserMd />  */}
          <Avatar img={uid} />
          <span>{name.trim().replace(/\*/g, ",")}</span>
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
              {contact.split("*").map(contact => (
                <>
                  <a href={"tel:" + contact}>{contact}</a> <br />
                </>
              ))}
            </Badge>
          </div>
          {!index && (
            <>
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
            </>
          )}
        </div>
        <br />
        <div className="d-flex justify-content-between">
          <Link to={`/doctor/${link}/`}>
            {intl.formatMessage({ id: "more" })}
          </Link>
          {!index && <Flag uid={uid} />}
        </div>
      </Card.Body>
    </Card>
  )
}

Doctor.propTypes = {
  name: PropTypes.string,
  speciality: PropTypes.string,
  contact: PropTypes.string,
  location: PropTypes.string,
  time: PropTypes.string,
  link: PropTypes.string,
  uid: PropTypes.string,
  index: PropTypes.bool,
}

export default Doctor
