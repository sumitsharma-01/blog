import Nav from '../components/layout/Nav'
import Hero from '../components/sections/Hero'
import FeaturedStory from '../components/sections/FeaturedStory'
import FreshOffTheRoad from '../components/sections/FreshOffTheRoad'
import AllStories from '../components/sections/AllStories'
import Newsletter from '../components/sections/Newsletter'
import Footer from '../components/layout/Footer'
import useHorizontalCarouselContainment from '../hooks/useHorizontalCarouselContainment'
import useScrollFx from '../hooks/useScrollFx'
import '../styles/scrollfx.css'

export default function BlogPage() {
  // Plain smooth scrolling only. Lenis (in useScrollFx) provides the smooth
  // wheel/momentum feel across the whole page; there is no section snapping.
  useScrollFx()
  useHorizontalCarouselContainment()
  return (
    <div className="min-h-screen bg-secondary text-primary">
      <Nav overLight />
      <main>
        <Hero />
        <div className="curtain-body">
          <FeaturedStory />
          <FreshOffTheRoad />
          <Newsletter />
          <AllStories />
        </div>
      </main>
      <Footer />
    </div>
  )
}
