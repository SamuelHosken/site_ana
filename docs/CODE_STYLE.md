# Guia de Estilo de Código — Later Nobilis

## Convenções de nomenclatura

| Elemento | Convenção | Exemplo |
|----------|-----------|---------|
| Componentes | PascalCase | `ContactModal.tsx`, `ScrollReveal.tsx` |
| Hooks | camelCase com `use` | `useScrollRAF.ts`, `useMultiOnScreen.ts` |
| Contextos | PascalCase + Context | `ContactModalContext.tsx` |
| Configs | camelCase | `contact.ts` |
| API routes | `route.ts` dentro da pasta | `api/contact/route.ts` |
| Tipos/Interfaces | PascalCase | `FormData`, `ContactModalContextType` |
| Variáveis | camelCase | `isScrolled`, `activeIndex` |
| Constantes de config | UPPER_SNAKE_CASE | `USE_CONTACT_FORM`, `WHATSAPP_URL` |
| CSS classes | Tailwind utilities | `text-primary`, `bg-stone-50` |
| Arquivos de página | `page.tsx` (App Router) | `app/quem-somos/page.tsx` |
| Arquivos de layout | `layout.tsx` (App Router) | `app/home-staging/layout.tsx` |

## Componentes

### Regras

- Um componente por arquivo (exceto sub-componentes internos como Step1, Step2, Step3 no ContactModal)
- Sub-componentes internos ficam no mesmo arquivo, declarados após o componente principal
- Props tipadas inline ou com `type` (não `interface` — preferência do projeto)
- Sem `React.FC` — usar function declarations direto: `export default function NomeComponente()`
- Arrays de dados estáticos (features, steps, links) definidos como `const` no topo do componente

### Tamanho

- Se um componente passa de ~300 linhas, considere extrair sub-componentes
- Se a mesma estrutura visual se repete 3+ vezes em componentes diferentes, crie um componente reutilizável

### Server vs Client

```tsx
// SÓ adicione "use client" se usar:
// - useState, useEffect, useRef, useCallback, useMemo
// - useContext (useContactModal, etc.)
// - Event handlers (onClick, onScroll, etc.)
// - Browser APIs (window, document, IntersectionObserver)

"use client"; // ← primeira linha, antes de qualquer import
```

## Estilização

### Tailwind

- Usar classes Tailwind diretamente — sem CSS modules, sem styled-components
- Breakpoints: `sm:`, `md:`, `lg:` (mobile-first)
- Padding lateral padrão de seções: `px-5 md:px-6`
- Container padrão: `max-w-5xl mx-auto`
- Tamanho mínimo de texto: `text-xs` (nunca `text-[9px]`, `text-[10px]`, `text-[11px]`)
- Cores do tema via `@theme` em `globals.css`: `text-primary`, `bg-primary`, `text-secondary`

### Inline styles

Usar **somente** para valores dinâmicos calculados em runtime:

```tsx
// OK — valor calculado
style={{ transform: `translateY(${parallaxY}px)` }}
style={{ height: `${features.length * 100}vh` }}
style={{ width: `${progress}%` }}

// NÃO — usar Tailwind
style={{ padding: "20px" }}  // ← use px-5
style={{ color: "red" }}     // ← use text-red-500
```

## Animações

- Scroll listeners: sempre `{ passive: true }` + `requestAnimationFrame`
- Cleanup: sempre retornar `removeEventListener` + `cancelAnimationFrame` no `useEffect`
- Transições CSS: preferir `transition-all duration-300` via Tailwind
- Animações complexas: definir `@keyframes` em `globals.css`

## Imports

Ordem (separados por linha em branco quando fizer sentido):

```tsx
// 1. React / Next.js
import { useState, useEffect } from "react";
import Image from "next/image";

// 2. Contextos e hooks internos
import { useContactModal } from "@/contexts/ContactModalContext";
import { useScrollRAF } from "@/hooks/useScrollRAF";

// 3. Componentes internos
import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";

// 4. Config
import { WHATSAPP_URL } from "@/config/contact";
```

## Práticas a evitar

| Prática | Por quê |
|---------|---------|
| `overflow-x: hidden` em html/body/main | Quebra position: sticky |
| `text-[9px]`, `text-[10px]`, `text-[11px]` | Ilegível no mobile |
| Componentes sem `alt` em Image | Acessibilidade |
| Botões sem `aria-label` (quando só tem ícone) | Acessibilidade |
| `console.log` em produção | Poluição do console |
| `any` como tipo | Type safety |
| `// eslint-disable` sem justificativa | Esconde problemas |
| Criar arquivo novo quando pode editar existente | File bloat |

## Checklist de revisão antes de concluir alteração

- [ ] Build passa sem erros (`npm run build`)
- [ ] Sem `console.log` esquecido
- [ ] Componente é Server Component se não precisa de hooks
- [ ] Padding lateral mobile é `px-5 md:px-6`
- [ ] Textos no mínimo `text-xs`
- [ ] Imagens com `alt` e `sizes` adequados
- [ ] Botões interativos com touch target mínimo (py-2 px-3)
- [ ] Scroll listeners com `passive: true` e cleanup
- [ ] Acentuação correta em textos em português
- [ ] Sem `overflow-x: hidden` em ancestrais de sticky
