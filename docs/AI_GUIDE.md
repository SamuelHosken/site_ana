# Guia Operacional para IA — Later Nobilis

## Ordem de leitura antes de qualquer tarefa

```
1. README.md          → Entender o que é o projeto e a stack
2. ARCHITECTURE.md    → Entender onde cada coisa vive
3. CODE_STYLE.md      → Entender como escrever código aqui
4. DOMAIN.md          → Entender o negócio
5. API_CONTRACTS.md   → Se for mexer na API
6. TESTING.md         → Como validar suas alterações
```

## Como se contextualizar

Antes de editar qualquer arquivo:

1. **Leia o arquivo inteiro** — Nunca edite um arquivo sem ler primeiro
2. **Entenda o componente** — É Server ou Client? Tem hooks? Tem scroll listeners?
3. **Verifique os vizinhos** — Quem importa esse componente? Quem ele importa?
4. **Confira o padrão existente** — Olhe como componentes similares estão escritos

## Regras absolutas — NUNCA faça isso

| Regra | Motivo |
|-------|--------|
| Nunca adicione `overflow-x: hidden` em html, body ou main | Quebra position: sticky em toda a página |
| Nunca use `text-[9px]`, `text-[10px]` ou `text-[11px]` | Ilegível no mobile |
| Nunca marque componente como `"use client"` sem necessidade | Aumenta bundle desnecessariamente |
| Nunca crie um arquivo novo se pode editar um existente | Previne file bloat |
| Nunca invente URLs ou links externos | Pode gerar links quebrados |
| Nunca deixe `console.log` no código | Poluição em produção |
| Nunca remova `overflow-x-clip` do html/body no layout.tsx | É o que previne scroll horizontal |
| Nunca mude o padrão de padding `px-5 md:px-6` sem pedir | É o padrão global do site |

## Como decidir onde colocar novo código

```
É uma nova página?
  → Criar pasta em src/app/[nome-da-pagina]/
  → Criar page.tsx + layout.tsx (com metadata)

É um componente visual?
  → src/components/NomeComponente.tsx

É lógica reutilizável com hooks?
  → src/hooks/useNomeDoHook.ts

É estado compartilhado entre componentes distantes?
  → src/contexts/NomeContext.tsx

É configuração que muda comportamento?
  → src/config/nomeConfig.ts

É uma API route?
  → src/app/api/[nome]/route.ts
```

## Como preservar arquitetura e padrões

### Ao criar um componente

1. Verifique se precisa de `"use client"` — só se usar hooks ou browser APIs
2. Use Tailwind para estilização — não CSS inline para layout
3. Padding lateral: `px-5 md:px-6`
4. Container: `max-w-5xl mx-auto`
5. Texto mínimo: `text-xs`
6. Imagens: usar `next/image` com `alt` e `sizes`
7. Animações scroll: usar `ScrollReveal` wrapper ou `useScrollRAF`

### Ao editar um componente existente

1. Leia o arquivo inteiro antes
2. Mantenha o padrão de estilo do arquivo
3. Não refatore código que não precisa ser mudado
4. Não adicione comentários óbvios ou docstrings não solicitados
5. Se mexer em scroll/overflow: testar que sticky scroll ainda funciona

### Ao criar uma nova página

```
src/app/nova-pagina/
├── page.tsx     → Componentes da página
└── layout.tsx   → Metadata (title, description, og:image)
```

Template mínimo para `layout.tsx`:
```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Título da Página | Later Nobilis",
  description: "Descrição para SEO.",
  openGraph: {
    title: "Título da Página | Later Nobilis",
    description: "Descrição para SEO.",
    images: [{ url: "/imagem.jpg", width: 1200, height: 630, alt: "Alt text" }],
  },
};

export default function NovaPaginaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
```

## Como propor refatorações

1. Identifique o problema concreto (duplicação, performance, legibilidade)
2. Explique o que vai mudar e por quê
3. Faça a mudança mínima necessária
4. Rode `npm run build` para confirmar
5. Não misture refatoração com feature nova na mesma tarefa

## Como validar alterações

### Checklist obrigatório

```
[ ] npm run build passa
[ ] Sem console.log de debug
[ ] Sem overflow-x: hidden adicionado
[ ] "use client" só se necessário
[ ] Padding lateral px-5 md:px-6
[ ] Textos mínimo text-xs
[ ] Imagens com alt text
[ ] Acentos corretos em português
```

### Se mexeu em layout/CSS

```
[ ] Sem scroll horizontal no mobile
[ ] Sticky scroll funciona (AdvertisingSection, IntroSection, international-flip)
[ ] Menu mobile abre e fecha
```

### Se mexeu no formulário/API

```
[ ] Formulário envia sem erros
[ ] Validações funcionam (campos vazios, email inválido)
[ ] Rate limiting funciona
[ ] Toggle USE_CONTACT_FORM funciona nos dois modos
```

### Se criou nova página

```
[ ] layout.tsx com metadata completa (title, description, og:image)
[ ] Página adicionada ao sitemap.ts
[ ] Link adicionado ao Header e/ou Footer se necessário
```

## Quando não tiver informação suficiente

1. **Não invente** — Não assuma valores, URLs, textos de negócio ou dados
2. **Pergunte** — "Qual o texto para esta seção?" é melhor que inventar
3. **Use placeholders** — `[PREENCHER: descrição do que falta]`
4. **Leia o código** — A resposta geralmente está em um componente vizinho

## Resumo rápido

```
ANTES de editar  → Leia o arquivo + vizinhos + ARCHITECTURE.md
DURANTE a edição → Siga CODE_STYLE.md + padrões existentes
DEPOIS de editar → npm run build + checklist de TESTING.md
```
