import { useEffect } from 'react'

export default function useHorizontalCarouselContainment() {
  useEffect(() => {
    const onWheel = (event) => {
      const carousel = event.target.closest?.('[data-horizontal-carousel]')
      if (!carousel) return

      const shiftedWheel = event.shiftKey && Math.abs(event.deltaX) < 1
      const horizontalDelta = shiftedWheel ? event.deltaY : event.deltaX
      const isHorizontalGesture = shiftedWheel || Math.abs(horizontalDelta) > Math.abs(event.deltaY)
      if (!isHorizontalGesture || Math.abs(horizontalDelta) < 1) return

      event.preventDefault()
      carousel.scrollLeft += horizontalDelta
    }

    document.addEventListener('wheel', onWheel, { passive: false, capture: true })
    return () => document.removeEventListener('wheel', onWheel, { capture: true })
  }, [])
}
