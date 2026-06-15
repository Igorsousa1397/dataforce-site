# DataForce — Landing Page

LP de conversão (foco em WhatsApp) construída em **React 19 + Vite + Tailwind CSS**,
seguindo o Manual de Identidade oficial da DataForce.

## Rodar em desenvolvimento
```bash
npm install
npm run dev
```
Abre em `http://localhost:5173`.

## Build de produção
```bash
npm run build      # gera a pasta dist/
npm run preview    # pré-visualiza o build localmente
```

## Deploy na Vercel
1. Suba este projeto num repositório Git.
2. Na Vercel: New Project → importe o repo.
3. A Vercel detecta o Vite automaticamente (Build: `npm run build`, Output: `dist`).
4. Deploy. Pronto.

## Onde editar as coisas mais comuns
- **WhatsApp, telefone e Instagram:** `src/config.js`
- **Cores, fonte e tokens da marca:** `tailwind.config.js` e as variáveis no topo de `src/index.css`
- **Logo:** `src/assets/logo-full.png` e `src/assets/logo-mark.png`
- **Textos/seções:** cada seção é um componente em `src/components/`

## Estrutura
```
src/
  App.jsx              # compõe todas as seções
  config.js            # WhatsApp, contatos
  index.css            # tokens + classes base (btn, card, etc.)
  useReveal.js         # animação de entrada ao rolar
  assets/              # logos oficiais
  components/
    Navbar, Hero, Risk, Solutions, About, Stats,
    HowItWorks, FinalCTA, Footer, DataStream, Icons, Reveal, SectionHead
```
