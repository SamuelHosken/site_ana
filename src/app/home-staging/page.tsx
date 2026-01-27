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
      <section className="pt-24 pb-16 px-4 md:px-6 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-block text-primary text-xs font-medium tracking-widest uppercase mb-4">
                Inovação Imobiliária
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 font-light leading-tight mb-4">
                <span className="font-bodoni text-primary">Home Staging</span> Profissional
              </h1>
              <div className="h-[2px] w-24 bg-primary/30 mx-auto mb-6" />
              <p className="text-gray-600 text-sm max-w-2xl mx-auto leading-relaxed">
                Uma estratégia internacional de valorização imobiliária, usada para transformar seu imóvel
                em um espaço visualmente irresistível — <strong className="text-gray-800">sem grandes reformas</strong> e
                com <strong className="text-gray-800">retorno real no valor percebido</strong>.
              </p>
            </div>
          </ScrollReveal>

          {/* Imagem principal */}
          <ScrollReveal animation="reveal-scale">
            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-12">
              <img
                src="/home_staging.png"
                alt="Home Staging Profissional"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-lg font-bodoni">
                  Valorização emocional + percepção estética = venda mais rápida e por um valor melhor
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* O que é Home Staging */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal animation="reveal-left">
              <div>
                <h2 className="text-xl sm:text-2xl text-gray-800 mb-4">
                  O que é <span className="font-bodoni text-primary">Home Staging</span>?
                </h2>
                <div className="h-[2px] w-20 bg-primary/20 mb-6" />

                <div className="space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    <strong className="text-gray-800">Home staging</strong> é uma técnica profissional de marketing
                    imobiliário que consiste na preparação de imóveis para venda ou locação. O objetivo é transformar
                    o imóvel em um ambiente visualmente atrativo, acolhedor e "desejável" — ajudando potenciais
                    compradores ou inquilinos a se imaginarem morando ali.
                  </p>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    Fazemos uma parceria com lojas de móveis que utilizam o espaço do imóvel para exibir seu
                    mobiliário e expandir o seu showroom para fora das quatro paredes das lojas tradicionais.
                  </p>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    Na <strong className="text-primary">Later Nobilis</strong>, usamos essa estratégia para conectar
                    emocionalmente o comprador ao imóvel — desde a primeira imagem no anúncio até a visita presencial.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="reveal-right" delay={100}>
              <div className="relative h-[350px] bg-gradient-to-br from-stone-200 to-stone-300 rounded-xl overflow-hidden">
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
      <section className="py-16 px-4 md:px-6 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-xl sm:text-2xl text-gray-800 mb-2">
                Como fazemos o <span className="font-bodoni text-primary">Home Staging</span> na prática
              </h2>
              <div className="h-[2px] w-20 bg-primary/20 mx-auto" />
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {etapas.map((etapa, index) => (
              <ScrollReveal key={index} delay={index * 80}>
                <div className="group bg-white p-5 rounded-xl hover:shadow-lg transition-all duration-300 h-full">
                  <span className="text-4xl font-bold text-stone-200 group-hover:text-primary/20 transition-colors">
                    {etapa.number}
                  </span>
                  <h3 className="text-primary text-sm font-semibold mt-2 mb-2">{etapa.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{etapa.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-xl sm:text-2xl text-gray-800 mb-2">
                Benefícios <span className="font-bodoni text-primary">Reais</span>
              </h2>
              <div className="h-[2px] w-20 bg-primary/20 mx-auto" />
            </div>
          </ScrollReveal>

          <div className="space-y-3">
            {beneficios.map((item, index) => (
              <ScrollReveal key={index} delay={index * 60}>
                <div className="flex items-center gap-4 p-4 bg-stone-50 rounded-lg hover:bg-primary/5 transition-colors">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section className="py-16 px-4 md:px-6 bg-primary">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-xl sm:text-2xl text-white font-normal mb-4">
              Transforme seu imóvel em uma{" "}
              <span className="font-bodoni">experiência de desejo</span>
            </h2>
            <p className="text-white/80 text-sm mb-8">
              Descubra como o home staging pode acelerar a venda do seu imóvel.
            </p>
            <a
              href="/#contato"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-primary text-sm font-medium rounded-full hover:bg-gray-100 transition-all duration-300"
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
