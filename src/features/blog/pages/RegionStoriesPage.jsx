import { useEffect, useMemo, useRef, useState } from 'react'
import Badge from '../components/turbo/Badge'
import BlogCard from '../components/turbo/BlogCard'
import Button from '../components/turbo/Button'
import ChipSlider from '../components/turbo/ChipSlider'
import NotchTabs from '../components/turbo/NotchTabs'
import Text from '../components/turbo/Text'
import Footer from '../components/layout/Footer'
import Nav from '../components/layout/Nav'
import Newsletter from '../components/sections/Newsletter'
import '../styles/scrollfx.css'
import { filters, posts, regionFeatured } from '../content/data'
import { navigateFromBlogCard } from '../utils/navigation'
import { toBlogCard } from '../utils/toBlogCard'
import useHeroAnimations from '../hooks/useHeroAnimations'
import useIsMobile from '../hooks/useIsMobile'
import useScrollFx from '../hooks/useScrollFx'
import '../styles/hero.css'

const STORIES_PAGE_SIZE = 12
const ROW_TWO_SIZE = 6

function formatDate(value) {
  const date = new Date(value.replace(' ', 'T'))
  return new Intl.DateTimeFormat('en-AU', { day: 'numeric', month: 'long', year: 'numeric' }).format(date)
}

function RegionHero({ region, post, heroRef, canvasRef }) {
  return (
    <section
      ref={heroRef}
      id="region-featured-hero"
      className="relative overflow-hidden bg-brand-subtler text-primary"
    >
      <canvas ref={canvasRef} className="hero-grid-canvas z-0" aria-hidden />
      <div className="relative z-10 pt-[calc(56px+2rem)] pb-32 md:pb-48 md:pt-[calc(72px+3rem)]">
        <div className="mb-32 flex px-24 md:pl-[max(0.75rem,calc((100vw-1260px)/2))] md:pr-24">
          <Badge text="Featured blog" variant="information" appearance="subtle" size="md" borderRadius="full" />
        </div>

        <a
          href={post.href}
          aria-label={`${region} featured story: ${post.title}`}
          onClick={(event) => navigateFromBlogCard(event, post.href)}
          className="group block w-full focus-visible:outline-none"
        >
          <article className="flex flex-col-reverse items-stretch md:grid md:grid-cols-[2fr_3fr] md:items-stretch md:gap-0">
            <div className="flex flex-col px-24 pt-32 md:pl-[max(0.75rem,calc((100vw-1260px)/2))] md:pr-56 md:pt-0">
              <Text
                text={post.title}
                as="h1"
                typography="display-1-semibold"
                className="text-display-1-semibold text-primary"
              />
              <Text
                text={post.summary}
                as="p"
                className="mt-20 text-body-1 text-secondary md:mt-24 "
              />
              <div className="mt-24 flex flex-wrap items-center gap-x-8 gap-y-4 text-tertiary md:mt-32 md:gap-8">
                <Text text={post.authors[0].name} as="span" typography="label-1-semibold" className="text-label-1-semibold text-primary" />
                <span aria-hidden>•</span>
                <Text text={formatDate(post.publishedAt)} as="span" typography="label-1-regular" className="text-label-1-regular text-secondary" />
                <span aria-hidden>•</span>
                <Text text={post.readTime} as="span" typography="label-1-regular" className="text-label-1-regular text-secondary" />
              </div>

              <span className="mt-32 inline-flex w-fit items-center gap-4 rounded-full bg-primary-inverse px-20 py-10 text-label-2-medium text-primary-inverse md:mt-auto md:text-label-1-semibold">
                Read more
                <svg viewBox="0 0 16 16" className="h-16 w-16" fill="none" aria-hidden>
                  <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
            <div className="w-full md:pr-[max(0.75rem,calc((100vw-1260px)/2))]">
              <div
                className="relative isolate aspect-video w-full overflow-hidden rounded-alt-xl bg-primary md:ml-auto md:max-w-[820px]"
              >
                <img
                  src={post.thumbnail.url}
                  alt={post.thumbnail.alternativeText}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-alt-xl ring-1 ring-inset ring-primary/5"
                />
              </div>
            </div>
          </article>
        </a>
      </div>
    </section>
  )
}

