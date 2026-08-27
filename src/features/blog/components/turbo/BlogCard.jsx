import Badge from './Badge'
import Text from './Text'

/** Turbo UI v2 has no published BlogCard composite; this composes installed v2 primitives. */
export default function BlogCard({ title, summary, thumbnail, authors = [], publishedAt, readTime, badge, onClick, redirection, className = '' }) {
  const href = redirection?.data?.url
  const content = (
    <article className={`flex h-full flex-col overflow-hidden rounded-alt-lg border border-secondary bg-primary ${className}`}>
      <div className="relative aspect-video overflow-hidden bg-secondary">
        {thumbnail?.url && <img src={thumbnail.url} alt={thumbnail.alternativeText ?? title} className="h-full w-full object-cover" loading="lazy" />}
        {badge?.text && <div className="absolute left-12 top-12"><Badge text={badge.text} variant={badge.variant} size="2xs" borderRadius="full" /></div>}
      </div>
      <div className="flex flex-1 flex-col gap-8 p-16">
        <Text text={title} as="h3" typography="heading-h4-semibold" />
        {summary && <Text text={summary} as="p" typography="body-3" className="text-secondary" />}
        <div className="mt-auto flex items-center justify-between gap-8 pt-8">
          <Text text={authors[0]?.name ?? ''} as="span" typography="label-2-semibold" />
          <Text text={[publishedAt?.slice(0, 10), readTime].filter(Boolean).join(' · ')} as="span" typography="caption-1" className="text-tertiary" />
        </div>
      </div>
    </article>
  )
  if (href) return <a href={href} onClick={onClick} className="block h-full">{content}</a>
  return <button type="button" onClick={onClick} className="block h-full w-full text-left">{content}</button>
}
