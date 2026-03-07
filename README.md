# Later Nobilis — Imobiliária Boutique

Site institucional da **Later Nobilis**, imobiliária boutique de alto padrão em Brasília. O site apresenta os serviços, diferenciais e estratégias da empresa, com foco em captar leads qualificados via formulário de contato integrado com email (Resend) e redirecionamento para WhatsApp.

## Problema que resolve

Imobiliárias tradicionais não comunicam exclusividade. Este site posiciona a Later Nobilis como referência em venda de imóveis de alto padrão, com experiência visual premium e captação de leads otimizada.

## Funcionalidades principais

- Landing page institucional com múltiplas seções animadas
- Formulário de contato multi-step (3 etapas) com envio de email via Resend
- Redirecionamento pós-envio para WhatsApp
- Toggle simples formulário/WhatsApp direto (`src/config/contact.ts`)
- Páginas dedicadas: Home Staging, Open House, Internacional, Quem Somos
- Animações scroll-driven (parallax, sticky scroll, entrance animations)
- SEO completo (OpenGraph, sitemap.xml, robots.txt)
- Design responsivo mobile-first

## Stack tecnológica

| Camada       | Tecnologia                        |
|--------------|-----------------------------------|
| Framework    | Next.js 16.1.1 (App Router)       |
| Runtime      | React 19.2                        |
| Estilização  | Tailwind CSS v4 (`@theme`)        |
| Bundler      | Turbopack                         |
| Email        | Resend SDK                        |
| Deploy       | [PREENCHER: Vercel / outro]       |
| Linguagem    | TypeScript                        |

## Como rodar localmente

### Pré-requisitos

- Node.js 18+
- npm

### Instalação

```bash
git clone [PREENCHER: URL do repositório]
cd site_ana
npm install
```

### Variáveis de ambiente

```bash
cp .env.example .env.local
# Preencha RESEND_API_KEY com sua chave do Resend
```

### Iniciar em desenvolvimento

```bash
npm run dev
```

O site estará disponível em `http://localhost:3000`.

### Build de produção

```bash
npm run build
npm start
```

## Estrutura de pastas

```
src/
├── app/                    # App Router (páginas e API)
│   ├── page.tsx            # Homepage
│   ├── layout.tsx          # Layout raiz (metadata, fonts, providers)
│   ├── globals.css         # Estilos globais + animações CSS
│   ├── sitemap.ts          # Sitemap dinâmico
│   ├── api/contact/        # API route — envio de email
│   ├── quem-somos/         # Página "Quem Somos"
│   ├── home-staging/       # Página "Home Staging"
│   ├── open-house/         # Página "Open House"
│   └── international-flip/ # Página "International Flip"
├── components/             # Componentes React
│   ├── Header.tsx          # Header fixo com menu mobile
│   ├── Hero.tsx            # Hero com animação de entrada
│   ├── IntroSection.tsx    # Seção "Nossa Essência" (planta baixa SVG)
│   ├── ApproachSection.tsx # Seção "Nossa Abordagem"
│   ├── AdvertisingSection.tsx # Seção "Imobiliária Boutique" (sticky scroll)
│   ├── RentalsSection.tsx  # Seção "Aluguéis" (gráficos animados)
│   ├── ServicesSection.tsx # Seção "Serviços"
│   ├── ContactModal.tsx    # Modal de contato multi-step
│   ├── ScrollReveal.tsx    # HOC de animação scroll-triggered
│   ├── Tooltip.tsx         # Tooltip acessível (hover + focus)
│   ├── charts/             # Gráficos SVG animados
│   └── ...
├── config/
│   └── contact.ts          # Toggle formulário vs WhatsApp direto
├── contexts/
│   └── ContactModalContext.tsx  # Provider do modal de contato
└── hooks/
    ├── useScrollRAF.ts     # Hook de scroll com requestAnimationFrame
    └── useMultiOnScreen.ts # Hook de IntersectionObserver múltiplo
```

## Documentação

| Arquivo | Conteúdo |
|---------|----------|
| [ARCHITECTURE.md](./ARCHITECTURE.md) | Arquitetura e camadas |
| [CODE_STYLE.md](./CODE_STYLE.md) | Convenções de código |
| [DOMAIN.md](./DOMAIN.md) | Domínio de negócio e glossário |
| [API_CONTRACTS.md](./API_CONTRACTS.md) | Contratos da API |
| [TESTING.md](./TESTING.md) | Estratégia de testes |
| [AI_GUIDE.md](./AI_GUIDE.md) | Guia operacional para IA |

## Configuração rápida: Formulário vs WhatsApp

Em `src/config/contact.ts`:

```ts
export const USE_CONTACT_FORM = true;  // true = formulário, false = WhatsApp direto
```

Quando `false`, todos os botões de contato do site redirecionam para o WhatsApp sem abrir o modal.
