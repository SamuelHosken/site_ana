export default function Section6() {
  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-stone-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="group inline-block">
            <span className="inline-block text-primary text-xs sm:text-sm font-medium tracking-widest uppercase mb-3 sm:mb-4">
              Expansão Global
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800 tracking-tight mb-3 sm:mb-4">
              International Flip: Imóveis como{" "}
              <span className="font-bodoni text-primary">investimentos</span>
            </h2>
            <div className="h-[3px] w-24 sm:w-32 bg-primary/20 rounded-full overflow-hidden mx-auto">
              <div className="h-full w-0 bg-primary transition-all duration-700 ease-out group-hover:w-full" />
            </div>
          </div>

          <p className="text-gray-600 text-base sm:text-lg mt-6 sm:mt-8 max-w-2xl mx-auto">
            Vendeu seu imóvel? Transforme o capital em uma oportunidade global.
          </p>
        </div>

        {/* Mapa */}
        <div className="relative max-w-7xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden">
            <img
              src="/mapa.svg"
              alt="Mapa de atuação internacional"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Texto final */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Viabilizamos a compra de imóveis em Dubai e EUA com condições privilegiadas de investimento:
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 text-left max-w-2xl mx-auto">
            <div className="flex-1 p-4 bg-white rounded-xl border border-stone-200">
              <p className="text-gray-800 font-medium text-sm sm:text-base">Rentabilidade superior</p>
              <p className="text-gray-600 text-xs sm:text-sm">Rendimentos acima de 1% ao mês antes da entrega</p>
            </div>
            <div className="flex-1 p-4 bg-white rounded-xl border border-stone-200">
              <p className="text-gray-800 font-medium text-sm sm:text-base">Moeda forte</p>
              <p className="text-gray-600 text-xs sm:text-sm">Dolarize seu patrimônio e proteja seu futuro</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
