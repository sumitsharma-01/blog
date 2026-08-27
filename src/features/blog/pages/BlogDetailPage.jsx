import { useEffect, useMemo, useState } from 'react'
import BlogCard from '../components/turbo/BlogCard'
import IconButton from '../components/turbo/IconButton'
import Slider from '../components/turbo/Slider'
import Text from '../components/turbo/Text'
import Footer from '../components/layout/Footer'
import Nav from '../components/layout/Nav'
import '../styles/blogdetail.css'
import { posts } from '../content/data'
import { toBlogCard } from '../utils/toBlogCard'
import useIsMobile from '../hooks/useIsMobile'

const fallbackArticleSections = [
  {
    heading: 'The problem we kept seeing',
    paragraphs: [
      'The obvious explanation is rarely the complete one. Teams move quickly, systems grow, and useful context gets spread across dashboards, meetings and individual experience. What looks like one isolated decision is usually the result of several connected choices.',
      'We started by slowing the problem down. Instead of asking who made the mistake, we asked what information was available, which trade-offs were visible and where the process made the right action unnecessarily difficult.',
    ],
    image: {
      url: 'https://media-ae.cars24.com/blog/cms/cms/2025/03/10/7787f62d-d47d-436f-9802-e4124d82fb39Group%20632017.png',
      alt: 'Illustration of a team reviewing a dashboard',
      caption: 'Sample inline image block — swap for real article art per section.',
    },
  },
  {
    heading: 'What changed when we looked closer',
    paragraphs: [
      'The most valuable insights came from the people closest to the work. Their different perspectives exposed assumptions that had become invisible and helped us separate symptoms from the underlying system.',
      'From there, the work became practical: simplify the hand-offs, make ownership clear, measure the moments that matter and create fast feedback loops. Small changes became meaningful because they were connected to a shared understanding of the problem.',
    ],
    table: {
      caption: 'Sample data table block',
      headers: ['Metric', 'Before', 'After'],
      rows: [
        ['Time to decision', '4.5 days', '1.2 days'],
        ['Hand-offs per ticket', '6', '2'],
        ['Repeat issues / month', '18', '3'],
      ],
    },
  },
  {
    heading: 'The road ahead',
    paragraphs: [
      'There is no final version of a system that serves millions of journeys. The goal is to keep learning, keep listening and keep improving the experience one decision at a time.',
      'This is dummy editorial content for the first detail-page layout. The final article copy can replace it without changing the page structure or the Turbo UI components around it.',
    ],
  },
].map((section) => ({
  ...section,
  id: section.heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, ''),
}))

