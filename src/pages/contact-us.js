import React from "react"
import Layout from "../components/layout"
import Contact from "../components/contact"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Contact Us" />
      <Contact />
    </Layout>
  )
}

export default IndexPage
