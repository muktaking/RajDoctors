import React from "react"
import { MdRateReview } from "react-icons/md"
import Share from "../share"
import Ad from "../ad"

// Reviews (compact empty state), share buttons and the desktop side-column ad.
export default function CardReview({ reviews }) {
  return (
    <>
      <section className="dp-card dp-reviews" aria-labelledby="dp-reviews">
        <h2 id="dp-reviews" className="dp-title">Reviews</h2>
        {reviews ? (
          <p className="dp-text">{reviews}</p>
        ) : (
          <p className="dp-empty">
            <MdRateReview aria-hidden="true" />
            <span>{"Currntly no user reviews is present for this doctor."}</span>
          </p>
        )}
      </section>
      <section className="dp-card dp-share" id="dp-share" tabIndex={-1} aria-labelledby="dp-share-title">
        <h2 id="dp-share-title" className="dp-title">Share Us</h2>
        <Share />
      </section>
      {/* desktop: side column, below share (far from the Call buttons) */}
      <Ad variant="aside" className="ad-only-desktop" />
    </>
  )
}
