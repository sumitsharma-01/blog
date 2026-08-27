import { flushSync } from 'react-dom'

function commitRoute(url) {
  window.history.pushState({}, '', url)
  flushSync(() => {
    window.dispatchEvent(new PopStateEvent('popstate'))
  })
  window.scrollTo(0, 0)
}

function runFallbackZoom(url, source) {
  const media = source?.querySelector('img')
  if (!media?.animate) {
    commitRoute(url)
    return
  }

  const start = media.getBoundingClientRect()
  const gutter = window.innerWidth < 768 ? 48 : 96
  const targetWidth = Math.min(window.innerWidth - gutter, 1230)
  const targetRatio = window.innerWidth >= 768 ? 2 : 16 / 9
  const targetHeight = targetWidth / targetRatio
  const targetLeft = (window.innerWidth - targetWidth) / 2
  const targetTop = window.innerWidth < 768 ? 136 : 176
  const overlay = media.cloneNode(true)
  const previousOverflow = document.body.style.overflow
  const sourceRadius = window.getComputedStyle(media.closest('[role="article"]') || media).borderRadius || '0px'
  const targetRadius = window.getComputedStyle(document.documentElement).getPropertyValue('--radius-320').trim() || '2rem'

  overlay.removeAttribute('loading')
  overlay.setAttribute('aria-hidden', 'true')
  Object.assign(overlay.style, {
    position: 'fixed',
    zIndex: '100',
    left: `${start.left}px`,
    top: `${start.top}px`,
    width: `${start.width}px`,
    height: `${start.height}px`,
    margin: '0',
    borderRadius: sourceRadius,
    objectFit: 'cover',
    pointerEvents: 'none',
    boxShadow: '0 24px 64px rgba(15, 23, 42, 0.24)',
  })

  document.body.style.overflow = 'hidden'
  document.body.appendChild(overlay)
  source.style.visibility = 'hidden'

  const zoom = overlay.animate(
    [
      {
        left: `${start.left}px`,
        top: `${start.top}px`,
        width: `${start.width}px`,
        height: `${start.height}px`,
        borderRadius: sourceRadius,
      },
      {
        left: `${targetLeft}px`,
        top: `${targetTop}px`,
        width: `${targetWidth}px`,
        height: `${targetHeight}px`,
        borderRadius: targetRadius,
      },
    ],
    {
      duration: 680,
      easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
      fill: 'forwards',
    },
  )

  const finish = () => {
    document.body.style.overflow = previousOverflow
    commitRoute(url)
    const reveal = overlay.animate(
      [{ opacity: 1 }, { opacity: 0 }],
      { duration: 180, easing: 'ease-out', fill: 'forwards' },
    )
    reveal.finished.finally(() => overlay.remove())
  }

  zoom.finished.then(finish).catch(finish)
}

export function navigateTo(url, source) {
  const destination = new URL(url, window.location.href)
  if (destination.origin !== window.location.origin) {
    window.location.href = destination.href
    return
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!document.startViewTransition || reduceMotion) {
    const route = destination.pathname + destination.search + destination.hash
    if (reduceMotion || !source) commitRoute(route)
    else runFallbackZoom(route, source)
    return
  }

  const currentHero = document.querySelector('.blog-detail-hero')
  const transitionSource = source?.querySelector('img') || source
  if (currentHero) currentHero.style.viewTransitionName = 'none'
  if (transitionSource) transitionSource.classList.add('blog-card-transition-source')

  const transition = document.startViewTransition(() => {
    commitRoute(destination.pathname + destination.search + destination.hash)
  })

  transition.finished.finally(() => {
    if (transitionSource) transitionSource.classList.remove('blog-card-transition-source')
    if (currentHero) currentHero.style.removeProperty('view-transition-name')
  })
}

export function navigateFromBlogCard(event, url) {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) return

  event.preventDefault()
  // Strict guarantee: the detail page must open on every card click. If the
  // fancy SPA / view-transition path throws for any reason, fall back to a
  // plain hard navigation so the click is never swallowed.
  try {
    navigateTo(url, event.currentTarget)
  } catch {
    window.location.assign(url)
  }
}
