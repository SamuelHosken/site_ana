"use client";

import { ReactNode } from "react";
import ScrollReveal from "./ScrollReveal";

// Componente de Tooltip reutilizável
function Tooltip({ term, explanation }: { term: string; explanation: string }) {
  return (
    <span className="relative inline-block group/tooltip">
      <span className="text-gray-800 border-b-2 border-primary/40 cursor-help transition-colors group-hover/tooltip:border-primary">
        {term}
      </span>
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-3 bg-white rounded-xl shadow-xl border border-stone-100 w-64 opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-300 transform group-hover/tooltip:-translate-y-0 translate-y-2 z-50 pointer-events-none">
        <span className="block text-primary text-xs font-semibold mb-1">{term}</span>
        <span className="block text-gray-600 text-xs leading-relaxed">{explanation}</span>
        <span className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white" />
      </span>
    </span>
  );
}

export default function Section1() {
  const features: { title: string; description: ReactNode }[] = [
    {
      title: "Investimento real em impulsionamento",
      description: "Contratualmente, nos comprometemos a destinar até R$ 10.000,00 em divulgação online exclusiva para o seu imóvel. Campanhas digitais segmentadas de anúncios online no Google, nas redes sociais e nos portais imobiliários. Esse investimento acelera o interesse qualificado e garante visibilidade direcionada desde o lançamento."
    },
    {
      title: "Atendimento dedicado e intencional",
      description: "Cada consultor gerencia no máximo três imóveis simultaneamente. Isso garante foco total, estratégia personalizada e atenção dedicada ao seu patrimônio. Nem todo imóvel se encaixa no nosso portfólio e isso é parte da nossa essência."
    },
    {
      title: "Estratégias Internacionais de Venda",
      description: (
        <>
          Aplicamos técnicas como{" "}
          <Tooltip
            term="home staging"
            explanation="Técnica de preparação visual do imóvel para venda, com decoração e ambientação estratégica que valoriza os espaços."
          />{" "}
          e{" "}
          <Tooltip
            term="open house"
            explanation="Evento de visitação aberta onde o imóvel é apresentado a potenciais compradores em um ambiente preparado e acolhedor."
          />{" "}
          utilizadas nos principais mercados imobiliários do mundo, agora adaptadas para o mercado de alto padrão em Brasília.
        </>
      )
    },
    {
      title: "Ecossistema integrado",
      description: "Possuímos uma estrutura interna integrada com jurídico, contabilidade e equipe de projeto de arquitetura e gestão de obras para garantir mais segurança e praticidade. Cuidamos de tudo: do preparo à divulgação, da negociação à assinatura."
    }
  ];

  return (
    <section className="relative z-10 lg:-mt-[40vh] py-16 px-4 md:px-6 bg-stone-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <ScrollReveal className="flex flex-col md:flex-row justify-between items-start mb-10 gap-3">
          <div className="group">
            {/* Badge */}
            <span className="inline-block text-primary text-xs font-medium tracking-widest uppercase mb-3">
              Nossa Abordagem
            </span>

            {/* Título */}
            <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-800 tracking-tight mb-2">
              Por que vendemos o seu imóvel mais <span className="font-bodoni text-primary">rápido?</span>
            </h2>

            {/* Linha decorativa animada */}
            <div className="h-[2px] w-20 bg-primary/20 rounded-full overflow-hidden">
              <div className="h-full w-0 bg-primary transition-all duration-700 ease-out group-hover:w-full" />
            </div>
          </div>

          <div className="hidden md:block text-right">
            <img
              src="/Tipografia Logo.svg"
              alt="Later Nobilis"
              className="h-4 w-auto ml-auto brightness-0 opacity-30"
            />
          </div>
        </ScrollReveal>

        {/* Content Grid - 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={(index + 1) * 80}>
              <div className="group p-5 bg-white rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-default h-full">
                <div className="relative">
                  <h3 className="text-primary text-xs md:text-sm font-medium tracking-wide mb-2 uppercase">
                    <span className="text-primary/50">/</span> {feature.title}
                  </h3>
                  {/* Linha animada */}
                  <div className="h-[1.5px] bg-primary/20 mb-3 rounded-full overflow-hidden max-w-[180px]">
                    <div className="h-full w-0 bg-primary transition-all duration-500 ease-out group-hover:w-full" />
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Footer text */}
        <ScrollReveal delay={400} className="mt-10 text-center">
          <p className="text-gray-700 text-sm leading-relaxed max-w-2xl mx-auto">
            <span className="font-bodoni text-primary text-base md:text-lg">O resultado?</span>{" "}
            Conseguimos demonstrar o <strong className="text-gray-800">real valor do seu bem</strong> e comprador e vendedor se encontram satisfeitos.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
