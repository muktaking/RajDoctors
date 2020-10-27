/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import Sidebar from "./sidebar"
import Topbar from "./topbar"
import Footer from "./footer"

import "../styles/style.scss"

const Layout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)
  const [toggled, setToggled] = useState(false)

  const handleCollapsedChange = checked => {
    setCollapsed(checked)
  }

  const handleToggleSidebar = value => {
    setToggled(value)
  }

  return (
    <>
      <div className="wrapper">
        {/* <!-- Sidebar --> */}
        <Sidebar
          collapsed={collapsed}
          toggled={toggled}
          handleToggleSidebar={handleToggleSidebar}
          handleCollapsedChange={handleCollapsedChange}
        />
        {/* <!-- Page Content --> */}
        <div id="content">
          <Topbar handleToggleSidebar={handleToggleSidebar} />
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
