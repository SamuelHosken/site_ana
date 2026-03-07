# Estratégia de Testes — Later Nobilis

## Filosofia

Este é um site institucional com uma única API route. A prioridade de testes é:

1. **Build passa** — Validação principal. Se `npm run build` falha, nada funciona.
2. **API route funciona** — Validação, rate limiting e envio de email.
3. **Componentes renderizam** — Sem erros de runtime.
4. **Responsividade** — Mobile e desktop consistentes.

## Tipos de teste

### Build check (obrigatório)

O teste mais importante. Deve passar antes de qualquer merge ou deploy.

```bash
npm run build
```

Valida:
- TypeScript sem erros
- Imports válidos
- Server/Client Components corretos
- Metadata e sitemap gerados
- Todas as páginas renderizáveis

### Teste manual do formulário

```
1. Abrir http://localhost:3000
2. Clicar em qualquer botão de contato
3. Preencher os 3 steps do formulário
4. Verificar:
   - Email chega em imobiliaria@laternobilis.com
   - Tela de sucesso aparece
   - WhatsApp abre após 2 segundos
5. Testar toggle: mudar USE_CONTACT_FORM para false
   - Verificar que botão abre WhatsApp direto
```

### Teste manual de responsividade

```
1. Abrir DevTools → Device Toolbar
2. Testar em 375px (iPhone SE) e 390px (iPhone 14)
3. Verificar:
   - Sem scroll horizontal
   - Textos legíveis (mínimo text-xs)
   - Botões clicáveis (touch target mínimo 44x44)
   - Sticky scroll funciona na AdvertisingSection
   - Hero animation funciona
   - Menu mobile abre/fecha
```

### Teste de SEO

```
1. Inspecionar source da página (View Source)
2. Verificar:
   - <title> presente
   - <meta name="description"> presente
   - <meta property="og:image"> presente
   - <meta property="og:title"> presente
3. Acessar /sitemap.xml — deve listar todas as páginas
4. Acessar /robots.txt — deve permitir crawling
```

## Testes automatizados (futuro)

[PREENCHER: Quando o projeto crescer, considerar adicionar:]

### Unitários (recomendado)

```bash
# Framework sugerido: Vitest
npm run test
```

Candidatos a teste unitário:
- `escapeHtml()` em `api/contact/route.ts`
- `isValidEmail()` em `api/contact/route.ts`
- `isRateLimited()` em `api/contact/route.ts`

### Integração (opcional)

- Testar POST `/api/contact` com diferentes payloads
- Testar rate limiting (6 requests rápidas)
- Testar campos inválidos

### E2E (opcional)

```bash
# Framework sugerido: Playwright
npx playwright test
```

Candidatos:
- Fluxo completo do formulário (3 steps + envio)
- Navegação entre páginas
- Menu mobile

## Convenção de nomenclatura (quando implementar)

```
src/
├── __tests__/
│   ├── api/
│   │   └── contact.test.ts
│   └── utils/
│       └── escapeHtml.test.ts
├── components/
│   └── __tests__/
│       └── ContactModal.test.tsx
```

Padrão: `[nome].test.ts` ou `[nome].test.tsx`

## Checklist antes de aprovar alteração

- [ ] `npm run build` passa sem erros
- [ ] Sem `console.log` de debug
- [ ] Testado visualmente no mobile (375px)
- [ ] Testado visualmente no desktop (1280px)
- [ ] Sem scroll horizontal no mobile
- [ ] Sticky scroll funciona (se mexeu em overflow ou estrutura)
- [ ] Formulário envia email (se mexeu em ContactModal ou API)
- [ ] Metadata SEO presente (se criou nova página)

## O que a IA deve validar após modificar código

1. Rodar `npm run build` e confirmar sucesso
2. Se mexeu em CSS/layout: verificar se não adicionou `overflow-x: hidden` em ancestral de sticky
3. Se mexeu em componente: verificar se `"use client"` é necessário
4. Se mexeu em textos: verificar acentuação
5. Se adicionou imagem: verificar `alt`, `sizes`, `loading`/`priority`
6. Se criou página: verificar que tem `layout.tsx` com metadata
