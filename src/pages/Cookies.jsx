import LegalLayout from './LegalLayout'
import { EMAIL } from '../config'

export default function Cookies() {
  return (
    <LegalLayout title="Política de Cookies" updated="junho de 2026">
      <p>
        Esta Política de Cookies explica como a <strong>DataForce</strong> utiliza cookies e
        tecnologias semelhantes em seu site. Ela complementa a nossa
        {' '}<a href="/politica-de-privacidade">Política de Privacidade</a>.
      </p>

      <h2>1. O que são cookies</h2>
      <p>Cookies são pequenos arquivos armazenados no seu dispositivo quando você visita um site. Eles ajudam o site a funcionar e a entender como ele é utilizado.</p>

      <h2>2. Cookies que utilizamos</h2>
      <ul>
        <li><strong>Essenciais</strong> — necessários para o funcionamento básico do site;</li>
        <li><strong>De desempenho/análise</strong> — quando ativos, ajudam a entender de forma agregada como os visitantes usam o site, para melhorá-lo;</li>
        <li><strong>De funcionalidade</strong> — lembram preferências para melhorar a experiência.</li>
      </ul>

      <h2>3. Cookies de terceiros</h2>
      <p>Podemos carregar recursos de terceiros (por exemplo, fontes web e, eventualmente, ferramentas de análise), que podem definir seus próprios cookies, sujeitos às políticas dos respectivos provedores.</p>

      <h2>4. Como gerenciar cookies</h2>
      <p>Você pode bloquear ou apagar cookies nas configurações do seu navegador. A desativação de alguns cookies pode afetar funcionalidades do site.</p>

      <h2>5. Consentimento</h2>
      <p>Ao continuar navegando, você concorda com o uso de cookies conforme esta política. Cookies não essenciais só são utilizados mediante a sua autorização, quando aplicável.</p>

      <h2>6. Alterações</h2>
      <p>Esta política pode ser atualizada periodicamente. A versão vigente estará sempre disponível neste endereço.</p>

      <h2>7. Contato</h2>
      <p>Dúvidas sobre cookies: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
    </LegalLayout>
  )
}
