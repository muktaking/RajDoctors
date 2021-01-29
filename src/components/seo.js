/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { useLocation } from "@reach/router"
import { graphql, useStaticQuery } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"
import PropTypes from "prop-types"
import React from "react"
import { Helmet } from "react-helmet"

const query = graphql`
  query {
    site: site {
      siteMetadata {
        author
        url
      }
    }
    file: file(relativePath: { eq: "gatsby-icon.png" }) {
      publicURL
    }
  }
`

function SEO({ description, useDefault, meta, title, ogImg, schema }) {
  const intl = useIntl()
  const location = useLocation()
  const { site, file } = useStaticQuery(query)
  const url =
    location.pathname === "/"
      ? site.siteMetadata.url
      : site.siteMetadata.url + location.pathname
  const lang = intl.locale
  const seo = {
    title: title || intl.formatMessage({ id: "siteMetaData.title" }),
    description:
      description || intl.formatMessage({ id: "siteMetaData.description" }),
    //url: `${siteUrl}${location.pathname}`,
    ogImg: ogImg || site.siteMetadata.url + file.publicURL,
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
            content: seo.ogImg,
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
            content: seo.title,
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
        <link rel="canonical" href={url} />
        <meta http-equiv="content-language" content={intl.locale} />
        <script type="application/ld+json">{schema}</script>
      </Helmet>
    </>
  )
}

SEO.defaultProps = {
  title: null,
  lang: `en`,
  meta: [],
  description: ``,
  useDefault: true,
  schema: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
