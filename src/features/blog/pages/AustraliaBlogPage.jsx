import RegionStoriesPage from './RegionStoriesPage'
import { auPosts, auFilters, auFeaturedPost } from '../content/dataAustralia'

// Australia blog — an exact replica of the India page (RegionStoriesPage),
// pointed at real cars24.com.au content. Any design/layout change to the India
// page lives in RegionStoriesPage and flows here automatically.
export default function AustraliaBlogPage() {
  return (
    <RegionStoriesPage
      region="Australia"
      postsData={auPosts}
      filtersData={auFilters}
      featured={auFeaturedPost}
    />
  )
}
