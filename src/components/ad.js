import React from "react"
import { Card } from "react-bootstrap"

const Ad = ({ isHorizontal = false }) => (
  <div>
    <Card
    className="mb-0"
    style={
      isHorizontal
        ? { height: "100px", overflow: "hidden" }
        : { minWidth: "24rem", minHeight: "200px", overflow: "hidden" }
    }
  >
    <Card.Body className="p-0">
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7807818541747006"
        crossorigin="anonymous"
      ></script>
      <ins
        class="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-7807818541747006"
        data-ad-slot="4648607007"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
    </Card.Body>
  </Card>
  <p className="text-right text-white pr-2 bg-secondary" style={{fontSize: '.8rem'}}>
    For placement of ads, please contact us. (ads)
  </p>
  </div>
)

export default Ad
