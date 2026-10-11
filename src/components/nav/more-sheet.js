import { Link as PlainLink } from "gatsby"
import { Link } from "gatsby-plugin-intl"
import React from "react"
import { MdGavel, MdPersonAdd, MdInfo, MdMail, MdTranslate, MdVideoCall } from "react-icons/md"
import { REGISTER_LINKS, showLanguage } from "./app-bar"
import { LanguageLink } from "./nav-data"
import Sheet from "./sheet"

// Mobile "More" sheet: language, telemedicine, registration, about, contact, privacy.
export default function MoreSheet({ nav, onClose, returnRef }) {
  const { district, t, intl } = nav
  const close = e => {
    if (e.target.closest("a")) onClose()
  }
  return (
    <Sheet title={t("nav.more")} onClose={onClose} returnRef={returnRef}>
      <ul className="nav-sheet__list" onClick={close} onKeyDown={() => {}}>
        {showLanguage(district) && (
          <li>
            <LanguageLink>
              {({ href, other }) => (
                <PlainLink to={href} className="nav-item" hrefLang={other} lang={other}>
                  <MdTranslate aria-hidden="true" />
                  {other === "bn" ? "বাংলা" : "English"}
                </PlainLink>
              )}
            </LanguageLink>
          </li>
        )}
        <li>
          <Link to="/teledoctor/" className="nav-item">
            <MdVideoCall aria-hidden="true" />
            {t("nav.telemedicine")}
          </Link>
        </li>
        {REGISTER_LINKS.map(l => (
          <li key={l.label}>
            <a href={l.href} className="nav-item">
              <MdPersonAdd aria-hidden="true" />
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <Link to="/about-us/" className="nav-item">
            <MdInfo aria-hidden="true" />
            {intl.formatMessage({ id: "about-us" })}
          </Link>
        </li>
        <li>
          <Link to="/contact-us/" className="nav-item">
            <MdMail aria-hidden="true" />
            {intl.formatMessage({ id: "contact-us" })}
          </Link>
        </li>
        <li>
          <Link to="/privacy-policy/" className="nav-item">
            <MdGavel aria-hidden="true" />
            {intl.formatMessage({ id: "pp" })}
          </Link>
        </li>
      </ul>
    </Sheet>
  )
}
