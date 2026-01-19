export default function Section1() {
  const featuresLeft = [
    {
      title: "Investimento real em marketing",
      description: "Aplicamos até R$ 10.000 em campanhas digitais segmentadas para o seu imóvel. Enquanto outras imobiliárias apenas listam, nós impulsionamos, garantindo visibilidade máxima desde o primeiro dia."
    },
    {
      title: "Atendimento ultra exclusivo",
      description: "Cada consultor gerencia no máximo 3 imóveis simultaneamente. Isso significa foco total, estratégia personalizada e atenção exclusiva ao seu patrimônio. Nem todo imóvel se encaixa no nosso portfólio."
    }
  ];

  const featuresRight = [
    {
      title: "Estratégias de Nova York e Dubai",
      description: "Técnicas que vendem imóveis de luxo no mundo inteiro, agora em Brasília."
    },
    {
      title: "Home staging profissional",
      description: "Imóveis preparados vendem até 50% mais rápido e por valores até 20% maiores. Transformamos seu espaço em um cenário irresistível."
    },
    {
      title: "Open house exclusivo",
      description: "Eventos reservados que criam desejo, urgência e competição entre compradores qualificados."
    }
  ];

  return (
    <section id="sobre" className="py-14 sm:py-12 md:py-16 px-4 md:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start mb-8 sm:mb-10 md:mb-12 gap-3">
          <div className="group">
            {/* Badge */}
            <span className="inline-block text-primary text-xs font-medium tracking-widest uppercase mb-3">
              Nossa Essência
            </span>

            {/* Título */}
            <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl text-gray-800 tracking-tight mb-2">
              O que é uma <span className="font-bodoni text-primary">Imobiliária Boutique?</span>
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
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-x-5 lg:gap-x-10 gap-y-5 sm:gap-y-4">
          {/* Coluna Esquerda */}
          <div className="space-y-5 sm:space-y-4">
            {featuresLeft.map((feature, index) => (
              <div
                key={index}
                className="group p-4 sm:p-4 rounded-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-lg hover:-translate-y-1 cursor-default"
              >
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
            ))}
          </div>

          {/* Coluna Direita */}
          <div className="space-y-5 sm:space-y-3">
            {/* Primeiro item - Estratégias */}
            <div className="group p-4 sm:p-4 rounded-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-lg hover:-translate-y-1 cursor-default">
              <div className="relative">
                <h3 className="text-primary text-sm sm:text-sm font-medium tracking-wide mb-2 uppercase">
                  <span className="text-primary/60">/ </span>
                  {featuresRight[0].title}
                </h3>
                <div className="h-[2px] bg-primary/20 mb-3 rounded-full overflow-hidden">
                  <div className="h-full w-0 bg-primary transition-all duration-500 ease-out group-hover:w-full" />
                </div>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-sm">{featuresRight[0].description}</p>
              </div>
            </div>

            {/* Cards destacados - Home staging e Open house */}
            <div className="grid gap-4 sm:gap-2">
              {featuresRight.slice(1).map((feature, index) => (
                <div
                  key={index}
                  className="group p-4 sm:p-3 bg-stone-50 border border-stone-200 rounded-lg transition-all duration-300 hover:bg-stone-100 hover:border-primary/30 hover:shadow-md cursor-default"
                >
                  <h3 className="text-primary font-medium text-base sm:text-base mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
