import LegalLayout from './LegalLayout'
import { EMAIL, SITE } from '../config'

export default function Termos() {
  return (
    <LegalLayout title="Termos de Serviço" updated="junho de 2026">
      <p>
        Estes Termos de Serviço ("Termos") regem a contratação e o uso dos serviços oferecidos pela
        <strong> DataForce</strong>, inscrita no CNPJ sob o nº <strong>[CNPJ a preencher]</strong>
        ("DataForce", "nós"), por meio do site <a href={`https://${SITE}`}>{SITE}</a> e de seus canais
        de atendimento. Ao contratar ou utilizar nossos serviços, você ("Cliente") declara que leu,
        entendeu e concorda com estes Termos.
      </p>

      <h2>1. Serviços</h2>
      <p>A DataForce oferece soluções de gestão e proteção de dados corporativos, incluindo:</p>
      <ul>
        <li><strong>File Server Corporativo Gerenciado</strong> — armazenamento centralizado de arquivos, com gestão de usuários, permissões e controle de acesso por perfil;</li>
        <li><strong>Acesso seguro via VPN</strong> — conexão criptografada para acesso remoto aos arquivos;</li>
        <li><strong>Backup e proteção de dados</strong> — backup em nível de arquivo e recuperação, com retenção de versões conforme o plano contratado;</li>
        <li><strong>Servidor gerenciado</strong> — infraestrutura sob gestão da DataForce, com monitoramento, atualizações e manutenção.</li>
      </ul>
      <p>O escopo, os limites e os valores de cada serviço são definidos na proposta comercial e/ou contrato firmado com o Cliente, que prevalecem em caso de divergência com estes Termos.</p>

      <h2>2. Contratação e cadastro</h2>
      <p>A contratação ocorre mediante aceite da proposta comercial. O Cliente é responsável por fornecer informações verdadeiras e por manter a confidencialidade de suas credenciais de acesso, respondendo por todas as atividades realizadas com elas.</p>

      <h2>3. Responsabilidades do Cliente</h2>
      <ul>
        <li>Utilizar os serviços de forma lícita e de acordo com estes Termos;</li>
        <li>Não armazenar conteúdo ilegal ou que viole direitos de terceiros;</li>
        <li>Gerenciar adequadamente os acessos concedidos aos seus usuários;</li>
        <li>Comunicar imediatamente qualquer uso não autorizado de suas credenciais.</li>
      </ul>

      <h2>4. Propriedade dos dados</h2>
      <p>Os dados e arquivos armazenados permanecem de <strong>propriedade exclusiva do Cliente</strong>. A DataForce atua como operadora desses dados, tratando-os apenas para a prestação dos serviços contratados, conforme nossa <a href="/politica-de-privacidade">Política de Privacidade</a>.</p>

      <h2>5. Disponibilidade, manutenção e suporte</h2>
      <p>Empregamos esforços para manter os serviços disponíveis de forma contínua. Eventuais janelas de manutenção programada serão, sempre que possível, comunicadas com antecedência. Os níveis de serviço (SLA) e o suporte aplicáveis são os definidos no contrato.</p>

      <h2>6. Backup e retenção</h2>
      <p>O backup é realizado conforme o plano contratado, com retenção de versões pelo período acordado (por exemplo, até 1 mês). A recuperação de arquivos está sujeita à disponibilidade das versões dentro do período de retenção vigente.</p>

      <h2>7. Pagamentos e vigência</h2>
      <p>Os valores, a forma de pagamento e a vigência seguem o disposto na proposta/contrato. O não pagamento poderá ensejar a suspensão dos serviços, mediante aviso prévio.</p>

      <h2>8. Confidencialidade</h2>
      <p>A DataForce mantém sigilo sobre as informações do Cliente a que tiver acesso, adotando medidas técnicas e organizacionais para protegê-las.</p>

      <h2>9. Limitação de responsabilidade</h2>
      <p>A DataForce não se responsabiliza por danos decorrentes de uso indevido dos serviços, de credenciais comprometidas por culpa do Cliente, ou de eventos de força maior. A responsabilidade da DataForce limita-se, no que couber, ao previsto em contrato.</p>

      <h2>10. Suspensão e rescisão</h2>
      <p>Estes Termos podem ser rescindidos conforme as condições contratuais. Em caso de encerramento, o Cliente poderá solicitar a devolução ou exclusão de seus dados nos prazos e formas previstos no contrato e na legislação aplicável.</p>

      <h2>11. Alterações</h2>
      <p>Estes Termos podem ser atualizados periodicamente. A versão vigente estará sempre disponível neste endereço, com a data da última atualização.</p>

      <h2>12. Legislação e foro</h2>
      <p>Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da comarca de <strong>[cidade/UF a preencher]</strong> para dirimir eventuais controvérsias.</p>

      <h2>13. Contato</h2>
      <p>Dúvidas sobre estes Termos: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
    </LegalLayout>
  )
}
