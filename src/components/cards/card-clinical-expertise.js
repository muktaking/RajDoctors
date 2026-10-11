import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import { MdCheckCircle } from "react-icons/md"

// `items` is the clinicalExpertise list from the Doctor schema (the CSV cell is
// split on "*" or line breaks in gatsby-node.js). One item renders as a
// paragraph, several as a list. Nothing renders when the list is empty.
function CardClinicalExpertise({ items, intl }) {
  if (!items || items.length === 0) return null

  return (
    <section className="dp-card clinical-expertise" aria-labelledby="dp-expertise">
      <h2 id="dp-expertise" className="dp-title">
        {intl.formatMessage({ id: "clinicalExpertise" })}
      </h2>
      {items.length === 1 ? (
        <p className="dp-text">{items[0]}</p>
      ) : (
        <ul className="dp-checklist">
          {items.map((item, i) => (
            <li key={i}>
              <MdCheckCircle aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default injectIntl(CardClinicalExpertise)
