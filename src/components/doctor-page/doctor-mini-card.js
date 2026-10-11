import React from "react"
import { Link } from "gatsby"
import Avatar from "../avatar"
import { BadgeChips, Stars } from "./util"

// Compact doctor card for the "You may find helpful" grid. Same fields as the
// list card (CardTopComponent with isSnippet); the whole card is the link.
export default function DoctorMiniCard({ data }) {
  const { district, photo, name, rating, degrees, specialty, designation, institute, badges, fields } = data
  return (
    <article className="dp-card dp-mini">
      <div className="dp-mini__head">
        <Avatar
          height={56}
          width={56}
          alt=""
          border="none"
          image={photo && photo.childImageSharp ? photo.childImageSharp.gatsbyImageData : null}
          className="dp-avatar dp-avatar--sm"
        />
        <div className="dp-mini__id">
          <h3 className="dp-mini__name">{name}</h3>
          <p className="dp-mini__specialty">{`${specialty} Specialist`}</p>
          {rating && (
            <p className="dp-rating dp-rating--sm">
              <Stars rating={rating} size={13} />
              <span className="dp-rating__value">({rating})</span>
            </p>
          )}
        </div>
      </div>
      <BadgeChips badges={badges} small />
      <p className="dp-mini__degrees">{degrees}</p>
      <p className="dp-mini__role">{`${designation} at ${institute}`}</p>
      <Link to={`/${district}/doctor/${fields.slug}/`} className="dp-mini__link stretched-link">
        Details
      </Link>
    </article>
  )
}
