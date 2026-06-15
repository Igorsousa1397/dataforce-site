import Reveal from './Reveal'

const pillars = [
  ['Confidencialidade', 'Apenas usuários autorizados acessam, com controle de permissões e comunicação segura.'],
  ['Integridade', 'Seus dados não são alterados nem corrompidos indevidamente.'],
  ['Disponibilidade', 'Os arquivos acessíveis sempre que a empresa precisar, com alta disponibilidade.'],
  ['Autenticidade', 'Identidade de usuários e sistemas confirmada: acesso legítimo e rastreável.'],
]

const forWho = [
  'Negócios que tratam dados como ativo estratégico',
  'Quem exige confiabilidade e rastreabilidade',
  'Quem precisa de acesso seguro a arquivos, de qualquer lugar',
  'Quem quer reduzir o custo de infraestrutura própria',
]

export default function About() {
  return (
    <section id="quemsomos" className="relative z-10 py-[96px] bg-gradient-to-b from-[rgba(106,47,176,0.06)] to-transparent">
      <div className="wrap grid grid-cols-1 lg:grid-cols-[1.1fr_.9fr] gap-9 items-center">
        <Reveal>
          <span className="eyebrow">Quem somos · os 4 pilares</span>
          <h2 className="text-[clamp(28px,4.2vw,42px)] my-[18px]">Segurança da informação sobre uma base sólida.</h2>
          <p className="text-muted text-[16.5px] mb-4">
            A DataForce é focada em soluções tecnológicas seguras, confiáveis e escaláveis, baseadas nos
            4 pilares fundamentais da tecnologia da informação. Nosso objetivo é proteger, organizar e
            garantir o acesso correto às informações críticas da sua empresa.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px] mt-[26px]">
            {pillars.map(([t, d]) => (
              <div key={t} className="bg-panel border border-[var(--line)] rounded-[14px] p-[18px]">
                <b className="block font-bold text-[15px] mb-1">{t}</b>
                <span className="text-muted text-[13px]">{d}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="border border-[var(--line)] rounded-[var(--r)] bg-gradient-to-b from-panel-2 to-panel p-[30px]">
          <div className="eyebrow mb-5">Para quem é a DataForce</div>
          <div className="flex flex-col gap-[16px]">
            {forWho.map((c) => (
              <div key={c} className="flex items-start gap-[14px] text-[14.5px]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px] text-bronze flex-none mt-[2px]"><path d="M20 6 9 17l-5-5" /></svg>
                {c}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
