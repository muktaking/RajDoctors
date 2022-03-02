import { Link } from "gatsby";
import React from 'react';
import { Alert, Badge, ListGroup, ListGroupItem } from 'react-bootstrap';
import Emergency from '../data/emergency.json';


export default function emergency({snippetVeiw}) {
    return (
        <div className="p-3">
            {snippetVeiw 
            ? 
            <Alert  variant="danger">
                <p className="text-center">Emergency Numbers</p>
                <hr />
                <div style={{overflow: 'auto'}}>
                    {
                        Emergency.map((cat,i)=>
                            cat.contacts.map((contact,ind)=><Badge as="span" variant="light" className="mr-2">{contact.name+": "+contact.phone+" "}</Badge>)
                        )
                    }
                </div>
                <hr />
                <Link to="/emergency">More...</Link>

            </Alert> 
            :
            <ListGroup as="ul">
                <ListGroupItem as="li" variant="danger" className="text-center" style={{fontSize: '1.8rem'}}>
                        Emergency Numbers
                </ListGroupItem>
            {
                Emergency.map((cat,i)=>
                    <ListGroupItem as="li" variant="primary" className="">
                        <p className="lead">
                        {cat.service}
                        </p>
                        <ListGroup as="ul">
                            {cat.contacts.map((contact,index)=><ListGroupItem as="li" variant="success" className="">
                                {contact.name + ": "} <Badge variant="danger">{contact.phone}</Badge>
                                </ListGroupItem>)}
                            
                        </ListGroup>

                    </ListGroupItem>
                )
            }
            </ListGroup>}
        </div>
    )
}
