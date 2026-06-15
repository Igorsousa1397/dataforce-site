import Reveal from './Reveal'
import { waURL, TAGLINE } from '../config'
import { Whatsapp } from './Icons'

export default function FinalCTA() {
  return (
    <section className="relative z-10 pt-[30px] pb-[110px]">
      <div className="wrap">
        <Reveal className="relative overflow-hidden text-center rounded-[26px] py-16 px-7 border border-[rgba(106,47,176,0.35)] bg-[radial-gradient(700px_circle_at_50%_-10%,rgba(106,47,176,0.4),transparent_60%)] bg-panel">
          <div className="eyebrow justify-center mb-4">{TAGLINE}</div>
          <h2 className="text-[clamp(28px,4.5vw,44px)] max-w-[680px] mx-auto mb-4">Pronto para centralizar e proteger os dados da sua empresa?</h2>
          <p className="text-muted text-[17px] max-w-[520px] mx-auto mb-8">
            Fale com um especialista no WhatsApp e receba um diagnóstico gratuito da sua operação.
          </p>
          <a href={waURL} target="_blank" rel="noopener" className="btn btn-bronze text-base px-8 py-4">
            <Whatsapp className="w-[19px] h-[19px]" /> Quero um diagnóstico gratuito
          </a>
        </Reveal>
      </div>
    </section>
  )
}
