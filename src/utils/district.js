/*
 * District helpers. The site serves every enabled district of
 * src/data/districts.json under /<district>/ (see docs/DISTRICTS.md).
 * Pages created per district get `district` (the slug) in their page context;
 * gatsby-browser.js / gatsby-ssr.js put it into DistrictContext so any
 * component can call useDistrict(). Global pages (/, /teledoctor, /about-us,
 * ...) have no district: useDistrict() returns null there and navigation falls
 * back to the default district (useNavDistrict).
 */
import React, { createContext, useContext } from "react"
import data from "../data/districts.json"

export const DISTRICTS = data.districts
export const DIVISIONS = data.divisions
export const ENABLED_DISTRICTS = DISTRICTS.filter(d => d.enabled)
export const DEFAULT_DISTRICT =
  DISTRICTS.find(d => d.slug === data.defaultDistrict) || ENABLED_DISTRICTS[0]
export const getDistrict = slug => DISTRICTS.find(d => d.slug === slug) || null

const DistrictContext = createContext(null)

export const DistrictProvider = ({ district, children }) => (
  <DistrictContext.Provider value={getDistrict(district)}>
    {children}
  </DistrictContext.Provider>
)

/** The page's district object, or null on global pages. */
export const useDistrict = () => useContext(DistrictContext)
/** District to use for links (current one, else the default district). */
export const useNavDistrict = () => useDistrict() || DEFAULT_DISTRICT

/** "/rajshahi" + rest, e.g. districtPath(d, "/doctors/") */
export const districtPath = (district, rest = "/") =>
  `/${(district || DEFAULT_DISTRICT).slug}${rest}`

export const districtName = (intl, district) =>
  district ? (intl.locale === "bn" ? district.bn : district.en) : ""

/*
 * District-specific message. The older per-district keys
 * (e.g. "adl.Rajshahi", "siteMetaData.tagLine.Dhaka") win when they exist, so
 * Rajshahi and Dhaka keep their exact wording; any other district uses the
 * "district.<key>" template with {district} filled in.
 *   base: "siteMetaData.tagLine" | "adl" | "seo.doctors.des" | "arcib"
 */
const TEMPLATE = {
  "siteMetaData.tagLine": "district.tagLine",
  adl: "district.adl",
  "seo.doctors.des": "district.seoDoctorsDes",
  arcib: "district.arcib",
}
export function districtMessage(intl, base, district) {
  if (!district) {
    const id = `${base}.Bangladesh`
    return intl.messages[id]
      ? intl.formatMessage({ id })
      : intl.formatMessage({ id: TEMPLATE[base] }, { district: intl.formatMessage({ id: "district.country" }) })
  }
  const legacy = `${base}.${district.en}`
  if (intl.messages[legacy]) return intl.formatMessage({ id: legacy })
  return intl.formatMessage({ id: TEMPLATE[base] }, { district: districtName(intl, district) })
}
