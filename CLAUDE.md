# Later Nobilis — Contexto Rápido

Site institucional de imobiliária boutique de alto padrão em Brasília.
Next.js 16 (App Router) + React 19 + Tailwind CSS v4 + Resend (email).

## Regras essenciais

- **Padding mobile:** `px-5 md:px-6` em todas as seções
- **Texto mínimo:** `text-xs` (nunca menor)
- **Nunca** usar `overflow-x: hidden` em html/body/main (quebra sticky)
- **Nunca** marcar componente como `"use client"` se não usa hooks
- Sempre rodar `npm run build` após alterações
- **Toggle formulário/WhatsApp:** Em `src/config/contact.ts`, mudar `USE_CONTACT_FORM` para `true` (abre formulário multi-step) ou `false` (redireciona direto pro WhatsApp). Afeta todos os botões de contato do site.

## Comandos

```bash
npm run dev      # Dev server (Turbopack)
npm run build    # Build de produção
npm start        # Serve o build
```

## Estrutura

```
src/app/           → Páginas e API routes
src/components/    → Componentes React (Server e Client)
src/config/        → Configs (toggle formulário/WhatsApp)
src/contexts/      → Context providers (ContactModal)
src/hooks/         → Hooks customizados (scroll, intersection)
```

## Documentação detalhada

| Arquivo | Para que serve |
|---------|---------------|
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | Camadas, fluxos de dados e princípios arquiteturais |
| [docs/CODE_STYLE.md](docs/CODE_STYLE.md) | Convenções de código, naming e checklist de revisão |
| [docs/DOMAIN.md](docs/DOMAIN.md) | Contexto de negócio, glossário e regras da imobiliária |
| [docs/API_CONTRACTS.md](docs/API_CONTRACTS.md) | Contrato do POST /api/contact (request, response, validações) |
| [docs/TESTING.md](docs/TESTING.md) | Estratégia de testes e checklists de validação |
| [docs/AI_GUIDE.md](docs/AI_GUIDE.md) | Manual operacional completo para IA trabalhar no projeto |
