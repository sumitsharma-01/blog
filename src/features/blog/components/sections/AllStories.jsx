import { useEffect, useMemo, useState } from 'react'
import BlogCard from '../turbo/BlogCard'
import Button from '../turbo/Button'
import ChipSlider from '../turbo/ChipSlider'
import NotchTabs from '../turbo/NotchTabs'
import Text from '../turbo/Text'
import { filters, posts } from '../../content/data'
import { toBlogCard } from '../../utils/toBlogCard'
import useIsMobile from '../../hooks/useIsMobile'

const PAGE_SIZE = 6

export default function AllStories({ posts: allPosts = posts, filters: allFilters = filters, heading = 'From across the world', sectionId = 'from-across-world' }) {
  const isMobile = useIsMobile()
  const [active, setActive] = useState('all')
  const [shown, setShown] = useState(PAGE_SIZE)
  const matched = useMemo(
    () => allPosts.filter((post) => active === 'all' || post.categoryKey === active),
    [active, allPosts],
  )
  // Reset the window whenever the filter changes.
  useEffect(() => setShown(PAGE_SIZE), [active])
  const visible = matched.slice(0, shown)
  const hasMore = matched.length > shown

  return (
    <section id={sectionId} className="mx-auto max-w-7xl px-240">
      <h2 className="sfx-line"><Text text={heading} as="span" className="text-fs-240 font-bold text-lego-color-text-primary-rest md:text-fs-280" /></h2>
      <div className="sfx relative z-20 mb-240 mt-320 flex flex-col gap-160 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0 flex-1">
          {isMobile ? (
            <ChipSlider
              items={[allFilters.map((filter) => ({ id: filter.key, label: filter.label }))]}
              selectedIds={[active]}
              onChipClick={(id) => setActive(id)}
            />
          ) : (
            <NotchTabs
              items={allFilters.map((filter) => ({ id: filter.key, key: filter.key, text: filter.label }))}
              activeIndex={allFilters.findIndex((filter) => filter.key === active)}
              layout="scroll"
              showIcon={false}
              onTabChange={(_index, item) => setActive(item.key)}
              className="gap-160 [&>a]:!basis-auto [&>a]:!px-160 [&>a]:whitespace-nowrap [&>button]:!basis-auto [&>button]:!px-160 [&>button]:whitespace-nowrap"
            />
          )}
        </div>
      </div>

      <div key={active} className="sfx-stagger grid grid-cols-1 gap-240 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((post, index) => {
          // The first page reveals on scroll (via the .sfx IntersectionObserver
          // system). Every card loaded after that is animated on mount instead —
          // scroll-triggered reveal is order-agnostic for content appended below
          // the fold, so later rows could fire before earlier ones (or skip the
          // transition entirely). A deterministic CSS animation, delayed by each
          // card's position within its batch, guarantees row-by-row order every
          // time "Load more" is clicked.
          const isFirstPage = index < PAGE_SIZE
          const batchDelay = ((index - PAGE_SIZE) % PAGE_SIZE) * 0.07
          return (
            <div
              key={post.id}
              className={`overflow-hidden rounded-2xl ${isFirstPage ? 'sfx' : 'sfx-pop'}`}
              style={isFirstPage ? undefined : { '--load-delay': `${batchDelay}s` }}
            >
              <BlogCard {...toBlogCard(post, 'large')} />
            </div>
          )
        })}
      </div>

      {hasMore && (
        <div className="mt-480 flex justify-center">
          {/* Button core is w-full, so it needs a token-sized parent. */}
          <div className="w-200">
            <Button
              cta={{ text: 'Load more', variant: 'secondary', size: 'medium' }}
              onClick={() => setShown((count) => count + PAGE_SIZE)}
            />
          </div>
        </div>
      )}
    </section>
  )
}
