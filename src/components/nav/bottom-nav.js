import { Link } from "gatsby-plugin-intl"
import React from "react"
import { MdApps, MdHome, MdLocalHospital, MdPeople } from "react-icons/md"
import { usePagePath } from "./app-bar"
import { useNav } from "./nav-data"

// Material 3 navigation bar (phones only, see nav.scss).
export default function BottomNav() {
  const { linkDistrict, to, t } = useNav()
  const path = usePagePath()
  const d = linkDistrict ? `/${linkDistrict.slug}` : null
  const items = [
    { key: "home", icon: <MdHome />, label: t("home"), to: to("/"), on: d ? path === `${d}/` : path === "/" },
    { key: "doctors", icon: <MdPeople />, label: t("nav.doctors"), to: to("/doctors/"), on: !!d && path.startsWith(`${d}/doctors/`) },
    { key: "spec", icon: <MdApps />, label: t("nav.specialties"), to: to("/speciality/"), on: !!d && path.startsWith(`${d}/speciality/`) },
    { key: "emergency", icon: <MdLocalHospital />, label: t("nav.emergency"), to: to("/emergency/"), on: !!d && path.startsWith(`${d}/emergency/`), danger: true },
  ]
  return (
    <nav className="nav-bottom nav-mobile" aria-label={t("nav.main")}>
      {items.map(i => (
        <Link
          key={i.key}
          to={i.to}
          className={`nav-bottom__item${i.on ? " is-active" : ""}${i.danger ? " nav-bottom__item--danger" : ""}`}
          aria-current={i.on ? "page" : undefined}
        >
          <span className="nav-bottom__icon" aria-hidden="true">{i.icon}</span>
          <span className="nav-bottom__label">{i.label}</span>
        </Link>
      ))}
    </nav>
  )
}
