/**
 * Page shell: top app bar (+ mobile bottom navigation), announcement banner,
 * page content, footer. The old sidebar and chip toolbar were folded into the
 * app bar (components/nav/).
 */
import React from "react"
import PropTypes from "prop-types"
import AppBar from "./nav/app-bar"
import Announcement from "./nav/announcement"
import BottomNav from "./nav/bottom-nav"
import Footer from "./footer"

import "../styles/style.scss"
import "../styles/site.scss"

const Layout = ({ children }) => (
  <div className="wrapper">
    <div id="content">
      <AppBar />
      <Announcement />
      <main id="main-content">{children}</main>
      <Footer />
      <BottomNav />
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default React.memo(Layout)
