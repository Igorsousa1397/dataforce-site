import { useEffect, useRef } from 'react'

// Halo de luz que segue o mouse com leve atraso (cores da marca).
// Desativado em telas de toque e com prefers-reduced-motion.
export default function CursorHalo() {
  const ref = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia('(pointer: coarse)').matches) return

    const el = ref.current
    let raf
    let tx = window.innerWidth / 2
    let ty = window.innerHeight / 2
    let x = tx, y = ty
    let shown = false

    const onMove = (e) => {
      tx = e.clientX
      ty = e.clientY
      if (!shown) { shown = true; el.style.opacity = '1' }
    }
    const onOut = (e) => {
      if (!e.relatedTarget) { shown = false; el.style.opacity = '0' }
    }
    const tick = () => {
      x += (tx - x) * 0.15 // menor = mais "preguiçoso"/atrasado
      y += (ty - y) * 0.15
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseout', onOut)
    tick()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseout', onOut)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="fixed top-0 left-0 pointer-events-none z-[9998]"
      style={{
        width: 340,
        height: 340,
        borderRadius: '9999px',
        background:
          'radial-gradient(circle, rgba(168,118,234,0.28), rgba(168,118,234,0.10) 40%, transparent 70%)',
        filter: 'blur(14px)',
        mixBlendMode: 'screen',
        opacity: 0,
        transition: 'opacity .3s ease',
        willChange: 'transform',
      }}
    />
  )
}