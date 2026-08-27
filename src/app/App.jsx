import { useEffect, useState } from 'react'
import BlogPage from '../features/blog/pages/BlogPage'
import AustraliaBlogPage from '../features/blog/pages/AustraliaBlogPage'
import BlogDetailPage from '../features/blog/pages/BlogDetailPage'
import RegionStoriesPage from '../features/blog/pages/RegionStoriesPage'
import { resolveBlogRoute } from './routes'

export default function App() {
  const [pathname, setPathname] = useState(window.location.pathname)

  useEffect(() => {
    const syncRoute = () => setPathname(window.location.pathname)
    window.addEventListener('popstate', syncRoute)
    return () => window.removeEventListener('popstate', syncRoute)
  }, [])

  const route = resolveBlogRoute(pathname)

  if (route.name === 'au-detail') {
    // key by post id so detail→detail navigation remounts the page and its
    // entrance animations replay (otherwise React reuses the same instance and
    // the one-shot CSS reveals never re-run).
    return <BlogDetailPage key={route.post.id} post={route.post} relatedPosts={route.relatedPosts} />
  }

  if (route.name === 'detail') {
    return <BlogDetailPage key={route.post.id} post={route.post} />
  }

  if (route.name === 'archive') {
    return <BlogPage />
  }

  if (route.name === 'australia') {
    return <AustraliaBlogPage />
  }

  if (route.name === 'region') {
    return <RegionStoriesPage region={route.region} />
  }

  return <RegionStoriesPage region="India" />
}
