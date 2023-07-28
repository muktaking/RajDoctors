import { useLocation } from "@reach/router"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { useIntl } from "gatsby-plugin-intl"
import React from "react"
import { TypeAnimation } from 'react-type-animation';
import { Button, Dropdown, Nav, NavItem, NavLink } from "react-bootstrap"
import { FaBars, FaHome, FaInfoCircle, FaMobileAlt } from "react-icons/fa"
import SearchWrapper from "./search/searchWrapper"
import Ad from "./ad"

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
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'এখন রাজ ডক্টরে টেলিমেডিসিন সার্ভিস যুক্ত হয়েছে',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            'বিস্তারিত জানতে নিম্নের লিংকটিতে ক্লিক করুন',
            1000
            
          ]}
          wrapper="span"
          speed={150}
          style={{ fontSize: '.8rem', display: 'inline-block' }}
          repeat={Infinity}
        />
        <br />
        <Link to="/teledoctor#raj-telemed-heading">টেলিমেডিসিন</Link>
      </div>
      <div className="d-flex flex-wrap justify-content-around align-items-center mt-2 mb-3">
        <div className="p-1 mb-2 text-center text-white bg-warning">
          বিজ্ঞাপনের জন্য ফোন করুনঃ 01641622541 / 01521500642 অথবা মেইল করুনঃ
          contact@rajdoctors.com
        </div>
        <div className="d-flex justify-content-center">
          <Button
            as="a"
            href= {process.env.GATSBY_GOOGLE_ADD_DOCTOR}
            target="_blank"
            variant="outline-primary"
            size="sm"
            className="mr-2 mb-xs-2"
          >
            Add a New Doctor
          </Button>
          <Button
            as="a"
            href={process.env.GATSBY_ADD_TELEMEDICINE_DOCTOR}
            target="_blank"
            variant="outline-primary"
            size="sm"
          >
            Add a New Telemedicine Doctor
          </Button>
          {/* <Button as='a' href='https://forms.gle/kW2NFG9X34suvKXN6' target='_blank' variant='outline-info mb-2'>Ask For an Appointment</Button> */}
        </div>
        { process.env.GATSBY_DISTRICT === 'Rajshahi' && <Dropdown as={NavItem} style={{ width: "10rem" }}>
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
                <Link className="nav-link" to={`/bn/`}>
                  <span className="bg-light text-dark">বাংলা</span>
                </Link>
              </Dropdown.Item>
            )}
          </Dropdown.Menu>
        </Dropdown> }
      </div>
      <div className="px-1">
        {(pathname !== `${locale}/about-us` &&  pathname !== `${locale}/contact-us`) && <Ad isHorizontal={true} />}
      </div>
    </>
  )
}

export default Topbar
