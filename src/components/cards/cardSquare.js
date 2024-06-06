import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardTopComponent from './card-top-component'
import CardChamberInfo from './Card-chamber-info'
import CardReview from './card-review'

export default function CardSquare({data}) {
  return (
    <Container className='mb-2 mt-5 pt-3'>
      <Row>
        <Col xs={12} md={6} className='p-1'>
          <CardTopComponent data={data} />
        </Col>
        <Col xs={12} md={{order: 'last'}} className='p-1'>
          <CardChamberInfo data={data} />
        </Col> 
        <Col md={6} className='p-1'>
          <CardReview reviews={data.reviews} /> 
        </Col>            
      </Row>         
    </Container>
  )
}
