import Reveal from './Reveal'
import SectionHead from './SectionHead'

const steps = [
  ['01', 'Diagnóstico', 'Entendemos sua operação e como sua empresa usa os arquivos hoje — sem custo.'],
  ['02', 'Implantação', 'Configuramos o File Server, os acessos via VPN e o backup — sem parar a operação.'],
  ['03', 'Gestão contínua', 'Monitoramos, atualizamos e mantemos tudo no ar. Você só usa e foca no negócio.'],
]

export default function HowItWorks() {
  return (
    <section id="comofunciona" className="relative z-10 py-[96px]">
      <div className="wrap">
        <SectionHead eyebrow="Como funciona" title="Três passos para nunca mais se preocupar com isso." />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {steps.map(([n, t, d]) => (
            <Reveal key={n} className="flex gap-5 p-[26px] bg-panel border border-[var(--line)] rounded-[var(--r)]">
              <div className="font-extrabold text-[15px] text-bronze border border-[var(--line)] rounded-[10px] w-[46px] h-[46px] grid place-items-center flex-none">{n}</div>
              <div>
                <h3 className="text-[18px] font-bold mb-[6px]">{t}</h3>
                <p className="text-muted text-[14.5px]">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
