import { Link, useIntl } from "gatsby-plugin-intl"
import React from "react"
import { MdLocalPhone, MdReportProblem } from "react-icons/md"
import { districtPath, useNavDistrict } from "../utils/district"

// tel: target for a listed number ("999", "0721-776000", "01713-373142")
const tel = phone => {
  const d = String(phone || "").split(/[/,]/)[0].replace(/[^\d+]/g, "")
  return d.length >= 3 ? `tel:${d}` : null
}

function TelChip({ name, phone, children }) {
  const intl = useIntl()
  const href = tel(phone)
  const label = intl.formatMessage({ id: "shell.callNumber" }, { phone })
  return href ? (
    <a className="md-tel-chip" href={href} aria-label={`${name}: ${label}`}>
      <MdLocalPhone aria-hidden="true" />
      {children}
    </a>
  ) : (
    <span className="md-tel-chip">{children}</span>
  )
}

export default function Emergency({ snippetVeiw, data }) {
  const district = useNavDistrict()
  const list = data || []
  if (snippetVeiw) {
    return (
      <section className="md-emergency-strip mx-3" aria-labelledby="md-emergency-strip">
        <p className="md-emergency-strip__title mb-0" id="md-emergency-strip">
          <MdReportProblem aria-hidden="true" />
          Emergency Numbers
        </p>
        <div className="md-emergency-strip__chips">
          {list.slice(0, 2).map(cat =>
            cat.contacts.map((contact, ind) => (
              <TelChip key={cat.service + ind} name={contact.name} phone={contact.phone}>
                {contact.name + ": " + contact.phone + " "}
              </TelChip>
            ))
          )}
        </div>
        <Link to={districtPath(district, "/emergency/")} className="dp-btn dp-btn--tonal">
          More...
        </Link>
      </section>
    )
  }
  return (
    <div className="md-emergency">
      <h2 className="md-emergency-head">Emergency Numbers</h2>
      {list.map((cat, i) => (
        <section className="md-emergency-group" key={cat.service + i}>
          <h3 className="lead">{cat.service}</h3>
          <ul>
            {cat.contacts.map((contact, index) => (
              <li key={index}>
                <span>{contact.name + ": "} </span>
                <TelChip name={contact.name} phone={contact.phone}>
                  {contact.phone}
                </TelChip>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
