import React from "react"
import { FaFire, FaHandHoldingHeart, FaHourglass, FaMedal } from "react-icons/fa"

// "0721-771146/47" -> "0721771146"; "+880 1711-192600" -> "+8801711192600".
// The visible text stays as written in the CSV; only the tel: target is cleaned.
export const telHref = phone => {
  const first = String(phone || "").split(/[/,;]| or /i)[0]
  const digits = first.replace(/[^\d+]/g, "")
  return digits.length >= 5 ? `tel:${digits}` : null
}

// First callable number of the first chamber that has one.
export const primaryPhone = chambers => {
  for (const c of chambers || []) {
    for (const p of c.phones || []) if (telHref(p)) return { phone: p, chamber: c }
  }
  return null
}

export const BADGE_ICONS = {
  Topper: <FaMedal aria-hidden="true" color="#e8710a" />,
  Popular: <FaFire aria-hidden="true" color="#d93025" />,
  Busy: <FaHourglass aria-hidden="true" color="#5f6368" />,
  Trusted: <FaHandHoldingHeart aria-hidden="true" color="#188038" />,
}

export function BadgeChips({ badges, small }) {
  if (!badges || badges.length === 0) return null
  return (
    <ul className={`dp-chips${small ? " dp-chips--sm" : ""}`}>
      {badges.map(b => (
        <li key={b} className="dp-chip dp-chip--outline">
          {BADGE_ICONS[b]}
          <span>{b}</span>
        </li>
      ))}
    </ul>
  )
}

// Static 5-star display (decorative; the number next to it is the real text).
export function Stars({ rating, size = 16 }) {
  const r = Math.max(0, Math.min(5, parseFloat(rating) || 0))
  const id = React.useId ? React.useId() : "s"
  return (
    <span className="dp-stars" aria-hidden="true">
      {[0, 1, 2, 3, 4].map(i => {
        const fill = Math.max(0, Math.min(1, r - i))
        const gid = `${id}-${i}`.replace(/:/g, "")
        return (
          <svg key={i} width={size} height={size} viewBox="0 0 24 24" focusable="false">
            <defs>
              <linearGradient id={gid}>
                <stop offset={`${fill * 100}%`} stopColor="currentColor" />
                <stop offset={`${fill * 100}%`} stopColor="#dadce0" />
              </linearGradient>
            </defs>
            <path
              fill={`url(#${gid})`}
              d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
          </svg>
        )
      })}
    </span>
  )
}
