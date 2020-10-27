import React from "react"
import {
  FaCog,
  FaInfoCircle,
  FaGraduationCap,
  FaFacebook,
  FaTwitter,
  FaMailBulk,
} from "react-icons/fa"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => {
  return (
    <Layout>
      <SEO title="About Us" />
      <div className="about">
        <h2>About Us</h2>
        <div className="about-inner">
          <p className="lead">
            RajDoctors is an online platform to ease the pain of finding
            doctors. It is always painful to find out which doctor is perfect,
            where the chamber of his/her. This platform gives you
          </p>
          <hr />
          <h5 className="mt-5 mb-2 text-center">What Will You Get Here</h5>
          <ul className="advantages">
            <li>
              <div>
                <FaCog />
              </div>
              <div>Easy but efficient way to find details of doctors </div>
            </li>
            <li>
              <div>
                <FaInfoCircle />
              </div>
              <div>Doctor's chamber location, contact information</div>
            </li>
            <li>
              <div>
                <FaGraduationCap />
              </div>
              <div>Category of doctors according to their specialty</div>
            </li>
          </ul>
          <hr />
          <div className="find-us">
            <h5 className="mt-2 mb-2 text-right">Find Us in Socials</h5>
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
