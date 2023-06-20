import React, { useRef, useState } from "react"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  FacebookIcon,
  TwitterIcon,
  EmailIcon,
  LinkedinIcon,
  PinterestIcon,
} from "react-share"
import { Overlay, Tooltip } from "react-bootstrap"

import { useIntl } from "gatsby-plugin-intl"

const Share = () => {
  const { href } = useLocation()
  // Making useIntl available in the code
  const intl = useIntl()
  const data = useStaticQuery(graphql`
    query {
      site: site {
        siteMetadata {
          title
          description
        }
      }
      img: file(relativePath: { eq: "gatsby-icon.png" }) {
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  `)
  const [show1, setShow1] = useState(false)
  const target1 = useRef(null)
  const [show2, setShow2] = useState(false)
  const target2 = useRef(null)
  const [show3, setShow3] = useState(false)
  const target3 = useRef(null)
  const [show4, setShow4] = useState(false)
  const target4 = useRef(null)
  const [show5, setShow5] = useState(false)
  const target5 = useRef(null)
  const Image = data.img.childImageSharp.fluid.src
  return (
    <div className="share text-center">
      {/* <p className="">{intl.formatMessage({ id: "share-us" })}</p> */}
      <FacebookShareButton
        url={href}
        quote={data.site.siteMetadata.description}
        hashtag={data.site.siteMetadata.title}
        ref={target1}
        onMouseEnter={() => setShow1(true)}
        onMouseLeave={() => setShow1(false)}
      >
        <FacebookIcon size={36} round={true} />
      </FacebookShareButton>
      <Overlay target={target1.current} show={show1} placement="top">
        {props => <Tooltip {...props}>Share On Facebook</Tooltip>}
      </Overlay>
      <TwitterShareButton
        url={href}
        title={data.site.siteMetadata.title}
        hashtag={data.site.siteMetadata.title}
        ref={target2}
        onMouseEnter={() => setShow2(true)}
        onMouseLeave={() => setShow2(false)}
      >
        <TwitterIcon size={36} round={true} />
        <Overlay target={target2.current} show={show2} placement="top">
          {props => <Tooltip {...props}>Share On Twitter</Tooltip>}
        </Overlay>
      </TwitterShareButton>
      <EmailShareButton
        url={href}
        title={data.site.siteMetadata.title}
        body="This is the best website for finding doctors in rajshahi. please check this out"
        ref={target3}
        onMouseEnter={() => setShow3(true)}
        onMouseLeave={() => setShow3(false)}
      >
        <EmailIcon size={36} round={true} />
        <Overlay target={target3.current} show={show3} placement="top">
          {props => <Tooltip {...props}>Share By Email</Tooltip>}
        </Overlay>
      </EmailShareButton>
      <LinkedinShareButton
        url={href}
        title={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
        source={href}
        ref={target4}
        onMouseEnter={() => setShow4(true)}
        onMouseLeave={() => setShow4(false)}
      >
        <LinkedinIcon size={36} round={true} />
        <Overlay target={target4.current} show={show4} placement="top">
          {props => <Tooltip {...props}>Share On LinkedIn</Tooltip>}
        </Overlay>
      </LinkedinShareButton>
      <PinterestShareButton
        url={href}
        media={Image}
        description={data.site.siteMetadata.description}
        ref={target5}
        onMouseEnter={() => setShow5(true)}
        onMouseLeave={() => setShow5(false)}
      >
        <PinterestIcon size={36} round={true} />
        <Overlay target={target5.current} show={show5} placement="top">
          {props => <Tooltip {...props}>Share On Pinterest</Tooltip>}
        </Overlay>
      </PinterestShareButton>
    </div>
  )
}

export default Share
