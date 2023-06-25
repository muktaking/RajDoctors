import { useIntl } from "gatsby-plugin-intl"
import React from "react"
import Contact from "../components/contact"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  const intl = useIntl()
  return (
    <Layout>
      <Seo
        title={intl.formatMessage({ id: "contact-us" })}
        description="You can contact us with Email: info@rajdoctors.com, admin@rajdoctors.com. Loacated at rajshahi, Bangladesh. Online hub of doctors."
      />
      <Contact />
    </Layout>
  )
}

export default IndexPage
