import DataStream from './DataStream'
import Reveal from './Reveal'
import Ratings from './Ratings'
import { waURL } from '../config'
import { Whatsapp } from './Icons'

const gauges = [
  ['Backup dos arquivos', 'CONCLUÍDO', '100%'],
  ['Conexão VPN', 'CRIPTOGRAFADA', '100%'],
  ['Servidor', 'GERENCIADO', '96%'],
  ['Versões retidas', '1 MÊS', '100%'],
]

const chips = [['acesso via', 'VPN'], ['backup', 'inteligente'], ['100%', 'gerenciado']]

export default function Hero() {
  return (
    <header id="top" className="relative z-10 pt-[88px] pb-[78px] overflow-hidden">
      <DataStream />
      <div className="wrap relative z-10 mb-10"><Ratings /></div>
      <div className="wrap grid grid-cols-1 lg:grid-cols-[1.05fr_.95fr] gap-[42px] lg:gap-[60px] items-center">
        <div>
          <h1 className="text-[clamp(40px,7vw,74px)] mb-5">
            Protegemos os seus dados.{' '}
            <span className="text-bronze block">Para que sua empresa nunca pare.</span>
          </h1>
          <p className="text-[clamp(17px,2.2vw,20px)] text-muted max-w-[560px]">
            Um File Server corporativo gerenciado pela DataForce: seus arquivos centralizados,
            acessados com segurança via VPN e protegidos por backup inteligente — de qualquer lugar.
          </p>
          <div className="flex flex-wrap gap-[14px] mt-[34px]">
            <a href={waURL} target="_blank" rel="noopener" className="btn btn-bronze"><Whatsapp className="w-[19px] h-[19px]" /> Falar no WhatsApp</a>
<a href="#solucoes" className="btn btn-ghost">Ver a solução</a>
          </div>
          <div className="flex flex-wrap gap-[10px] mt-[38px]">
            {chips.map(([k, v]) => (
              <span key={v} className="text-[12.5px] bg-[rgba(180,166,206,0.07)] border border-[var(--line)] px-[14px] py-2 rounded-full">
                {k} <b className="text-bronze-soft font-bold">{v}</b>
              </span>
            ))}
          </div>
        </div>

        <Reveal className="rounded-[var(--r)] border border-[var(--line)] p-[22px] bg-gradient-to-b from-panel-2 to-panel shadow-[0_40px_90px_-40px_rgba(106,47,176,0.6)]">
          <div className="flex justify-between items-center pb-4 border-b border-[var(--line)]">
            <span className="tech text-xs text-muted">painel de proteção</span>
            <span className="eyebrow"><span className="dot" /><span className="tech text-bronze">Protegido</span></span>
          </div>
          <div className="flex flex-col gap-4 mt-[18px]">
            {gauges.map(([label, tag, w]) => (
              <div key={label}>
                <div className="flex justify-between text-[13px] text-muted mb-[7px]">
                  {label} <b className="text-bronze text-[11px]">{tag}</b>
                </div>
                <div className="bar"><i style={{ width: w }} /></div>
              </div>
            ))}
          </div>
          <div className="mt-5 flex items-center gap-[10px] text-xs text-bronze">
            <span className="dot" /> Servidor sob gestão da DataForce, monitorado continuamente.
          </div>
        </Reveal>
      </div>
    </header>
  )
}
