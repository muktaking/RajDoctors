import PropTypes from "prop-types"
import React from "react"
import CardTopComponent from "../cards/card-top-component"

const Doctor = ({
  data
}) => {
  return (
    <div className="mr-2 mb-2">
      <CardTopComponent data={data} avatarHeight={60} avaterWidth={60} avatarTop={'-5px'} isSnippet={true} />
    </div>
  )
}

Doctor.propTypes = {
  data: PropTypes.object,
}

export default Doctor
