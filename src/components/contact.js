import React, { useState, useRef } from "react"
import axios from "axios"
import validator from "validator"
const randomSum = () => {
  const ranNum1 = Math.ceil(Math.random() * 100)
  const ranNum2 = Math.ceil(Math.random() * 100)
  return [ranNum1, ranNum2, ranNum1 + ranNum2]
}
let [ranNum1, ranNum2, sum] = randomSum()

const Contact = () => {
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const phoneRef = useRef(null)
  const messageRef = useRef(null)
  const sumRef = useRef(null)
  const [error, setError] = useState(false)
  const [errorData, setErrorData] = useState("")
  const [show, setShow] = useState(false)
  const [data, setData] = useState("")
  const [num1, setNum1] = useState(ranNum1)
  const [num2, setNum2] = useState(ranNum2)

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
                <form className="mt-4">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="name"
                          name="name"
                          ref={nameRef}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <input
                          className="form-control"
                          type="email"
                          placeholder="email address"
                          name="email"
                          ref={emailRef}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="phone"
                          name="phone"
                          ref={phoneRef}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <textarea
                          className="form-control"
                          rows="3"
                          placeholder="message"
                          name="message"
                          ref={messageRef}
                        ></textarea>
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
                      {error && <span>The result of summation is wrong</span>}
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
                        onClick={e => {
                          e.preventDefault()

                          if (sum === +sumRef.current.value) {
                            setError(false)
                            axios
                              .post("https://api.rajdoctors/contact", {
                                headers: { "Access-Control-Allow-Origin": "*" },
                                data,
                              })
                              .then(res => {
                                if (res.status === 201) {
                                  setShow(true)
                                  setData(res.data)
                                } else {
                                  setData(res.data)
                                }
                              })
                              .catch(e => {
                                console.log(e)
                              })
                          } else {
                            setError(true)
                          }
                          ;[ranNum1, ranNum2, sum] = randomSum()
                          setNum1(ranNum1)
                          setNum2(ranNum2)
                        }}
                      >
                        <span> SUBMIT</span>
                      </button>
                    </div>
                  </div>
                </form>
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
