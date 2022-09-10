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
      <span className='mr-3'>বিজ্ঞাপন</span>
      <a href="mailto:info@rajdoctors.com">মেইল পাঠান</a>
      <a href='tel:+880-1641622541' >বিজ্ঞাপনের জন্য ফোন করুন {' '}
        <FaPhoneSquare size='1rem' />
      </a> 
  </Card.Footer>
</Card> 
    
  

export default Ad;