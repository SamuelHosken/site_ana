export default function Section6() {
  return (
    <section className="py-10 sm:py-12 md:py-16 px-4 md:px-6 bg-gradient-to-b from-stone-50 to-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <div className="group inline-block">
            <span className="inline-block text-primary text-[11px] font-medium tracking-widest uppercase mb-2">
              Expansão Global
            </span>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-800 tracking-tight mb-2">
              International Flip: Imóveis como{" "}
              <span className="font-bodoni text-primary">investimentos</span>
            </h2>
            <div className="h-[2px] w-16 sm:w-20 bg-primary/20 rounded-full overflow-hidden mx-auto">
              <div className="h-full w-0 bg-primary transition-all duration-700 ease-out group-hover:w-full" />
            </div>
          </div>

          <p className="text-gray-600 text-xs sm:text-sm mt-4 sm:mt-5 max-w-xl mx-auto">
            Vendeu seu imóvel? Transforme o capital em uma oportunidade global.
          </p>
        </div>

        {/* Mapa */}
        <div className="relative max-w-4xl mx-auto mb-6 sm:mb-8 md:mb-10">
          <div className="relative rounded-lg sm:rounded-xl overflow-hidden">
            <img
              src="/mapa.svg"
              alt="Mapa de atuação internacional"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Texto final */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
            Viabilizamos a compra de imóveis em Dubai e EUA com condições privilegiadas de investimento:
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 text-left max-w-xl mx-auto">
            <div className="flex-1 p-3 bg-white rounded-lg border border-stone-200">
              <p className="text-gray-800 font-medium text-xs sm:text-sm">Rentabilidade superior</p>
              <p className="text-gray-600 text-[11px] sm:text-xs">Rendimentos acima de 1% ao mês antes da entrega</p>
            </div>
            <div className="flex-1 p-3 bg-white rounded-lg border border-stone-200">
              <p className="text-gray-800 font-medium text-xs sm:text-sm">Moeda forte</p>
              <p className="text-gray-600 text-[11px] sm:text-xs">Dolarize seu patrimônio e proteja seu futuro</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
