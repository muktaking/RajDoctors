import axios from "axios"
import { Formik } from "formik"
import { graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import { Button, Form, Modal, OverlayTrigger, Tooltip } from "react-bootstrap"
import { FaExclamationCircle } from "react-icons/fa"

const Flag = ({ className, uid }) => {
  const queryData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          apiUrl
        }
      }
    }
  `)
  const [showData, setShowData] = useState(false)
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>
      <OverlayTrigger
        placement={"top"}
        overlay={<Tooltip>Flag as Wrong Information</Tooltip>}
      >
        <div
          style={{ display: "inline", fontSize: '.8rem' }}
          className={className ? className : "" + " text-muted flag p-1"}
          onClick={handleShow}
        >
          ( For wrong Info <FaExclamationCircle size={36} />)
        </div>
      </OverlayTrigger>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="bg-danger text-white">
          <Modal.Title>Ahh, Wrong, Tell More</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{ email: "", field: ["name"], rightInfo: "" }}
            validate={values => {
              const errors = {}
              if (!values.email) {
                errors.email = "Required"
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address"
              }
              if (!values.rightInfo) {
                errors.rightInfo = "Required"
              }

              return errors
            }}
            onSubmit={(values, { setSubmitting }) => {
              axios
                .post(queryData.site.siteMetadata.apiUrl + "/flag", {
                  headers: {
                    "Access-Control-Allow-Origin": "*",
                  },
                  data: { ...values, uid },
                })
                .then(res => {
                  setShowData(true)
                  setTimeout(() => {
                    handleClose()
                    setShowData(false)
                  }, 2000)
                })
                .catch(e => console.log(e))
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
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formGridFeilds">
                  <Form.Label>Which fields is Wrong</Form.Label>
                  <Form.Control
                    as="select"
                    name="field"
                    multiple
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.field}
                  >
                    <option>Name</option>
                    <option>Degree/Speciality</option>
                    <option>Contact Info</option>
                    <option>Chamber Time</option>
                    <option>Chamber Location</option>
                  </Form.Control>
                  <Form.Text className="text-muted">
                    You can select multiple fields
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Right Information</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="rightInfo"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.rightInfo}
                  />
                  <Form.Text className="text-danger">
                    {errors.rightInfo && touched.rightInfo && errors.rightInfo}
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                  <Form.Text className="text-danger">
                    {errors.email && touched.email && errors.email}
                  </Form.Text>
                </Form.Group>
                {showData && (
                  <Form.Text
                    className="text-success mb-2"
                    style={{ fontSize: "1.2rem" }}
                  >
                    {`Thank you for submitting data`}
                  </Form.Text>
                )}
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Modal.Body>
        <Modal.Footer className="text-success">
          Thank You for Your Co-operation.
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Flag
