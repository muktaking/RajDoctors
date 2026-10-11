import React from "react"
import { Link, useIntl } from "gatsby-plugin-intl"
import { MdSentimentDissatisfied } from "react-icons/md"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => {
  const intl = useIntl()
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className="md-404 d-flex flex-column align-items-center justify-content-center">
        <MdSentimentDissatisfied className="md-404__icon" aria-hidden="true" />
        <h1>{intl.formatMessage({ id: "opps" })}</h1>
        <h2>{intl.formatMessage({ id: "404" })}</h2>
        <p>{intl.formatMessage({ id: "notExist" })}</p>
        <Link to="/" className="dp-btn dp-btn--filled mt-2">
          {intl.formatMessage({ id: "shell.goHome" })}
        </Link>
      </div>
    </Layout>
  )
}

export default NotFoundPage
