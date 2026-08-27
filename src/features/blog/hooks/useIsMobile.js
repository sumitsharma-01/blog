import { useEffect, useState } from 'react'

// Single source of truth for the mobile breakpoint. Kept at 767px so it lines
// up with Tailwind's `md` (>=768px = desktop). Components branch on this to
// render the v2 mobile components instead of the desktop layout — the desktop
// tree is never mounted on small screens and vice versa, so the tuned desktop
// animations stay untouched.
const MOBILE_QUERY = '(max-width: 767px)'

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(MOBILE_QUERY).matches : false,
  )

  useEffect(() => {
    const mql = window.matchMedia(MOBILE_QUERY)
    const onChange = (event) => setIsMobile(event.matches)
    mql.addEventListener('change', onChange)
    setIsMobile(mql.matches)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  return isMobile
}
