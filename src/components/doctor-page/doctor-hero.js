import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import { MdCall, MdShare } from "react-icons/md"
import Avatar from "../avatar"
import { BadgeChips, Stars, primaryPhone, telHref } from "./util"

// Header card of the doctor page: photo, name, speciality, degrees,
// designation, rating, fee, badges and the two primary actions.
export default function DoctorHero({ data, onShare }) {
  const intl = useIntl()
  const { photo, name, rating, degrees, specialty, designation, institute, fee, badges, chambers } = data
  const call = primaryPhone(chambers)
  return (
    <section className="dp-card dp-hero" aria-labelledby="dp-name">
      <div className="dp-hero__head">
        <Avatar
          height={112}
          width={112}
          alt={name}
          image={photo && photo.childImageSharp ? photo.childImageSharp.gatsbyImageData : null}
          className="dp-avatar"
          border="none"
        />
        <div className="dp-hero__id">
          <h1 id="dp-name" className="dp-hero__name">{name}</h1>
          <p className="dp-chip dp-chip--primary dp-hero__specialty">{`${specialty} Specialist`}</p>
          {rating && (
            <p className="dp-rating">
              <Stars rating={rating} />
              <span className="dp-rating__value">({rating})</span>
            </p>
          )}
        </div>
      </div>

      <div className="dp-hero__body">
        {degrees && <p className="dp-hero__degrees">{degrees}</p>}
        {(designation || institute) && (
          <p className="dp-hero__role">{`${designation} at ${institute}`}</p>
        )}
        {(fee || (badges && badges.length > 0)) && (
          <div className="dp-hero__meta">
            {fee && <span className="dp-chip dp-chip--tonal">{"Fee: " + fee + " Taka"}</span>}
            <BadgeChips badges={badges} />
          </div>
        )}
      </div>

      <div className="dp-actions">
        {call && (
          <a
            className="dp-btn dp-btn--filled"
            href={telHref(call.phone)}
            aria-label={intl.formatMessage({ id: "doctorPage.callNumber" }, { phone: call.phone })}
          >
            <MdCall aria-hidden="true" />
            <span>{intl.formatMessage({ id: "doctorPage.call" })}</span>
          </a>
        )}
        <button type="button" className="dp-btn dp-btn--tonal" onClick={onShare}>
          <MdShare aria-hidden="true" />
          <span>{intl.formatMessage({ id: "doctorPage.share" })}</span>
        </button>
      </div>
    </section>
  )
}
