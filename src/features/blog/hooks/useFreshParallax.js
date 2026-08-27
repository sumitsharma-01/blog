import { useEffect } from 'react'

const clamp = (value, min, max) => Math.min(max, Math.max(min, value))

export default function useFreshParallax(sectionRef, railRef, trackRef) {
  useEffect(() => {
    const section = sectionRef.current
    const rail = railRef.current
    const track = trackRef.current
    if (!section || !rail || !track) return undefined

    const cards = Array.from(track.querySelectorAll('.fresh-parallax-card'))
    const depths = cards.map((card) => card.querySelector('.fresh-parallax-depth'))
    const images = cards.map((card) => card.querySelector('img'))
    const header = section.querySelector('.fresh-parallax-header')
    const reducedQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    let raf = 0
    let cinematic = false
    let maxScroll = 0
    let scrollDistance = 0
    let dragging = false
    let dragMoved = 0
    let dragEndedAt = 0
    let captured = false
    let startX = 0
    let startPageScroll = 0
    let startRailScroll = 0

    const sectionStart = () => window.scrollY + section.getBoundingClientRect().top
    const progress = () => {
      if (!cinematic) return clamp(rail.scrollLeft / Math.max(maxScroll, 1), 0, 1)
      return clamp((window.scrollY - sectionStart()) / Math.max(scrollDistance, 1), 0, 1)
    }

    const update = () => {
      raf = 0
      const currentProgress = progress()

      if (cinematic) {
        track.style.transform = `translate3d(${(-maxScroll * currentProgress).toFixed(2)}px, 0, 0)`
        if (header) {
          header.style.transform = `translate3d(0, ${(-14 * currentProgress).toFixed(2)}px, 0)`
          header.style.opacity = `${(1 - currentProgress * 0.16).toFixed(3)}`
        }
      } else {
        track.style.removeProperty('transform')
        header?.style.removeProperty('transform')
        header?.style.removeProperty('opacity')
      }

      const railRect = rail.getBoundingClientRect()
      const railCenter = railRect.left + railRect.width / 2
      const halfRail = Math.max(railRect.width * 0.5, 1)
      cards.forEach((card, index) => {
        const depth = depths[index]
        const image = images[index]
        if (!depth || !image || reducedQuery.matches) {
          depth?.style.removeProperty('transform')
          image?.style.removeProperty('transform')
          card.style.removeProperty('z-index')
          return
        }

        const cardRect = card.getBoundingClientRect()
        const signedDistance = clamp((cardRect.left + cardRect.width / 2 - railCenter) / halfRail, -1, 1)
        // Cards stay flat and horizontal; only the artwork inside each card
        // shifts against the scroll for a simple parallax depth cue.
        card.style.removeProperty('z-index')
        depth.style.removeProperty('transform')
        image.style.transform = `translate3d(${(-signedDistance * 28).toFixed(2)}px, 0, 0) scale(1.12)`
      })
    }

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    const refresh = () => {
      // Keep page scrolling and rail scrolling as separate gestures. Vertical
      // movement should always advance the page; only horizontal input moves
      // the story rail.
      cinematic = false
      maxScroll = Math.max(track.scrollWidth - rail.clientWidth, 0)
      scrollDistance = Math.max(maxScroll * 1.12, window.innerHeight * 1.65)
      section.classList.toggle('-cinematic', cinematic)
      section.classList.toggle('-native', !cinematic)
      if (cinematic) section.style.setProperty('--fresh-scroll-distance', `${Math.ceil(scrollDistance)}px`)
      else section.style.removeProperty('--fresh-scroll-distance')
      schedule()
    }

    const onWheel = (event) => {
      if (cinematic) {
        if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return
        const rect = section.getBoundingClientRect()
        if (rect.top > 1 || rect.bottom < window.innerHeight - 1) return
        const start = sectionStart()
        const destination = clamp(window.scrollY + event.deltaX, start, start + scrollDistance)
        if (Math.abs(destination - window.scrollY) < 1) return
        event.preventDefault()
        window.scrollTo(0, destination)
        return
      }

      // In native/touch mode, let the browser's own overflow-x scrolling handle
      // horizontal wheel input. Driving rail.scrollLeft manually per wheel tick
      // fights scroll-snap: each discrete JS write gets independently resolved
      // back to the nearest snap point, so the rail never appears to move.
    }

    const onPointerDown = (event) => {
      if (event.button !== 0 || event.pointerType !== 'mouse') return
      const rect = section.getBoundingClientRect()
      if (cinematic && (rect.top > 1 || rect.bottom < window.innerHeight - 1)) return
      dragging = true
      dragMoved = 0
      dragEndedAt = 0
      captured = false
      startX = event.clientX
      startPageScroll = window.scrollY
      startRailScroll = rail.scrollLeft
      rail.classList.add('-dragging')
      // Do NOT capture the pointer here: capturing on pointerdown retargets the
      // subsequent click to the rail, so a plain click never reaches the card
      // anchor and the detail page won't open. Capture only once a real drag
      // crosses the threshold (below), preserving clicks.
    }

    const onPointerMove = (event) => {
      if (!dragging) return
      const delta = event.clientX - startX
      dragMoved = Math.max(dragMoved, Math.abs(delta))
      if (!captured && dragMoved > 7) {
        captured = true
        rail.focus({ preventScroll: true })
        try { rail.setPointerCapture(event.pointerId) } catch { /* optional */ }
      }
      if (cinematic) {
        const start = sectionStart()
        const dragScale = scrollDistance / Math.max(rail.clientWidth, 1)
        window.scrollTo(0, clamp(startPageScroll - delta * dragScale, start, start + scrollDistance))
      } else {
        rail.scrollLeft = startRailScroll - delta
      }
      event.preventDefault()
      schedule()
    }

    const onPointerUp = (event) => {
      if (!dragging) return
      dragging = false
      dragEndedAt = performance.now()
      rail.classList.remove('-dragging')
      if (captured) { try { rail.releasePointerCapture(event.pointerId) } catch { /* optional */ } }
      captured = false
    }

    const onClick = (event) => {
      const isImmediateDragClick = dragMoved > 7 && performance.now() - dragEndedAt < 300
      dragMoved = 0
      dragEndedAt = 0
      if (!isImmediateDragClick || event.detail === 0) return
      event.preventDefault()
      event.stopPropagation()
    }

    const onKeyDown = (event) => {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return
      event.preventDefault()
      const direction = event.key === 'ArrowRight' ? 1 : -1
      if (cinematic) {
        const nextProgress = clamp(progress() + direction / Math.max(cards.length - 1, 1), 0, 1)
        window.scrollTo({ top: sectionStart() + nextProgress * scrollDistance, behavior: reducedQuery.matches ? 'auto' : 'smooth' })
      } else {
        rail.scrollBy({ left: direction * rail.clientWidth * 0.82, behavior: reducedQuery.matches ? 'auto' : 'smooth' })
      }
    }

    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', refresh)
    rail.addEventListener('scroll', schedule, { passive: true })
    rail.addEventListener('wheel', onWheel, { passive: false })
    rail.addEventListener('pointerdown', onPointerDown)
    rail.addEventListener('pointermove', onPointerMove)
    rail.addEventListener('pointerup', onPointerUp)
    rail.addEventListener('pointercancel', onPointerUp)
    rail.addEventListener('click', onClick, true)
    rail.addEventListener('keydown', onKeyDown)
    reducedQuery.addEventListener('change', refresh)

    const resizeObserver = new ResizeObserver(refresh)
    resizeObserver.observe(rail)
    resizeObserver.observe(track)
    images.forEach((image) => image?.addEventListener('load', refresh, { once: true }))
    refresh()

    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', refresh)
      rail.removeEventListener('scroll', schedule)
      rail.removeEventListener('wheel', onWheel)
      rail.removeEventListener('pointerdown', onPointerDown)
      rail.removeEventListener('pointermove', onPointerMove)
      rail.removeEventListener('pointerup', onPointerUp)
      rail.removeEventListener('pointercancel', onPointerUp)
      rail.removeEventListener('click', onClick, true)
      rail.removeEventListener('keydown', onKeyDown)
      reducedQuery.removeEventListener('change', refresh)
      resizeObserver.disconnect()
      section.classList.remove('-cinematic', '-native')
      section.style.removeProperty('--fresh-scroll-distance')
      track.style.removeProperty('transform')
      header?.style.removeProperty('transform')
      header?.style.removeProperty('opacity')
      cards.forEach((card) => card.style.removeProperty('z-index'))
      depths.forEach((depth) => depth?.style.removeProperty('transform'))
      images.forEach((image) => image?.style.removeProperty('transform'))
    }
  }, [sectionRef, railRef, trackRef])
}
