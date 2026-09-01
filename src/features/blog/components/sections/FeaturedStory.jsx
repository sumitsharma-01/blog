import { useEffect, useRef } from 'react'
import BlogCard from '../turbo/BlogCard'
import Slider from '../turbo/Slider'
import Text from '../turbo/Text'
import { regionFeatured } from '../../content/data'
import { toBlogCard } from '../../utils/toBlogCard'
import useIsMobile from '../../hooks/useIsMobile'

const AUTOPLAY_MS = 3600

export default function FeaturedStory({ items = regionFeatured, title = 'Featured around the world' }) {
  const isMobile = useIsMobile()
  const wrapRef = useRef(null)
  const paused = useRef(false)

  // The local scroll-snap slider has no autoplay prop, but it is a scroll-snap
  // container under the hood — so a timer advances it by scrolling its
  // internal overflow element one viewport forward (wrapping back to the
  // start at the end). Snap points keep every programmatic scroll aligned
  // to a card. Paused while the pointer is over the carousel or a touch is
  // in progress so it never fights the user.
  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return undefined
    const timer = window.setInterval(() => {
      if (paused.current || document.hidden) return
      const scroller = Array.from(wrap.querySelectorAll('div')).find(
        (el) => el.scrollWidth > el.clientWidth + 1 && getComputedStyle(el).overflowX !== 'visible',
      )
      if (!scroller) return
      // Step by the real card stride (card width + gap) — the scroll box is
      // padded for shadow room, so clientWidth would overshoot the snap point.
      const items = scroller.children
      const stride = items.length > 1 ? items[1].offsetLeft - items[0].offsetLeft : scroller.clientWidth
      const atEnd = scroller.scrollLeft + scroller.clientWidth >= scroller.scrollWidth - 8
      scroller.scrollTo({ left: atEnd ? 0 : scroller.scrollLeft + stride, behavior: 'smooth' })
    }, AUTOPLAY_MS)
    return () => window.clearInterval(timer)
  }, [])

  const pause = () => { paused.current = true }
  const resume = () => { paused.current = false }

  return (
    <section className="featured-story-section mx-auto max-w-7xl px-240 pt-[60px]">
      <Text
        text={title}
        as="h2"
        className="text-display-1-bold text-primary md:text-display-1-bold"
      />

      <div
        ref={wrapRef}
        className="mt-480"
        onPointerEnter={pause}
        onPointerLeave={resume}
        onTouchStart={pause}
        onTouchEnd={resume}
      >
        <Slider
          cardsPerView={isMobile ? 1.05 : 1}
          gap="1.25rem"
          edgeGap={isMobile ? '0.75rem' : '0px'}
          showDots
          controls={{ showControls: !isMobile }}
        >
          {items.map(({ post }) => (
            <BlogCard key={post.id} {...toBlogCard(post, 'large')} />
          ))}
        </Slider>
      </div>
    </section>
  )
}
