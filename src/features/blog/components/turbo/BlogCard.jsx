import Badge from './Badge'
import Text from './Text'

function formatDate(value) {
  if (!value) return ''
  const date = new Date(value.replace(' ', 'T'))
  return Number.isNaN(date.getTime()) ? '' : [date.getDate(), date.getMonth() + 1, date.getFullYear()].join(' ')
}

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
        <Text text={title} as="h3" typography="heading-h3-semibold" maxLines={2} className="text-primary" />
        {summary && <Text text={summary} as="p" typography="body-1" maxLines={2} className="text-secondary" />}
        <div className="mt-auto flex flex-col gap-4 pt-8">
          <Text text={authors[0]?.name ?? ''} as="span" typography="label-1-medium" className="text-primary" />
          <div className="flex items-center gap-4 text-tertiary">
            <Text text={formatDate(publishedAt)} as="span" typography="label-3-regular" className="text-tertiary" />
            {publishedAt && readTime && <span aria-hidden>·</span>}
            <Text text={readTime ?? ''} as="span" typography="label-3-regular" className="text-tertiary" />
          </div>
        </div>
      </div>
    </article>
  )
  if (href) return <a href={href} onClick={onClick} className="block h-full">{content}</a>
  return <button type="button" onClick={onClick} className="block h-full w-full text-left">{content}</button>
}
