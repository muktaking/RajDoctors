import React, { useEffect } from "react"

const Ad = ({ height }) => {
  useEffect(()=>{
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, [])

  return (
  <div className="px-2 mb-2" style={{flex: "0 0 100%"}}>
    <div className="mb-0 bg-white border mx-auto" >
    
    <ins className={`adsbygoogle google-responsive-ad`}
      style={{ display: "block", height: height ? height : '300px' , width: '100%', minWidth: '300px', maxWidth: '960px' }}
      data-ad-client="ca-pub-7807818541747006"
      data-ad-slot={process.env.GATSBY_GOOGLE_DATA_AD_SLOT}
      // data-ad-format="auto"
      // data-full-width-responsive="true"
      >
    </ins>
  </div>
  </div>
)}

export default Ad
