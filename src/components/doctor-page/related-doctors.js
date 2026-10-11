import React from "react"
import Ad from "../ad"
import DoctorMiniCard from "./doctor-mini-card"

// "You may find helpful". `data` = nodes queried with
// localized(lang: $language, fallback: true) { ...DoctorCard }; a doctor with
// no row in the page language is skipped and an ad follows every 3rd card,
// exactly as components/doctors/doctors.js does for the other lists.
export default function RelatedDoctors({ data }) {
  const items = []
  data.forEach((doctor, i) => {
    const card = doctor && ("localized" in doctor ? doctor.localized : doctor)
    if (!card || !card.fields) return
    if (i % 3 === 0 && i !== 0) {
      items.push(
        <div key={`ad-${i}`} className="dp-ad dp-related__ad">
          <Ad height={"90px"} />
        </div>
      )
    }
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
