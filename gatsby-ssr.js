import React from "react"
import { DistrictProvider } from "./src/utils/district"
/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it

// Every page created for a district has `district` in its page context
// (gatsby-node.js); expose it to all components via DistrictContext.
export const wrapPageElement = ({ element, props }) => (
  <DistrictProvider district={props.pageContext && props.pageContext.district}>
    {element}
  </DistrictProvider>
)
