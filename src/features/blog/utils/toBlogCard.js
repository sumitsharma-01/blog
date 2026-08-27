import { navigateFromBlogCard } from './navigation'

// Geo → BlogCard badge. Uses the design-system badge variants baked into the
// v2 blog-card: India = information, Australia = success, UAE = drive-pink.
export const regionBadge = {
  India: { text: 'India', variant: 'information' },
  Australia: { text: 'Australia', variant: 'success' },
  UAE: { text: 'UAE', variant: 'drive-pink' },
}

export function toBlogCard(post, size = 'large') {
  return {
    title: post.title,
    summary: post.summary,
    thumbnail: post.thumbnail,
    authors: post.authors,
    publishedAt: post.publishedAt,
    readTime: post.readTime,
    size,
    badge: regionBadge[post.region],
    className:
      'border-0 transition duration-200 hover:-translate-y-1 hover:shadow-lg',
    onClick: (event) => navigateFromBlogCard(event, post.href),
    redirection: {
      action: 'DEEP_LINK',
      data: { url: post.href, target: '_self' },
    },
  }
}
