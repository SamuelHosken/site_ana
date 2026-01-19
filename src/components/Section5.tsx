export default function Section5() {
  const reasons = [
    {
      number: "01",
      title: "R$ 10.000 investidos no seu imóvel",
      description: "Enquanto outras imobiliárias cobram para anunciar, nós investimos. Até R$ 10.000 em campanhas digitais, impulsionamento e divulgação premium para o seu imóvel."
    },
    {
      number: "02",
      title: "Máximo 3 imóveis por consultor",
      description: "Isso não é slogan, é compromisso. Foco total significa resposta rápida, estratégia personalizada e atenção que você não encontra em imobiliárias tradicionais."
    },
    {
      number: "03",
      title: "Técnicas que vendem no mundo inteiro",
      description: "Home staging, open house exclusivo, fotografia arquitetônica. O que funciona em Nova York e Dubai, agora funciona para o seu imóvel em Brasília."
    }
  ];

  return (
    <section className="py-16 sm:py-12 md:py-16 px-4 md:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="group mb-8 sm:mb-8 md:mb-10">
          <span className="inline-block text-primary text-xs font-medium tracking-widest uppercase mb-3">
            Nossa Vantagem
          </span>
          <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl text-gray-800 tracking-tight mb-2">
            Por que <span className="font-semibold">vendemos seu imóvel</span> mais{" "}
            <span className="font-bodoni text-primary">rápido</span>?
          </h2>
          <div className="h-[2px] w-20 sm:w-20 bg-primary/20 rounded-full overflow-hidden">
            <div className="h-full w-0 bg-primary transition-all duration-700 ease-out group-hover:w-full" />
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-8 md:gap-10 items-center">
          {/* Reasons */}
          <div className="space-y-6 sm:space-y-5">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group relative pl-6 sm:pl-6 border-l-2 border-stone-200 hover:border-primary transition-colors duration-300"
              >
                {/* Número */}
                <span className="absolute -left-3.5 sm:-left-3 top-0 w-7 h-7 sm:w-6 sm:h-6 bg-white border-2 border-stone-200 group-hover:border-primary rounded-full flex items-center justify-center text-[11px] sm:text-[10px] font-bold text-stone-400 group-hover:text-primary transition-colors duration-300">
                  {reason.number}
                </span>

                <h3 className="text-base sm:text-base font-semibold text-gray-800 mb-2 sm:mb-2 group-hover:text-primary transition-colors duration-300">
                  {reason.title}
                </h3>

                {/* Linha animada */}
                <div className="h-[2px] bg-primary/20 mb-2 sm:mb-2 rounded-full overflow-hidden max-w-[200px]">
                  <div className="h-full w-0 bg-primary transition-all duration-500 ease-out group-hover:w-full" />
                </div>

                <p className="text-gray-600 leading-relaxed text-sm sm:text-sm">{reason.description}</p>
              </div>
            ))}
          </div>

          {/* Imagem Placeholder */}
          <div className="relative group/img">
            <div className="relative h-[280px] sm:h-[280px] md:h-[380px] bg-gradient-to-br from-stone-200 to-stone-300 rounded-xl sm:rounded-xl flex items-center justify-center overflow-hidden">
              <span className="text-stone-500 text-base sm:text-base font-medium">[ Imagem Sala ]</span>
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover/img:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Elementos decorativos - hidden on mobile */}
            <div className="hidden sm:block absolute -bottom-4 -left-4 w-28 h-28 border-2 border-primary/20 rounded-xl -z-10" />
            <div className="hidden sm:block absolute -top-4 -right-4 w-16 h-16 bg-primary/10 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
