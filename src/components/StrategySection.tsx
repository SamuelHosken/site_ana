"use client";

import ScrollReveal from "./ScrollReveal";

export default function StrategySection() {
  const steps = [
    {
      number: "01",
      title: "Curadoria estratégica e avaliação exclusiva",
      description: "Análise criteriosa para entender o DNA do seu imóvel e traçar o melhor plano personalizado. Avaliação profissional acurada e precificação ajustada às estratégias."
    },
    {
      number: "02",
      title: "Consultoria de arquitetura e interiores",
      description: "Orientamos melhorias estratégicas para maximizar a atratividade e o valor percebido. Visualização 3D e fotografia arquitetônica para seu imóvel se destacar."
    },
    {
      number: "03",
      title: "Seleção minuciosa de compradores ou inquilinos",
      description: "Você só receberá propostas de perfis previamente qualificados, respeitando seu tempo e a excelência do seu imóvel."
    },
    {
      number: "04",
      title: "Plano estratégico e análise de mercado",
      description: "Decisões intencionais com objetivos claros, alinhadas às estatísticas do mercado atual de cada micro-região."
    }
  ];

  return (
    <section className="py-16 px-4 md:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">
          {/* Conteúdo à esquerda */}
          <div className="flex flex-col justify-center">
            {/* Header */}
            <ScrollReveal className="mb-6">
              <div className="group">
                <span className="inline-block text-primary text-xs font-medium tracking-widest uppercase mb-3">
                  Nossa Metodologia
                </span>
                <h2 className="text-xl sm:text-xl md:text-2xl text-gray-800 tracking-tight mb-2">
                  Seu imóvel é único.{" "}
                  <span className="font-bodoni text-primary">Nossa estratégia também.</span>
                </h2>
                <p className="text-gray-600 text-sm mb-3">
                  Por que vendemos ou alugamos seu imóvel mais rápido?
                </p>
                <div className="h-[2px] w-20 bg-primary/20 rounded-full overflow-hidden">
                  <div className="h-full w-0 bg-primary transition-all duration-700 ease-out group-hover:w-full" />
                </div>
              </div>
            </ScrollReveal>

            {/* Steps */}
            <div className="space-y-4">
              {steps.map((step, index) => (
                <ScrollReveal key={index} animation="reveal-left" delay={(index + 1) * 80}>
                  <div className="group relative pl-6 border-l border-stone-200 hover:border-primary transition-colors duration-300">
                    {/* Número */}
                    <span className="absolute -left-3 top-0 w-6 h-6 bg-white border border-stone-200 group-hover:border-primary rounded-full flex items-center justify-center text-[10px] font-bold text-stone-400 group-hover:text-primary transition-colors duration-300">
                      {step.number}
                    </span>

                    <div>
                      <h3 className="text-sm font-semibold text-gray-800 mb-1 group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-500 leading-relaxed text-xs">{step.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* CTA */}
            <ScrollReveal delay={400} className="mt-8">
              <a
                href="/#contato"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-all duration-300"
              >
                Descubra se seu imóvel é elegível
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </ScrollReveal>
          </div>

          {/* Imagem à direita */}
          <ScrollReveal animation="reveal-right" delay={100} className="h-full">
            <div className="relative h-[280px] lg:h-full lg:min-h-[380px] bg-gradient-to-br from-stone-200 to-stone-300 rounded-xl overflow-hidden">
              <img
                src="/Fotos Site/projeto-arquitetura-obras.png"
                alt="Estratégia imobiliária"
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

              {/* Badge flutuante */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-3">
                <p className="text-xs text-gray-500 mb-1">A excelência mora nos detalhes.</p>
                <p className="text-sm text-gray-800 font-medium">
                  Transformamos cada imóvel em uma{" "}
                  <span className="text-primary">experiência de desejo</span>
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
