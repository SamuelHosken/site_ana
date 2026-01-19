"use client";

import ScrollReveal from "./ScrollReveal";

export default function Section2() {
  return (
    <section className="py-14 sm:pt-8 sm:pb-12 md:pb-16 px-4 md:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Content Grid */}
        <div className="flex flex-col md:flex-row gap-8 sm:gap-8 md:gap-10 items-center">
          {/* Texto */}
          <div className="md:w-[45%]">
            {/* Header */}
            <ScrollReveal>
              <div className="group mb-4 sm:mb-4">
                <span className="inline-block text-primary text-xs font-medium tracking-widest uppercase mb-2 sm:mb-2">
                  Nossa Filosofia
                </span>
                <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl text-gray-800 tracking-tight mb-2 sm:mb-2">
                  Entre o <span className="font-bodoni text-primary">valor justo</span> e à boa negociação
                </h2>
                <div className="h-[2px] w-20 sm:w-20 bg-primary/20 rounded-full overflow-hidden">
                  <div className="h-full w-0 bg-primary transition-all duration-700 ease-out group-hover:w-full" />
                </div>
              </div>
            </ScrollReveal>

            <div className="space-y-3 sm:space-y-3">
              <ScrollReveal delay={100}>
                <p className="text-gray-600 text-sm sm:text-sm leading-relaxed">
                  Quem vende quer o máximo valor. Quem compra quer o melhor negócio. Talvez você já tenha ouvido:
                </p>
              </ScrollReveal>

              {/* Citação destacada */}
              <ScrollReveal delay={200}>
                <div className="relative pl-4 sm:pl-4 border-l-4 border-primary/30 py-3 sm:py-3 group/quote hover:border-primary transition-colors duration-300">
                  <p className="text-gray-700 text-base sm:text-base font-bodoni italic leading-relaxed">
                    &quot;Quem vende sempre acha que vendeu barato, e quem paga, que pagou muito&quot;
                  </p>
                  <div className="absolute bottom-0 left-0 h-full w-0.5 bg-primary scale-y-0 group-hover/quote:scale-y-100 transition-transform duration-500 origin-bottom" />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <p className="text-gray-600 text-sm sm:text-sm leading-relaxed">
                  Nossa missão é demonstrar o <strong className="text-gray-800">real valor</strong> do seu imóvel, para que comprador e vendedor se encontrem em um terreno comum, satisfeitos com o resultado.
                </p>
              </ScrollReveal>
            </div>
          </div>

          {/* Imagem */}
          <ScrollReveal animation="reveal-scale" className="relative group/img w-full md:w-[55%]">
            <div className="relative h-[280px] sm:h-[280px] md:h-[340px] rounded-xl overflow-hidden">
              <img
                src="/foto_ana.png"
                alt="Ana - Later Nobilis"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/img:scale-105"
              />
            </div>

            {/* Elemento decorativo - hidden on mobile */}
            <div className="hidden sm:block absolute -bottom-3 -right-3 w-24 h-24 border-2 border-primary/20 rounded-xl -z-10" />
            <div className="hidden sm:block absolute -top-3 -left-3 w-16 h-16 bg-primary/10 rounded-full -z-10" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
