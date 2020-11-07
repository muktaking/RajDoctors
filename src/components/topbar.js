import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { useLocation } from "@reach/router"
import { FaBars, FaInfoCircle, FaHome, FaMobileAlt } from "react-icons/fa"
import { Dropdown, Nav, NavItem, NavLink } from "react-bootstrap"
import SearchWrapper from "./search/searchWrapper"

import { useIntl } from "gatsby-plugin-intl"

export const query = graphql`
  query {
    file(relativePath: { eq: "gatsby-icon.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 55, height: 55) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const Topbar = ({ handleToggleSidebar }) => {
  // Making useIntl available in the code
  const intl = useIntl()
  // Use language iso for the routes
  const locale = intl.locale !== "en" ? `/${intl.locale}` : ""

  const data = useStaticQuery(query)
  const { pathname } = useLocation()
  return (
    <>
      <div
        className="btn-toggle"
        onClick={() => handleToggleSidebar(true)}
        aria-hidden="true"
      >
        <FaBars size={28} />
      </div>
      <div className="topbar">
        {/* 1.leftbar */}
        <div className="branding my-auto pt-1 pb-2">
          <Link to="/">
            <div className="site-logo d-flex align-items-center">
              <Img fixed={data.file.childImageSharp.fixed} />
            </div>
          </Link>
          <h5 className="text-white pl-2">
            {intl.formatMessage({ id: "siteMetaData.tagLine" })}
          </h5>
        </div>
        <SearchWrapper />
        {/* 2.navbar */}
        <div className="topbar-nav pt-1">
          <Nav
            className="justify-content-center"
            defaultActiveKey="/home"
            as="ul"
          >
            <Nav.Item as="li">
              <Link className="nav-link" to={`${locale}/`}>
                <div>
                  <FaHome />
                </div>
                <span className={pathname === `${locale}/` ? "active" : ""}>
                  {intl.formatMessage({ id: "home" })}
                </span>
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link className="nav-link" to={`${locale}/about-us`}>
                <div>
                  <FaInfoCircle />
                </div>
                <span
                  className={pathname === `${locale}/about-us` ? "active" : ""}
                >
                  {intl.formatMessage({ id: "about-us" })}
                </span>
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link className="nav-link" to={`${locale}/contact-us`}>
                <div>
                  <FaMobileAlt />
                </div>
                <span
                  className={
                    pathname === `${locale}/contact-us` ? "active" : ""
                  }
                >
                  {intl.formatMessage({ id: "contact-us" })}
                </span>
              </Link>
            </Nav.Item>
          </Nav>
        </div>
      </div>
      <div>
        <Dropdown as={NavItem} className="ml-auto" style={{ width: "10rem" }}>
          <Dropdown.Toggle as={NavLink} className="nav-link">
            {intl.locale === "en" ? "বাংলাতে দেখুন" : "Change to English"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {intl.locale !== "en" && (
              <Dropdown.Item>
                <Link className="nav-link" to={`/`}>
                  <span className="bg-light text-dark">English</span>
                </Link>
              </Dropdown.Item>
            )}
            {intl.locale === "en" && (
              <Dropdown.Item>
                <Link className="nav-link" to={`/bn`}>
                  <span className="bg-light text-dark">বাংলা</span>
                </Link>
              </Dropdown.Item>
            )}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  )
}

export default Topbar
