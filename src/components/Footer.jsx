import { Link } from 'react-router-dom'
import logoFull from '../assets/logo-full.png'
import { waURL, INSTAGRAM, INSTAGRAM_HANDLE, PHONE_DISPLAY, EMAIL, SITE, SITE_URL } from '../config'
import { Whatsapp, Instagram } from './Icons'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[var(--line)] py-[46px]">
      <div className="wrap flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-[18px]">
          <Link to="/"><img src={logoFull} alt="DataForce" className="h-[54px]" /></Link>
          <div className="flex flex-col gap-[12px]">
            <a href={waURL} target="_blank" rel="noopener" className="text-muted text-sm inline-flex items-center gap-2 hover:text-ink transition-colors">
              <Whatsapp className="w-[18px] h-[18px]" /> {PHONE_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL}`} className="text-muted text-sm inline-flex items-center gap-2 hover:text-ink transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>
              {EMAIL}
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noopener" className="text-muted text-sm inline-flex items-center gap-2 hover:text-ink transition-colors">
              <Instagram className="w-[18px] h-[18px]" /> {INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>

        <div className="border-t border-[var(--line)] pt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-[13px] text-muted">
          <div>
            © 2026 DataForce · Desenvolvido por <span className="text-ink">iOS Tech Serviços de Tecnologia</span>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link to="/termos-de-servico" className="hover:text-ink transition-colors">Termos de Serviço</Link>
            <Link to="/politica-de-privacidade" className="hover:text-ink transition-colors">Política de Privacidade</Link>
            <Link to="/politica-de-cookies" className="hover:text-ink transition-colors">Política de Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
