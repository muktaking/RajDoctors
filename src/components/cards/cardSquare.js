import React, { useCallback } from "react"
import { useIntl } from "gatsby-plugin-intl"
import { MdCall } from "react-icons/md"
import DoctorHero from "../doctor-page/doctor-hero"
import CardChamberInfo from "./Card-chamber-info"
import CardReview from "./card-review"
import CardClinicalExpertise from "./card-clinical-expertise"
import { primaryPhone, telHref } from "../doctor-page/util"

// Doctor page body: main column (header card, clinical expertise, chambers)
// and a side column (ad, reviews, share). Styles: src/styles/doctor-page.scss.
export default function CardSquare({ data }) {
  const intl = useIntl()
  const call = primaryPhone(data.chambers)

  const onShare = useCallback(() => {
    const url = window.location.href
    if (navigator.share) {
      navigator.share({ title: document.title, url }).catch(() => {})
      return
    }
    const el = document.getElementById("dp-share")
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" })
      el.focus({ preventScroll: true })
    }
  }, [])

  return (
    <div className={`dp-layout${call ? " dp-layout--has-call" : ""}`}>
      <div className="dp-main">
        <DoctorHero data={data} onShare={onShare} />
        <CardClinicalExpertise items={data.clinicalExpertise} />
        <CardChamberInfo data={data} />
      </div>
      <aside className="dp-aside">
        <CardReview reviews={data.reviews} />
      </aside>
      {call && (
        <div className="dp-callbar">
          <a
            className="dp-btn dp-btn--filled dp-btn--block"
            href={telHref(call.phone)}
            aria-label={intl.formatMessage({ id: "doctorPage.callNumber" }, { phone: call.phone })}
          >
            <MdCall aria-hidden="true" />
            <span>{intl.formatMessage({ id: "doctorPage.callForSerial" })}</span>
            <span className="dp-callbar__num">{call.phone}</span>
          </a>
        </div>
      )}
    </div>
  )
}
