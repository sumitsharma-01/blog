import Button from '../turbo/Button'
import Slider from '../turbo/Slider'
import Text from '../turbo/Text'
import { fresh } from '../../content/data'
import { navigateTo } from '../../utils/navigation'
import useIsMobile from '../../hooks/useIsMobile'
import FreshCard from '../cards/FreshCard'
import '../../styles/fresh.css'

export default function FreshOffTheRoad({ title = 'Fresh off the road', subtitle = 'The latest from the Cars24 desk.', posts = fresh, ctaText, ctaHref }) {
  const isMobile = useIsMobile()

  return (
    <section className="bg-brand-blue-25">
      <div className="mx-auto w-full max-w-7xl px-240">
        <h2 className="sfx-line"><Text text={title} as="span" className="text-display-1-bold text-primary md:text-display-1-bold" /></h2>
        <Text text={subtitle} as="p" className="sfx mt-120 text-heading-h3-bold text-secondary" />
      </div>

      {/* 3.5 cards on desktop — the half-peek card invites the horizontal
          scroll, so no arrows are needed. */}
      <div className="mx-auto mt-320 w-full max-w-7xl px-240">
        <Slider
          cardsPerView={isMobile ? 1.15 : 3.5}
          gap="1rem"
          edgeGap="0.75rem"
          showDots={isMobile}
        >
          {posts.map((post) => (
            <div key={post.id} className="h-full">
              <FreshCard post={post} />
            </div>
          ))}
        </Slider>
      </div>

      {ctaText && ctaHref && (
        <div className="mx-auto mt-480 flex max-w-7xl justify-center px-240">
          <div className="w-[7.5rem] shrink-0">
            <Button
              cta={{ text: ctaText, variant: 'secondary', size: 'medium' }}
              onClick={(event) => navigateTo(ctaHref, event.currentTarget)}
            />
          </div>
        </div>
      )}
    </section>
  )
}
