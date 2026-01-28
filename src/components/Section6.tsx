"use client";

import ScrollReveal from "./ScrollReveal";

export default function Section6() {
  return (
    <section id="internacional" className="py-16 px-4 md:px-6 bg-gradient-to-b from-stone-50 to-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-8">
          <div className="group inline-block">
            <span className="inline-block text-primary text-xs font-medium tracking-widest uppercase mb-3">
              Expansão Global
            </span>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-800 tracking-tight mb-2">
              International Flip: Imóveis como{" "}
              <span className="font-bodoni text-primary">investimentos</span>
            </h2>
            <div className="h-[2px] w-20 bg-primary/20 rounded-full overflow-hidden mx-auto">
              <div className="h-full w-0 bg-primary transition-all duration-700 ease-out group-hover:w-full" />
            </div>
          </div>

          <p className="text-gray-600 text-sm mt-4 max-w-md mx-auto">
            Vendeu seu imóvel? Transforme o capital em uma oportunidade global.
          </p>
        </ScrollReveal>

        {/* Mapa */}
        <ScrollReveal animation="reveal-scale" className="relative max-w-3xl mx-auto mb-8">
          <div className="relative rounded-xl overflow-hidden">
            <img
              src="/mapa.svg"
              alt="Mapa de atuação internacional"
              className="w-full h-auto"
            />
          </div>
        </ScrollReveal>

        {/* Features - Grid no mobile */}
        <ScrollReveal delay={200} className="text-center max-w-2xl mx-auto">
          <p className="text-gray-600 text-sm leading-relaxed mb-5 hidden md:block">
            Viabilizamos a compra de imóveis em Dubai e EUA com condições privilegiadas:
          </p>
          <div className="grid grid-cols-2 gap-3 max-w-md mx-auto mb-6">
            <div className="p-3 md:p-4 bg-white rounded-xl border border-stone-200">
              <p className="text-gray-800 font-medium text-xs md:text-sm">Valorização Superior</p>
              <p className="text-gray-500 text-[10px] md:text-xs mt-1">Rendimentos livres de impostos</p>
            </div>
            <div className="p-3 md:p-4 bg-white rounded-xl border border-stone-200">
              <p className="text-gray-800 font-medium text-xs md:text-sm">Moeda Forte</p>
              <p className="text-gray-500 text-[10px] md:text-xs mt-1">Dolarize seu patrimônio</p>
            </div>
          </div>

          {/* Botão */}
          <a href="/international-flip" className="group inline-flex px-6 py-3 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-all duration-300">
            <span className="flex items-center gap-2">
              Quero conhecer
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
