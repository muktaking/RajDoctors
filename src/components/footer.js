import React from "react"
import { Link } from "gatsby"
import { FaDribbble, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    // <!-- Site footer -->
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">
              RajDoctors is an online platform to ease the pain of finding
              doctors. It is always painful to find out which doctor is perfect,
              where the chamber of his/her. This platform gives you - Easy but
              efficient way to find doctors - Doctor's chamber location, contact
              information - Category of doctors according to their specialty
              Have a Good day ! and Get well Soon!!!
            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Top Speciality</h6>
            <ul className="footer-links">
              <li>
                <Link to="/speciality/medicine">Medicine</Link>
              </li>
              <li>
                <Link to="/speciality/surgery">Surgery</Link>
              </li>
              <li>
                <Link to="/speciality/gynaecology">Gynaecology</Link>
              </li>
              <li>
                <Link to="/speciality/paediatrics">Paediatrics</Link>
              </li>
              <li>
                <Link to="/speciality/dental%20surgery">Dental Surgery</Link>
              </li>
              <li>
                <Link to="/speciality/orthopaedics">Orthopadics</Link>
              </li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/sitemap">Sitemap</Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2021 All Rights Reserved by
              <a href="/"> RajDoctors</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a className="facebook" href="#">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a className="twitter" href="#">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a className="dribbble" href="#">
                  <FaDribbble />
                </a>
              </li>
              <li>
                <a className="linkedin" href="#">
                  <FaLinkedin />
                  {/* <i className="fa fa-linkedin"></i> */}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
