/*
 * One AdSense unit (client ca-pub-7807818541747006, slot
 * GATSBY_GOOGLE_DATA_AD_SLOT). Placement rules: docs/ADS.md.
 *
 * - Lazy: adsbygoogle.push() runs only when the slot comes within 300px of
 *   the viewport (a slot hidden with CSS, e.g. the desktop-only one on a
 *   phone, never requests an ad).
 * - Fixed reserved height (no layout shift while the ad loads).
 * - Collapses completely when AdSense reports "unfilled" or the ad script is
 *   unavailable (ad blockers, offline), so no empty boxes are left behind.
 * - Development (or localStorage rd.adPreview = "1"): a neutral placeholder
 *   showing the position instead of a live ad.
 */
import { useIntl } from "gatsby-plugin-intl"
import React, { useEffect, useRef, useState } from "react"

const HEIGHT = { infeed: 250, aside: 250, block: 120 }

const preview = () => {
  if (process.env.NODE_ENV === "development") return true
  try {
    return window.localStorage.getItem("rd.adPreview") === "1"
  } catch (e) {
    return false
  }
}

export default function Ad({ variant = "block", className = "" }) {
  const intl = useIntl()
  const box = useRef(null)
  const ins = useRef(null)
  // "idle" -> "preview" | "requested" -> "hidden"
  const [state, setState] = useState("idle")

  useEffect(() => {
    if (preview()) {
      setState("preview")
      return undefined
    }
    const el = box.current
    if (!el || !("IntersectionObserver" in window)) return undefined
    let watch
    let timer
    const io = new IntersectionObserver(
      entries => {
        if (!entries.some(e => e.isIntersecting)) return
        io.disconnect()
        // page fully loaded but the async ad script never ran (blocked/offline)
        const a = window.adsbygoogle
        if (document.readyState === "complete" && !(a && a.loaded === true)) {
          setState("hidden")
          return
        }
        try {
          ;(window.adsbygoogle = window.adsbygoogle || []).push({})
        } catch (e) {
          setState("hidden")
          return
        }
        setState("requested")
        // AdSense marks the <ins> data-ad-status="unfilled" | "filled"
        watch = new MutationObserver(() => {
          if (ins.current && ins.current.getAttribute("data-ad-status") === "unfilled") setState("hidden")
        })
        if (ins.current) watch.observe(ins.current, { attributes: true, attributeFilter: ["data-ad-status"] })
        // script blocked / not loaded: nothing will ever fill this slot
        timer = setTimeout(() => {
          const a = window.adsbygoogle
          const filled = ins.current && ins.current.getAttribute("data-ad-status") === "filled"
          if (!filled && (!a || a.loaded !== true)) setState("hidden")
        }, 6000)
      },
      { rootMargin: "300px 0px" }
    )
    io.observe(el)
    return () => {
      io.disconnect()
      if (watch) watch.disconnect()
      clearTimeout(timer)
    }
  }, [])

  if (state === "hidden") return null
  const label = intl.formatMessage({ id: "ad.label" })
  return (
    <aside
      ref={box}
      className={`ad-slot ad-slot--${variant} ${className}`}
      aria-label={label}
      style={{ "--ad-h": `${HEIGHT[variant] || HEIGHT.block}px` }}
    >
      <span className="ad-slot__label">{label}</span>
      {state === "preview" ? (
        <div className="ad-slot__placeholder" aria-hidden="true">
          Ad · {variant}
        </div>
      ) : (
        <ins
          ref={ins}
          className="adsbygoogle ad-slot__ins"
          style={{ display: "block" }}
          data-ad-client="ca-pub-7807818541747006"
          data-ad-slot={process.env.GATSBY_GOOGLE_DATA_AD_SLOT}
          data-ad-format={variant === "block" ? "horizontal" : "auto"}
          data-full-width-responsive="true"
        />
      )}
    </aside>
  )
}
