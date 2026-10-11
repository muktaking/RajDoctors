/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import { DistrictProvider } from "./src/utils/district"

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  )

  if (answer === true) {
    window.location.reload()
  }
}

// Every page created for a district has `district` in its page context
// (gatsby-node.js); expose it to all components via DistrictContext.
export const wrapPageElement = ({ element, props }) => (
  <DistrictProvider district={props.pageContext && props.pageContext.district}>
    {element}
  </DistrictProvider>
)
