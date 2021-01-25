import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import Contact from "../components/contact"
import SEO from "../components/seo"

const IndexPage = () => {
  const intl = useIntl()
  return (
    <Layout>
      <SEO
        title={intl.formatMessage({ id: "contact-us" })}
        description="You can contact us with Email: info@rajdoctors@gmail.com, admin@rajdoctors@gmail.com. Loacated at rajshahi, Bangladesh. Online hub of doctors."
      />
      <Contact />
    </Layout>
  )
}

export default IndexPage
