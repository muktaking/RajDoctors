import React from 'react'
import Share from '../share'
import Ad from '../ad'

export default function CardReview({reviews}) {
  return (
    <div className='bg-light text-dark px-2 py-2'>
        <Ad height={"90px"}/> 
        <h5 className='text-center' style={{fontWeight: '700', fontSize: ".9rem"}}>Reviews</h5>
        <p className='text-center' style={{ fontSize: ".9rem"}}>{reviews ? reviews : 'Currntly no user reviews is present for this doctor.'}</p>
        <hr />
        <p className='text-center' style={{fontWeight: '700', fontSize: ".9rem"}}>Share Us</p>
        <Share />
    
    </div>
  )
}
