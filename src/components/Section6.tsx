"use client";

import ScrollReveal from "./ScrollReveal";

export default function Section6() {
  return (
    <section id="internacional" className="py-14 sm:py-12 md:py-16 px-4 md:px-6 bg-gradient-to-b from-stone-50 to-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-8 sm:mb-8 md:mb-10">
          <div className="group inline-block">
            <span className="inline-block text-primary text-xs font-medium tracking-widest uppercase mb-3">
              Expansão Global
            </span>
            <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl text-gray-800 tracking-tight mb-2">
              International Flip: Imóveis como{" "}
              <span className="font-bodoni text-primary">investimentos</span>
            </h2>
            <div className="h-[2px] w-20 sm:w-20 bg-primary/20 rounded-full overflow-hidden mx-auto">
              <div className="h-full w-0 bg-primary transition-all duration-700 ease-out group-hover:w-full" />
            </div>
          </div>

          <p className="text-gray-600 text-sm sm:text-sm mt-5 sm:mt-5 max-w-xl mx-auto">
            Vendeu seu imóvel? Transforme o capital em uma oportunidade global.
          </p>
        </ScrollReveal>

        {/* Mapa */}
        <ScrollReveal animation="reveal-scale" className="relative max-w-4xl mx-auto mb-8 sm:mb-8 md:mb-10">
          <div className="relative rounded-xl sm:rounded-xl overflow-hidden">
            <img
              src="/mapa.svg"
              alt="Mapa de atuação internacional"
              className="w-full h-auto"
            />
          </div>
        </ScrollReveal>

        {/* Texto final */}
        <ScrollReveal delay={200} className="text-center max-w-2xl mx-auto">
          <p className="text-gray-600 text-sm sm:text-sm leading-relaxed mb-4 sm:mb-4">
            Viabilizamos a compra de imóveis em Dubai e EUA com condições privilegiadas de investimento:
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-4 text-left max-w-xl mx-auto mb-6">
            <ScrollReveal delay={300} className="flex-1">
              <div className="p-4 bg-white rounded-xl border border-stone-200 h-full">
                <p className="text-gray-800 font-medium text-sm sm:text-sm">Valorização Superior</p>
                <p className="text-gray-600 text-xs sm:text-xs mt-1">Invista em mercados que só crescem com rendimentos livres de impostos</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={400} className="flex-1">
              <div className="p-4 bg-white rounded-xl border border-stone-200 h-full">
                <p className="text-gray-800 font-medium text-sm sm:text-sm">Moeda forte</p>
                <p className="text-gray-600 text-xs sm:text-xs mt-1">Dolarize seu patrimônio e proteja seu futuro</p>
              </div>
            </ScrollReveal>
          </div>

          {/* Botão */}
          <ScrollReveal delay={500}>
            <a href="/international-flip" className="group inline-flex px-6 py-3 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-all duration-300">
              <span className="flex items-center gap-2">
                Quero conhecer
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
          </ScrollReveal>
        </ScrollReveal>
      </div>
    </section>
  );
}
