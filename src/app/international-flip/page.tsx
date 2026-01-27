"use client";

import { useEffect, useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function InternationalFlip() {
  const [activeCountry, setActiveCountry] = useState(0);
  const stickyRef = useRef<HTMLDivElement>(null);

  const paises = [
    {
      nome: "Dubai",
      destaque: "Emirados Árabes",
      svg: "/Dubai.svg",
      beneficios: [
        "0% de imposto sobre ganhos de capital",
        "Valorização média de 15-20% ao ano",
        "Rendimentos de aluguel de 8-12% a.a.",
        "Visto de residência para investidores",
        "Mercado em expansão constante",
      ],
      descricao: "Dubai é um dos mercados imobiliários mais dinâmicos do mundo, com infraestrutura de primeiro mundo e isenção fiscal completa para investidores estrangeiros.",
    },
    {
      nome: "Estados Unidos",
      destaque: "Miami & Orlando",
      svg: "/EUA.svg",
      beneficios: [
        "Dolarização do patrimônio",
        "Mercado maduro e estável",
        "Alta liquidez para revenda",
        "Financiamento para estrangeiros",
        "Diversificação geográfica",
      ],
      descricao: "O mercado americano oferece segurança jurídica incomparável e a possibilidade de dolarizar seu patrimônio em um dos mercados mais sólidos do mundo.",
    },
    {
      nome: "Brasil",
      destaque: "Brasília & São Paulo",
      svg: "/Brasil.svg",
      beneficios: [
        "Conhecimento do mercado local",
        "Facilidade de gestão",
        "Mercado em recuperação",
        "Oportunidades em capitais",
        "Suporte completo Later Nobilis",
      ],
      descricao: "O Brasil oferece oportunidades únicas para quem conhece o mercado, com imóveis de alto padrão em localização privilegiada e potencial de valorização.",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!stickyRef.current) return;

      const section = stickyRef.current.parentElement;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Calculate scroll progress within the section
      const scrolled = -rect.top;
      const scrollableHeight = sectionHeight - viewportHeight;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));

      // Determine which country should be active
      const countryIndex = Math.min(
        paises.length - 1,
        Math.floor(progress * paises.length)
      );

      setActiveCountry(countryIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [paises.length]);

  const vantagens = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      titulo: "Valorização Superior",
      descricao: "Invista em mercados que só crescem, com rendimentos muitas vezes livres de impostos.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      titulo: "Moeda Forte",
      descricao: "Dolarize seu patrimônio e proteja seu futuro contra instabilidades econômicas locais.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      titulo: "Diversificação Global",
      descricao: "Não concentre todo seu patrimônio em um único país. Diversifique geograficamente.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      titulo: "Renda Passiva",
      descricao: "Gere renda em moeda forte com aluguéis de curta ou longa temporada.",
    },
  ];

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 md:px-6 bg-gradient-to-br from-slate-50 via-blue-50/50 to-white overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto w-full">
          {/* Header content */}
          <ScrollReveal>
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full mb-4">
                <svg className="w-3.5 h-3.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-primary text-[10px] font-medium tracking-widest uppercase">
                  Expansão Global
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-light leading-tight mb-3">
                <span className="font-bodoni text-primary">International Flip</span>
              </h1>

              <p className="text-sm text-gray-600 mb-2">
                Imóveis como investimentos globais
              </p>

              <div className="h-[2px] w-16 bg-primary/30 mx-auto mb-4" />

              <p className="text-gray-500 text-xs max-w-lg mx-auto leading-relaxed">
                Vendeu seu imóvel? Transforme o capital em uma oportunidade global.
                Viabilizamos a compra de imóveis em mercados internacionais.
              </p>
            </div>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal delay={100}>
            <div className="flex justify-center gap-8 md:gap-12 mb-10">
              <div className="text-center">
                <p className="text-xl md:text-2xl font-bold text-primary">3+</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">Países</p>
              </div>
              <div className="text-center">
                <p className="text-xl md:text-2xl font-bold text-primary">20%</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">Valorização</p>
              </div>
              <div className="text-center">
                <p className="text-xl md:text-2xl font-bold text-primary">0%</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">Imposto Dubai</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Map visual - Enlarged */}
          <ScrollReveal animation="reveal-scale" delay={150}>
            <div className="relative max-w-5xl mx-auto">
              {/* Glow effect behind map */}
              <div className="absolute inset-0 bg-blue-100/50 blur-3xl rounded-full scale-90" />

              <div className="relative">
                <img
                  src="/mapa.svg"
                  alt="Mapa de atuação internacional"
                  className="w-full h-auto drop-shadow-lg"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal delay={200}>
            <div className="text-center mt-10">
              <a
                href="/#contato"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-xs font-medium rounded-full hover:bg-primary/90 transition-all duration-300 group"
              >
                Quero diversificar meu patrimônio
                <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Vantagens */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-xl sm:text-2xl text-gray-800 mb-2">
                Por que investir{" "}
                <span className="font-bodoni text-primary">no exterior</span>?
              </h2>
              <div className="h-[2px] w-20 bg-primary/20 mx-auto" />
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {vantagens.map((item, index) => (
              <ScrollReveal key={index} delay={index * 80}>
                <div className="group text-center p-6 bg-stone-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <h3 className="text-gray-800 text-sm font-semibold mb-2">{item.titulo}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{item.descricao}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Países - Sticky Scroll Section */}
      <section className="relative bg-gradient-to-b from-white to-stone-50" style={{ height: `${paises.length * 100}vh` }}>
        <div ref={stickyRef} className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 md:px-6 w-full -translate-y-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left - Text content */}
              <div className="relative min-h-[350px]">
                {paises.map((pais, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-out ${
                      activeCountry === index
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : activeCountry > index
                        ? "opacity-0 -translate-y-8 pointer-events-none"
                        : "opacity-0 translate-y-8 pointer-events-none"
                    }`}
                  >
                    {/* Country number */}
                    <span
                      className={`block text-8xl md:text-9xl font-bold text-stone-100 leading-none transition-all duration-700 ${
                        activeCountry === index ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Country name */}
                    <h3
                      className={`text-3xl md:text-4xl font-light text-gray-800 -mt-10 md:-mt-12 relative z-10 transition-all duration-700 delay-100 ${
                        activeCountry === index ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                      }`}
                    >
                      {pais.nome}
                    </h3>
                    <p
                      className={`text-primary text-sm font-medium mt-2 transition-all duration-700 delay-150 ${
                        activeCountry === index ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                      }`}
                    >
                      {pais.destaque}
                    </p>

                    <p
                      className={`text-gray-500 text-sm leading-relaxed mt-4 mb-6 max-w-md transition-all duration-700 delay-200 ${
                        activeCountry === index ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                      }`}
                    >
                      {pais.descricao}
                    </p>

                    {/* Benefits */}
                    <ul className="space-y-2 mb-6">
                      {pais.beneficios.slice(0, 3).map((beneficio, i) => (
                        <li
                          key={i}
                          className={`flex items-center gap-3 text-sm text-gray-600 transition-all duration-500 ${
                            activeCountry === index ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                          }`}
                          style={{ transitionDelay: `${250 + i * 60}ms` }}
                        >
                          <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          {beneficio}
                        </li>
                      ))}
                    </ul>

                    <a
                      href="/#contato"
                      className={`inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-xs font-medium rounded-full hover:bg-primary/90 transition-all duration-700 delay-400 group ${
                        activeCountry === index ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                      }`}
                    >
                      Investir em {pais.nome}
                      <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>

              {/* Right - Country SVG */}
              <div className="relative h-[280px] lg:h-[380px] flex items-center justify-center">
                {paises.map((pais, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-out ${
                      activeCountry === index
                        ? "opacity-100 scale-100"
                        : activeCountry > index
                        ? "opacity-0 scale-95 -translate-y-8"
                        : "opacity-0 scale-95 translate-y-8"
                    }`}
                  >
                    <img
                      src={pais.svg}
                      alt={pais.nome}
                      className="max-w-full max-h-full object-contain drop-shadow-2xl"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Progress dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
              {paises.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    activeCountry === index ? "w-8 bg-primary" : "w-1.5 bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-20 px-4 md:px-6 bg-stone-100 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-primary text-[10px] font-medium tracking-widest uppercase mb-3">
                Processo
              </span>
              <h2 className="text-xl sm:text-2xl text-gray-800">
                Como <span className="font-bodoni text-primary">funciona</span>?
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Venda seu imóvel",
                desc: "Vendemos seu imóvel no Brasil com nossa metodologia exclusiva, garantindo o melhor valor.",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                )
              },
              {
                step: "02",
                title: "Planejamento",
                desc: "Analisamos seu perfil e objetivos para definir o melhor destino e tipo de investimento.",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                )
              },
              {
                step: "03",
                title: "Aquisição",
                desc: "Viabilizamos a compra do imóvel no exterior com todo suporte jurídico e operacional.",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                )
              },
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="group bg-white rounded-2xl p-6 shadow-sm border border-stone-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 h-full">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <span className="text-3xl font-bold text-stone-200 group-hover:text-primary/20 transition-colors">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-gray-800 text-sm font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-6 bg-stone-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-10 bg-primary/30" />
              <span className="text-primary text-[10px] font-medium tracking-[0.2em] uppercase">
                Próximo passo
              </span>
              <div className="h-px w-10 bg-primary/30" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="text-lg sm:text-xl md:text-2xl text-gray-800 font-light leading-tight mb-4">
              Pronto para{" "}
              <span className="font-bodoni text-primary">globalizar</span> seu patrimônio?
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="group flex justify-center mb-5">
              <div className="h-[2px] w-16 bg-primary/20 rounded-full" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed mb-6">
              Agende uma conversa com nossos especialistas e descubra as{" "}
              <span className="text-gray-700 font-medium">melhores oportunidades</span> de investimento internacional.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <a
              href="/#contato"
              className="group relative inline-block px-6 py-3 bg-primary text-white text-sm font-medium rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <span className="relative z-10">Quero conhecer as oportunidades</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
