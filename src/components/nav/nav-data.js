import { graphql, useStaticQuery } from "gatsby"
import { IntlContextConsumer, useIntl } from "gatsby-plugin-intl"
import React from "react"
import { menu } from "../../utils/meta.data"
import { useDistrict } from "../../utils/district"
import { useLinkDistrict } from "../../utils/nav-state"

// Specialities with at least one doctor, per district (tiny static query).
export function useSpecialtyCounts() {
  const data = useStaticQuery(graphql`
    query NavSpecialtyCounts {
      allDoctor {
        group(field: { district: SELECT }) {
          fieldValue
          group(field: { specialty: SELECT }) {
            fieldValue
            totalCount
          }
        }
      }
    }
  `)
  const out = {}
  data.allDoctor.group.forEach(d => {
    out[d.fieldValue] = Object.fromEntries(d.group.map(s => [s.fieldValue, s.totalCount]))
  })
  return out
}

/**
 * Speciality groups as in the old sidebar (meta.data.js `menu`), limited to
 * specialities the district has doctors for. Without a district: all of them.
 */
export function useSpecialtyGroups(district) {
  const counts = useSpecialtyCounts()
  const has = s => !district || (counts[district.slug] && counts[district.slug][s] > 0)
  const groups = []
  const singles = []
  Object.entries(menu).forEach(([group, items]) => {
    if (typeof items === "string") {
      if (has(items)) singles.push(items)
    } else {
      const list = items.filter(has)
      if (list.length) groups.push({ group, items: list })
    }
  })
  if (singles.length) groups.push({ group: null, items: singles })
  return groups
}

/** Shared nav values: page district, link district (incl. remembered), base path. */
export function useNav() {
  const intl = useIntl()
  const district = useDistrict()
  const linkDistrict = useLinkDistrict(district)
  // "/rajshahi" or "" (no district known yet: district links go to the picker)
  const base = linkDistrict ? `/${linkDistrict.slug}` : ""
  const to = rest => (linkDistrict ? `${base}${rest}` : "/")
  const t = (id, values) => intl.formatMessage({ id }, values)
  return { intl, district, linkDistrict, to, t }
}

/** Other-language URL of the current page (same page, other locale). */
export function LanguageLink({ className, children }) {
  return (
    <IntlContextConsumer>
      {({ language, originalPath }) => {
        const other = language === "bn" ? "en" : "bn"
        const href = other === "en" ? originalPath : `/bn${originalPath}`
        return children({ href, other })
      }}
    </IntlContextConsumer>
  )
}
