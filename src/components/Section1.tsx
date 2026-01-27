"use client";

import ScrollReveal from "./ScrollReveal";

export default function Section1() {
  const features = [
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
      description: "Aplicamos técnicas como home staging e open house utilizadas nos principais mercados imobiliários do mundo, agora adaptadas para o mercado de alto padrão em Brasília."
    },
    {
      title: "Ecossistema integrado",
      description: "Possuímos uma estrutura interna integrada com jurídico, contabilidade e equipe de projeto de arquitetura e gestão de obras para garantir mais segurança e praticidade. Cuidamos de tudo: do preparo à divulgação, da negociação à assinatura."
    }
  ];

  return (
    <section className="relative z-10 -mt-[40vh] pt-20 pb-14 sm:pt-16 sm:pb-12 md:pt-20 md:pb-16 px-4 md:px-6 bg-stone-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <ScrollReveal className="flex flex-col sm:flex-row justify-between items-start mb-8 sm:mb-10 md:mb-12 gap-3">
          <div className="group">
            {/* Badge */}
            <span className="inline-block text-primary text-xs font-medium tracking-widest uppercase mb-3">
              Nossa Abordagem em Vendas Imobiliárias
            </span>

            {/* Título */}
            <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl text-gray-800 tracking-tight mb-2">
              Por que vendemos o seu imóvel mais <span className="font-bodoni text-primary">rápido?</span>
            </h2>

            {/* Linha decorativa animada */}
            <div className="h-[2px] w-20 sm:w-20 bg-primary/20 rounded-full overflow-hidden">
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
        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={(index + 1) * 100}>
              <div className="group p-5 sm:p-5 bg-white rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-default h-full">
                <div className="relative">
                  <h3 className="text-primary text-sm sm:text-sm font-medium tracking-wide mb-2 uppercase">
                    <span className="text-primary/60">/</span> {feature.title}
                  </h3>
                  {/* Linha animada */}
                  <div className="h-[2px] bg-primary/20 mb-3 rounded-full overflow-hidden">
                    <div className="h-full w-0 bg-primary transition-all duration-500 ease-out group-hover:w-full" />
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-sm">{feature.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Footer text */}
        <ScrollReveal delay={500} className="mt-10 text-center">
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            <span className="font-bodoni text-primary text-lg">O resultado?</span>{" "}
            A percepção de valor cresce, o imóvel ganha destaque imediato e comprador e vendedor se encontram em um terreno comum, pois conseguimos demonstrar o{" "}
            <strong className="text-gray-800">real valor do seu bem</strong>.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
