import React, { useEffect } from "react"

const Ad = ({ isHorizontal = false }) => {
  useEffect(()=>{
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, [])

  return (
  <div className="px-2 mb-2 flex-fill">
    <div
    className="mb-0 bg-white border"
    style={
      isHorizontal
        ? { height: "100px", maxHeight: "100px" }
        : { height: "300px", maxWidth: '24rem', minWidth: '300px' }
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
  </div>
)}

export default Ad
