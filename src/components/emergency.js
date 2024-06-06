import { Link } from "gatsby"
import React from "react"
import { Alert, Badge, ListGroup, ListGroupItem } from "react-bootstrap"
import Emergency from "../data/emergency.json"

export default function emergency({ snippetVeiw }) {
  return (
    <div className="px-2">
      {snippetVeiw ? (
        <Alert variant="danger" className="py-0 mb-0">
          <p className="text-center mb-0">Emergency Numbers</p>
          <hr className="my-2" />
          <div style={{ overflow: "auto" }} className="text-center">
            {Emergency.map((cat, i) => {
              if (i < 2) {
                return cat.contacts.map((contact, ind) => (
                  <Badge as="span" variant="light" className="mr-2">
                    {contact.name + ": " + contact.phone + " "}
                  </Badge>
                ))
              }
            })}
          </div>
          <hr className="my-2" />
          <Link to="/emergency" className="btn btn-dark btn-sm mb-2">More...</Link>
        </Alert>
      ) : (
        <ListGroup as="ul">
          <ListGroupItem
            as="li"
            variant="danger"
            className="text-center"
            style={{ fontSize: "1.8rem" }}
          >
            Emergency Numbers
          </ListGroupItem>
          {Emergency.map((cat, i) => (
            <ListGroupItem as="li" variant="primary" className="">
              <p className="lead">{cat.service}</p>
              <ListGroup as="ul">
                {cat.contacts.map((contact, index) => (
                  <ListGroupItem as="li" variant="success" className="">
                    {contact.name + ": "}{" "}
                    <Badge variant="danger">{contact.phone}</Badge>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </ListGroupItem>
          ))}
        </ListGroup>
      )}
    </div>
  )
}
