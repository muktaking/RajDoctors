/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useLocation } from "@reach/router"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"
import defaultOgImg from "../images/gatsby-icon.png"

const query = graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }
`

function SEO({ description, useDefault = true, meta, title, ogImg }) {
  const intl = useIntl()
  const location = useLocation()
  const { site } = useStaticQuery(query)
  const url = location.href
  const lang = intl.locale
  const ogImage = ogImg || defaultOgImg

  const seo = {
    title: title || intl.formatMessage({ id: "siteMetaData.title" }),
    description:
      description || intl.formatMessage({ id: "siteMetaData.description" }),
    //url: `${siteUrl}${location.pathname}`,
  }
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={seo.title}
        titleTemplate={
          useDefault
            ? `%s | ${intl.formatMessage({ id: "siteMetaData.tagLine" })}`
            : null
        }
        meta={[
          {
            name: `description`,
            content: seo.description,
          },
          {
            property: `og:title`,
            content: seo.title,
          },
          {
            property: `og:description`,
            content: seo.description,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            property: `og:url`,
            content: url,
          },
          {
            property: `og:image`,
            content: ogImage,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: site.siteMetadata?.author || ``,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: seo.description,
          },
        ].concat(meta)}
        // link={[{ rel: `icon`, href: `/favicon.png` }]}
      />
      <Helmet>
        <link rel="alternate" href={url} hrefLang={intl.locale} />
        <meta http-equiv="content-language" content={intl.locale} />
      </Helmet>
    </>
  )
}

SEO.defaultProps = {
  title: null,
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
