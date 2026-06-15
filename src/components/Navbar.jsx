import logoMark from '../assets/logo-mark.png'
import { waURL } from '../config'
import { Whatsapp } from './Icons'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-void/60 border-b border-[var(--line)]">
      <div className="wrap flex items-center justify-between h-[74px]">
        <a href="#top" className="flex items-center gap-3" aria-label="DataForce — início">
          <img src={logoMark} alt="DataForce" className="h-[34px] w-auto" />
          <span className="font-extrabold tracking-[0.2em] text-[15px]">DATAFORCE</span>
        </a>
        <div className="flex items-center gap-[30px]">
          <a href="#solucoes" className="hidden md:inline text-sm font-semibold text-muted hover:text-ink transition-colors">Soluções</a>
          <a href="#quemsomos" className="hidden md:inline text-sm font-semibold text-muted hover:text-ink transition-colors">Quem somos</a>
          <a href="#comofunciona" className="hidden md:inline text-sm font-semibold text-muted hover:text-ink transition-colors">Como funciona</a>
          <a href={waURL} target="_blank" rel="noopener" className="hidden lg:inline-flex btn btn-bronze">
            <Whatsapp className="w-[19px] h-[19px]" /> Fale com especialista
          </a>
        </div>
      </div>
    </nav>
  )
}
