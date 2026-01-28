"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function QuemSomos() {
  const diferenciais = [
    "Atendimento humano e consultivo, com foco total no cliente",
    "Unimos design, estratégia e inteligência imobiliária para gerar grandes resultados",
    "Curadoria rigorosa de imóveis premium e planejamento sob medida",
    "Profundo conhecimento do mercado de Brasília e tendências globais",
  ];

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="pt-20 md:pt-24 pb-12 md:pb-16 px-4 md:px-6 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-8 md:mb-12">
              <span className="inline-block text-primary text-xs font-medium tracking-widest uppercase mb-3">
                Quem Somos
              </span>
              <h1 className="text-xl md:text-3xl lg:text-4xl text-gray-800 font-light leading-tight mb-3">
                Excelência em cada detalhe.{" "}
                <span className="font-bodoni text-primary">Estratégia em cada movimento.</span>
              </h1>
              <div className="h-[2px] w-20 bg-primary/30 mx-auto" />
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Imagem */}
            <ScrollReveal animation="reveal-left">
              <div className="relative">
                <div className="relative h-[280px] md:h-[400px] lg:h-[500px] bg-gradient-to-br from-stone-200 to-stone-300 rounded-xl md:rounded-2xl overflow-hidden">
                  <img
                    src="/ana_clara.jpg"
                    alt="Ana Clara - Later Nobilis"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                {/* Decorative elements - hidden on mobile */}
                <div className="hidden md:block absolute -bottom-4 -right-4 w-32 h-32 border-2 border-primary/20 rounded-2xl -z-10" />
                <div className="hidden md:block absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full -z-10" />
              </div>
            </ScrollReveal>

            {/* Texto */}
            <ScrollReveal animation="reveal-right" delay={100}>
              <div className="space-y-4 md:space-y-6">
                <p className="text-gray-600 text-sm leading-relaxed">
                  A <strong className="text-gray-800">Later Nobilis Boutique</strong> é uma imobiliária boutique
                  criada para transformar a experiência de venda e aquisição de imóveis de alto padrão.
                </p>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Com formação em <strong className="text-gray-800">Arquitetura e Urbanismo</strong>, Ana Clara
                  é corretora de imóveis e diretora da Later Nobilis. Nossa atuação une{" "}
                  <strong className="text-gray-800">olhar técnico</strong>,{" "}
                  <strong className="text-gray-800">sensibilidade estética</strong> e{" "}
                  <strong className="text-gray-800">inteligência de mercado</strong>.
                </p>

                <p className="text-gray-600 text-sm leading-relaxed hidden md:block">
                  Garantindo mais <span className="text-primary font-medium">segurança aos clientes</span> através
                  desse suporte arquitetônico.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="text-lg md:text-2xl text-gray-800 mb-2">
                Diferenciais que{" "}
                <span className="font-bodoni text-primary">constroem confiança</span>
              </h2>
              <div className="h-[2px] w-16 bg-primary/20 mx-auto" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {diferenciais.map((item, index) => (
              <ScrollReveal key={index} delay={index * 80}>
                <div className="group p-4 bg-stone-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Statement Section */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-gray-900 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-gray-400 text-xs md:text-sm mb-3">Não somos uma imobiliária tradicional.</p>
            <h2 className="text-lg md:text-2xl lg:text-3xl font-light leading-relaxed mb-6">
              Somos especialistas guiados por{" "}
              <span className="font-bodoni text-primary">propósito</span>,{" "}
              <span className="font-bodoni text-primary">estética</span> e{" "}
              <span className="font-bodoni text-primary">performance</span>.
            </h2>
            <a
              href="/#contato"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary/90 transition-all duration-300"
            >
              Fale com um especialista
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
