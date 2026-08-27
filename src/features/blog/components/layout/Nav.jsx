import { useEffect, useState } from 'react'
import Button from '../turbo/Button'
import useIsMobile from '../../hooks/useIsMobile'

const CARS24_URL = 'https://www.cars24.com'
const scrollToSubscribe = () => {
  const subscribe = document.querySelector('#subscribe')
  if (subscribe) subscribe.scrollIntoView({ behavior: 'smooth' })
  else window.location.href = '/#subscribe'
}

export default function Nav({ solid = false, overLight = false }) {
  const isMobile = useIsMobile()
  // Transparent while sitting over the dark hero; solid white once the page
  // scrolls past the hero's top edge. `solid` forces the white state from the
  // top — used on pages with no dark hero behind the nav (e.g. article detail).
  // `overLight` keeps the bar transparent but uses dark (blue) logo + pills so
  // it stays legible over a LIGHT hero.
  const [scrolledPast, setScrolledPast] = useState(false)
  // Pages with a light visual surface always need an opaque header so the
  // fixed navigation never blends into the underlying content.
  const scrolled = solid || overLight || scrolledPast
  // Dark logo/pills whenever the bar is solid OR sitting over a light hero.
  const darkContent = scrolled || overLight

  useEffect(() => {
    if (solid) return undefined
    const onScroll = () => setScrolledPast(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [solid])

  // Blog home for the current market — AU pages return to /au, everything
  // else to /.
  const homeHref = window.location.pathname.startsWith('/au') ? '/au' : '/'

  // Mobile mirrors the desktop overlay nav: fixed and transparent while over
  // the dark hero (white logo), white bar with blue logo once scrolled or on
  // pages that force `solid`.
  if (isMobile) {
    return (
      <div
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled ? 'bg-primary shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-[56px] max-w-7xl items-center justify-between px-24">
          <a href={homeHref} aria-label="Cars24" className="block h-5 w-[98px] shrink-0">
            <span
              className="block h-full w-full transition-colors duration-300"
              style={{
                backgroundColor: darkContent ? '#4736FE' : '#FFFFFF',
                mask: "url('/cars24logo.svg') no-repeat left center / contain",
                WebkitMask: "url('/cars24logo.svg') no-repeat left center / contain",
              }}
            />
          </a>
          <div className="w-auto">
            <Button
              cta={{ text: 'Find a car', variant: darkContent ? 'primary' : 'white', size: 'small' }}
              onClick={() => window.open(CARS24_URL, '_blank')}
            />
          </div>
        </div>
      </div>
    )
  }

  // Hero nav: same two-CTA lockup, no button icons. Transparent over the hero
  // (white logo + translucent/white pills), swapping to a white bar with a blue
  // logo and blue pills once scrolled.
  return (
    <div
      className={`fixed inset-x-0 top-0 z-50 flex w-full flex-col items-center transition-colors duration-300 ${
        scrolled ? 'bg-primary shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="flex h-[72px] w-full items-center justify-center px-12">
        <div className="flex h-full max-w-[1260px] flex-1 items-center">
          <a href={homeHref} aria-label="Cars24" className="block h-40 w-[141px] shrink-0">
            <span
              className="block h-full w-full transition-colors duration-300"
              style={{
                backgroundColor: darkContent ? '#4736FE' : '#FFFFFF',
                mask: "url('/cars24logo.svg') no-repeat center / contain",
                WebkitMask: "url('/cars24logo.svg') no-repeat center / contain",
              }}
            />
          </a>
          <div className="flex flex-1 items-center justify-end gap-12">
            <div className="w-auto">
              <Button
                cta={{ text: 'Explore blog', variant: darkContent ? 'secondary' : 'translucent', size: 'medium' }}
                onClick={scrollToSubscribe}
              />
            </div>
            <div className="w-auto">
              <Button
                cta={{ text: 'Find a car', variant: darkContent ? 'primary' : 'white', size: 'medium' }}
                onClick={() => window.open(CARS24_URL, '_blank')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
