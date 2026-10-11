import { useLocation } from "@reach/router"
import { graphql, Link as PlainLink, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby-plugin-intl"
import React, { useRef, useState } from "react"
import {
  MdApps,
  MdPersonAdd,
  MdLocalHospital,
  MdLocationOn,
  MdMoreVert,
  MdPeople,
  MdSearch,
  MdTranslate,
  MdVideoCall,
} from "react-icons/md"
import { DIVISIONS, ENABLED_DISTRICTS, districtMessage, districtName } from "../../utils/district"
import SearchWrapper from "../search/searchWrapper"
import MoreSheet from "./more-sheet"
import Popover from "./popover"
import SearchOverlay from "./search-overlay"
import { LanguageLink, useNav, useSpecialtyGroups } from "./nav-data"

export const REGISTER_LINKS = [
  { href: process.env.GATSBY_GOOGLE_ADD_DOCTOR, label: "Register A New Doctor" },
  { href: process.env.GATSBY_ADD_TELEMEDICINE_DOCTOR, label: "Register A New Doctor For Telemedicine" },
]

// path without the /bn or /en prefix, always with a trailing slash
export const usePagePath = () => {
  const { pathname } = useLocation()
  const p = pathname.replace(/^\/(bn|en)(?=\/|$)/, "") || "/"
  return p.endsWith("/") ? p : p + "/"
}

export function DistrictMenu({ nav }) {
  const { district, t, intl } = nav
  const label = district ? districtName(intl, district) : t("nav.chooseDistrict")
  return (
    <Popover
      label={label}
      icon={<MdLocationOn aria-hidden="true" />}
      className="nav-chip"
      ariaLabel={`${t("nav.district")}: ${label}`}
      panelClassName="nav-districts"
    >
      <p className="nav-panel__title">{t("nav.chooseDistrict")}</p>
      {DIVISIONS.map(div => {
        const list = ENABLED_DISTRICTS.filter(d => d.division === div.slug)
        if (!list.length) return null
        return (
          <div key={div.slug} className="nav-districts__group">
            <p className="nav-panel__overline">
              {intl.formatMessage({ id: "district.division" }, { division: intl.locale === "bn" ? div.bn : div.en })}
            </p>
            <ul>
              {list.map(d => (
                <li key={d.slug}>
                  <Link
                    to={`/${d.slug}/`}
                    className="nav-item"
                    aria-current={district && district.slug === d.slug ? "true" : undefined}
                  >
                    {districtName(intl, d)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )
      })}
      <Link to="/" className="nav-item nav-item--all">
        {intl.formatMessage({ id: "district.allDistricts" })}
      </Link>
    </Popover>
  )
}

function SpecialtyMenu({ nav, active }) {
  const { linkDistrict, to, t, intl } = nav
  const groups = useSpecialtyGroups(linkDistrict)
  return (
    <Popover
      label={t("nav.specialties")}
      icon={<MdApps aria-hidden="true" />}
      className={`nav-link${active ? " is-active" : ""}`}
      panelClassName="nav-mega"
      wrapClass="nav-pop--static"
      align="end"
    >
      <div className="nav-mega__grid">
        {groups.map(({ group, items }) => (
          <div key={group || "other"} className="nav-mega__col">
            <p className="nav-panel__overline">{group ? intl.formatMessage({ id: group }) : t("nav.more")}</p>
            <ul>
              {items.map(s => (
                <li key={s}>
                  <Link to={to(`/speciality/${s.toLowerCase()}/`)} className="nav-item">
                    {intl.formatMessage({ id: s })}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Link to={to("/speciality/")} className="nav-item nav-item--all">
        {t("nav.allSpecialties")}
      </Link>
    </Popover>
  )
}

export function RegisterMenu({ nav }) {
  return (
    <Popover
      label={nav.t("nav.register")}
      icon={<MdPersonAdd aria-hidden="true" />}
      className="nav-primary"
      align="end"
    >
      <ul>
        {REGISTER_LINKS.map(l => (
          <li key={l.label}>
            <a href={l.href} className="nav-item">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </Popover>
  )
}

export const showLanguage = district => !district || district.hasBangla

export default function AppBar() {
  const nav = useNav()
  const { district, linkDistrict, to, t, intl } = nav
  const path = usePagePath()
  const [searchOpen, setSearchOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const searchBtn = useRef(null)
  const moreBtn = useRef(null)
  const data = useStaticQuery(graphql`
    query NavLogo {
      file(relativePath: { eq: "gatsby-icon.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 36, height: 36, placeholder: BLURRED)
        }
      }
    }
  `)
  const d = linkDistrict ? `/${linkDistrict.slug}` : null
  const is = rest => !!d && path.startsWith(`${d}${rest}`)
  const cur = on => (on ? "page" : undefined)
  return (
    <>
      <header className="nav-bar">
        <div className="nav-bar__inner">
          <Link to={to("/")} className="nav-logo" aria-label={districtMessage(intl, "siteMetaData.tagLine", district)}>
            <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="" />
            <span className="nav-logo__text">RajDoctors</span>
          </Link>
          <DistrictMenu nav={nav} />

          <div className="nav-search nav-desktop">
            <SearchWrapper />
          </div>

          <nav className="nav-links nav-desktop" aria-label={t("nav.main")}>
            <Link to={to("/doctors/")} className={`nav-link${is("/doctors/") ? " is-active" : ""}`} aria-current={cur(is("/doctors/"))}>
              <MdPeople aria-hidden="true" />
              <span>{t("nav.doctors")}</span>
            </Link>
            <SpecialtyMenu nav={nav} active={is("/speciality/")} />
            <Link
              to="/teledoctor/"
              className={`nav-link nav-link--compact${path.startsWith("/teledoctor/") ? " is-active" : ""}`}
              title={t("nav.telemedicine")}
              aria-current={cur(path.startsWith("/teledoctor/"))}
            >
              <MdVideoCall aria-hidden="true" />
              <span>{t("nav.telemedicine")}</span>
            </Link>
            <Link
              to={to("/emergency/")}
              className={`nav-link nav-link--compact nav-link--emergency${is("/emergency/") ? " is-active" : ""}`}
              title={t("nav.emergency")}
              aria-current={cur(is("/emergency/"))}
            >
              <MdLocalHospital aria-hidden="true" />
              <span>{t("nav.emergency")}</span>
            </Link>
            {showLanguage(district) && (
              <LanguageLink>
                {({ href, other }) => (
                  <PlainLink to={href} className="nav-link nav-link--compact nav-lang" hrefLang={other} lang={other} title={other === "bn" ? "বাংলা" : "English"}>
                    <MdTranslate aria-hidden="true" />
                    <span>{other === "bn" ? "বাংলা" : "English"}</span>
                  </PlainLink>
                )}
              </LanguageLink>
            )}
            <RegisterMenu nav={nav} />
          </nav>

          <div className="nav-mobile-actions nav-mobile">
            <button
              ref={searchBtn}
              type="button"
              className="nav-icon-btn"
              aria-label={t("search")}
              aria-haspopup="dialog"
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen(true)}
            >
              <MdSearch aria-hidden="true" />
            </button>
            <button
              ref={moreBtn}
              type="button"
              className="nav-icon-btn"
              aria-label={t("nav.more")}
              aria-haspopup="dialog"
              aria-expanded={moreOpen}
              onClick={() => setMoreOpen(true)}
            >
              <MdMoreVert aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>
      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} returnRef={searchBtn} />}
      {moreOpen && <MoreSheet nav={nav} onClose={() => setMoreOpen(false)} returnRef={moreBtn} />}
    </>
  )
}
