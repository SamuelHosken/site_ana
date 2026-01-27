"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function OpenHouse() {
  const comoFunciona = [
    {
      title: "Preparação visual profissional (Home Staging)",
      description: "Antes do evento, o imóvel é completamente preparado — organizado, decorado e ambientado para parecer uma casa-modelo. Nada é deixado ao acaso: iluminação, aromas, música ambiente e até temperatura são ajustados para criar conforto e encantamento.",
    },
    {
      title: "Divulgação segmentada e com antecedência",
      description: "O Open House é divulgado com antecedência em plataformas imobiliárias, redes sociais e canais exclusivos para corretores e compradores qualificados. Em imóveis de luxo, é comum o envio de convites personalizados.",
    },
    {
      title: "Eventos com atmosfera premium",
      description: "No exterior, muitos Open Houses se assemelham a eventos sociais: recepção com espumante ou café especial, música ao vivo ou trilha sonora ambiente, brindes ou parcerias com marcas locais, e presença de corretores preparados.",
    },
    {
      title: "Foco em gerar desejo imediato",
      description: "A ideia é que o comprador se imagine morando ali naquele momento — e, por isso, tome decisões com mais rapidez. A presença de outros interessados gera uma sensação de exclusividade e escassez.",
    },
  ];

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 md:px-6 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-block text-primary text-xs font-medium tracking-widest uppercase mb-4">
                Inovação Imobiliária
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 font-light leading-tight mb-4">
                <span className="font-bodoni text-primary">Open House</span> Exclusivo
              </h1>
              <div className="h-[2px] w-24 bg-primary/30 mx-auto mb-6" />
              <p className="text-gray-600 text-sm max-w-2xl mx-auto leading-relaxed">
                Eventos imobiliários planejados para apresentar seu imóvel de forma estratégica,
                aberta e convidativa — transformando visitas em experiências de encantamento.
              </p>
            </div>
          </ScrollReveal>

          {/* Imagem principal */}
          <ScrollReveal animation="reveal-scale">
            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
              <img
                src="/visualização_3D_o_potencial.png"
                alt="Open House Exclusivo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-lg font-bodoni">
                  Como um "lançamento presencial", onde o imóvel se mostra no seu melhor estado
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* O que é Open House */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal animation="reveal-left">
              <div>
                <h2 className="text-xl sm:text-2xl text-gray-800 mb-4">
                  O que é um <span className="font-bodoni text-primary">Open House</span>?
                </h2>
                <div className="h-[2px] w-20 bg-primary/20 mb-6" />

                <div className="space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    <strong className="text-gray-800">Open House</strong> é um evento imobiliário planejado
                    para apresentar um imóvel à venda de forma estratégica, aberta e convidativa.
                  </p>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    Diferente de uma visita comum, o Open House transforma o momento da apresentação em uma{" "}
                    <strong className="text-gray-800">experiência de encantamento</strong>, onde o imóvel é
                    preparado com cuidado e fica disponível para visitação durante um período específico.
                  </p>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    É como um "lançamento presencial", onde o imóvel se mostra no seu melhor estado,
                    despertando <span className="text-primary font-medium">desejo</span>,{" "}
                    <span className="text-primary font-medium">valorização emocional</span> e{" "}
                    <span className="text-primary font-medium">senso de urgência</span>.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="reveal-right" delay={100}>
              <div className="bg-stone-50 rounded-xl p-6">
                <h3 className="text-primary text-sm font-semibold mb-4">O problema do Open House tradicional no Brasil</h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-4">
                  Infelizmente, o Open House praticado no Brasil — especialmente em Brasília — acaba não
                  oferecendo essa experiência de encantamento. Isso acontece porque, na maioria das vezes,
                  não é feito o home staging, e o evento ocorre em uma casa vazia e fria, sem móveis ou ambientação.
                </p>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Com isso, a estratégia por trás do Open House perde completamente o sentido. Deixa de gerar
                  a conexão emocional, o sentimento de escassez e a sensação de exclusividade — elementos
                  fundamentais que aceleram a tomada de decisão dos compradores.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Como funciona no exterior */}
      <section className="py-16 px-4 md:px-6 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-xl sm:text-2xl text-gray-800 mb-2">
                Como o Open House é feito{" "}
                <span className="font-bodoni text-primary">no exterior</span>
              </h2>
              <p className="text-gray-500 text-sm mt-3">
                Em países como Estados Unidos, Canadá, Reino Unido e Emirados Árabes, o Open House
                é uma etapa essencial no processo de venda.
              </p>
              <div className="h-[2px] w-20 bg-primary/20 mx-auto mt-4" />
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-5">
            {comoFunciona.map((item, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="group bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300 h-full">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-gray-800 text-sm font-semibold mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-xs leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa abordagem */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-xl sm:text-2xl text-gray-800 mb-4">
                O Open House que trazemos para o{" "}
                <span className="font-bodoni text-primary">Brasil</span>
              </h2>
              <div className="h-[2px] w-20 bg-primary/30 mx-auto mb-6" />

              <blockquote className="text-gray-700 text-base md:text-lg leading-relaxed italic max-w-2xl mx-auto">
                "Transformamos a visita ao imóvel em um evento sensorial, com home staging,
                ambientação personalizada e recepção acolhedora. O objetivo? Criar uma
                experiência marcante que acelera a decisão de compra."
              </blockquote>

              <div className="mt-8">
                <a
                  href="/#contato"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary/90 transition-all duration-300"
                >
                  Agende um Open House
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
