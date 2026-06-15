import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { Restore, Server, Lock } from './Icons'

const items = [
  [Restore, 'Arquivo perdido por engano', 'Exclusão acidental, sobrescrita, falha humana. Sem uma versão pra voltar, o trabalho some.'],
  [Server, 'Servidor próprio caro e arriscado', 'Comprar e manter servidor pesa no caixa — e ainda corre risco de falha e parada.'],
  [Lock, 'Acesso inseguro aos arquivos', 'Abrir arquivos de qualquer lugar sem VPN é porta aberta para acessos não autorizados.'],
]

export default function Risk() {
  return (
    <section id="risco" className="relative z-10 py-[96px] bg-gradient-to-b from-transparent to-[rgba(106,47,176,0.06)]">
      <div className="wrap">
        <SectionHead eyebrow="O risco real" title="Quando o arquivo some, a operação para.">
          Dado é ativo estratégico. Sem centralização, controle de acesso e backup, um erro humano ou um ataque vira prejuízo financeiro e de reputação.
        </SectionHead>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[18px]">
          {items.map(([Ic, title, desc]) => (
            <Reveal key={title} className="bg-panel border border-[var(--line)] rounded-[var(--r)] p-[26px]">
              <Ic className="w-[26px] h-[26px] text-bronze mb-4" />
              <div className="font-bold text-[18px] mb-2">{title}</div>
              <p className="text-muted text-[14.5px]">{desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
