import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ height: "500px" }}
    >
      <h1>Opps, Sorry</h1>
      <h2>404: Not Found</h2>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
