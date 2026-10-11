import React from "react"
import { withPrefix } from "gatsby"
import Search from "./search"
import { ENABLED_DISTRICTS, useDistrict } from "../../utils/district"
import { useLinkDistrict } from "../../utils/nav-state"

// The search indexes are static files written by gatsby-node.js
// (public/search/<district>.json); they are fetched the first time the search
// box is used instead of shipping with every page.
const indexCache = {}
export const loadIndex = slug => {
  if (!indexCache[slug]) {
    indexCache[slug] = fetch(withPrefix(`/search/${slug}.json`)).then(r => {
      if (!r.ok) throw new Error(`search index ${slug}: ${r.status}`)
      return r.json()
    })
    indexCache[slug].catch(() => delete indexCache[slug])
  }
  return indexCache[slug]
}

const SearchWrapper = ({ autoFocus, overlay }) => {
  const district = useDistrict() // null on global pages -> search all districts
  const linkDistrict = useLinkDistrict(district) // for speciality suggestions
  return (
    <Search
      district={district}
      linkDistrict={linkDistrict}
      districts={ENABLED_DISTRICTS}
      loadIndex={loadIndex}
      autoFocus={autoFocus}
      overlay={overlay}
    />
  )
}

export default SearchWrapper
