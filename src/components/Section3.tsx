"use client";

import ScrollReveal from "./ScrollReveal";

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
    <section id="servicos" className="py-16 sm:py-12 md:py-16 px-4 md:px-6 bg-stone-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <ScrollReveal className="group mb-10 sm:mb-10 md:mb-12 text-center max-w-3xl mx-auto">
          <span className="inline-block text-primary text-xs font-medium tracking-widest uppercase mb-3">
            Nossos Serviços
          </span>
          <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl text-gray-800 tracking-tight mb-2">
            Como <span className="font-bodoni text-primary">transformar seu imóvel</span> em uma oportunidade{" "}
            <span className="font-bodoni text-primary">única de valor</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-sm mt-4">
            Cada detalhe é pensado para uma coisa: fazer seu imóvel se destacar e vender mais rápido, pelo melhor valor.
          </p>
          <div className="h-[2px] w-20 sm:w-20 bg-primary/20 rounded-full overflow-hidden mx-auto mt-4">
            <div className="h-full w-0 bg-primary transition-all duration-700 ease-out group-hover:w-full" />
          </div>
        </ScrollReveal>

        {/* Services - Alternating Layout */}
        <div className="space-y-12 sm:space-y-10 md:space-y-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group grid lg:grid-cols-2 gap-6 sm:gap-6 lg:gap-10 items-center ${
                index % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Imagem */}
              <ScrollReveal
                animation={index % 2 === 0 ? "reveal-left" : "reveal-right"}
                className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <div className="relative h-[240px] sm:h-[220px] md:h-[260px] bg-gradient-to-br from-stone-200 to-stone-300 rounded-xl sm:rounded-xl overflow-hidden">
                  {service.imageSrc ? (
                    <img
                      src={service.imageSrc}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-stone-500 text-sm font-medium">[ {service.image} ]</span>
                    </div>
                  )}
                  {/* Overlay no hover */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Elementos decorativos - hidden on mobile */}
                <div className={`hidden sm:block absolute -bottom-3 ${index % 2 === 0 ? "-right-3" : "-left-3"} w-20 h-20 border-2 border-primary/20 rounded-xl -z-10`} />
                <div className={`hidden sm:block absolute -top-3 ${index % 2 === 0 ? "-left-3" : "-right-3"} w-14 h-14 bg-primary/10 rounded-full -z-10`} />
              </ScrollReveal>

              {/* Conteúdo */}
              <ScrollReveal
                animation={index % 2 === 0 ? "reveal-right" : "reveal-left"}
                delay={100}
                className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                {/* Número decorativo */}
                <span className="absolute -top-3 sm:-top-4 -left-1 sm:-left-2 text-6xl sm:text-6xl md:text-7xl font-bold text-stone-200/50 select-none">
                  {service.number}
                </span>

                <div className="relative z-10">
                  <h3 className="text-primary text-lg sm:text-lg font-medium tracking-wide mb-2">
                    <span className="text-primary/50">/</span> {service.title}
                  </h3>

                  {/* Linha animada */}
                  <div className="h-[2px] bg-primary/20 mb-3 rounded-full overflow-hidden max-w-[200px]">
                    <div className="h-full w-0 bg-primary transition-all duration-700 ease-out group-hover:w-full" />
                  </div>

                  <p className="text-gray-600 text-sm sm:text-sm leading-relaxed">{service.description}</p>

                  {/* Botão sutil */}
                  <button className="mt-4 sm:mt-4 text-primary font-medium flex items-center gap-2 group/btn text-sm sm:text-sm">
                    <span>Saiba mais</span>
                    <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                  </button>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
