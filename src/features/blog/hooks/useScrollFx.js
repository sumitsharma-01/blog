import { useEffect } from 'react'
import Lenis from 'lenis'

export default function useScrollFx() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const cleanups = []
    let lenis = null

    if (!reduced) {
      lenis = new Lenis({ lerp: 0.09, smoothWheel: true })
      let raf = 0
      const loop = (time) => {
        lenis.raf(time)
        raf = requestAnimationFrame(loop)
      }
      raf = requestAnimationFrame(loop)
      cleanups.push(() => {
        cancelAnimationFrame(raf)
        lenis.destroy()
      })
    }

    const onAnchorClick = (event) => {
      const anchor = event.target.closest('a[href^="#"]')
      if (!anchor) return
      const id = anchor.getAttribute('href')
      if (id.length > 1 && document.querySelector(id)) {
        event.preventDefault()
        if (lenis) lenis.scrollTo(id, { offset: -40, duration: 1.4 })
        else document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
      }
    }
    document.addEventListener('click', onAnchorClick)
    cleanups.push(() => document.removeEventListener('click', onAnchorClick))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    const observeAll = () => {
      document.querySelectorAll('.sfx:not(.-in), .sfx-line:not(.-in), .sfx-clip:not(.-in)').forEach((element) => observer.observe(element))
    }
    observeAll()
    const mutationObserver = new MutationObserver(observeAll)
    mutationObserver.observe(document.querySelector('.curtain-body') ?? document.body, { childList: true, subtree: true })
    cleanups.push(() => {
      observer.disconnect()
      mutationObserver.disconnect()
    })

    return () => cleanups.forEach((cleanup) => cleanup())
  }, [])
}
