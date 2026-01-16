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
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="group mb-10 sm:mb-12 md:mb-16">
          <span className="inline-block text-primary text-xs sm:text-sm font-medium tracking-widest uppercase mb-3 sm:mb-4">
            Nossa Vantagem
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800 tracking-tight mb-3 sm:mb-4">
            Por que <span className="font-semibold">vendemos seu imóvel</span> mais{" "}
            <span className="font-bodoni text-primary">rápido</span>?
          </h2>
          <div className="h-[3px] w-24 sm:w-32 bg-primary/20 rounded-full overflow-hidden">
            <div className="h-full w-0 bg-primary transition-all duration-700 ease-out group-hover:w-full" />
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
          {/* Reasons */}
          <div className="space-y-6 sm:space-y-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group relative pl-6 sm:pl-8 border-l-2 border-stone-200 hover:border-primary transition-colors duration-300"
              >
                {/* Número */}
                <span className="absolute -left-3 sm:-left-4 top-0 w-6 h-6 sm:w-8 sm:h-8 bg-white border-2 border-stone-200 group-hover:border-primary rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold text-stone-400 group-hover:text-primary transition-colors duration-300">
                  {reason.number}
                </span>

                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">
                  {reason.title}
                </h3>

                {/* Linha animada */}
                <div className="h-[2px] bg-primary/20 mb-2 sm:mb-3 rounded-full overflow-hidden max-w-xs">
                  <div className="h-full w-0 bg-primary transition-all duration-500 ease-out group-hover:w-full" />
                </div>

                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{reason.description}</p>
              </div>
            ))}
          </div>

          {/* Imagem Placeholder */}
          <div className="relative group/img">
            <div className="relative h-[300px] sm:h-[400px] md:h-[550px] bg-gradient-to-br from-stone-200 to-stone-300 rounded-xl sm:rounded-2xl flex items-center justify-center overflow-hidden">
              <span className="text-stone-500 text-base sm:text-lg font-medium">[ Imagem Sala ]</span>
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover/img:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Elementos decorativos - hidden on mobile */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 w-40 h-40 border-2 border-primary/20 rounded-2xl -z-10" />
            <div className="hidden sm:block absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
