import { useEffect, useRef } from "react"

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])'

export const focusables = el => (el ? Array.from(el.querySelectorAll(FOCUSABLE)) : [])

/**
 * While `open`: Esc calls onClose, a click/tap outside `ref` (and outside
 * `ignoreRef`, usually the toggle button) calls onClose, and with `trap` Tab
 * cycles inside `ref`. Focus moves into the panel on open and back to
 * `returnRef` on close.
 */
export function useDismiss(open, onClose, { ref, ignoreRef, returnRef, trap = false, autoFocus = true }) {
  const wasOpen = useRef(false)
  useEffect(() => {
    if (!open) {
      if (wasOpen.current && returnRef && returnRef.current) returnRef.current.focus()
      wasOpen.current = false
      return undefined
    }
    wasOpen.current = true
    if (autoFocus && ref.current) {
      const first = ref.current.querySelector("[data-autofocus]") || focusables(ref.current)[0]
      if (first) first.focus()
    }
    const onKey = e => {
      if (e.key === "Escape") {
        e.stopPropagation()
        onClose()
        return
      }
      if (trap && e.key === "Tab" && ref.current) {
        const items = focusables(ref.current)
        if (items.length === 0) return
        const first = items[0]
        const last = items[items.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    const onDown = e => {
      if (ref.current && ref.current.contains(e.target)) return
      if (ignoreRef && ignoreRef.current && ignoreRef.current.contains(e.target)) return
      onClose()
    }
    document.addEventListener("keydown", onKey)
    document.addEventListener("mousedown", onDown)
    document.addEventListener("touchstart", onDown)
    return () => {
      document.removeEventListener("keydown", onKey)
      document.removeEventListener("mousedown", onDown)
      document.removeEventListener("touchstart", onDown)
    }
  }, [open]) // eslint-disable-line react-hooks/exhaustive-deps
}

/** Arrow-key movement between the focusable items of a menu panel. */
export const onMenuArrows = e => {
  if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(e.key)) return
  const items = focusables(e.currentTarget).filter(el => el.tagName === "A" || el.tagName === "BUTTON")
  if (!items.length) return
  e.preventDefault()
  const i = items.indexOf(document.activeElement)
  const next =
    e.key === "Home" ? 0 : e.key === "End" ? items.length - 1 : e.key === "ArrowDown" ? (i + 1) % items.length : (i - 1 + items.length) % items.length
  items[next].focus()
}
