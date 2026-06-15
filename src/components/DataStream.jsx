import { useEffect, useRef } from 'react'

// Fundo animado do hero: fluxo de partículas índigo (assinatura da marca).
// Respeita prefers-reduced-motion.
export default function DataStream() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = canvas.getContext('2d')
    let raf, w, h, parts

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      w = canvas.width = canvas.offsetWidth * dpr
      h = canvas.height = canvas.offsetHeight * dpr
      parts = Array.from({ length: Math.min(70, Math.floor(w / 26)) }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        s: (Math.random() * 1.6 + 0.4) * dpr,
        v: (Math.random() * 0.5 + 0.15) * dpr,
        a: Math.random() * 0.5 + 0.15,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (const p of parts) {
        p.y -= p.v
        if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w }
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.s, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(140,90,200,${p.a})`
        ctx.fill()
        ctx.beginPath()
        ctx.moveTo(p.x, p.y)
        ctx.lineTo(p.x, p.y + p.v * 18)
        ctx.strokeStyle = `rgba(140,90,200,${p.a * 0.4})`
        ctx.lineWidth = p.s * 0.6
        ctx.stroke()
      }
      raf = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  return <canvas ref={ref} className="absolute inset-0 -z-10 opacity-[0.65]" aria-hidden="true" />
}
