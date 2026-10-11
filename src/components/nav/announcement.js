import { useIntl } from "gatsby-plugin-intl"
import React, { useEffect, useState } from "react"
import { MdAnnouncement, MdClose } from "react-icons/md"
import { TypeAnimation } from "react-type-animation"

const KEY = "rd.announcementClosed"

// The old fixed bottom ticker, now a dismissible banner under the app bar
// (closed for the rest of the browser session).
export default function Announcement() {
  const intl = useIntl()
  const [closed, setClosed] = useState(false)
  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(KEY)) setClosed(true)
    } catch (e) {}
  }, [])
  if (closed) return null
  return (
    <div className="nav-banner" role="region" aria-label={intl.formatMessage({ id: "nav.announcement" })}>
      <MdAnnouncement className="nav-banner__icon" aria-hidden="true" />
      <TypeAnimation
        sequence={[
          "এখন রাজ ডক্টরে টেলিমেডিসিন সার্ভিস যুক্ত হয়েছে",
          1000,
          "বিস্তারিত জানতে টেলিমেডিসিন লিংকটিতে ক্লিক করুন",
          1000,
          "বিজ্ঞাপনের জন্য ফোন করুনঃ 01641622541",
          1500,
        ]}
        wrapper="span"
        speed={150}
        className="nav-banner__text"
        repeat={Infinity}
      />
      <button
        type="button"
        className="nav-icon-btn nav-icon-btn--sm"
        aria-label={intl.formatMessage({ id: "nav.dismiss" })}
        onClick={() => {
          setClosed(true)
          try {
            window.sessionStorage.setItem(KEY, "1")
          } catch (e) {}
        }}
      >
        <MdClose aria-hidden="true" />
      </button>
    </div>
  )
}