export default function RegionStoriesPage({
  region,
  // Data overrides let another market (e.g. Australia) reuse this exact page
  // design with its own content. Defaults keep the India/global behaviour.
  postsData = posts,
  filtersData = filters,
  featured,
}) {
  const isMobile = useIsMobile()
  const [active, setActive] = useState('all')
  const [shown, setShown] = useState(STORIES_PAGE_SIZE)
  const heroRef = useRef(null)
  const canvasRef = useRef(null)
  useScrollFx()
  useHeroAnimations(heroRef, canvasRef)

  useEffect(() => {
    setActive('all')
    setShown(STORIES_PAGE_SIZE)
  }, [region])

  useEffect(() => setShown(STORIES_PAGE_SIZE), [active])

  const featuredPost = featured || regionFeatured.find((item) => item.region === region)?.post
  const matchedStories = useMemo(
    () => postsData.filter((post) => post.region === region && (active === 'all' || post.categoryKey === active)),
    [active, region, postsData],
  )
  // Placeholder only: filtered categories often have fewer than `shown` real
  // India stories, so cycle through what exists to keep every row a full
  // 3-up grid. Swap for real posts once there's enough content.
  const allRows = matchedStories.length
    ? Array.from({ length: Math.max(shown, ROW_TWO_SIZE) }, (_, index) => matchedStories[index % matchedStories.length])
    : []
  const firstRow = allRows.slice(0, ROW_TWO_SIZE)
  const secondRow = allRows.slice(ROW_TWO_SIZE)

  return (
    <div className="min-h-screen bg-slate-50 text-primary">
      <Nav overLight />
      <main>
        {featuredPost && (
          <RegionHero region={region} post={featuredPost} heroRef={heroRef} canvasRef={canvasRef} />
        )}

        <section className="mx-auto max-w-7xl px-24 py-40 md:py-64">
          <h2 className="sfx-line">
            <Text
              text={`Stories from ${region}`}
              as="span"
              className="text-display-1-bold text-primary md:text-display-1-bold"
            />
          </h2>

          <div className="relative z-20 mt-8 min-w-0 md:mt-16">
            {isMobile ? (
              <ChipSlider
                items={[filtersData.map((filter) => ({ id: filter.key, label: filter.label }))]}
                selectedIds={[active]}
                onChipClick={(id) => setActive(id)}
              />
            ) : (
              <NotchTabs
                items={filtersData.map((filter) => ({ id: filter.key, key: filter.key, text: filter.label }))}
                activeIndex={filtersData.findIndex((filter) => filter.key === active)}
                layout="scroll"
                showIcon={false}
                onTabChange={(_index, item) => setActive(item.key)}
                className="gap-160 [&>a]:!basis-auto [&>a]:!px-160 [&>a]:whitespace-nowrap [&>button]:!basis-auto [&>button]:!px-160 [&>button]:whitespace-nowrap"
              />
            )}
          </div>

          <div key={active} className="sfx-stagger mt-16 grid grid-cols-1 gap-24 sm:grid-cols-2 md:mt-32 lg:grid-cols-3">
            {firstRow.map((post, index) => (
              <div key={`${post.id}-${index}`} className="sfx h-full">
                <BlogCard {...toBlogCard(post, 'large')} badge={undefined} />
              </div>
            ))}
          </div>
        </section>

        <Newsletter />

        {secondRow.length > 0 && (
          <section className="mx-auto max-w-7xl px-24 pt-48 pb-32 md:pt-66 md:pb-40">
            <div key={active} className="sfx-stagger grid grid-cols-1 gap-24 sm:grid-cols-2 lg:grid-cols-3">
              {secondRow.map((post, index) => (
                <div key={`${post.id}-${index}`} className="sfx h-full">
                  <BlogCard {...toBlogCard(post, 'large')} badge={undefined} />
                </div>
              ))}
            </div>

            <div className="mt-48 flex justify-center">
              <div className="w-200">
                <Button
                  cta={{ text: 'Load more', variant: 'secondary', size: 'medium' }}
                  onClick={() => setShown((count) => count + STORIES_PAGE_SIZE)}
                />
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  )
}
