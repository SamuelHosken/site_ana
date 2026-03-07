# Arquitetura — Later Nobilis

## Visão geral

Site estático Next.js (App Router) com uma única API route para envio de emails. Não há banco de dados, autenticação ou backend complexo. O foco é performance, SEO e experiência visual.

```
Browser
  │
  ├── Páginas estáticas (SSG)    ← Geradas no build
  ├── Componentes Client         ← Interatividade (scroll, modal, animações)
  └── API Route (/api/contact)   ← Envio de email via Resend
```

## Camadas e responsabilidades

### 1. `src/app/` — Rotas e páginas

- Cada pasta é uma rota (App Router)
- `layout.tsx` em cada rota define metadata SEO (title, og:image, etc.)
- `page.tsx` compõe os componentes da página
- Homepage usa `dynamic()` para lazy-load de seções abaixo do fold

**Regra:** Páginas NÃO contêm lógica de negócio. Apenas composição de componentes.

### 2. `src/components/` — Componentes visuais

Dois tipos:

| Tipo | Diretiva | Quando usar |
|------|----------|-------------|
| Server Component | (padrão) | Sem hooks, sem interatividade, sem browser APIs |
| Client Component | `"use client"` | useState, useEffect, useRef, event handlers, scroll listeners |

**Server Components atuais:** Footer, CTASection, HoldingsSection, StrategySection, InternationalPreviewSection, SectionHeader, Tooltip, ApproachSection

**Client Components atuais:** Header, Hero, IntroSection, AdvertisingSection, RentalsSection, ServicesSection, ContactModal, ScrollReveal

**Regra:** Só marque `"use client"` se o componente realmente precisa de hooks ou browser APIs.

### 3. `src/hooks/` — Hooks customizados

- `useScrollRAF.ts` — Wrapper de scroll listener com requestAnimationFrame
- `useMultiOnScreen.ts` — IntersectionObserver para múltiplos elementos

**Regra:** Hooks são reutilizáveis e desacoplados de componentes específicos.

### 4. `src/contexts/` — Estado global

- `ContactModalContext.tsx` — Controla abertura/fechamento do modal de contato
- Respeita a config `USE_CONTACT_FORM` de `src/config/contact.ts`

**Regra:** Contextos são para estado compartilhado entre componentes distantes. Não usar para estado local.

### 5. `src/config/` — Configurações

- `contact.ts` — Toggle formulário/WhatsApp e URL do WhatsApp

**Regra:** Valores que mudam o comportamento do site sem alterar código vão aqui.

### 6. `src/app/api/` — API Routes

- `contact/route.ts` — Recebe dados do formulário, valida, e envia email via Resend

**Regra:** API routes fazem validação de entrada, chamam serviço externo e retornam resposta. Sem lógica de UI.

## Fluxo de dados

### Formulário de contato

```
Usuário preenche modal (3 steps)
  → ContactModal.tsx envia POST /api/contact
    → route.ts valida campos + email + rate limit
      → Resend envia email para imobiliaria@laternobilis.com
    → Retorna 200 OK
  → Modal mostra sucesso
  → Após 2s, redireciona para WhatsApp
```

### Toggle formulário/WhatsApp

```
src/config/contact.ts (USE_CONTACT_FORM)
  → ContactModalContext.tsx (open function)
    → true: abre modal
    → false: window.open(WHATSAPP_URL)
```

### Scroll-driven animations

```
window scroll event (passive)
  → requestAnimationFrame
    → Calcula progresso baseado em getBoundingClientRect()
      → setState atualiza index/opacidade/transform
```

## Princípios arquiteturais

1. **Estático primeiro** — Tudo que pode ser Server Component deve ser
2. **Lazy-load agressivo** — Seções abaixo do fold usam `dynamic()`
3. **Zero dependências desnecessárias** — Só Next, React, Tailwind, Resend
4. **Animações performáticas** — Sempre via `requestAnimationFrame` + `passive: true`
5. **Overflow seguro** — `overflow-x: clip` no html/body (não `hidden`, que quebra sticky)

## Sinais de violação arquitetural

| Sinal | Problema |
|-------|----------|
| `"use client"` em componente sem hooks | Bundle desnecessário no client |
| `overflow-x: hidden` em html/body/main | Quebra `position: sticky` |
| Estado do modal duplicado fora do Context | Dessincronia entre componentes |
| Lógica de negócio em page.tsx | Página deve apenas compor componentes |
| `addEventListener` sem cleanup no return | Memory leak |
| Scroll listener sem `requestAnimationFrame` | Jank / performance ruim |
| Inline styles para layout (não animação) | Deve usar Tailwind classes |
| `px-4` em seções mobile | Padrão é `px-5 md:px-6` |
