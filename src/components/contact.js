import axios from "axios"
import { Formik } from "formik"
import { graphql, useStaticQuery } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"
import React, { useRef, useState } from "react"
import validator from "validator"

const randomSum = () => {
  const ranNum1 = Math.ceil(Math.random() * 100)
  const ranNum2 = Math.ceil(Math.random() * 100)
  return [ranNum1, ranNum2, ranNum1 + ranNum2]
}
let [ranNum1, ranNum2, sum] = randomSum()

const Contact = () => {
  const intl = useIntl()
  const queryData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          apiUrl
        }
      }
    }
  `)

  return (
    <div className="contact3 py-5">
      <div className="row no-gutters">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="card-shadow">
                <img
                  src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/2.jpg"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-box ml-3">
                <h1 className="font-weight-light mt-2">
                  {intl.formatMessage({ id: "Quick Contact" })}
                </h1>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdVPnpvv-krJUPRPSma93cEiRPmAlF4vEJ9XCDxtBIj2iqcvg/viewform?usp=sf_link">Let us know your problems</a>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="card mt-4 border-0 mb-4">
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className="card-body d-flex align-items-center c-detail pl-0">
                      <div className="mr-3 align-self-center">
                        <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png" />
                      </div>
                      <div className="">
                        <h6 className="font-weight-medium">
                          {intl.formatMessage({ id: "Address" })}
                        </h6>
                        <p className="">
                          Rajshahi
                          <br /> Bangladesh
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="card-body d-flex align-items-center c-detail">
                      <div className="mr-3 align-self-center">
                        <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png" />
                      </div>
                      <div className="">
                        <h6 className="font-weight-medium">
                          {intl.formatMessage({ id: "Phone" })}
                        </h6>
                        <p className="">
                        +880-1521500642, 
                        +880-1641622541
                          <br /> 
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="card-body d-flex align-items-center c-detail">
                      <div className="mr-3 align-self-center">
                        <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png" />
                      </div>
                      <div className="">
                        <h6 className="font-weight-medium">
                          {intl.formatMessage({ id: "Email" })}
                        </h6>
                        <p className="">
                          info@rajdoctors.com
                          <br /> admin@rajdoctors.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
