/*
 * Small client-side state for the navigation, kept in localStorage:
 *  - the last district the visitor looked at (global pages link to it)
 *  - the 5 most recently viewed doctors (shown in the empty search box)
 * Everything renders the server value first (null / []) and updates after
 * hydration, so static HTML and the first client render always match.
 */
import { useEffect, useState } from "react"
import { getDistrict } from "./district"

const KEY_DISTRICT = "rd.district"
const KEY_RECENT = "rd.recentDoctors"
const MAX_RECENT = 5

const read = (key, fallback) => {
  try {
    const v = window.localStorage.getItem(key)
    return v ? JSON.parse(v) : fallback
  } catch (e) {
    return fallback
  }
}
const write = (key, value) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    /* private mode / storage full: navigation still works without it */
  }
}

/** Remember the district of the current page (call on district pages). */
export const rememberDistrict = district => {
  if (district && district.enabled) write(KEY_DISTRICT, district.slug)
}

/**
 * District used for navigation links: the page's district, else the last
 * chosen one (after hydration), else null (links then go to the picker "/").
 */
export function useLinkDistrict(pageDistrict) {
  const [stored, setStored] = useState(null)
  useEffect(() => {
    if (pageDistrict) {
      rememberDistrict(pageDistrict)
      return
    }
    const d = getDistrict(read(KEY_DISTRICT, null))
    setStored(d && d.enabled ? d : null)
  }, [pageDistrict])
  return pageDistrict || stored
}

/** Add a doctor to "recently viewed" (most recent first, unique by path). */
export const rememberDoctor = doctor => {
  if (!doctor || !doctor.path) return
  const list = read(KEY_RECENT, []).filter(d => d && d.path !== doctor.path)
  list.unshift(doctor)
  write(KEY_RECENT, list.slice(0, MAX_RECENT))
}

export const readRecentDoctors = () => {
  if (typeof window === "undefined") return []
  const list = read(KEY_RECENT, [])
  return Array.isArray(list) ? list.slice(0, MAX_RECENT) : []
}
