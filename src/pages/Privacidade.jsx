import LegalLayout from './LegalLayout'
import { EMAIL, SITE } from '../config'

export default function Privacidade() {
  return (
    <LegalLayout title="Política de Privacidade" updated="junho de 2026">
      <p>
        A <strong>DataForce</strong> (CNPJ nº <strong>[CNPJ a preencher]</strong>) respeita a sua
        privacidade e está comprometida com a proteção dos dados pessoais, em conformidade com a
        Lei nº 13.709/2018 (<strong>LGPD</strong>). Esta política explica como tratamos os dados
        coletados em <a href={`https://${SITE}`}>{SITE}</a> e na prestação dos nossos serviços.
      </p>

      <h2>1. Dados que coletamos</h2>
      <ul>
        <li><strong>Dados de contato</strong> que você nos fornece (nome, e-mail, telefone, empresa) ao falar conosco pelo site, WhatsApp ou e-mail;</li>
        <li><strong>Dados de navegação</strong> (endereço IP, tipo de dispositivo/navegador, páginas acessadas) coletados por meio de cookies — veja a <a href="/politica-de-cookies">Política de Cookies</a>;</li>
        <li><strong>Dados tratados na prestação do serviço</strong>: na operação do File Server, a DataForce atua como <strong>operadora</strong> dos dados do Cliente, que é o <strong>controlador</strong>.</li>
      </ul>

      <h2>2. Finalidades do tratamento</h2>
      <ul>
        <li>Responder a contatos e elaborar propostas comerciais;</li>
        <li>Prestar e gerenciar os serviços contratados;</li>
        <li>Melhorar o site e a experiência de uso;</li>
        <li>Cumprir obrigações legais e regulatórias.</li>
      </ul>

      <h2>3. Base legal</h2>
      <p>Tratamos dados com base em: execução de contrato, consentimento, legítimo interesse e cumprimento de obrigação legal, conforme a finalidade.</p>

      <h2>4. Compartilhamento</h2>
      <p>Não vendemos dados pessoais. Podemos compartilhá-los com prestadores que apoiam nossa operação (sob obrigação de confidencialidade) e com autoridades, quando exigido por lei.</p>

      <h2>5. Segurança da informação</h2>
      <p>Adotamos medidas técnicas e organizacionais para proteger os dados, como criptografia, controle de acesso e monitoramento. Nenhum sistema é 100% imune, mas trabalhamos continuamente para reduzir riscos.</p>

      <h2>6. Retenção</h2>
      <p>Os dados são mantidos pelo tempo necessário às finalidades informadas ou conforme exigências legais e contratuais, sendo depois eliminados ou anonimizados.</p>

      <h2>7. Seus direitos (LGPD)</h2>
      <p>Você pode, a qualquer momento, solicitar: confirmação e acesso aos dados; correção; anonimização, bloqueio ou eliminação; portabilidade; informação sobre compartilhamentos; e revogação do consentimento.</p>

      <h2>8. Encarregado (DPO) e contato</h2>
      <p>Para exercer seus direitos ou tirar dúvidas sobre privacidade, fale com nosso encarregado pelo e-mail <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>

      <h2>9. Alterações</h2>
      <p>Esta política pode ser atualizada. A versão vigente estará sempre disponível neste endereço, com a data da última atualização.</p>
    </LegalLayout>
  )
}
