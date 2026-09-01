import { useRef } from 'react'
import Text from '../turbo/Text'
import useHeroAnimations from '../../hooks/useHeroAnimations'
import '../../styles/hero.css'

const Spark = ({ fill }) => (
  <svg viewBox="0 0 40 40">
    <path d="M20 0 24 16 40 20 24 24 20 40 16 24 0 20 16 16Z" fill={fill} />
  </svg>
)

export default function Hero() {
  const heroRef = useRef(null)
  const canvasRef = useRef(null)
  useHeroAnimations(heroRef, canvasRef)

  return (
    <div id="top" className="hero-stage">
      <section
        ref={heroRef}
        className="hero-pin relative overflow-hidden bg-brand-base text-primary-inverse"
      >
        <canvas ref={canvasRef} className="hero-grid-canvas" aria-hidden />
        <div className="doodle d-spark1" aria-hidden><Spark fill="var(--color-mint-green-500)" /></div>
        <div className="doodle d-spark2" aria-hidden><Spark fill="var(--text-primary-inverse)" /></div>
        <div className="doodle d-spark4" aria-hidden><Spark fill="var(--color-sky-surge-600)" /></div>
        <div className="doodle d-car grab" aria-hidden><img src="/car-cut.png" alt="" /></div>
        <div className="doodle d-cone grab" aria-hidden><img src="/cone-cut.png" alt="" /></div>
        <div className="doodle d-light grab" aria-hidden><img src="/light-new.png" alt="" /></div>
        <div className="doodle d-astro grab" aria-hidden><img src="/astronaut-rocket.png" alt="" /></div>

        <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-240 py-1260 text-center">
          <h1 className="mb-240 flex flex-col items-center gap-80">
            <span className="hero-line"><span className="hero-line-in">
              <Text text="The" as="span" italics className="hero-block" />
            </span></span>
            <span className="hero-line"><span className="hero-line-in">
              <Text text="Cars24 Blog" as="span" italics className="hero-block -mint" />
            </span></span>
          </h1>
          <p className="hero-fade">
            <Text text="Better drives, " as="span" italics className="text-display-1-bold md:text-display-1-bold" />
            <Text text="better lives" as="span" italics className="text-display-1-bold text-mint-green-500 md:text-display-1-bold" />
          </p>
          <Text text="Technology, mobility, and everything in between." as="p" className="hero-fade mt-120 text-heading-h4-bold text-secondary-on-color md:text-heading-h3-bold" />
        </div>

        <div className="hero-scroll-cue" aria-hidden="true">
          <span className="hero-scroll-label">Scroll<br />down</span>
          <span className="hero-scroll-track"><span className="hero-scroll-arrow" /></span>
        </div>
      </section>
    </div>
  )
}
