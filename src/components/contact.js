import React, { useState, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import axios from "axios"
import validator from "validator"
import { Formik } from "formik"

const randomSum = () => {
  const ranNum1 = Math.ceil(Math.random() * 100)
  const ranNum2 = Math.ceil(Math.random() * 100)
  return [ranNum1, ranNum2, ranNum1 + ranNum2]
}
let [ranNum1, ranNum2, sum] = randomSum()

const Contact = () => {
  const queryData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          apiUrl
        }
      }
    }
  `)
  const sumRef = useRef(null)
  const [error, setError] = useState(false)
  const [show, setShow] = useState(false)
  const [data, setData] = useState("")
  const [num1, setNum1] = useState(ranNum1)
  const [num2, setNum2] = useState(ranNum2)

  // submit Handler

  const submitHandler = (values, setSubmitting) => {
    setShow(false)
    const data = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      message: values.message,
    }
    if (sum === +sumRef.current.value) {
      setError(false)
      axios
        .post(queryData.site.siteMetadata.apiUrl + "/contact", {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
          data,
        })
        .then(res => {
          setShow(true)
          setData(res.data)
        })
        .catch(e => {
          console.log()
        })
    } else {
      setSubmitting(false)
      setError(true)
    }
    ;[ranNum1, ranNum2, sum] = randomSum()
    setNum1(ranNum1)
    setNum2(ranNum2)
  }

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
                <h1 className="font-weight-light mt-2">Quick Contact</h1>
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                  }}
                  validate={values => {
                    const errors = {}
                    if (!validator.isLength(values.name, { min: 3, max: 30 })) {
                      errors.name =
                        "Name is Invalid(Required, Min: 3 character , Max: 4)"
                    }
                    if (!values.email) {
                      errors.email = "Required"
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.email
                      )
                    ) {
                      errors.email = "Invalid email address"
                    }
                    if (
                      !(
                        validator.isEmpty(values.phone) |
                        validator.isMobilePhone(values.phone)
                      )
                    ) {
                      errors.phone = "Invalid Mobile Phone number"
                    }
                    if (
                      !validator.isLength(values.message, { min: 10, max: 300 })
                    ) {
                      errors.message = "Too Short message or Too many Words."
                    }
                    return errors
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    submitHandler(values, setSubmitting)
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit} className="mt-4">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group mt-2">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="name"
                              name="name"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.name}
                            />
                            <p className="mt-1 pl-2 text-danger">
                              {errors.name && touched.name && errors.name}
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group mt-2">
                            <input
                              className="form-control"
                              type="email"
                              placeholder="email address"
                              name="email"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email}
                            />
                            <p className="mt-1 pl-2 text-danger">
                              {errors.email && touched.email && errors.email}
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group mt-2">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="phone"
                              name="phone"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.phone}
                            />
                            <p className="mt-1 pl-2 text-danger">
                              {errors.phone && touched.phone && errors.phone}
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group mt-2">
                            <textarea
                              className="form-control"
                              rows="3"
                              placeholder="message"
                              name="message"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.message}
                            ></textarea>
                            <p className="mt-1 pl-2 text-danger">
                              {errors.message &&
                                touched.message &&
                                errors.message}
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <p>Please Write the correct Result</p>
                          <div>
                            <span>{num1}</span> + <span>{num2}</span> =
                            <input
                              className="form-control"
                              type="text"
                              placeholder="e.g. 23"
                              name="sum"
                              ref={sumRef}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 text-center text-danger py-2 px-1">
                          {error && (
                            <span>The result of summation is wrong</span>
                          )}
                        </div>
                        <div className="col-lg-12 text-center text-success py-2 px-1">
                          {show && (
                            <span>Thank You {data.name} for contacting us</span>
                          )}
                        </div>
                        <div className="col-lg-12">
                          <button
                            type="submit"
                            className="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2"
                          >
                            <span> SUBMIT</span>
                          </button>
                        </div>
                      </div>
                    </form>
                  )}
                </Formik>
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
                        <h6 className="font-weight-medium">Address</h6>
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
                        <h6 className="font-weight-medium">Phone</h6>
                        <p className="">
                          o17-
                          <br /> 017-
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
                        <h6 className="font-weight-medium">Email</h6>
                        <p className="">
                          info@rajdoctors@gmail.com
                          <br /> admin@rajdoctors@gmail.com
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
