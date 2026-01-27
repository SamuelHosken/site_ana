"use client";

import { useEffect, useRef, useState } from "react";

export default function Section4() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      title: "Visualização 3D do potencial",
      description: "Utilizamos estratégias validadas de escrita persuasiva, como o storytelling, para capturar a atenção de verdade dessas pessoas e aumentar o valor percebido.",
      image: "3D Render"
    },
    {
      title: "Fotos e vídeos que vendem",
      description: "Fotógrafos e filmmakers especializados em arquitetura capturam cada detalhe. Seus anúncios não vão parecer mais um. Vão parecer capa de revista.",
      image: "Fotografia"
    },
    {
      title: "Investimento relevante em tráfego pago",
      description: "Captar a atenção das pessoas onde elas estão, onde passam mais tempo. Assim convertemos em visitas e ofertas qualificadas.",
      image: "Tráfego Pago"
    },
    {
      title: "Anúncios que se destacam",
      description: "Maior alcance e performance, essa é a fórmula que realmente gera resultados. Visitas se tornam em ofertas mais rápidas e reduz o tempo do seu imóvel parado.",
      image: "Destaque"
    }
  ];

  const scrollToFeature = (index: number) => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const viewportHeight = window.innerHeight;
    const maxScroll = sectionHeight - viewportHeight;

    // Calcula a posição do scroll para essa feature
    const targetScroll = sectionTop + (index / features.length) * maxScroll + 50;

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Só calcular quando a seção está visível
      if (sectionTop > viewportHeight || sectionTop + sectionHeight < 0) return;

      // Quanto já rolamos dentro da seção (de 0 a sectionHeight - viewportHeight)
      const scrolledInSection = -sectionTop;
      const maxScroll = sectionHeight - viewportHeight;

      // Progresso de 0 a 1
      const progress = Math.max(0, Math.min(1, scrolledInSection / maxScroll));

      // Divide o progresso entre as features
      const newIndex = Math.min(
        Math.floor(progress * features.length),
        features.length - 1
      );

      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex, features.length]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-stone-100 to-stone-200"
      style={{ height: `${(features.length + 1) * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex items-start pt-20 sm:pt-20 md:pt-24">
        <div className="max-w-5xl mx-auto px-4 md:px-6 w-full">
          {/* Header */}
          <div className="group mb-5 sm:mb-4 md:mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl mb-2 sm:mb-3 text-gray-800">
              O que você só encontra nos anúncios de uma{" "}
              <span className="font-bodoni text-primary">Imobiliária Boutique?</span>
            </h2>
            <div className="h-[2px] w-20 sm:w-20 bg-primary/20 rounded-full overflow-hidden">
              <div className="h-full w-0 bg-primary transition-all duration-700 ease-out group-hover:w-full" />
            </div>
          </div>

          <p className="text-gray-700 text-sm sm:text-sm mb-6 sm:mb-6 md:mb-8 max-w-xl leading-relaxed">
            Seu imóvel ganha destaque imediato, atrai compradores certos e <strong>vende ou aluga</strong> pelo valor que merece. Estamos investindo com intencionalidade e estratégia no impulsionamento do anúncio do seu imóvel.
          </p>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-5 sm:gap-6 md:gap-8 items-start lg:items-center">
            {/* Features List */}
            <div className="space-y-4 sm:space-y-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-4 sm:p-4 rounded-xl sm:rounded-xl transition-all duration-500 cursor-pointer ${
                    activeIndex === index
                      ? "bg-white shadow-xl scale-[1.02]"
                      : "bg-white/50 hover:bg-white/70"
                  }`}
                  onClick={() => scrollToFeature(index)}
                >
                  <div className="flex items-start gap-3 sm:gap-3">
                    {/* Número */}
                    <span
                      className={`flex-shrink-0 w-8 h-8 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-xs font-bold transition-all duration-500 ${
                        activeIndex === index
                          ? "bg-primary text-white"
                          : "bg-stone-200 text-stone-500"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="flex-1">
                      <h3
                        className={`text-base sm:text-base font-semibold mb-1 transition-colors duration-500 ${
                          activeIndex === index ? "text-primary" : "text-gray-800"
                        }`}
                      >
                        {feature.title}
                      </h3>

                      {/* Descrição com animação */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ${
                          activeIndex === index ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="mt-3 sm:mt-3 h-1 bg-stone-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-primary transition-all duration-700 ease-out ${
                        activeIndex === index ? "w-full" : "w-0"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Imagem que muda - hidden on mobile */}
            <div className="relative h-[220px] sm:h-[280px] md:h-[380px] hidden lg:block">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 rounded-xl overflow-hidden transition-all duration-700 ${
                    activeIndex === index
                      ? "opacity-100 scale-100 translate-y-0 z-10"
                      : "opacity-0 scale-95 translate-y-4 z-0"
                  }`}
                >
                  <div className="w-full h-full bg-gradient-to-br from-stone-300 to-stone-400 flex items-center justify-center">
                    <span className="text-stone-600 text-base font-medium">[ {feature.image} ]</span>
                  </div>
                </div>
              ))}

              {/* Indicador de imagem atual */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToFeature(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeIndex === index ? "w-6 bg-primary" : "w-1.5 bg-white/50"
                    }`}
                  />
                ))}
              </div>

              {/* Elementos decorativos */}
              <div className="absolute -top-3 -left-3 w-20 h-20 border-2 border-primary/30 rounded-xl -z-10" />
              <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-primary/10 rounded-xl -z-10" />
            </div>
          </div>

          {/* Footer text */}
          <div className="mt-8 sm:mt-10 text-center max-w-2xl mx-auto">
            <p className="text-gray-700 text-sm sm:text-sm leading-relaxed mb-4">
              Na <strong className="text-primary">Later Nobilis Boutique</strong>, sabemos exatamente as expectativas de quem vende e quem compra um imóvel. Quem coloca um bem à venda quer propostas que reconheçam seu real valor, enquanto quem busca adquirir deseja sentir que fez um excelente negócio.
            </p>
            <button className="group px-6 py-3 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-all duration-300">
              <span className="flex items-center gap-2">
                Quero impulsionar meu imóvel
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>

          {/* Scroll indicator - hidden on mobile */}
          <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1.5 text-stone-500">
            <span className="text-[10px] uppercase tracking-widest">Role para continuar</span>
            <div className="w-5 h-8 border-2 border-stone-400 rounded-full flex justify-center pt-1.5">
              <div className="w-1 h-2.5 bg-stone-400 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
