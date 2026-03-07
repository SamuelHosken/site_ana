# Contratos de API — Later Nobilis

## Visão geral

O projeto possui uma única API route, responsável pelo envio de emails do formulário de contato. Não há autenticação, banco de dados ou versionamento — é uma chamada direta ao serviço Resend.

## Convenções

- **Base URL:** `/api`
- **Formato:** JSON
- **Método:** POST
- **Autenticação:** Nenhuma (formulário público)
- **Rate limiting:** 5 requests por minuto por IP (in-memory)

## Status HTTP utilizados

| Status | Significado |
|--------|-------------|
| 200 | Sucesso — email enviado |
| 400 | Validação falhou (campo obrigatório vazio ou email inválido) |
| 429 | Rate limit excedido |
| 500 | Erro interno (falha no Resend ou erro inesperado) |

---

## POST /api/contact

**Objetivo:** Receber dados do formulário de contato e enviar email para a equipe comercial.

### Request

```http
POST /api/contact
Content-Type: application/json
```

**Body:**

```json
{
  "tipo": "Vender",
  "avaliacao": "Sim",
  "localizacao": "Asa Sul, Brasília",
  "mensagem": "Tenho um apartamento de 3 quartos...",
  "nome": "João Silva",
  "email": "joao@email.com",
  "telefone": "(61) 99999-9999"
}
```

**Campos:**

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `tipo` | string | Sim | "Vender" ou "Alugar" |
| `avaliacao` | string | Não | "Sim" ou "Não" — se já fez avaliação do imóvel |
| `localizacao` | string | Não | Localização do imóvel (ex: "Lago Norte") |
| `mensagem` | string | Não | Mensagem ou pergunta adicional |
| `nome` | string | Sim | Nome completo do lead |
| `email` | string | Sim | Email válido (validado por regex) |
| `telefone` | string | Sim | Telefone de contato |

### Respostas

**Sucesso (200):**

```json
{
  "success": true
}
```

**Erro de validação — campos obrigatórios (400):**

```json
{
  "error": "Campos obrigatórios não preenchidos."
}
```

**Erro de validação — email inválido (400):**

```json
{
  "error": "E-mail inválido."
}
```

**Rate limit (429):**

```json
{
  "error": "Muitas tentativas. Aguarde um momento."
}
```

**Erro interno (500):**

```json
{
  "error": "Erro ao enviar mensagem."
}
```

### Comportamento interno

1. Verifica rate limit (5 req/min por IP via `x-forwarded-for`)
2. Valida campos obrigatórios: `tipo`, `nome`, `email`, `telefone`
3. Valida formato de email com regex
4. Sanitiza todos os campos com `escapeHtml()` contra XSS
5. Envia email via Resend para `imobiliaria@laternobilis.com`
6. Email formatado em HTML com tabela de dados do lead

### Segurança

- **XSS:** Todos os campos são sanitizados com `escapeHtml()` antes de inserir no HTML do email
- **Rate limiting:** In-memory, 5 requests por minuto por IP
- **Validação de email:** Regex `^[^\s@]+@[^\s@]+\.[^\s@]+$`
- **Sem CSRF:** API pública, sem tokens (aceitável para formulário de contato simples)

### Dependências

- **Resend SDK** — Envio de email
- **Variável de ambiente:** `RESEND_API_KEY`
- **Domínio verificado no Resend:** `laternobilis.com` (para remetente `contato@laternobilis.com`)

---

## Template para documentar novos endpoints

```markdown
## MÉTODO /api/rota

**Objetivo:** [Descrição]

### Request
- Método: GET | POST | PUT | DELETE
- Headers: [se necessário]
- Body: [schema JSON]

### Campos
| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|

### Respostas
- 200: [schema]
- 400: [schema]
- 500: [schema]

### Comportamento interno
1. [passos]

### Segurança
- [validações]
```
