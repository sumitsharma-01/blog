import { useEffect } from 'react'

function elasticOut(t, period = 0.55) {
  if (t <= 0) return 0
  if (t >= 1) return 1
  return Math.pow(2, -10 * t) * Math.sin(((t - period / 4) * (2 * Math.PI)) / period) + 1
}

export default function useHeroAnimations(heroRef, canvasRef) {
  useEffect(() => {
    const hero = heroRef.current
    const canvas = canvasRef.current
    if (!hero || !canvas) return undefined

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const cleanups = []

    if (!reduced) {
      const context = canvas.getContext('2d')
      if (context) {
        const cellSize = 72
        const dpr = Math.min(window.devicePixelRatio || 1, 2)
        const drift = 16
        let width = 0
        let height = 0
        let offset = 0
        let twinkleTime = 0
        const lit = {}

        const sizeGrid = () => {
          width = hero.clientWidth
          height = hero.clientHeight
          canvas.width = width * dpr
          canvas.height = height * dpr
          canvas.style.width = `${width}px`
          canvas.style.height = `${height}px`
          context.setTransform(dpr, 0, 0, dpr, 0, 0)
        }
        sizeGrid()
        window.addEventListener('resize', sizeGrid)
        cleanups.push(() => window.removeEventListener('resize', sizeGrid))

        const igniteAt = (x, y, strength) => {
          if (x < 0 || y < 0 || x >= width || y >= height) return
          const cellX = Math.floor((x + offset) / cellSize)
          const cellY = Math.floor((y + offset * 0.6) / cellSize)
          lit[`${cellX},${cellY}`] = { strength }
        }
        const onMove = (event) => {
          const rect = hero.getBoundingClientRect()
          igniteAt(event.clientX - rect.left, event.clientY - rect.top, 1)
        }
        hero.addEventListener('pointermove', onMove)
        cleanups.push(() => hero.removeEventListener('pointermove', onMove))

        let raf = 0
        let last = performance.now()
        const tick = (now) => {
          raf = requestAnimationFrame(tick)
          const delta = now - last
          last = now
          if (window.scrollY > innerHeight * 1.1) return
          offset += (drift * delta) / 1000
          twinkleTime -= delta
          if (twinkleTime <= 0) {
            twinkleTime = 380 + Math.random() * 720
            igniteAt(Math.random() * width, Math.random() * height, 0.5 + Math.random() * 0.3)
          }

          context.clearRect(0, 0, width, height)
          // Keep the grid inside the brand-blue family so it reads as a soft
          // texture instead of a grey wireframe on the pale hero.
          context.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue("--brand-100").trim()
          context.lineWidth = 1
          context.beginPath()
          const offsetX = -(offset % cellSize)
          const offsetY = -((offset * 0.6) % cellSize)
          for (let x = offsetX; x < width; x += cellSize) {
            context.moveTo(x + 0.5, 0)
            context.lineTo(x + 0.5, height)
          }
          for (let y = offsetY; y < height; y += cellSize) {
            context.moveTo(0, y + 0.5)
            context.lineTo(width, y + 0.5)
          }
          context.stroke()
          context.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--brand-100").trim()
          Object.keys(lit).forEach((key) => {
            const item = lit[key]
            item.strength *= 0.955
            if (item.strength < 0.02) {
              delete lit[key]
              return
            }
            const [x, y] = key.split(',').map(Number)
            context.globalAlpha = item.strength * 0.06
            context.fillRect(x * cellSize - offset + 1, y * cellSize - offset * 0.6 + 1, cellSize - 1, cellSize - 1)
          })
          context.globalAlpha = 1
        }
        raf = requestAnimationFrame(tick)
        cleanups.push(() => cancelAnimationFrame(raf))
      }
    }

    hero.querySelectorAll('.doodle.grab').forEach((element) => {
      let x = 0
      let y = 0
      let dragging = false
      let lastX = 0
      let lastY = 0
      let springRaf = 0
      const frame = document.createElement('span')
      frame.className = 'sel-frame'
      frame.innerHTML = '<i></i><i></i><i></i><i></i>'
      element.appendChild(frame)

      const apply = () => { element.style.transform = `translate(${x}px, ${y}px)` }
      const clampPosition = () => {
        x = Math.min(hero.clientWidth - element.offsetLeft - element.offsetWidth, Math.max(-element.offsetLeft, x))
        y = Math.min(hero.clientHeight - element.offsetTop - element.offsetHeight, Math.max(-element.offsetTop, y))
      }
      const onDown = (event) => {
        dragging = true
        lastX = event.clientX
        lastY = event.clientY
        cancelAnimationFrame(springRaf)
        try { element.setPointerCapture(event.pointerId) } catch { /* optional */ }
        element.classList.add('-sel')
        event.preventDefault()
      }
      const onDrag = (event) => {
        if (!dragging) return
        x += event.clientX - lastX
        y += event.clientY - lastY
        lastX = event.clientX
        lastY = event.clientY
        clampPosition()
        apply()
      }
      const release = () => {
        if (!dragging) return
        dragging = false
        element.classList.remove('-sel')
        const startX = x
        const startY = y
        const startedAt = performance.now()
        const duration = 1200
        const spring = (now) => {
          const progress = Math.min((now - startedAt) / duration, 1)
          const eased = elasticOut(progress)
          x = startX * (1 - eased)
          y = startY * (1 - eased)
          apply()
          if (progress < 1) springRaf = requestAnimationFrame(spring)
          else { x = 0; y = 0; apply() }
        }
        springRaf = requestAnimationFrame(spring)
      }

      element.addEventListener('pointerdown', onDown)
      element.addEventListener('pointermove', onDrag)
      element.addEventListener('pointerup', release)
      element.addEventListener('pointercancel', release)
      cleanups.push(() => {
        cancelAnimationFrame(springRaf)
        element.removeEventListener('pointerdown', onDown)
        element.removeEventListener('pointermove', onDrag)
        element.removeEventListener('pointerup', release)
        element.removeEventListener('pointercancel', release)
        frame.remove()
      })
    })

    return () => cleanups.forEach((cleanup) => cleanup())
  }, [heroRef, canvasRef])
}
