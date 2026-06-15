import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { Server, Users, Globe, ShieldCheck, Refresh, Restore } from './Icons'

const items = [
  [Server, 'File Server centralizado', 'Todos os arquivos da empresa em um só lugar, organizados e sob controle.'],
  [Users, 'Usuários & permissões', 'Controle de acesso por perfil: cada pessoa vê e edita só o que deve.'],
  [Globe, 'Acesso seguro via VPN', 'Conexão criptografada e acesso remoto seguro aos arquivos, de qualquer lugar.'],
  [ShieldCheck, 'Servidor gerenciado', 'O servidor fica sob gestão da DataForce: monitoramento contínuo, atualizações e manutenção inclusas.'],
  [Refresh, 'Backup inteligente', 'Backup arquivo por arquivo — recuperação rápida e sem restaurações desnecessárias.'],
  [Restore, 'Versões & recuperação', 'Volte no tempo: retenção de versões por até 1 mês e recuperação de arquivos apagados ou alterados.'],
]

export default function Solutions() {
  return (
    <section id="solucoes" className="relative z-10 py-[96px]">
      <div className="wrap">
        <SectionHead eyebrow="A solução" title="Um File Server corporativo, gerenciado de ponta a ponta.">
          A DataForce centraliza, protege e gerencia os arquivos da sua empresa — com acesso seguro via VPN
          e backup inteligente. Sem servidor próprio caro, sem dor de cabeça.
        </SectionHead>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px]">
          {items.map(([Ic, title, desc]) => (
            <Reveal as="article" key={title} className="card">
              <div className="card-ic"><Ic className="w-[22px] h-[22px]" /></div>
              <h3 className="text-[19px] font-bold mb-[9px]">{title}</h3>
              <p className="text-muted text-[14.5px]">{desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
