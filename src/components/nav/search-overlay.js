import { useIntl } from "gatsby-plugin-intl"
import React from "react"
import SearchWrapper from "../search/searchWrapper"
import Sheet from "./sheet"

// Full-screen search on phones; the search field gets focus when it opens.
export default function SearchOverlay({ onClose, returnRef }) {
  const intl = useIntl()
  return (
    <Sheet title={intl.formatMessage({ id: "search" })} onClose={onClose} returnRef={returnRef} className="nav-sheet-scrim--full">
      <SearchWrapper autoFocus overlay />
    </Sheet>
  )
}
