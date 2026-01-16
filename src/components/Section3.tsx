export default function Section3() {
  const services = [
    {
      number: "01",
      title: "Visualização 3D do potencial",
      description: "O comprador não compra o que é, compra o que pode ser. Criamos renderizações que mostram seu imóvel reformado, ajudando o cliente a visualizar o futuro e acelerar a decisão.",
      image: "Render 3D",
      imageSrc: "/visualização_3D_o_potencial.png"
    },
    {
      number: "02",
      title: "Fotos e vídeos que vendem",
      description: "Fotógrafos e filmmakers especializados em arquitetura capturam cada detalhe. Seus anúncios não vão parecer mais um. Vão parecer capa de revista.",
      image: "Fotografia",
      imageSrc: "/ana_blur.png"
    },
    {
      number: "03",
      title: "Anúncios que atraem compradores certos",
      description: "Textos persuasivos + design premium + impulsionamento estratégico. Seu imóvel aparece para quem realmente pode comprar, não para curiosos.",
      image: "Anúncios",
      imageSrc: "/anúncios_que_atraem.png"
    },
    {
      number: "04",
      title: "Home staging completo",
      description: "Mobiliário selecionado transforma seu imóvel em um cenário de desejo. O comprador se imagina morando ali, e isso acelera a venda em até 50%.",
      image: "Home Staging",
      imageSrc: "/home_staging.png"
    }
  ];

  return (
    <section id="servicos" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-8 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="group mb-10 sm:mb-16 md:mb-20 text-center max-w-4xl mx-auto">
          <span className="inline-block text-primary text-xs sm:text-sm font-medium tracking-widest uppercase mb-3 sm:mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800 tracking-tight mb-3 sm:mb-4">
            Como <span className="font-bodoni text-primary">transformar seu imóvel</span> em uma oportunidade{" "}
            <span className="font-bodoni text-primary">única de valor</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-4 sm:mt-6">
            Cada detalhe é pensado para uma coisa: fazer seu imóvel se destacar e vender mais rápido, pelo melhor valor.
          </p>
          <div className="h-[3px] w-24 sm:w-32 bg-primary/20 rounded-full overflow-hidden mx-auto mt-4 sm:mt-6">
            <div className="h-full w-0 bg-primary transition-all duration-700 ease-out group-hover:w-full" />
          </div>
        </div>

        {/* Services - Alternating Layout */}
        <div className="space-y-10 sm:space-y-12 md:space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Imagem */}
              <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative h-[250px] sm:h-[300px] md:h-[350px] bg-gradient-to-br from-stone-200 to-stone-300 rounded-xl sm:rounded-2xl overflow-hidden">
                  {service.imageSrc ? (
                    <img
                      src={service.imageSrc}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-stone-500 text-lg font-medium">[ {service.image} ]</span>
                    </div>
                  )}
                  {/* Overlay no hover */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Elementos decorativos - hidden on mobile */}
                <div className={`hidden sm:block absolute -bottom-4 ${index % 2 === 0 ? "-right-4" : "-left-4"} w-32 h-32 border-2 border-primary/20 rounded-2xl -z-10`} />
                <div className={`hidden sm:block absolute -top-4 ${index % 2 === 0 ? "-left-4" : "-right-4"} w-20 h-20 bg-primary/10 rounded-full -z-10`} />
              </div>

              {/* Conteúdo */}
              <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                {/* Número decorativo */}
                <span className="absolute -top-4 sm:-top-8 -left-2 sm:-left-4 text-6xl sm:text-7xl md:text-9xl font-bold text-stone-200/50 select-none">
                  {service.number}
                </span>

                <div className="relative z-10">
                  <h3 className="text-primary text-xl sm:text-2xl font-medium tracking-wide mb-3 sm:mb-4">
                    <span className="text-primary/50">/</span> {service.title}
                  </h3>

                  {/* Linha animada */}
                  <div className="h-[3px] bg-primary/20 mb-4 sm:mb-6 rounded-full overflow-hidden max-w-xs">
                    <div className="h-full w-0 bg-primary transition-all duration-700 ease-out group-hover:w-full" />
                  </div>

                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed">{service.description}</p>

                  {/* Botão sutil */}
                  <button className="mt-4 sm:mt-6 text-primary font-medium flex items-center gap-2 group/btn text-sm sm:text-base">
                    <span>Saiba mais</span>
                    <span className="transition-transform duration-300 group-hover/btn:translate-x-2">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
