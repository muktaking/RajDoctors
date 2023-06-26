import React, { useEffect } from "react"
import { Card } from "react-bootstrap"

const Ad = ({ isHorizontal = false }) => {
  useEffect(()=>{
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, [])

  return (
  <div className=""  style={{overflow: 'hidden'}}>
    <div
    className="mb-0 bg-white border"
    style={
      isHorizontal
        ? { height: "100px" }
        : { minWidth: "350px", minHeight: "200px" }
    }
  >
    
    <ins class="adsbygoogle"
      style={{display: "block"}}
      data-ad-client="ca-pub-7807818541747006"
      data-ad-slot={process.env.GATSBY_GOOGLE_DATA_AD_SLOT}
      data-ad-format="auto"
      data-full-width-responsive="true">
    </ins>
  </div>
  <p className="text-right text-white pr-2 bg-secondary" style={{fontSize: '.8rem'}}>
    For placement of ads, please contact us. (ads)
  </p>
  </div>
)}

export default Ad
