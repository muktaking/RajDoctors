import React from "react"
import DoctorMiniCard from "./doctor-mini-card"

// "You may find helpful". `data` = nodes queried with
// localized(lang: $language, fallback: true) { ...DoctorCard }; a doctor with
// no row in the page language is skipped. (No ads in this grid: see docs/ADS.md.)
export default function RelatedDoctors({ data }) {
  const items = []
  data.forEach((doctor, i) => {
    const card = doctor && ("localized" in doctor ? doctor.localized : doctor)
    if (!card || !card.fields) return
    items.push(<DoctorMiniCard key={card.id || i} data={card} />)
  })
  if (items.length === 0) return null
  return (
    <section className="dp-related" aria-labelledby="dp-related-title">
      <h2 id="dp-related-title" className="dp-section-title">{"You may find helpful"}</h2>
      <div className="dp-related__grid">{items}</div>
    </section>
  )
}
