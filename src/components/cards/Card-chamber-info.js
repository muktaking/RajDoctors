import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import { MdAccessTime, MdAssignment, MdCall, MdEvent, MdLocationOn, MdPhone } from "react-icons/md"
import { telHref } from "../doctor-page/util"

// `data.chambers` comes from the Doctor schema (gatsby-node.js): only chambers
// that have data, with "*" already cleaned and phone numbers split into a list.
// One card per chamber; rows without a value are not rendered.
function CardChamberInfo({ data, intl }) {
  const { chambers = [], protocol } = data
  if (chambers.length === 0) return null
  return (
    <section className="dp-chambers" aria-label={intl.formatMessage({ id: "ci" })}>
      {chambers.map(chamber => (
        <ChamberCard key={chamber.number} intl={intl} chamber={chamber} protocol={protocol} />
      ))}
    </section>
  )
}

function ChamberCard({ intl, chamber, protocol }) {
  const { number, name, address, phones, visitTime, hours } = chamber
  const t = id => intl.formatMessage({ id })
  const location = [name, address].filter(Boolean).join(" ")
  return (
    <article className="dp-card dp-chamber" aria-labelledby={`dp-chamber-${number}`}>
      <header className="dp-chamber__head">
        <span className="dp-chamber__num" aria-hidden="true">{number}</span>
        <h2 id={`dp-chamber-${number}`} className="dp-title mb-0">
          {t(number === 1 ? "chamber.one" : "chamber.two")}
        </h2>
      </header>
      <dl className="dp-rows">
        {phones && phones.length > 0 && (
          <Row icon={<MdPhone />} label={t("chamber.contact-info")}>
            <ul className="dp-phones">
              {phones.map(phone => {
                const href = telHref(phone)
                return (
                  <li key={phone}>
                    <a href={"tel:" + phone} className="dp-phone">{phone}</a>
                    {href && (
                      <a
                        href={href}
                        className="dp-icon-btn"
                        aria-label={intl.formatMessage({ id: "doctorPage.callNumber" }, { phone })}
                      >
                        <MdCall aria-hidden="true" />
                      </a>
                    )}
                  </li>
                )
              })}
            </ul>
          </Row>
        )}
        {location && (
          <Row icon={<MdLocationOn />} label={t("chamber.location")}>
            {location}
          </Row>
        )}
        {visitTime && (
          <Row icon={<MdEvent />} label={t("chamber.time")}>
            {visitTime}
          </Row>
        )}
        {hours && (
          <Row icon={<MdAccessTime />} label={"Opening Hour"}>
            {hours}
          </Row>
        )}
        <Row icon={<MdAssignment />} label={"Procedure"}>
          {protocol ? protocol : "Please phone to provided number to book a serial"}
        </Row>
      </dl>
    </article>
  )
}

function Row({ icon, label, children }) {
  return (
    <div className="dp-row">
      <span className="dp-row__icon" aria-hidden="true">{icon}</span>
      <div className="dp-row__content">
        <dt className="dp-row__label">{label}</dt>
        <dd className="dp-row__value">{children}</dd>
      </div>
    </div>
  )
}

export default injectIntl(CardChamberInfo)
