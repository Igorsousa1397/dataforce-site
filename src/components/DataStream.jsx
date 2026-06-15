import { useEffect, useRef } from 'react'

// Hero: rede tecnológica suave — nós conectados + hub central discreto.
// Cores da marca. Respeita prefers-reduced-motion.
export default function DataStream() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = canvas.getContext('2d')
    let raf, w, h, cx, cy, dpr, pts, rings, t = 0
    const LINK = 135

    const resize = () => {
      dpr = window.devicePixelRatio || 1
      w = canvas.width = canvas.offsetWidth * dpr
      h = canvas.height = canvas.offsetHeight * dpr
      cx = w / 2
      cy = h / 2
      const n = Math.min(70, Math.floor((w * h) / (30000 * dpr)))
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.14 * dpr,
        vy: (Math.random() - 0.5) * 0.14 * dpr,
        gold: Math.random() < 0.07,
      }))
      rings = []
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

      // anéis concêntricos fixos (bem sutis)
      ctx.strokeStyle = 'rgba(150,95,210,0.045)'
      ctx.lineWidth = 1 * dpr
      for (const f of [0.3, 0.55, 0.85]) {
        ctx.beginPath()
        ctx.arc(cx, cy, maxR * f, 0, Math.PI * 2)
        ctx.stroke()
      }

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i], b = pts[j]
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < L) {
            ctx.strokeStyle = `rgba(150,95,210,${(1 - dist / L) * 0.16})`
            ctx.lineWidth = 1 * dpr
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
        const a = pts[i]
        const dc = Math.hypot(a.x - cx, a.y - cy)
        if (dc < L * 1.6) {
          ctx.strokeStyle = `rgba(168,118,234,${(1 - dc / (L * 1.6)) * 0.08})`
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(cx, cy)
          ctx.stroke()
        }
      }

      // pulso de radar ocasional e discreto
      if (t % 200 === 0) rings.push({ r: 0 })
      for (let k = rings.length - 1; k >= 0; k--) {
        const ring = rings[k]
        ring.r += 1 * dpr
        const al = Math.max(0, 1 - ring.r / maxR) * 0.12
        if (al <= 0) { rings.splice(k, 1); continue }
        ctx.strokeStyle = `rgba(170,120,235,${al})`
        ctx.lineWidth = 1.2 * dpr
        ctx.beginPath()
        ctx.arc(cx, cy, ring.r, 0, Math.PI * 2)
        ctx.stroke()
      }

      // nós
      for (const p of pts) {
        const rgb = p.gold ? '233,190,120' : '198,160,255'
        ctx.fillStyle = `rgba(${rgb},0.65)`
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.4 * dpr, 0, Math.PI * 2)
        ctx.fill()
      }

      raf = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={ref} className="absolute inset-0 -z-10 opacity-[0.55]" aria-hidden="true" />
}