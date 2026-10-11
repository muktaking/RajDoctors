import React, { useRef, useState } from "react"
import { MdExpandMore } from "react-icons/md"
import { onMenuArrows, useDismiss } from "./a11y"

let uid = 0

/**
 * Button + dropdown panel. Keyboard: Enter/Space/ArrowDown opens and focuses
 * the first item, arrows move, Esc closes and returns focus to the button.
 */
export default function Popover({ label, icon, className = "", panelClassName = "", ariaLabel, align = "start", children, chevron = true, wrapClass = "" }) {
  const [open, setOpen] = useState(false)
  const btn = useRef(null)
  const panel = useRef(null)
  const id = useRef(`nav-pop-${++uid}`)
  const close = () => setOpen(false)
  useDismiss(open, close, { ref: panel, ignoreRef: btn, returnRef: btn })
  return (
    <div className={`nav-pop ${wrapClass}${open ? " is-open" : ""}`}>
      <button
        ref={btn}
        type="button"
        className={`nav-pop__btn ${className}`}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={id.current}
        aria-label={ariaLabel}
        onClick={() => setOpen(o => !o)}
        onKeyDown={e => {
          if (e.key === "ArrowDown" && !open) {
            e.preventDefault()
            setOpen(true)
          }
        }}
      >
        {icon}
        <span className="nav-pop__label">{label}</span>
        {chevron && <MdExpandMore className="nav-pop__chev" aria-hidden="true" />}
      </button>
      <div
        ref={panel}
        id={id.current}
        className={`nav-pop__panel nav-pop__panel--${align} ${panelClassName}`}
        hidden={!open}
        onKeyDown={onMenuArrows}
        onClick={e => {
          if (e.target.closest("a")) close()
        }}
      >
        {typeof children === "function" ? children(close) : children}
      </div>
    </div>
  )
}
