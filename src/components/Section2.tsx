export default function Section2() {
  return (
    <section className="pt-8 sm:pt-12 pb-16 sm:pb-20 md:pb-28 px-4 sm:px-6 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Content Grid */}
        <div className="flex flex-col md:flex-row gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Texto */}
          <div className="md:w-[45%]">
            {/* Header */}
            <div className="group mb-4 sm:mb-6">
              <span className="inline-block text-primary text-xs sm:text-sm font-medium tracking-widest uppercase mb-2 sm:mb-3">
                Nossa Filosofia
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800 tracking-tight mb-2 sm:mb-3">
                Entre o <span className="font-bodoni text-primary">valor justo</span> e à boa negociação
              </h2>
              <div className="h-[3px] w-24 sm:w-32 bg-primary/20 rounded-full overflow-hidden">
                <div className="h-full w-0 bg-primary transition-all duration-700 ease-out group-hover:w-full" />
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Quem vende quer o máximo valor. Quem compra quer o melhor negócio. Talvez você já tenha ouvido:
              </p>

              {/* Citação destacada */}
              <div className="relative pl-4 sm:pl-6 border-l-4 border-primary/30 py-3 sm:py-4 group/quote hover:border-primary transition-colors duration-300">
                <p className="text-gray-700 text-lg sm:text-xl font-bodoni italic leading-relaxed">
                  &quot;Quem vende sempre acha que vendeu barato, e quem paga, que pagou muito&quot;
                </p>
                <div className="absolute bottom-0 left-0 h-full w-1 bg-primary scale-y-0 group-hover/quote:scale-y-100 transition-transform duration-500 origin-bottom" />
              </div>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Nossa missão é demonstrar o <strong className="text-gray-800">real valor</strong> do seu imóvel, para que comprador e vendedor se encontrem em um terreno comum, satisfeitos com o resultado.
              </p>
            </div>
          </div>

          {/* Imagem */}
          <div className="relative group/img w-full md:w-[55%]">
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
              <img
                src="/foto_ana.png"
                alt="Ana - Later Nobilis"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/img:scale-105"
              />
            </div>

            {/* Elemento decorativo - hidden on mobile */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-32 h-32 border-2 border-primary/20 rounded-2xl -z-10" />
            <div className="hidden sm:block absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