function ArticleTable({ table }) {
  return (
    <div className="mt-32 overflow-x-auto rounded-alt-xl border border-primary">
      <table className="w-full min-w-[420px] border-collapse text-left">
        <thead>
          <tr className="bg-brand-subtler">
            {table.headers.map((header) => (
              <th key={header} className="px-16 py-12 text-label-2-semibold text-primary">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, rowIndex) => (
            <tr
              key={row[0]}
              className={rowIndex % 2 === 1 ? 'bg-secondary' : undefined}
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={`${row[0]}-${cellIndex}`}
                  className="border-t border-primary px-16 py-12 text-label-2-regular text-secondary"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {table.caption && (
        <Text
          text={table.caption}
          as="p"
          typography="body-3"
          className="border-t border-primary bg-secondary px-16 py-8 text-tertiary"
        />
      )}
    </div>
  )
}

function ArticleImage({ image }) {
  return (
    <figure className="mt-32">
      <div className="aspect-video overflow-hidden rounded-alt-xl bg-secondary">
        <img src={image.url} alt={image.alt} className="h-full w-full object-cover" />
      </div>
      {image.caption && (
        <Text
          text={image.caption}
          as="figcaption"
          typography="body-3"
          className="mt-8 text-tertiary"
        />
      )}
    </figure>
  )
}

function ArticleOverview({ sections, activeId, visible = true }) {
  const jumpTo = (event, id) => {
    event.preventDefault()
    const target = document.getElementById(id)
    if (!target) return

    // Land the selected section inside the reader's natural focus zone rather
    // than pinning its heading against the fixed navigation.
    const focusLine = Math.max(180, Math.min(window.innerHeight * 0.38, 340))
    const top = window.scrollY + target.getBoundingClientRect().top - focusLine
    window.scrollTo({ top, behavior: 'smooth' })
  }

  const activeIndex = Math.max(0, sections.findIndex((section) => section.id === activeId))

  return (
    <nav
      aria-label="Article overview"
      className={`bd-overview-rail ${visible ? 'is-visible' : ''}`}
    >
      <Text
        text="Overview"
        as="h2"
        className="text-fs-130 font-semibold text-slate-400"
      />
      <ol className="bd-steps mt-200">
        {sections.map((section, index) => {
          const status = index < activeIndex ? 'done' : index === activeIndex ? 'current' : 'upcoming'
          const isLast = index === sections.length - 1
          return (
            <li key={section.id} className="bd-step" data-status={status} data-last={isLast || undefined}>
              <a
                href={`#${section.id}`}
                onClick={(event) => jumpTo(event, section.id)}
                aria-current={status === 'current' ? 'true' : undefined}
                className="bd-step-link"
              >
                <span className="bd-step-rail" aria-hidden="true">
                  <span className="bd-step-dot" />
                  {!isLast && <span className="bd-step-line" />}
                </span>
                <span className="bd-step-body">
                  <span className="bd-step-label">{section.heading}</span>
                </span>
              </a>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

function formatDate(value) {
  const date = new Date(value.replace(' ', 'T'))
  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date)
}

// Stable per-article seed so the reaction counts stay put across renders and
// don't reset to 0/0. Same id → same numbers.
function hashString(str) {
  let hash = 0
  for (let i = 0; i < str.length; i += 1) {
    hash = (hash * 31 + str.charCodeAt(i)) >>> 0
  }
  return hash
}

function seedReactionCounts(id) {
  const hash = hashString(id || 'post')
  return {
    likes: 180 + (hash % 4200),
    dislikes: 3 + (Math.floor(hash / 13) % 120),
  }
}

// Compact form keeps the count to ~4 chars (1.2k, 34k, 2.1M) so a large number
// never widens the row or wraps under the icon.
function formatCount(value) {
  if (value < 1000) return String(value)
  if (value < 1_000_000) {
    return `${(value / 1000).toFixed(value < 10_000 ? 1 : 0)}`.replace(/\.0$/, '') + 'k'
  }
  return `${(value / 1_000_000).toFixed(1)}`.replace(/\.0$/, '') + 'M'
}

function shareUrl(platform, post) {
  const url = encodeURIComponent(window.location.href)
  const text = encodeURIComponent(post.title)
  if (platform === 'twitter') return `https://x.com/intent/post?url=${url}&text=${text}`
  if (platform === 'facebook') return `https://www.facebook.com/sharer/sharer.php?u=${url}`
  return `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
}

function ArticleActions({ post }) {
  const isMobile = useIsMobile()
  // 'up' | 'down' | null — a single choice, like most article reaction bars.
  const [vote, setVote] = useState(null)
  const [copied, setCopied] = useState(false)
  const [shareOpen, setShareOpen] = useState(false)
  const base = useMemo(() => seedReactionCounts(post.id), [post.id])
  const likeCount = base.likes + (vote === 'up' ? 1 : 0)
  const dislikeCount = base.dislikes + (vote === 'down' ? 1 : 0)

  const toggle = (choice) => {
    setVote((current) => (current === choice ? null : choice))
  }

  const socialShare = (platform) => {
    window.open(shareUrl(platform, post), '_blank', 'noopener,noreferrer')
  }

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  // Mobile share popover closes after picking a platform, and on any tap
  // outside the share cluster.
  const shareFromPopover = (platform) => {
    socialShare(platform)
    setShareOpen(false)
  }

  useEffect(() => {
    if (!shareOpen) return undefined
    const onPointerDown = (event) => {
      if (!event.target.closest('[data-share-popover]')) setShareOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [shareOpen])

  return (
    <section className="mx-auto flex w-full max-w-[820px] flex-row items-center justify-between gap-24 px-24 py-16 md:py-32">
      <div className="flex items-center gap-24">
        <div className={`bd-reaction-control flex items-center gap-8 ${vote === 'up' ? 'is-selected' : ''}`}>
          <IconButton
            icon={vote === 'up' ? 'thumbs-up-filled' : 'thumbs-up-outline'}
            theme={vote === 'up' ? 'brand' : 'secondary-outline'}
            size="action"
            iconSize="lg"
            onClick={() => toggle('up')}
            ariaLabel={vote === 'up' ? 'Remove like' : 'Like this article'}
          />
          <span className="min-w-[3ch] text-[15px] font-semibold leading-5 tabular-nums">{formatCount(likeCount)}</span>
        </div>

        <div className={`bd-reaction-control flex items-center gap-8 ${vote === 'down' ? 'is-selected' : ''}`}>
          <IconButton
            icon={vote === 'down' ? 'thumbs-down-filled' : 'thumbs-down-outline'}
            theme={vote === 'down' ? 'brand' : 'secondary-outline'}
            size="action"
            iconSize="lg"
            onClick={() => toggle('down')}
            ariaLabel={vote === 'down' ? 'Remove dislike' : 'Dislike this article'}
          />
          <span className="min-w-[3ch] text-[15px] font-semibold leading-5 tabular-nums">{formatCount(dislikeCount)}</span>
        </div>
      </div>

      {/* Desktop shows the share options inline; mobile collapses them into a
          single button that opens a popover with the same platforms. */}
      {isMobile ? (
        <div className="relative flex items-center" aria-label="Share this blog" role="group" data-share-popover>
          <IconButton
            icon={shareOpen ? 'close-line' : 'share-1'}
            theme={shareOpen ? 'brand' : 'secondary-outline'}
            size="action"
            iconSize="lg"
            onClick={() => setShareOpen((open) => !open)}
            ariaLabel={shareOpen ? 'Close share options' : 'Share this article'}
          />
          {shareOpen && (
            <div
              className="absolute bottom-[calc(100%+0.5rem)] right-0 z-30 flex items-center gap-120 rounded-full border border-lego-color-border-secondary-rest bg-white p-80 shadow-lg"
              role="menu"
              aria-label="Share options"
            >
              <IconButton icon="twitter" theme="secondary-outline" size="action" iconSize="lg" onClick={() => shareFromPopover('twitter')} ariaLabel="Share on X" />
              <IconButton icon="facebook" theme="secondary-outline" size="action" iconSize="lg" onClick={() => shareFromPopover('facebook')} ariaLabel="Share on Facebook" />
              <IconButton icon="linkedin" theme="secondary-outline" size="action" iconSize="lg" onClick={() => shareFromPopover('linkedin')} ariaLabel="Share on LinkedIn" />
              <IconButton icon={copied ? 'check-filled' : 'copy'} theme="secondary-outline" size="action" iconSize="lg" onClick={copyLink} ariaLabel="Copy article link" />
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center gap-16" aria-label="Share this blog" role="group">
          <IconButton icon="twitter" theme="secondary-outline" size="action" iconSize="lg" onClick={() => socialShare('twitter')} ariaLabel="Share on X" />
          <IconButton icon="facebook" theme="secondary-outline" size="action" iconSize="lg" onClick={() => socialShare('facebook')} ariaLabel="Share on Facebook" />
          <IconButton icon="linkedin" theme="secondary-outline" size="action" iconSize="lg" onClick={() => socialShare('linkedin')} ariaLabel="Share on LinkedIn" />
          <IconButton icon={copied ? 'check-filled' : 'copy'} theme="secondary-outline" size="action" iconSize="lg" onClick={copyLink} ariaLabel="Copy article link" />
        </div>
      )}
    </section>
  )
}

export default function BlogDetailPage({ post, relatedPosts = posts }) {
  const isMobile = useIsMobile()
  const articleSections = useMemo(
    () => (post.sections?.length ? post.sections : fallbackArticleSections).map((section) => ({
      ...section,
      id: section.id || section.heading
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, ''),
    })),
    [post],
  )
  const [activeId, setActiveId] = useState(articleSections[0]?.id)
  const [showOverview, setShowOverview] = useState(false)
  const related = useMemo(
    () => [
      ...relatedPosts.filter((item) => item.id !== post.id),
      ...relatedPosts.filter((item) => item.id === post.id),
    ].slice(0, 3),
    [post.id, relatedPosts],
  )

  useEffect(() => {
    window.scrollTo(0, 0)
    setActiveId(articleSections[0]?.id)
    document.title = `${post.title} — Autonauts`
    return () => {
      document.title = 'Autonauts — The Cars24 Blog'
    }
  }, [post.title, articleSections])

  useEffect(() => {
    const cover = document.getElementById('article-cover')
    if (!cover) return undefined

    // Show the overview as soon as the cover image starts scrolling up under the
    // fixed nav (its top passes the nav line). It only disappears when the reader
    // scrolls back up far enough that the whole image drops below the nav again.
    const NAV_LINE = 88
    const check = () => {
      const rect = cover.getBoundingClientRect()
      setShowOverview(rect.top <= NAV_LINE)
    }

    check()
    // capture: true so scroll fired by an inner scroll container (not just the
    // window) still reaches us — a plain bubble-phase listener misses those.
    window.addEventListener('scroll', check, { capture: true, passive: true })
    window.addEventListener('resize', check)
    // IntersectionObserver as a scroll-event-independent backup trigger.
    const observer = new IntersectionObserver(check, {
      threshold: [0, 0.25, 0.5, 0.75, 1],
    })
    observer.observe(cover)
    return () => {
      window.removeEventListener('scroll', check, { capture: true })
      window.removeEventListener('resize', check)
      observer.disconnect()
    }
  }, [post.id, articleSections])

  // Scrollspy: activate a section as its heading enters the upper-middle
  // reading zone. Driven by an IntersectionObserver (not scroll events) so it
  // stays in sync even when window 'scroll' events don't fire. On every
  // intersection change we recompute from live rects, which avoids gaps when a
  // section is shorter than the activation band.
  useEffect(() => {
    const els = articleSections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean)
    if (!els.length) return undefined

    const pick = () => {
      const activationLine = Math.max(180, Math.min(window.innerHeight * 0.38, 340))
      let current = articleSections[0]?.id
      for (const section of articleSections) {
        const el = document.getElementById(section.id)
        if (el && el.getBoundingClientRect().top <= activationLine) current = section.id
      }
      setActiveId(current)
    }

    const observer = new IntersectionObserver(pick, {
      rootMargin: '-38% 0px -55% 0px',
      threshold: [0, 1],
    })
    els.forEach((el) => observer.observe(el))
    pick()
    window.addEventListener('scroll', pick, { capture: true, passive: true })
    window.addEventListener('resize', pick)
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', pick, { capture: true })
      window.removeEventListener('resize', pick)
    }
  }, [post.id, articleSections])

  return (
    <div className="min-h-screen bg-slate-50 text-lego-color-text-primary-rest">
      <Nav solid />
      <main>
        <div className="relative mx-auto w-full max-w-[1240px]">
          <aside className="pointer-events-none absolute inset-y-0 left-0 hidden w-[210px] xl:block">
            <div className="pointer-events-auto sticky top-1/2 -translate-y-1/2 pl-240">
              <ArticleOverview
                sections={articleSections}
                activeId={activeId}
                visible={showOverview}
              />
            </div>
          </aside>

          <header className="mx-auto w-full max-w-[820px] px-24 pt-[120px] pb-48">
          {isMobile && (
            <a
              href={window.location.pathname.startsWith('/au') ? '/au' : '/'}
              className="bd-rise mb-24 inline-flex items-center gap-12 text-label-2-semibold text-secondary"
              style={{ '--bd-delay': '0.04s' }}
            >
              <IconButton
                icon="chevron-left-small-outline"
                theme="secondary-outline"
                size="small"
                iconSize="md"
                ariaLabel="Back to all stories"
              />
              All stories
            </a>
          )}
          <div className="flex flex-col items-start gap-16">
            <Text
              text={post.title}
              as="h1"
              className="bd-rise text-[40px] font-bold leading-[1.36] text-primary"
              style={{ '--bd-delay': '0.08s' }}
            />
            <Text
              text={post.summary}
              as="p"
              className="bd-rise text-xl leading-[1.36] text-secondary"
              style={{ '--bd-delay': '0.18s' }}
            />
          </div>
          <div className="bd-rise mt-24 flex flex-wrap items-center gap-x-12 gap-y-4 text-body-1" style={{ '--bd-delay': '0.28s' }}>
            <Text text={post.authors[0].name} as="span" typography="body-1" className="font-semibold text-primary" />
            <span className="text-tertiary" aria-hidden>•</span>
            <Text text={formatDate(post.publishedAt)} as="span" typography="body-1" className="text-secondary" />
            <span className="text-tertiary" aria-hidden>•</span>
            <Text text={post.category} as="span" typography="body-1" className="text-secondary" />
            <span className="text-tertiary" aria-hidden>•</span>
            <Text text={post.readTime} as="span" typography="body-1" className="text-secondary" />
          </div>
        </header>

        <div id="article-cover" className="mx-auto w-full max-w-[820px] px-24">
          <div className="aspect-video overflow-hidden rounded-2xl bg-lego-color-surface-subtle-rest">
            <img
              src={post.thumbnail.url}
              alt={post.thumbnail.alternativeText}
              className="blog-detail-hero h-full w-full object-cover object-center"
            />
          </div>
        </div>

        <article className="mx-auto w-full max-w-[820px] px-24 py-48">
          <div className="space-y-48">
            {articleSections.map((section, index) => (
              <section
                key={section.heading}
                id={section.id}
                className="bd-rise scroll-mt-1000 md:scroll-mt-1200"
                style={{ '--bd-delay': `${0.38 + index * 0.12}s` }}
              >
                <Text text={section.heading} as="h2" className="text-xl font-semibold leading-[1.36] text-primary" />
                <div className="mt-12 space-y-20">
                  {section.paragraphs.map((paragraph) => (
                    <Text key={paragraph} text={paragraph} as="p" typography="body-1" className="leading-[1.36] text-secondary" />
                  ))}
                </div>
                {section.image && <ArticleImage image={section.image} />}
                {section.table && <ArticleTable table={section.table} />}
                {section.quote && (
                  <blockquote className="mt-32 border-l-4 border-brand-base bg-brand-subtler px-32 py-32">
                    <Text
                      text={section.quote}
                      as="p"
                      className="text-xl font-semibold leading-[1.36] text-primary"
                    />
                  </blockquote>
                )}
              </section>
            ))}
          </div>
        </article>
        </div>

        <ArticleActions post={post} />

        <section className="mx-auto max-w-7xl px-24 pt-24 pb-48 md:pt-48 md:pb-48">
          <div className="rounded-alt-xl bg-slate-100 p-24">
          <Text text="Continue the Journey" as="h2" className="text-xl font-semibold text-primary" />
          <Text text="Every story leads to another. Here's where to head next." as="p" typography="body-1" className="mt-8 text-secondary" />
          {isMobile ? (
            <div className="mt-32 pt-8" role="region" aria-label="More Cars24 blog stories">
              <Slider cardsPerView={1.15} gap="0.75rem" edgeGap="0.75rem" showDots>
                {related.map((item) => (
                  <div key={item.id} className="h-full">
                    <BlogCard {...toBlogCard(item, 'large')} badge={undefined} />
                  </div>
                ))}
              </Slider>
            </div>
          ) : (
            <div
              className="mt-32 grid grid-cols-1 gap-24 pt-8 md:grid-cols-2 lg:grid-cols-3"
              role="region"
              aria-label="More Cars24 blog stories"
            >
              {related.map((item, index) => (
                <div
                  key={item.id}
                  className="sfx-pop h-full"
                  style={{ '--load-delay': `${index * 0.09}s` }}
                >
                  <BlogCard {...toBlogCard(item, 'large')} badge={undefined} />
                </div>
              ))}
            </div>
          )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
