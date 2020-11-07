import React from "react"
import {
  FaCog,
  FaInfoCircle,
  FaGraduationCap,
  FaFacebook,
  FaTwitter,
  FaMailBulk,
} from "react-icons/fa"

import { useIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => {
  // Making useIntl available in the code
  const intl = useIntl()
  // Use language iso for the routes
  const locale = intl.locale !== "en" ? `/${intl.locale}` : ""

  return (
    <Layout>
      <SEO title="About Us" />
      <div className="about">
        <h2>{intl.formatMessage({ id: "about-us" })}</h2>
        <div className="about-inner">
          <p className="lead">{intl.formatMessage({ id: "aboutText" })}</p>
          <hr />
          <h5 className="mt-5 mb-2 text-center">
            {intl.formatMessage({ id: "advantages.tagLine" })}
          </h5>
          <ul className="advantages">
            <li>
              <div>
                <FaCog />
              </div>
              <div>{intl.formatMessage({ id: "advantages.1" })} </div>
            </li>
            <li>
              <div>
                <FaInfoCircle />
              </div>
              <div>{intl.formatMessage({ id: "advantages.2" })}</div>
            </li>
            <li>
              <div>
                <FaGraduationCap />
              </div>
              <div>{intl.formatMessage({ id: "advantages.3" })}</div>
            </li>
          </ul>
          <hr />
          <div className="find-us">
            <h5 className="mt-2 mb-2 text-right">
              {intl.formatMessage({ id: "advantages.socials" })}
            </h5>
            <ul>
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaMailBulk />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
