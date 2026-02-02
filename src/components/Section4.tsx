"use client";

import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    title: "Visualização 3D do potencial",
    description: "Utilizamos estratégias validadas de escrita persuasiva, como o storytelling, para capturar a atenção de verdade dessas pessoas e aumentar o valor percebido.",
    image: "3D Render",
    imageSrc: "/Fotos Site/visualizacao-3d-potencial.png",
    imagePosition: "object-left",
    imageHeight: "380px",
    imageWidth: "120%"
  },
  {
    title: "Fotos e vídeos que vendem",
    description: "Fotógrafos e filmmakers especializados em arquitetura capturam cada detalhe. Seus anúncios não vão parecer mais um. Vão parecer capa de revista.",
    image: "Fotografia",
    imageSrc: "/Fotos Site/fotos-videos-que-vendem.jpg",
    imagePosition: "object-center",
    imageHeight: "380px",
    imageWidth: "120%"
  },
  {
    title: "Investimento relevante em tráfego pago",
    description: "Captar a atenção das pessoas onde elas estão, onde passam mais tempo. Assim convertemos em visitas e ofertas qualificadas.",
    image: "Tráfego Pago",
    imageSrc: "/Fotos Site/investimento-trafego-pago.jpg",
    imagePosition: "object-center",
    imageHeight: "520px"
  },
  {
    title: "Anúncios que se destacam",
    description: "Maior alcance e performance, essa é a fórmula que realmente gera resultados. Visitas se tornam em ofertas mais rápidas e reduz o tempo do seu imóvel parado.",
    image: "Destaque",
    imageSrc: "/anuncios_que_atraem.png",
    imagePosition: "object-center",
    imageHeight: "380px"
  }
];

// Ícones SVG para mobile
const featureIcons = [
  // 3D Render
  <svg key="3d" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
  </svg>,
  // Fotografia
  <svg key="foto" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
  </svg>,
  // Tráfego
  <svg key="trafego" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>,
  // Destaque
  <svg key="destaque" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
  </svg>
];

// Componente Mobile - Accordion sem sticky scroll
function Section4Mobile() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-stone-100 to-stone-200 lg:hidden">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-8">
            <h2 className="text-xl text-gray-800 mb-3 leading-tight">
              O que você só encontra nos anúncios de uma{" "}
              <span className="font-bodoni text-primary">Imobiliária Boutique?</span>
            </h2>
            <div className="h-[2px] w-20 bg-primary/30 mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="text-gray-600 text-sm mb-8 text-center leading-relaxed">
            Seu imóvel ganha destaque imediato, atrai compradores certos e <strong className="text-gray-800">vende ou aluga</strong> pelo valor que merece.
          </p>
        </ScrollReveal>

        {/* Accordion Features */}
        <div className="space-y-3">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 80}>
              <div
                className={`bg-white rounded-xl overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "shadow-lg" : "shadow-sm"
                }`}
              >
                {/* Header do accordion */}
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full p-4 flex items-center gap-3 text-left"
                >
                  {/* Ícone */}
                  <span
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      openIndex === index
                        ? "bg-primary text-white"
                        : "bg-stone-100 text-primary"
                    }`}
                  >
                    {featureIcons[index]}
                  </span>

                  {/* Título */}
                  <span
                    className={`flex-1 text-sm font-semibold transition-colors duration-300 ${
                      openIndex === index ? "text-primary" : "text-gray-800"
                    }`}
                  >
                    {feature.title}
                  </span>

                  {/* Seta */}
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Conteúdo expandido */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-48" : "max-h-0"
                  }`}
                >
                  <div className="px-4 pb-4">
                    {/* Imagem */}
                    <div className="h-24 bg-gradient-to-br from-stone-200 to-stone-300 rounded-lg mb-3 overflow-hidden">
                      {feature.imageSrc ? (
                        <img
                          src={feature.imageSrc}
                          alt={feature.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-stone-500 text-xs">[ {feature.image} ]</span>
                        </div>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={400}>
          <div className="mt-8 text-center">
            <a
              href="/#contato"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-all duration-300"
            >
              Quero impulsionar meu imóvel
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// Componente Desktop - Mantém a experiência original com sticky scroll
function Section4Desktop() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

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
      className="relative bg-gradient-to-br from-stone-100 to-stone-200 hidden lg:block"
      style={{ height: `${(features.length + 1) * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex items-start pt-24">
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
            <div
              className="relative hidden lg:block transition-all duration-500"
              style={{
                height: features[activeIndex]?.imageHeight || "380px",
                width: features[activeIndex]?.imageWidth || "100%"
              }}
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 rounded-xl overflow-hidden transition-all duration-700 ${
                    activeIndex === index
                      ? "opacity-100 scale-100 translate-y-0 z-10"
                      : "opacity-0 scale-95 translate-y-4 z-0"
                  }`}
                >
                  {feature.imageSrc ? (
                    <img
                      src={feature.imageSrc}
                      alt={feature.title}
                      className={`w-full h-full object-cover ${feature.imagePosition || "object-center"}`}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-stone-300 to-stone-400 flex items-center justify-center">
                      <span className="text-stone-600 text-base font-medium">[ {feature.image} ]</span>
                    </div>
                  )}
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

          {/* Scroll indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-stone-500">
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

// Componente principal que renderiza a versão correta
export default function Section4() {
  return (
    <>
      <Section4Mobile />
      <Section4Desktop />
    </>
  );
}
