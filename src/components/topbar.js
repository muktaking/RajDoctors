import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { useLocation } from "@reach/router"
import { FaBars, FaInfoCircle, FaHome, FaMobileAlt } from "react-icons/fa"
import { Nav } from "react-bootstrap"
import SearchWrapper from "./searchWrapper"

//import logo from "../images/logo.svg"

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
              {/* <img src={logo} width="55px" height="55" alt="logo" /> */}
              <Img fixed={data.file.childImageSharp.fixed} />
            </div>
          </Link>
          <h5 className="text-white pl-2">Online Hub of Doctors in Rajshahi</h5>
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
              <Link className="nav-link" to="/">
                <div>
                  <FaHome />
                </div>
                <span className={pathname === "/" ? "active" : ""}>Home</span>
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link className="nav-link" to="/about-us">
                <div>
                  <FaInfoCircle />
                </div>
                <span className={pathname === "/about-us" ? "active" : ""}>
                  About Us
                </span>
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link className="nav-link" to="/contact-us">
                <div>
                  <FaMobileAlt />
                </div>
                <span className={pathname === "/contact-us" ? "active" : ""}>
                  Contact Us
                </span>
              </Link>
            </Nav.Item>
          </Nav>
        </div>
      </div>
    </>
  )
}

export default Topbar
