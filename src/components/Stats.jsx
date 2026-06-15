import Reveal from './Reveal'

// Benefícios reais (do material de vendas) — sem números inflados
const stats = [
  ['Sem servidor próprio', 'menos custo de infraestrutura'],
  ['VPN', 'acesso remoto criptografado'],
  ['1 mês', 'de retenção de versões'],
  ['100%', 'gerenciado e monitorado'],
]

export default function Stats() {
  return (
    <section className="relative z-10 border-y border-[var(--line)] bg-[rgba(106,47,176,0.05)]">
      <div className="wrap grid grid-cols-2 md:grid-cols-4 gap-[30px] py-[60px]">
        {stats.map(([num, lab]) => (
          <Reveal key={lab}>
            <div className="font-extrabold text-[clamp(22px,3.4vw,34px)] text-bronze leading-tight">{num}</div>
            <div className="text-muted text-[14px] mt-[6px]">{lab}</div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
