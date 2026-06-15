import { Link } from 'react-router-dom'
import logoMark from '../assets/logo-mark.png'
import Footer from '../components/Footer'

export default function LegalLayout({ title, updated, children }) {
  return (
    <>
      <div className="bg-fx" aria-hidden="true">
        <div className="bg-fx__glow"><span className="b3" /></div>
        <div className="bg-fx__grid" />
        <div className="bg-fx__grain" />
        <div className="bg-fx__vignette" />
      </div>

      <header className="sticky top-0 z-50 backdrop-blur-md bg-void/60 border-b border-[var(--line)]">
        <div className="wrap flex items-center justify-between h-[74px]">
          <Link to="/" className="flex items-center gap-3" aria-label="DataForce — início">
            <img src={logoMark} alt="DataForce" className="h-[34px] w-auto" />
            <span className="font-extrabold tracking-[0.2em] text-[15px]">DATAFORCE</span>
          </Link>
          <Link to="/" className="text-sm font-semibold text-muted hover:text-ink transition-colors">← Voltar ao site</Link>
        </div>
      </header>

      <main className="relative z-10 wrap max-w-[820px] py-[64px]">
        <span className="eyebrow">Documento legal</span>
        <h1 className="text-[clamp(30px,5vw,46px)] my-4">{title}</h1>
        <p className="text-muted text-sm mb-10">Última atualização: {updated}</p>
        <div className="legal">{children}</div>
      </main>

      <Footer />
    </>
  )
}
