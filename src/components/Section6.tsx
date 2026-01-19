"use client";

import ScrollReveal from "./ScrollReveal";

export default function Section6() {
  return (
    <section className="py-14 sm:py-12 md:py-16 px-4 md:px-6 bg-gradient-to-b from-stone-50 to-white">
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
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-4 text-left max-w-xl mx-auto">
            <ScrollReveal delay={300} className="flex-1">
              <div className="p-4 bg-white rounded-xl border border-stone-200 h-full">
                <p className="text-gray-800 font-medium text-sm sm:text-sm">Rentabilidade superior</p>
                <p className="text-gray-600 text-xs sm:text-xs mt-1">Rendimentos acima de 1% ao mês antes da entrega</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={400} className="flex-1">
              <div className="p-4 bg-white rounded-xl border border-stone-200 h-full">
                <p className="text-gray-800 font-medium text-sm sm:text-sm">Moeda forte</p>
                <p className="text-gray-600 text-xs sm:text-xs mt-1">Dolarize seu patrimônio e proteja seu futuro</p>
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
