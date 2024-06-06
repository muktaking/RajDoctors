import { useLocation } from "@reach/router"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { useIntl } from "gatsby-plugin-intl"
import React from "react"
import { TypeAnimation } from 'react-type-animation';
import { Button, Dropdown, DropdownButton, NavItem, NavLink } from "react-bootstrap"
import { FaBars } from "react-icons/fa"
import SearchWrapper from "./search/searchWrapper"

export const query = graphql`
  query {
    file(relativePath: { eq: "gatsby-icon.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 35, height: 35) {
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
      <div className="topbar py-1">
        {/* 1.leftbar */}
        <div className="branding my-auto pt-1 pb-2">
          <Link to="/">
            <div className="site-logo d-flex align-items-center">
              <Img fixed={data.file.childImageSharp.fixed} />
            </div>
          </Link>
          <h6 className="text-white pl-2">
            {intl.formatMessage({ id: `siteMetaData.tagLine.${process.env.GATSBY_DISTRICT}` })}
          </h6>
        </div>
        <SearchWrapper />
      </div>
      
      <div className="text-center">
        <div className="text-center text-white bg-danger" style={{position: 'fixed', bottom: 0, zIndex: 10, width: '100%' }}>
          <div className="py-1">
            <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'এখন রাজ ডক্টরে টেলিমেডিসিন সার্ভিস যুক্ত হয়েছে',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'বিস্তারিত জানতে টেলিমেডিসিন লিংকটিতে ক্লিক করুন',
              1000,
              'বিজ্ঞাপনের জন্য ফোন করুনঃ 01641622541',
              1500
            ]}
            wrapper="span"
            speed={150}
            style={{ fontSize: '.8rem', display: 'inline-block'}}
            repeat={Infinity}
            />
          </div>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-center align-items-center mt-2">
        <Link to="/teledoctor#raj-telemed-heading" className="btn btn-dark btn-md mb-1 mr-1" style={{fontWeight: '900', fontSize: '.7rem'}}>টেলিমেডিসিন সেবা</Link>
        <DropdownButton  title="Doctor Registration" variant="dark" size='sm' className="mb-1 mr-1">
          <Dropdown.Item href= {process.env.GATSBY_GOOGLE_ADD_DOCTOR}> Register A New Doctor</Dropdown.Item>
          <Dropdown.Item href={process.env.GATSBY_ADD_TELEMEDICINE_DOCTOR}> Register A New Doctor For Telemedicine</Dropdown.Item>
        </DropdownButton>
        { process.env.GATSBY_DISTRICT === 'Rajshahi' && <DropdownButton  title={intl.locale === "en" ? "বাংলাতে দেখুন" : "Change to English"} variant="dark" size='sm' className="mb-1">
        {intl.locale !== "en" && (
              <Dropdown.Item>
                <Link className="nav-link" to={`/`}>
                  <span className="bg-light text-dark">English</span>
                </Link>
              </Dropdown.Item>
            )}
          {intl.locale === "en" && (
              <Dropdown.Item>
                <Link className="nav-link" to={`/bn/`}>
                  <span className="bg-light text-dark">বাংলা</span>
                </Link>
              </Dropdown.Item>
            )}
        </DropdownButton>}
      </div>
      {/* <div className="px-1">
        {(pathname !== `${locale}/about-us` &&  pathname !== `${locale}/contact-us`) && <Ad isHorizontal={true} />}
      </div> */}
    </>
  )
}

export default Topbar
