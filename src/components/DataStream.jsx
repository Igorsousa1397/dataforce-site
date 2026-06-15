import { useEffect, useRef } from 'react'

// Hero: rede tecnológica que preenche a área. Medição segura (com limites)
// e re-medição após o layout assentar. Cores da marca.
export default function DataStream() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = canvas.getContext('2d')
    let raf, w, h, cx, cy, dpr, pts, rings, t = 0
    const LINK = 200

    const seed = () => {
      const n = Math.min(180, Math.floor((w * h) / (13000 * dpr)))
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3 * dpr,
        vy: (Math.random() - 0.5) * 0.3 * dpr,
        gold: Math.random() < 0.09,
      }))
      rings = []
    }

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      const cw = Math.min(canvas.offsetWidth || window.innerWidth, 2400)
      const ch = Math.min(canvas.offsetHeight || 600, 1600)
      w = canvas.width = Math.max(1, cw) * dpr
      h = canvas.height = Math.max(1, ch) * dpr
      cx = w / 2
      cy = h / 2
      seed()
    }

    const draw = () => {
      t++
      ctx.clearRect(0, 0, w, h)
      const L = LINK * dpr
      const maxR = Math.hypot(w, h) * 0.5

      for (const p of pts) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
      }

      ctx.strokeStyle = 'rgba(150,95,210,0.07)'
      ctx.lineWidth = 1 * dpr
      for (const f of [0.25, 0.45, 0.7, 0.95]) {
        ctx.beginPath()
        ctx.arc(cx, cy, maxR * f, 0, Math.PI * 2)
        ctx.stroke()
      }

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i], b = pts[j]
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < L) {
            ctx.strokeStyle = `rgba(160,110,225,${(1 - dist / L) * 0.34})`
            ctx.lineWidth = 1.2 * dpr
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      if (t % 90 === 0) rings.push({ r: 0 })
      ctx.globalCompositeOperation = 'lighter'
      for (let k = rings.length - 1; k >= 0; k--) {
        const ring = rings[k]
        ring.r += 1.6 * dpr
        const al = Math.max(0, 1 - ring.r / maxR) * 0.24
        if (al <= 0) { rings.splice(k, 1); continue }
        ctx.strokeStyle = `rgba(180,130,245,${al})`
        ctx.lineWidth = 1.6 * dpr
        ctx.beginPath()
        ctx.arc(cx, cy, ring.r, 0, Math.PI * 2)
        ctx.stroke()
      }

      for (const p of pts) {
        const rgb = p.gold ? '233,190,120' : '200,160,255'
        const s = 2.1 * dpr
        ctx.fillStyle = `rgba(${rgb},0.16)`
        ctx.beginPath()
        ctx.arc(p.x, p.y, s * 2.6, 0, Math.PI * 2)
        ctx.fill()
        ctx.fillStyle = `rgba(${rgb},0.95)`
        ctx.beginPath()
        ctx.arc(p.x, p.y, s, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalCompositeOperation = 'source-over'

      raf = requestAnimationFrame(draw)
    }

    resize()
    draw()
    const re = setTimeout(resize, 80) // re-mede após o layout/fontes assentarem
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(re)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={ref} className="absolute inset-0 -z-10 opacity-90" aria-hidden="true" />
}