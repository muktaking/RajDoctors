import Img from "gatsby-image";
import React from 'react';
import { Card } from "react-bootstrap";
import { FaPhoneSquare } from "react-icons/fa";

const Ad = ({title, contact, imgData}) =>
<Card className='mt-3' style={{width: '390px'}}>
  <Card.Header as="h5">
      <p>{title}</p>
      <a href={'tel:' + contact} className='text-muted' style={{fontSize: '.8rem'}} >Call Now <FaPhoneSquare size='1rem' /></a> 
  </Card.Header>
  <Card.Body>
  <Img  fluid={imgData} />
  </Card.Body>
  <Card.Footer className='d-flex justify-content-between text-muted'>
      <span>Ad. </span>
      <a href='tel:+880-1641622541' >For Ad. Call Now {' '}
        <FaPhoneSquare size='1rem' />
      </a> 
  </Card.Footer>
</Card> 
    
  

export default Ad;