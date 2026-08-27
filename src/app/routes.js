import { auPosts } from '../features/blog/content/dataAustralia'
import { posts, regionFilters } from '../features/blog/content/data'

/**
 * Route contract for the client-side blog. Keep all public path parsing here
 * so page components remain independent from URLs and server port settings.
 */
export function resolveBlogRoute(pathname) {
  const auDetail = pathname.match(/^\/au\/blog\/([^/]+)\/?$/)
  if (auDetail) {
    return {
      name: 'au-detail',
      post: auPosts.find((item) => item.id === auDetail[1]) || auPosts[0],
      relatedPosts: auPosts,
    }
  }

  const detail = pathname.match(/^\/blog\/([^/]+)\/?$/)
  if (detail) {
    return { name: 'detail', post: posts.find((item) => item.id === detail[1]) || posts[0] }
  }

  if (pathname === '/archive' || pathname === '/archive/') return { name: 'archive' }
  if (pathname === '/au' || pathname === '/au/') return { name: 'australia' }

  const regionSlug = pathname.match(/^\/([^/]+)\/?$/)?.[1]
  const region = regionFilters.find(
    (item) => item.value !== 'all' && item.value.toLowerCase() === regionSlug?.toLowerCase(),
  )?.value

  return region ? { name: 'region', region } : { name: 'home' }
}
