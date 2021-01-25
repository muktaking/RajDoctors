import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => {
  const intl = useIntl()
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ height: "500px" }}
      >
        <h1>{intl.formatMessage({ id: "opps" })}</h1>
        <h2>{intl.formatMessage({ id: "404" })}</h2>
        <p>{intl.formatMessage({ id: "notExist" })}</p>
      </div>
    </Layout>
  )
}

export default NotFoundPage
