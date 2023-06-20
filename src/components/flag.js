import axios from "axios"
import { Formik } from "formik"
import { graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import { Button, Form, Modal, OverlayTrigger, Tooltip } from "react-bootstrap"
import { FaExclamationCircle } from "react-icons/fa"

const Flag = ({ className}) => {
  return (

      <OverlayTrigger
        placement={"top"}
        overlay={<Tooltip>Flag as Wrong Information</Tooltip>}
      >
        <div
          style={{ display: "inline", fontSize: '.8rem' }}
          className={className ? className : "" + " text-muted flag p-1"}

        >
          <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfDslDpr2AZeJAwGjj3c3ye5TbRmujPuk3ttIhSnP5xFTrcBg/viewform">( For wrong Info <FaExclamationCircle size={36} />)</a>
        </div>
      </OverlayTrigger>

  )
}

export default Flag
