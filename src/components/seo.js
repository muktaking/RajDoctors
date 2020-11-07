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

const query = graphql`
  query {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        author
        siteUrl: url
      }
    }
  }
`

function SEO({ description, lang, meta, title }) {
  const intl = useIntl()
  const location = useLocation()
  const { site } = useStaticQuery(query)
  const { defaultTitle, defaultDescription, siteUrl } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${location.pathname}`,
    lang: intl.locale,
  }

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: seo.lang,
        }}
        title={seo.title}
        titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
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
      />
      <Helmet>
        <link rel="alternate" href={seo.url} hrefLang={intl.locale} />
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
