import { Link, useIntl } from "gatsby-plugin-intl"
import React from "react"
import { FaDribbble, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa"

const Footer = () => {
  // Making useIntl available in the code
  const intl = useIntl()
  // Use language iso for the routes
  //const locale = intl.locale !== "en" ? `/${intl.locale}` : ""
  return (
    // <!-- Site footer -->
    <footer className="site-footer">
      <div className="container">
      <div className="mb-3">
          <h6 className="text-center">Doctor Lists By District</h6>
          <ul className="footer-links d-flex flex-wrap justify-content-center">
            <li className="btn-primary p-1 m-1">
              <a className="text-white" href="https://dhaka.rajdoctors.com/">Dhaka</a>
            </li>
            <li className="btn-primary p-1 m-1">
              <a className="text-white" href="https://rajdoctors.com">Rajshahi</a>
            </li>
            <li className="btn-primary p-1 m-1">
              <a className="text-white" href="https://chittagong.rajdoctors.com">Chittagong</a>
            </li>
            <li className="btn-primary p-1 m-1">
              <a className="text-white" href="https://sylhet.rajdoctors.com">Sylhet</a>
            </li>
            <li className="btn-primary p-1 m-1">
              <a className="text-white" href="https://rangpur.rajdoctors.com">Rangpur</a>
            </li>
            <li className="btn-primary p-1 m-1">
              <a className="text-white" href="https://khulna.rajdoctors.com">Khulna</a>
            </li>
            <li className="btn-primary p-1 m-1">
              <a className="text-white" href="https://barisal.rajdoctors.com">Barisal</a>
            </li>
            <li className="btn-primary p-1 m-1">
              <a className="text-white" href="https://mymensingh.rajdoctors.com">Mymensingh</a>
            </li>
            <li className="btn-primary p-1 m-1">
              <a className="text-white" href="https://pabna.rajdoctors.com">Pabna</a>
            </li>
            <li className="btn-primary p-1 m-1">
              <a className="text-white" href="https://bogra.rajdoctors.com">Bogra</a>
            </li>
            <li className="btn-primary p-1 m-1">
              <a className="text-white" href="https://comilla.rajdoctors.com">Comilla</a>
            </li>
            <li className="btn-primary p-1 m-1">
              <a className="text-white" href="https://narayanganj.rajdoctors.com">Narayanganj</a>
            </li>
            <li className="btn-primary p-1 m-1">
              <a className="text-white" href="https://kushtia.rajdoctors.com">Kushtia</a>
            </li>
          </ul>
        </div>
        <hr/>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>{intl.formatMessage({ id: "about-us" })}</h6>
            <p className="text-justify">
              {intl.formatMessage({ id: "aboutText" })}
            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>{intl.formatMessage({ id: "ts" })}</h6>
            <ul className="footer-links">
              <li>
                <Link to={`/speciality/medicine`}>
                  {intl.formatMessage({ id: "Medicine" })}
                </Link>
              </li>
              <li>
                <Link to={`/speciality/surgery`}>
                  {intl.formatMessage({ id: "Surgery" })}
                </Link>
              </li>
              <li>
                <Link to={`/speciality/gynaecology`}>
                  {intl.formatMessage({ id: "Gynaecology" })}
                </Link>
              </li>
              <li>
                <Link to={`/speciality/paediatrics`}>
                  {intl.formatMessage({ id: "Paediatrics" })}
                </Link>
              </li>
              <li>
                <Link to={`/speciality/dental%20surgery`}>
                  {intl.formatMessage({ id: "Dental Surgery" })}
                </Link>
              </li>
              <li>
                <Link to={`/speciality/orthopaedics`}>
                  {intl.formatMessage({ id: "Orthopaedics" })}
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>{intl.formatMessage({ id: "qLinks" })}</h6>
            <ul className="footer-links">
              <li>
                <Link to={`/about-us`}>
                  {intl.formatMessage({ id: "about-us" })}
                </Link>
              </li>
              <li>
                <Link to={`/contact-us`}>
                  {intl.formatMessage({ id: "contact-us" })}
                </Link>
              </li>
              <li>
                <Link to={`/privacy-policy`}>
                  {intl.formatMessage({ id: "pp" })}
                </Link>
              </li>
              <li>
                <Link to="/sitemap.xml">Sitemap</Link>
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
                <a
                  className="facebook"
                  href="https://www.facebook.com/rajdoctors"
                  target="_blank"
                >
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
