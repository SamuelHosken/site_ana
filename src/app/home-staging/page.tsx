"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomeStaging() {
  const etapas = [
    {
      number: "01",
      title: "Diagnóstico estratégico do imóvel",
      description: "Avaliamos cada ambiente com olhar técnico dos nossos consultores arquitetônicos, identificando pontos fortes e aspectos a melhorar: circulação, iluminação, excesso de móveis, cores, etc.",
    },
    {
      number: "02",
      title: "Despersonalização e neutralidade elegante",
      description: "Removemos itens pessoais e excessos decorativos para que o imóvel conte uma nova história — limpa, neutra e sofisticada, que agrada ao maior número de compradores.",
    },
    {
      number: "03",
      title: "Reorganização dos móveis",
      description: "Redefinimos layout e disposição de móveis para valorizar o espaço, criar amplitude e fluxo visual agradável — mesmo com os móveis atuais do proprietário.",
    },
    {
      number: "04",
      title: "Decoração estratégica e cenografia",
      description: "Inserimos elementos de apoio como tapetes, almofadas, cortinas, plantas, obras de arte e objetos de decoração de estilo contemporâneo, escolhidos sob medida para o perfil do imóvel.",
    },
    {
      number: "05",
      title: "Iluminação e ambientação sensorial",
      description: "Ajustamos iluminação, aromas e até sons ambientes (em visitas presenciais) para criar uma experiência acolhedora e marcante.",
    },
    {
      number: "06",
      title: "Produção visual profissional",
      description: "Com o imóvel pronto, entramos com fotografia e vídeo profissional, drone, filmagens com câmera em movimento (gimbal), além de edição com foco emocional.",
    },
  ];

  const beneficios = [
    "Imóveis com home staging vendem até 50% mais rápido",
    "Podem ter valorização de 10% a 20% no preço final",
    "Reduz o tempo de imóvel parado e aumenta o interesse desde o primeiro anúncio",
    "Ajuda a fotografia e os vídeos do imóvel ficarem muito mais atraentes",
    "Transmite uma imagem de profissionalismo e cuidado que eleva a percepção de valor",
  ];

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="pt-20 md:pt-24 pb-10 md:pb-16 px-4 md:px-6 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-8">
              <span className="inline-block text-primary text-xs font-medium tracking-widest uppercase mb-3">
                Inovação Imobiliária
              </span>
              <h1 className="text-xl md:text-3xl lg:text-4xl text-gray-800 font-light leading-tight mb-3">
                <span className="font-bodoni text-primary">Home Staging</span> Profissional
              </h1>
              <div className="h-[2px] w-20 bg-primary/30 mx-auto mb-4" />
              <p className="text-gray-600 text-sm max-w-xl mx-auto leading-relaxed">
                Transforme seu imóvel em um espaço visualmente irresistível —{" "}
                <strong className="text-gray-800">sem grandes reformas</strong>.
              </p>
            </div>
          </ScrollReveal>

          {/* Imagem principal */}
          <ScrollReveal animation="reveal-scale">
            <div className="relative h-[220px] md:h-[400px] rounded-xl md:rounded-2xl overflow-hidden">
              <img
                src="/home_staging.png"
                alt="Home Staging Profissional"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                <p className="text-white text-sm md:text-lg font-bodoni">
                  Valorização emocional + estética = venda mais rápida
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* O que é Home Staging */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <ScrollReveal animation="reveal-left">
              <div>
                <h2 className="text-lg md:text-2xl text-gray-800 mb-3">
                  O que é <span className="font-bodoni text-primary">Home Staging</span>?
                </h2>
                <div className="h-[2px] w-16 bg-primary/20 mb-4" />

                <div className="space-y-3">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    <strong className="text-gray-800">Home staging</strong> é uma técnica de marketing
                    imobiliário para preparar imóveis para venda. O objetivo é transformar o ambiente em um espaço
                    atrativo e "desejável".
                  </p>

                  <p className="text-gray-600 text-sm leading-relaxed hidden md:block">
                    Fazemos parcerias com lojas de móveis que utilizam o espaço do imóvel para exibir seu
                    mobiliário — expandindo seu showroom.
                  </p>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    Na <strong className="text-primary">Later Nobilis</strong>, conectamos emocionalmente o comprador
                    ao imóvel — desde a primeira imagem até a visita presencial.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="reveal-right" delay={100}>
              <div className="relative h-[200px] md:h-[350px] bg-gradient-to-br from-stone-200 to-stone-300 rounded-xl overflow-hidden">
                <img
                  src="/home_staging_2.jpg"
                  alt="Home Staging Exemplo"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Como fazemos */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="text-lg md:text-2xl text-gray-800 mb-2">
                Como fazemos na <span className="font-bodoni text-primary">prática</span>
              </h2>
              <div className="h-[2px] w-16 bg-primary/20 mx-auto" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
            {etapas.map((etapa, index) => (
              <ScrollReveal key={index} delay={index * 60}>
                <div className="group bg-white p-4 md:p-5 rounded-xl hover:shadow-lg transition-all duration-300 h-full">
                  <span className="text-2xl md:text-4xl font-bold text-stone-200 group-hover:text-primary/20 transition-colors">
                    {etapa.number}
                  </span>
                  <h3 className="text-primary text-xs md:text-sm font-semibold mt-1 mb-1 md:mt-2 md:mb-2 line-clamp-2">{etapa.title}</h3>
                  <p className="text-gray-600 text-[10px] md:text-xs leading-relaxed line-clamp-3 md:line-clamp-none">{etapa.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-6 md:mb-10">
              <h2 className="text-lg md:text-2xl text-gray-800 mb-2">
                Benefícios <span className="font-bodoni text-primary">Reais</span>
              </h2>
              <div className="h-[2px] w-16 bg-primary/20 mx-auto" />
            </div>
          </ScrollReveal>

          <div className="space-y-2 md:space-y-3">
            {beneficios.map((item, index) => (
              <ScrollReveal key={index} delay={index * 50}>
                <div className="flex items-start gap-3 p-3 md:p-4 bg-stone-50 rounded-lg hover:bg-primary/5 transition-colors">
                  <span className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 md:w-3.5 md:h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p className="text-gray-700 text-sm">{item}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-primary">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-lg md:text-2xl text-white font-normal mb-3">
              Transforme seu imóvel em uma{" "}
              <span className="font-bodoni">experiência de desejo</span>
            </h2>
            <p className="text-white/80 text-sm mb-6">
              Descubra como o home staging pode acelerar a venda.
            </p>
            <a
              href="/#contato"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary text-sm font-medium rounded-full hover:bg-gray-100 transition-all duration-300"
            >
              Quero saber mais
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
