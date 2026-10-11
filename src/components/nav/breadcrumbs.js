import { Link, useIntl } from "gatsby-plugin-intl"
import React from "react"
import { Helmet } from "react-helmet"
import { MdChevronRight } from "react-icons/md"

const SITE = "https://rajdoctors.com"

/**
 * Breadcrumb trail + BreadcrumbList JSON-LD (in its own <script>, the page's
 * existing schema is untouched). items: [{ label, to }] — `to` is the
 * unlocalised path; the last item is the current page.
 */
export default function Breadcrumbs({ items }) {
  const intl = useIntl()
  const prefix = intl.locale !== "en" ? `/${intl.locale}` : ""
  const list = items.filter(i => i && i.label)
  const json = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: list.map((i, n) => ({
      "@type": "ListItem",
      position: n + 1,
      name: i.label,
      item: SITE + prefix + i.to,
    })),
  }
  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(json)}</script>
      </Helmet>
      <nav className="crumbs" aria-label={intl.formatMessage({ id: "nav.breadcrumb" })}>
        <ol>
          {list.map((i, n) => {
            const last = n === list.length - 1
            return (
              <li key={n}>
                {last ? (
                  <span aria-current="page">{i.label}</span>
                ) : (
                  <>
                    <Link to={i.to}>{i.label}</Link>
                    <MdChevronRight aria-hidden="true" className="crumbs__sep" />
                  </>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
