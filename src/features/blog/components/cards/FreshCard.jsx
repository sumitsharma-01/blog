import { navigateFromBlogCard } from '../../utils/navigation'

function formatDate(value) {
  const date = new Date(value.replace(' ', 'T'))
  return new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }).format(date)
}

// Trapezoid "bucket" card: a solid colour card whose silhouette narrows toward
// the top, holding a dark media panel, heading, subheading, a date · region
// meta line, and a Read-more pill.
export default function FreshCard({ post }) {
  return (
    <a
      href={post.href}
      onClick={(event) => navigateFromBlogCard(event, post.href)}
      aria-label={post.title}
      className="fresh-trapezoid group relative flex h-full flex-col bg-white text-slate-900"
    >
      {/* Shared rounded-trapezoid clip for the media panel below. Defined
          inline per card (not just on FreshOffTheRoad) so FreshCard keeps its
          shape wherever it's used, even if that section isn't on the page.
          objectBoundingBox scales to each card's own box; duplicate ids
          across cards are harmless — clip-path just resolves to the first. */}
      <svg width="0" height="0" aria-hidden="true">
        <defs>
          <clipPath id="fresh-trapezoid-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0.012 0.15 Q 0 0 0.11 0 L 0.89 0 Q 1 0 0.988 0.15 L 0.932 0.85 Q 0.92 1 0.81 1 L 0.19 1 Q 0.08 1 0.068 0.85 Z" />
          </clipPath>
        </defs>
      </svg>
      {/* Dark media panel, clipped to a trapezoid narrowing toward the bottom */}
      <div className="fresh-trapezoid-media relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
        <img
          src={post.thumbnail.url}
          alt={post.thumbnail.alternativeText}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          draggable={false}
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col pt-4">
        <h3 className="line-clamp-2 text-fs-170 font-bold leading-[1.2] text-slate-900 md:text-fs-200">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-fs-130 leading-[1.5] text-slate-600 md:text-fs-150">
          {post.summary}
        </p>

        <div className="mt-auto flex items-center justify-between gap-2 pt-4">
          <span className="text-fs-110 text-slate-500 md:text-fs-130">
            {post.authors?.[0]?.name}
            {post.authors?.[0]?.name && <> <span aria-hidden>·</span> </>}
            {formatDate(post.publishedAt)}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-brand-blue-300 px-3 py-1 text-fs-110 font-semibold text-brand-blue-300 transition-colors group-hover:bg-brand-blue-300 group-hover:text-white md:text-fs-130">
            Read more
            <span aria-hidden>→</span>
          </span>
        </div>
      </div>
    </a>
  )
}
