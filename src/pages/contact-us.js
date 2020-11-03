import React from "react"
import Layout from "../components/layout"
import Contact from "../components/contact"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Contact Us"
        description="You can contact us with Email: info@rajdoctors@gmail.com, admin@rajdoctors@gmail.com. Loacated at rajshahi, Bangladesh. Online hub of doctors."
      />
      <Contact />
    </Layout>
  )
}

export default IndexPage
