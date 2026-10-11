import React from "react"
import { injectIntl } from "gatsby-plugin-intl"

// ClinicalExpertise is long free text from the CSV. Items are separated by "*"
// (same convention as other CSV fields) or by line breaks; one item renders as
// a paragraph, several render as a bullet list. Nothing renders when empty.
function CardClinicalExpertise({ text, intl }) {
  if (!text || !text.trim()) return null
  const items = text
    .split(/\*|\r?\n/)
    .map(s => s.trim())
    .filter(Boolean)
  if (items.length === 0) return null

  return (
    <div className="bg-light text-dark px-3 py-2 mt-2 clinical-expertise">
      <h5
        className="text-center"
        style={{ fontWeight: "700", fontSize: ".9rem" }}
      >
        {intl.formatMessage({ id: "clinicalExpertise" })}
      </h5>
      {items.length === 1 ? (
        <p className="mb-1 text-justify" style={{ fontSize: ".8rem", lineHeight: 1.5 }}>
          {items[0]}
        </p>
      ) : (
        <ul className="mb-1 pl-3" style={{ fontSize: ".8rem", lineHeight: 1.5 }}>
          {items.map((item, i) => (
            <li key={i} style={{ fontWeight: "500", color: "#535352" }}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default injectIntl(CardClinicalExpertise)
