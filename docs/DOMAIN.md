# Domínio de Negócio — Later Nobilis

## Contexto

A **Later Nobilis** é uma imobiliária boutique de alto padrão em Brasília. Diferente de imobiliárias tradicionais que trabalham com volume, a Later Nobilis atua com curadoria — cada consultor gerencia no máximo 3 imóveis simultaneamente, com estratégias personalizadas de venda.

A empresa combina técnicas internacionais (home staging, open house) com marketing digital agressivo (até R$ 10.000 em impulsionamento por imóvel) para vender mais rápido e por mais valor.

## Glossário

| Termo | Definição |
|-------|-----------|
| **Imobiliária Boutique** | Imobiliária que trabalha com poucos imóveis selecionados, oferecendo atendimento personalizado e estratégias exclusivas |
| **Home Staging** | Técnica de preparação visual do imóvel para venda — decoração, ambientação e cenografia para valorizar espaços |
| **Open House** | Evento de visitação aberta onde o imóvel é apresentado a potenciais compradores em ambiente preparado |
| **International Flip** | Serviço de internacionalização patrimonial — venda do imóvel no Brasil e reinvestimento em Dubai ou EUA |
| **Lead** | Potencial cliente que preenche o formulário de contato no site |
| **Impulsionamento** | Investimento em anúncios digitais (Google, redes sociais, portais imobiliários) para divulgar o imóvel |
| **Avaliação** | Processo de determinar o valor de mercado de um imóvel |
| **Alto padrão** | Imóveis de luxo, geralmente acima de R$ 1 milhão |
| **Ecossistema integrado** | Estrutura interna com jurídico, contabilidade e arquitetura |
| **Gestão de ativos** | Administração de imóveis para aluguel, buscando maximizar rentabilidade |

## Entidades centrais

### Lead (Contato)
Pessoa que demonstra interesse via formulário do site.

```
Lead {
  tipo: "Vender" | "Alugar"
  avaliacao: "Sim" | "Não"
  localizacao: string        // Ex: "Asa Sul", "Lago Norte"
  mensagem: string           // Opcional
  nome: string
  email: string
  telefone: string
}
```

### Imóvel
Não é gerenciado pelo site, mas é o objeto central do negócio.

```
Imóvel {
  tipo: residencial | comercial
  localização: string
  padrão: alto padrão
  status: disponível | vendido | alugado
}
```

### Serviços oferecidos
1. **Venda de imóveis** — Com home staging, open house e impulsionamento digital
2. **Gestão de aluguéis** — Administração com foco em rentabilidade
3. **Internacionalização** — Venda no Brasil + compra em Dubai/EUA
4. **Consultoria arquitetônica** — Avaliação técnica e projeto de melhorias

## Fluxos de negócio principais

### Fluxo de captação de lead (site)

```
1. Visitante acessa o site
2. Navega pelas seções (serviços, diferenciais, etc.)
3. Clica em botão de contato (CTA)
4. Se USE_CONTACT_FORM = true:
   a. Abre modal multi-step
   b. Step 1: Seleciona interesse (Vender/Alugar) + avaliação
   c. Step 2: Localização + mensagem opcional
   d. Step 3: Nome, email, telefone
   e. Envia → email para equipe via Resend
   f. Tela de sucesso → redireciona para WhatsApp
5. Se USE_CONTACT_FORM = false:
   → Abre WhatsApp direto
```

### Fluxo de venda (offline)

```
1. Lead qualificado chega via site
2. Consultor faz avaliação do imóvel
3. Home staging é aplicado
4. Produção visual (fotos, vídeo, drone)
5. Impulsionamento digital (até R$ 10.000)
6. Open house event
7. Negociação e fechamento
8. Suporte jurídico até a assinatura
```

## Mercados de atuação

| Mercado | Foco |
|---------|------|
| **Brasília** | Venda e aluguel de imóveis de alto padrão |
| **Dubai** | Investimento imobiliário (0% imposto, 8-12% aluguel a.a.) |
| **EUA (Miami/Orlando)** | Dolarização de patrimônio |

## Regras de negócio importantes

1. Cada consultor gerencia **no máximo 3 imóveis** simultaneamente
2. A empresa investe **até R$ 10.000** em impulsionamento por imóvel (contratual)
3. Nem todo imóvel se encaixa no portfólio — há curadoria de entrada
4. Home staging é feito em parceria com lojas de móveis (empréstimo de mobiliário)
5. O site é o principal canal digital de captação de leads
