import React, { useEffect, useRef } from "react"
import { MdClose } from "react-icons/md"
import { useDismiss } from "./a11y"

/** Modal dialog used for the mobile search overlay and the "More" sheet. */
export default function Sheet({ title, onClose, returnRef, className = "", children }) {
  const ref = useRef(null)
  useDismiss(true, onClose, { ref, trap: true })
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const back = returnRef && returnRef.current
    return () => {
      document.body.style.overflow = prev
      if (back) back.focus()
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className={`nav-sheet-scrim ${className}`}>
      <div ref={ref} className="nav-sheet" role="dialog" aria-modal="true" aria-label={title}>
        <div className="nav-sheet__head">
          <p className="nav-sheet__title">{title}</p>
          <button type="button" className="nav-icon-btn" onClick={onClose} aria-label={title + " ×"} data-close>
            <MdClose aria-hidden="true" />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}
