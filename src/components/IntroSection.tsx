"use client";

import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

// Definição dos cômodos com suas áreas e informações
const rooms = [
  { id: "sala", name: "Sala", area: "22m²", x: 10, y: 10, width: 145, height: 110 },
  { id: "cozinha", name: "Cozinha", area: "18m²", x: 155, y: 10, width: 150, height: 110 },
  { id: "as", name: "Área de Serviço", area: "6m²", x: 305, y: 10, width: 65, height: 110 },
  { id: "quarto", name: "Quarto", area: "15m²", x: 10, y: 120, width: 115, height: 105 },
  { id: "wc", name: "Banheiro Social", area: "5m²", x: 240, y: 120, width: 65, height: 75 },
  { id: "hall", name: "Hall", area: "20m²", x: 10, y: 225, width: 230, height: 105 },
  { id: "suite", name: "Suíte", area: "16m²", x: 240, y: 195, width: 65, height: 135 },
  { id: "closet", name: "Closet", area: "8m²", x: 305, y: 195, width: 65, height: 70 },
  { id: "wc-suite", name: "Banheiro Suíte", area: "6m²", x: 305, y: 265, width: 65, height: 65 },
];

// Componente Mobile - Layout estático e simples
function IntroSectionMobile() {
  return (
    <section id="sobre" className="py-16 px-4 bg-white lg:hidden">
      <div className="max-w-lg mx-auto">
        {/* Título */}
        <ScrollReveal>
          <div className="text-center mb-8">
            <span className="inline-block text-primary text-xs font-medium tracking-widest uppercase mb-3">
              Nossa Essência
            </span>
            <h2 className="text-2xl text-gray-800 leading-tight mb-3">
              O que é uma{" "}
              <span className="font-bodoni text-primary italic">Imobiliária Boutique</span>?
            </h2>
            <div className="h-[2px] w-20 bg-primary/30 mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        {/* Textos */}
        <div className="space-y-5 mb-10">
          <ScrollReveal delay={100}>
            <p className="text-gray-600 text-sm leading-relaxed">
              Tratamos <strong className="text-gray-800">cada imóvel</strong> como um{" "}
              <strong className="text-gray-800">ativo estratégico</strong>. Mais do que anunciar, fazemos um{" "}
              <strong className="text-gray-800">estudo do mercado</strong>, definimos o{" "}
              <strong className="text-gray-800">público ideal</strong> e criamos uma{" "}
              <strong className="text-gray-800">estratégia de divulgação personalizada</strong>.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-gray-600 text-sm leading-relaxed">
              Aqui, cada imóvel recebe um{" "}
              <strong className="text-gray-800">investimento próprio, relevante e exclusivo</strong> em
              impulsionamento da estratégia,{" "}
              <strong className="text-gray-800">aplicado contratualmente</strong> apenas ao seu imóvel.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="relative pl-4 border-l-2 border-primary py-2 bg-stone-50 rounded-r-lg pr-4">
              <p className="text-gray-700 text-sm leading-relaxed">
                Somos uma empresa que{" "}
                <span className="text-primary font-semibold">toma o seu partido</span>. Nosso compromisso é{" "}
                <strong className="text-gray-800">defender os seus interesses</strong> e conseguir para você o{" "}
                <strong className="text-gray-800">melhor negócio possível</strong>.
              </p>
              <p className="text-primary font-bodoni text-lg mt-2">
                E isso muda tudo.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Cards de diferenciais - substitui a planta complexa */}
        <ScrollReveal delay={400}>
          <div className="grid grid-cols-2 gap-3">
            {/* Card 1 - Estudo de Mercado */}
            <div className="bg-stone-50 rounded-xl p-4 text-center hover:bg-primary/5 transition-colors group">
              <div className="w-10 h-10 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="text-gray-800 text-xs font-semibold mb-1">Estudo de Mercado</h4>
              <p className="text-gray-500 text-[10px]">Análise estratégica</p>
            </div>

            {/* Card 2 - Público Ideal */}
            <div className="bg-stone-50 rounded-xl p-4 text-center hover:bg-primary/5 transition-colors group">
              <div className="w-10 h-10 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-gray-800 text-xs font-semibold mb-1">Público Ideal</h4>
              <p className="text-gray-500 text-[10px]">Segmentação precisa</p>
            </div>

            {/* Card 3 - Investimento */}
            <div className="bg-stone-50 rounded-xl p-4 text-center hover:bg-primary/5 transition-colors group">
              <div className="w-10 h-10 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-gray-800 text-xs font-semibold mb-1">Investimento</h4>
              <p className="text-gray-500 text-[10px]">Até R$10.000/imóvel</p>
            </div>

            {/* Card 4 - Dedicação Total */}
            <div className="bg-stone-50 rounded-xl p-4 text-center hover:bg-primary/5 transition-colors group">
              <div className="w-10 h-10 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h4 className="text-gray-800 text-xs font-semibold mb-1">Dedicação Total</h4>
              <p className="text-gray-500 text-[10px]">Máx. 3 imóveis/consultor</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// Componente Desktop - Mantém a experiência original com sticky scroll
function IntroSectionDesktop() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [textProgress, setTextProgress] = useState(0);
  const [plantProgress, setPlantProgress] = useState(0);
  const [hoveredRoom, setHoveredRoom] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = section.offsetHeight;

      // Fase 1: Texto aparece enquanto a seção chega ao centro
      // Começa mais cedo para a animação iniciar antes
      const textStart = windowHeight * 1.3;
      const textEnd = windowHeight * 0.5;
      const textDiff = textStart - textEnd;
      const newTextProgress = textDiff > 0 ? Math.max(0, Math.min(1, (textStart - rect.top) / textDiff)) : 0;
      setTextProgress(newTextProgress);

      // Fase 2: Planta desenha baseado no scroll global
      // Completa antes do scroll soltar
      const scrollY = window.scrollY;
      const maxScroll = sectionHeight * 0.6;
      const newPlantProgress = maxScroll > 0 ? Math.max(0, Math.min(1, scrollY / maxScroll)) : 0;
      setPlantProgress(newPlantProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calcula opacidade de cada parágrafo baseado no progresso do texto
  const getParaOpacity = (index: number) => {
    const start = index * 0.25;
    const end = start + 0.3;
    if (textProgress < start) return 0;
    if (textProgress > end) return 1;
    return (textProgress - start) / (end - start);
  };

  // Linha horizontal: completa com o texto
  const lineProgress = textProgress;

  // Progresso do SVG baseado no plantProgress (fase sticky)
  const svgProgress = plantProgress;

  return (
    <section
      ref={sectionRef}
      className="relative bg-white hidden lg:block"
      style={{ height: "200vh" }}
    >
      <div className="sticky top-0 h-screen flex items-start pt-16 z-0">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-8 py-10">
          {/* Layout principal: Texto à esquerda, Planta à direita */}
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12 items-center">
            {/* Coluna esquerda - Título + Texto */}
            <div>
              {/* Título */}
              <div className="mb-6">
                <span className="inline-block text-primary text-xs font-medium tracking-widest uppercase mb-2">
                  Nossa Essência
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-800 leading-tight">
                  O que é uma{" "}
                  <span className="font-bodoni text-primary italic">Imobiliária Boutique</span>?
                </h2>
                {/* Linha que cresce com o scroll */}
                <div className="relative h-[1.5px] bg-stone-200 mt-3 rounded-full overflow-hidden w-full max-w-[280px]">
                  <div
                    className="absolute top-0 left-0 h-full bg-primary rounded-full"
                    style={{ width: `${lineProgress * 100}%` }}
                  />
                </div>
              </div>

              {/* Textos */}
              <div className="space-y-4">
                <p
                  className="text-gray-600 text-xs sm:text-sm leading-relaxed"
                  style={{
                    opacity: getParaOpacity(0),
                    transform: `translateY(${(1 - getParaOpacity(0)) * 15}px)`,
                    transition: "opacity 0.3s, transform 0.3s"
                  }}
                >
                  Tratamos <strong className="text-gray-800">cada imóvel</strong> como um{" "}
                  <strong className="text-gray-800">ativo estratégico</strong>. Mais do que anunciar, fazemos um{" "}
                  <strong className="text-gray-800">estudo do mercado</strong>, definimos o{" "}
                  <strong className="text-gray-800">público ideal</strong> e criamos uma{" "}
                  <strong className="text-gray-800">estratégia de divulgação personalizada</strong> para cada propriedade.
                </p>

                <p
                  className="text-gray-600 text-xs sm:text-sm leading-relaxed"
                  style={{
                    opacity: getParaOpacity(1),
                    transform: `translateY(${(1 - getParaOpacity(1)) * 15}px)`,
                    transition: "opacity 0.3s, transform 0.3s"
                  }}
                >
                  Aqui, cada imóvel recebe um{" "}
                  <strong className="text-gray-800">investimento próprio, relevante e exclusivo</strong> em
                  impulsionamento da estratégia,{" "}
                  <strong className="text-gray-800">aplicado contratualmente</strong> apenas ao seu imóvel. Isso
                  garante <strong className="text-gray-800">visibilidade direcionada</strong>,{" "}
                  <strong className="text-gray-800">precificação baseada em dados</strong> e um{" "}
                  <strong className="text-gray-800">atendimento totalmente dedicado</strong>.
                </p>

                {/* Destaque final */}
                <div
                  className="relative pl-4 border-l-2 border-primary py-1"
                  style={{
                    opacity: getParaOpacity(2),
                    transform: `translateY(${(1 - getParaOpacity(2)) * 15}px)`,
                    transition: "opacity 0.3s, transform 0.3s"
                  }}
                >
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                    Somos uma empresa que{" "}
                    <span className="text-primary font-semibold">toma o seu partido</span>. Nosso compromisso não é
                    apenas vender o seu imóvel, mas{" "}
                    <strong className="text-gray-800">defender os seus interesses</strong> e conseguir para você o{" "}
                    <strong className="text-gray-800">melhor negócio possível</strong>.
                  </p>
                  <p className="text-primary font-bodoni text-base sm:text-lg mt-2">
                    E isso muda tudo.
                  </p>
                </div>
              </div>
            </div>

            {/* Coluna direita - Planta da casa sendo desenhada */}
            <div className="relative flex items-center justify-start lg:-mr-32">
              <div className="relative w-[450px]">
                {/* SVG da planta baixa - apartamento completo e detalhado */}
                <svg
                  viewBox="0 0 380 340"
                  className="w-full h-auto"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* ============ FUNDO/BACKGROUND ============ */}
                  <rect
                    x="10" y="10" width="360" height="320"
                    fill="#faf8f5"
                    rx="2"
                    style={{
                      opacity: Math.min(1, svgProgress * 3),
                      transform: `scale(${0.95 + Math.min(0.05, svgProgress * 0.15)})`,
                      transformOrigin: 'center'
                    }}
                  />

                  {/* ============ PAREDES EXTERNAS (mais grossas) ============ */}
                  <rect
                    x="10" y="10" width="360" height="320"
                    stroke="#78350F"
                    strokeWidth="2.5"
                    fill="none"
                    strokeDasharray="1360"
                    strokeDashoffset={1360 * (1 - Math.min(1, svgProgress * 1.2))}
                  />

                  {/* ============ PAREDES INTERNAS ============ */}
                  {/* Corredor horizontal principal (separa área social dos quartos) */}
                  <line x1="10" y1="120" x2="240" y2="120" stroke="#78350F" strokeWidth="1.2"
                    strokeDasharray="230" strokeDashoffset={230 * (1 - Math.min(1, Math.max(0, (svgProgress - 0.08) * 1.5)))} />

                  {/* Parede sala/cozinha */}
                  <line x1="155" y1="10" x2="155" y2="120" stroke="#78350F" strokeWidth="1.2"
                    strokeDasharray="110" strokeDashoffset={110 * (1 - Math.min(1, Math.max(0, (svgProgress - 0.1) * 1.5)))} />

                  {/* Corredor vertical (hall) */}
                  <line x1="240" y1="120" x2="240" y2="330" stroke="#78350F" strokeWidth="1.2"
                    strokeDasharray="210" strokeDashoffset={210 * (1 - Math.min(1, Math.max(0, (svgProgress - 0.12) * 1.5)))} />

                  {/* Divisão quartos */}
                  <line x1="10" y1="225" x2="240" y2="225" stroke="#78350F" strokeWidth="1.2"
                    strokeDasharray="230" strokeDashoffset={230 * (1 - Math.min(1, Math.max(0, (svgProgress - 0.14) * 1.5)))} />

                  {/* Parede quarto 1 / quarto 2 */}
                  <line x1="125" y1="120" x2="125" y2="225" stroke="#78350F" strokeWidth="1.2"
                    strokeDasharray="105" strokeDashoffset={105 * (1 - Math.min(1, Math.max(0, (svgProgress - 0.16) * 1.5)))} />

                  {/* Parede banheiro social */}
                  <line x1="240" y1="195" x2="305" y2="195" stroke="#78350F" strokeWidth="1.2"
                    strokeDasharray="65" strokeDashoffset={65 * (1 - Math.min(1, Math.max(0, (svgProgress - 0.18) * 1.5)))} />
                  <line x1="305" y1="120" x2="305" y2="195" stroke="#78350F" strokeWidth="1.2"
                    strokeDasharray="75" strokeDashoffset={75 * (1 - Math.min(1, Math.max(0, (svgProgress - 0.18) * 1.5)))} />

                  {/* Parede lavanderia */}
                  <line x1="305" y1="10" x2="305" y2="120" stroke="#78350F" strokeWidth="1.2"
                    strokeDasharray="110" strokeDashoffset={110 * (1 - Math.min(1, Math.max(0, (svgProgress - 0.2) * 1.5)))} />

                  {/* Parede suíte/banheiro suíte */}
                  <line x1="305" y1="195" x2="305" y2="330" stroke="#78350F" strokeWidth="1.2"
                    strokeDasharray="135" strokeDashoffset={135 * (1 - Math.min(1, Math.max(0, (svgProgress - 0.22) * 1.5)))} />
                  <line x1="305" y1="265" x2="370" y2="265" stroke="#78350F" strokeWidth="1.2"
                    strokeDasharray="65" strokeDashoffset={65 * (1 - Math.min(1, Math.max(0, (svgProgress - 0.24) * 1.5)))} />

                  {/* ============ JANELAS (detalhadas com vidro) ============ */}
                  <g style={{ opacity: Math.max(0, (svgProgress - 0.26) * 4) }}>
                    {/* Janela Sala - grande */}
                    <line x1="10" y1="40" x2="10" y2="90" stroke="white" strokeWidth="4" />
                    <rect x="8" y="40" width="4" height="50" stroke="#78350F" strokeWidth="0.5" fill="none" />
                    <line x1="10" y1="65" x2="10" y2="65" stroke="#78350F" strokeWidth="0.3" />
                    <line x1="8" y1="65" x2="12" y2="65" stroke="#78350F" strokeWidth="0.3" />

                    {/* Janela Cozinha - ampla */}
                    <line x1="185" y1="10" x2="275" y2="10" stroke="white" strokeWidth="4" />
                    <rect x="185" y="8" width="90" height="4" stroke="#78350F" strokeWidth="0.5" fill="none" />
                    <line x1="230" y1="8" x2="230" y2="12" stroke="#78350F" strokeWidth="0.3" />

                    {/* Janela Quarto 1 */}
                    <line x1="10" y1="145" x2="10" y2="195" stroke="white" strokeWidth="4" />
                    <rect x="8" y="145" width="4" height="50" stroke="#78350F" strokeWidth="0.5" fill="none" />
                    <line x1="8" y1="170" x2="12" y2="170" stroke="#78350F" strokeWidth="0.3" />

                    {/* Janela Hall */}
                    <line x1="10" y1="255" x2="10" y2="305" stroke="white" strokeWidth="4" />
                    <rect x="8" y="255" width="4" height="50" stroke="#78350F" strokeWidth="0.5" fill="none" />
                    <line x1="8" y1="280" x2="12" y2="280" stroke="#78350F" strokeWidth="0.3" />

                    {/* Janela Suíte */}
                    <line x1="370" y1="205" x2="370" y2="250" stroke="white" strokeWidth="4" />
                    <rect x="368" y="205" width="4" height="45" stroke="#78350F" strokeWidth="0.5" fill="none" />
                    <line x1="368" y1="227" x2="372" y2="227" stroke="#78350F" strokeWidth="0.3" />
                  </g>

                  {/* ============ PORTAS (com arco de abertura) ============ */}
                  <g style={{ opacity: Math.max(0, (svgProgress - 0.3) * 3) }}>
                    {/* Porta entrada principal */}
                    <line x1="168" y1="330" x2="182" y2="330" stroke="white" strokeWidth="3" />
                    <line x1="168" y1="330" x2="168" y2="316" stroke="#78350F" strokeWidth="0.4" />
                    <path d="M 168 316 A 14 14 0 0 1 182 330" stroke="#78350F" strokeWidth="0.3" fill="none" strokeDasharray="2,1" />

                    {/* Porta Sala/Cozinha - vão aberto */}
                    <line x1="155" y1="60" x2="155" y2="80" stroke="white" strokeWidth="2" />

                    {/* Porta Quarto */}
                    <line x1="78" y1="120" x2="92" y2="120" stroke="white" strokeWidth="2" />
                    <line x1="78" y1="120" x2="78" y2="134" stroke="#78350F" strokeWidth="0.4" />
                    <path d="M 78 134 A 14 14 0 0 0 92 120" stroke="#78350F" strokeWidth="0.3" fill="none" strokeDasharray="2,1" />

                    {/* Porta Banheiro Social */}
                    <line x1="240" y1="152" x2="240" y2="166" stroke="white" strokeWidth="2" />
                    <line x1="240" y1="152" x2="254" y2="152" stroke="#78350F" strokeWidth="0.4" />
                    <path d="M 254 152 A 14 14 0 0 1 240 166" stroke="#78350F" strokeWidth="0.3" fill="none" strokeDasharray="2,1" />

                    {/* Porta Lavanderia */}
                    <line x1="305" y1="62" x2="305" y2="76" stroke="white" strokeWidth="2" />
                    <line x1="305" y1="62" x2="291" y2="62" stroke="#78350F" strokeWidth="0.4" />
                    <path d="M 291 62 A 14 14 0 0 0 305 76" stroke="#78350F" strokeWidth="0.3" fill="none" strokeDasharray="2,1" />

                    {/* Porta Suíte */}
                    <line x1="240" y1="243" x2="240" y2="257" stroke="white" strokeWidth="2" />
                    <line x1="240" y1="243" x2="254" y2="243" stroke="#78350F" strokeWidth="0.4" />
                    <path d="M 254 243 A 14 14 0 0 1 240 257" stroke="#78350F" strokeWidth="0.3" fill="none" strokeDasharray="2,1" />

                    {/* Porta WC Suíte */}
                    <line x1="305" y1="288" x2="305" y2="302" stroke="white" strokeWidth="2" />
                    <line x1="305" y1="288" x2="291" y2="288" stroke="#78350F" strokeWidth="0.4" />
                    <path d="M 291 288 A 14 14 0 0 0 305 302" stroke="#78350F" strokeWidth="0.3" fill="none" strokeDasharray="2,1" />
                  </g>

                  {/* ============ MÓVEIS SALA ============ */}
                  <g style={{ opacity: Math.max(0, (svgProgress - 0.5) * 3) }}>
                    {/* Sofá em L detalhado */}
                    <rect x="18" y="18" width="75" height="32" rx="2" stroke="#B45309" strokeWidth="0.5" fill="none" />
                    {/* Almofadas do sofá */}
                    <rect x="22" y="22" width="22" height="24" rx="3" stroke="#B45309" strokeWidth="0.3" fill="none" />
                    <rect x="47" y="22" width="22" height="24" rx="3" stroke="#B45309" strokeWidth="0.3" fill="none" />
                    <rect x="72" y="22" width="18" height="24" rx="3" stroke="#B45309" strokeWidth="0.3" fill="none" />
                    {/* Encosto */}
                    <line x1="20" y1="28" x2="90" y2="28" stroke="#B45309" strokeWidth="0.2" />

                    {/* Mesa de centro com detalhes */}
                    <rect x="35" y="58" width="45" height="25" rx="2" stroke="#B45309" strokeWidth="0.4" fill="none" />
                    <rect x="40" y="63" width="35" height="15" rx="1" stroke="#B45309" strokeWidth="0.2" fill="none" />
                    {/* Objetos na mesa */}
                    <ellipse cx="50" cy="70" rx="4" ry="3" stroke="#B45309" strokeWidth="0.15" fill="none" />
                    <rect x="60" y="66" width="8" height="6" rx="1" stroke="#B45309" strokeWidth="0.15" fill="none" />

                    {/* Rack/TV */}
                    <rect x="18" y="95" width="120" height="12" rx="1" stroke="#B45309" strokeWidth="0.4" fill="none" />
                    {/* TV */}
                    <rect x="45" y="88" width="50" height="5" rx="0.5" stroke="#B45309" strokeWidth="0.3" fill="none" />
                    <line x1="70" y1="93" x2="70" y2="95" stroke="#B45309" strokeWidth="0.2" />

                    {/* Poltrona */}
                    <rect x="100" y="35" width="25" height="28" rx="3" stroke="#B45309" strokeWidth="0.3" fill="none" />
                    <rect x="103" y="42" width="19" height="18" rx="2" stroke="#B45309" strokeWidth="0.2" fill="none" />

                    {/* Tapete (representação sutil) */}
                    <rect x="30" y="52" width="60" height="38" rx="1" stroke="#B45309" strokeWidth="0.15" strokeDasharray="3,2" fill="none" />
                  </g>

                  {/* ============ MÓVEIS COZINHA ============ */}
                  <g style={{ opacity: Math.max(0, (svgProgress - 0.6) * 3) }}>
                    {/* Bancada em L */}
                    <rect x="163" y="15" width="135" height="18" rx="1" stroke="#B45309" strokeWidth="0.5" fill="none" />

                    {/* Pia com cuba dupla */}
                    <rect x="175" y="18" width="35" height="12" rx="1" stroke="#B45309" strokeWidth="0.3" fill="none" />
                    <ellipse cx="185" cy="24" rx="6" ry="4" stroke="#B45309" strokeWidth="0.25" fill="none" />
                    <ellipse cx="200" cy="24" rx="6" ry="4" stroke="#B45309" strokeWidth="0.25" fill="none" />
                    {/* Torneira */}
                    <circle cx="192" cy="19" r="1.5" stroke="#B45309" strokeWidth="0.2" fill="none" />

                    {/* Fogão cooktop */}
                    <rect x="220" y="18" width="30" height="12" rx="1" stroke="#B45309" strokeWidth="0.3" fill="none" />
                    <circle cx="228" cy="22" r="3" stroke="#B45309" strokeWidth="0.2" fill="none" />
                    <circle cx="228" cy="22" r="1.5" stroke="#B45309" strokeWidth="0.15" fill="none" />
                    <circle cx="238" cy="22" r="3" stroke="#B45309" strokeWidth="0.2" fill="none" />
                    <circle cx="238" cy="22" r="1.5" stroke="#B45309" strokeWidth="0.15" fill="none" />
                    <circle cx="228" cy="28" r="2.5" stroke="#B45309" strokeWidth="0.2" fill="none" />
                    <circle cx="238" cy="28" r="2.5" stroke="#B45309" strokeWidth="0.2" fill="none" />

                    {/* Geladeira */}
                    <rect x="163" y="42" width="28" height="45" rx="1" stroke="#B45309" strokeWidth="0.4" fill="none" />
                    <line x1="163" y1="62" x2="191" y2="62" stroke="#B45309" strokeWidth="0.2" />
                    <rect x="185" y="48" width="3" height="8" rx="0.5" stroke="#B45309" strokeWidth="0.15" fill="none" />
                    <rect x="185" y="68" width="3" height="12" rx="0.5" stroke="#B45309" strokeWidth="0.15" fill="none" />

                    {/* Mesa de jantar */}
                    <rect x="200" y="55" width="55" height="35" rx="2" stroke="#B45309" strokeWidth="0.4" fill="none" />
                    {/* Cadeiras */}
                    <rect x="210" y="48" width="12" height="5" rx="1" stroke="#B45309" strokeWidth="0.2" fill="none" />
                    <rect x="233" y="48" width="12" height="5" rx="1" stroke="#B45309" strokeWidth="0.2" fill="none" />
                    <rect x="210" y="92" width="12" height="5" rx="1" stroke="#B45309" strokeWidth="0.2" fill="none" />
                    <rect x="233" y="92" width="12" height="5" rx="1" stroke="#B45309" strokeWidth="0.2" fill="none" />
                    {/* Cadeiras laterais */}
                    <rect x="195" y="65" width="5" height="12" rx="1" stroke="#B45309" strokeWidth="0.2" fill="none" />
                    <rect x="255" y="65" width="5" height="12" rx="1" stroke="#B45309" strokeWidth="0.2" fill="none" />

                    {/* Forno/Microondas embutido */}
                    <rect x="260" y="18" width="15" height="12" rx="1" stroke="#B45309" strokeWidth="0.25" fill="none" />
                    <circle cx="272" cy="24" r="1" stroke="#B45309" strokeWidth="0.15" fill="none" />
                  </g>

                  {/* ============ ÁREA DE SERVIÇO (LAVANDERIA) ============ */}
                  <g style={{ opacity: Math.max(0, (svgProgress - 0.75) * 3) }}>
                    {/* Tanque */}
                    <rect x="315" y="18" width="40" height="18" rx="1" stroke="#B45309" strokeWidth="0.4" fill="none" />
                    <ellipse cx="335" cy="27" rx="10" ry="6" stroke="#B45309" strokeWidth="0.25" fill="none" />
                    <circle cx="335" cy="20" r="1.5" stroke="#B45309" strokeWidth="0.15" fill="none" />

                    {/* Máquina de lavar */}
                    <rect x="315" y="45" width="25" height="28" rx="1" stroke="#B45309" strokeWidth="0.4" fill="none" />
                    <circle cx="327" cy="62" r="9" stroke="#B45309" strokeWidth="0.25" fill="none" />
                    <circle cx="327" cy="62" r="5" stroke="#B45309" strokeWidth="0.15" fill="none" />
                    {/* Painel */}
                    <rect x="318" y="48" width="19" height="5" rx="0.5" stroke="#B45309" strokeWidth="0.15" fill="none" />

                    {/* Secadora */}
                    <rect x="345" y="45" width="22" height="28" rx="1" stroke="#B45309" strokeWidth="0.4" fill="none" />
                    <circle cx="356" cy="62" r="8" stroke="#B45309" strokeWidth="0.25" fill="none" />
                    <circle cx="356" cy="62" r="4" stroke="#B45309" strokeWidth="0.15" fill="none" />

                    {/* Prateleira/armário */}
                    <rect x="315" y="82" width="50" height="8" rx="0.5" stroke="#B45309" strokeWidth="0.2" fill="none" />
                    <line x1="330" y1="82" x2="330" y2="90" stroke="#B45309" strokeWidth="0.15" />
                    <line x1="350" y1="82" x2="350" y2="90" stroke="#B45309" strokeWidth="0.15" />
                  </g>

                  {/* ============ QUARTO (Casal) ============ */}
                  <g style={{ opacity: Math.max(0, (svgProgress - 0.65) * 3) }}>
                    {/* Cama de casal completa - encostada na parede esquerda */}
                    <rect x="18" y="135" width="55" height="50" rx="2" stroke="#B45309" strokeWidth="0.5" fill="none" />
                    {/* Cabeceira estofada */}
                    <rect x="18" y="135" width="55" height="6" rx="1" stroke="#B45309" strokeWidth="0.4" fill="none" />
                    {/* Colchão */}
                    <rect x="20" y="143" width="51" height="40" rx="2" stroke="#B45309" strokeWidth="0.25" fill="none" />
                    {/* Travesseiros */}
                    <rect x="23" y="146" width="20" height="10" rx="3" stroke="#B45309" strokeWidth="0.25" fill="none" />
                    <rect x="47" y="146" width="20" height="10" rx="3" stroke="#B45309" strokeWidth="0.25" fill="none" />
                    {/* Edredom dobra */}
                    <line x1="20" y1="165" x2="71" y2="165" stroke="#B45309" strokeWidth="0.2" />

                    {/* Criado-mudo (apenas um, ao lado da cama) */}
                    <rect x="78" y="155" width="15" height="15" rx="1" stroke="#B45309" strokeWidth="0.3" fill="none" />
                    <circle cx="85" cy="162" r="2" stroke="#B45309" strokeWidth="0.1" fill="none" />

                    {/* Guarda-roupa - na parede inferior do quarto */}
                    <rect x="18" y="195" width="100" height="18" rx="1" stroke="#B45309" strokeWidth="0.4" fill="none" />
                    <line x1="43" y1="195" x2="43" y2="213" stroke="#B45309" strokeWidth="0.2" />
                    <line x1="68" y1="195" x2="68" y2="213" stroke="#B45309" strokeWidth="0.2" />
                    <line x1="93" y1="195" x2="93" y2="213" stroke="#B45309" strokeWidth="0.2" />
                    {/* Puxadores */}
                    <circle cx="40" cy="204" r="1" stroke="#B45309" strokeWidth="0.1" fill="none" />
                    <circle cx="46" cy="204" r="1" stroke="#B45309" strokeWidth="0.1" fill="none" />
                    <circle cx="65" cy="204" r="1" stroke="#B45309" strokeWidth="0.1" fill="none" />
                    <circle cx="71" cy="204" r="1" stroke="#B45309" strokeWidth="0.1" fill="none" />
                  </g>


                  {/* ============ BANHEIRO SOCIAL ============ */}
                  <g style={{ opacity: Math.max(0, (svgProgress - 0.55) * 3) }}>
                    {/* Box com ralo - área de chuveiro */}
                    <rect x="248" y="128" width="35" height="40" stroke="#B45309" strokeWidth="0.4" fill="none" />
                    <line x1="248" y1="128" x2="283" y2="168" stroke="#B45309" strokeWidth="0.15" strokeDasharray="3,2" />
                    <line x1="283" y1="128" x2="248" y2="168" stroke="#B45309" strokeWidth="0.15" strokeDasharray="3,2" />
                    {/* Ralo */}
                    <circle cx="265" cy="158" r="3" stroke="#B45309" strokeWidth="0.2" fill="none" />
                    {/* Chuveiro */}
                    <circle cx="265" cy="135" r="4" stroke="#B45309" strokeWidth="0.2" fill="none" />

                    {/* Vaso sanitário - dentro do banheiro */}
                    <ellipse cx="260" cy="180" rx="7" ry="5" stroke="#B45309" strokeWidth="0.35" fill="none" />
                    <ellipse cx="260" cy="179" rx="4" ry="3" stroke="#B45309" strokeWidth="0.2" fill="none" />
                    {/* Caixa acoplada */}
                    <rect x="253" y="183" width="14" height="5" rx="1" stroke="#B45309" strokeWidth="0.25" fill="none" />

                    {/* Pia/Lavatório */}
                    <rect x="285" y="128" width="15" height="12" rx="1" stroke="#B45309" strokeWidth="0.35" fill="none" />
                    <ellipse cx="292" cy="134" rx="5" ry="3" stroke="#B45309" strokeWidth="0.2" fill="none" />
                    <circle cx="292" cy="130" r="1" stroke="#B45309" strokeWidth="0.1" fill="none" />
                  </g>

                  {/* ============ HALL (área ampla) ============ */}
                  <g style={{ opacity: Math.max(0, (svgProgress - 0.4) * 3) }}>
                    {/* Tapete grande decorativo */}
                    <rect x="40" y="260" width="160" height="55" rx="3" stroke="#B45309" strokeWidth="0.3" strokeDasharray="5,3" fill="none" />

                    {/* Aparador/console na parede esquerda */}
                    <rect x="18" y="235" width="15" height="50" rx="1" stroke="#B45309" strokeWidth="0.4" fill="none" />
                    <line x1="18" y1="255" x2="33" y2="255" stroke="#B45309" strokeWidth="0.15" />
                    <line x1="18" y1="275" x2="33" y2="275" stroke="#B45309" strokeWidth="0.15" />

                    {/* Vaso/planta decorativa */}
                    <circle cx="55" cy="255" r="10" stroke="#B45309" strokeWidth="0.3" fill="none" />
                    <circle cx="55" cy="255" r="6" stroke="#B45309" strokeWidth="0.15" fill="none" />

                    {/* Banco de entrada */}
                    <rect x="80" y="235" width="50" height="18" rx="2" stroke="#B45309" strokeWidth="0.4" fill="none" />
                    <rect x="83" y="238" width="44" height="12" rx="1" stroke="#B45309" strokeWidth="0.2" fill="none" />

                    {/* Puff/banco redondo */}
                    <circle cx="165" cy="285" r="15" stroke="#B45309" strokeWidth="0.35" fill="none" />
                    <circle cx="165" cy="285" r="10" stroke="#B45309" strokeWidth="0.2" fill="none" />

                    {/* Cabideiro/porta-casacos na parede */}
                    <rect x="195" y="232" width="35" height="12" rx="1" stroke="#B45309" strokeWidth="0.3" fill="none" />
                    <circle cx="203" cy="238" r="2" stroke="#B45309" strokeWidth="0.15" fill="none" />
                    <circle cx="212" cy="238" r="2" stroke="#B45309" strokeWidth="0.15" fill="none" />
                    <circle cx="221" cy="238" r="2" stroke="#B45309" strokeWidth="0.15" fill="none" />

                    {/* Mesa lateral com objeto */}
                    <rect x="195" y="275" width="22" height="22" rx="1" stroke="#B45309" strokeWidth="0.3" fill="none" />
                    <ellipse cx="206" cy="286" rx="5" ry="4" stroke="#B45309" strokeWidth="0.15" fill="none" />

                    {/* Espelho/quadro na parede inferior */}
                    <rect x="100" y="318" width="50" height="8" rx="1" stroke="#B45309" strokeWidth="0.25" fill="none" />
                  </g>

                  {/* ============ SUÍTE (Cama de casal) ============ */}
                  <g style={{ opacity: Math.max(0, (svgProgress - 0.45) * 3) }}>
                    {/* Cama de casal - encostada na parede direita (x=305) */}
                    <rect x="248" y="210" width="52" height="48" rx="2" stroke="#B45309" strokeWidth="0.5" fill="none" />
                    {/* Cabeceira na parede */}
                    <rect x="295" y="210" width="5" height="48" rx="1" stroke="#B45309" strokeWidth="0.4" fill="none" />
                    {/* Colchão */}
                    <rect x="250" y="213" width="43" height="42" rx="2" stroke="#B45309" strokeWidth="0.25" fill="none" />
                    {/* Travesseiros */}
                    <rect x="285" y="218" width="8" height="16" rx="2" stroke="#B45309" strokeWidth="0.25" fill="none" />
                    <rect x="285" y="238" width="8" height="16" rx="2" stroke="#B45309" strokeWidth="0.25" fill="none" />
                    {/* Edredom dobra */}
                    <line x1="250" y1="235" x2="280" y2="235" stroke="#B45309" strokeWidth="0.2" />

                    {/* Criado-mudo */}
                    <rect x="248" y="262" width="15" height="15" rx="1" stroke="#B45309" strokeWidth="0.3" fill="none" />
                    <circle cx="255" cy="270" r="2" stroke="#B45309" strokeWidth="0.1" fill="none" />

                    {/* Cômoda/gaveteiro na parede superior */}
                    <rect x="248" y="200" width="50" height="8" rx="1" stroke="#B45309" strokeWidth="0.3" fill="none" />
                    <line x1="265" y1="200" x2="265" y2="208" stroke="#B45309" strokeWidth="0.15" />
                    <line x1="282" y1="200" x2="282" y2="208" stroke="#B45309" strokeWidth="0.15" />
                  </g>

                  {/* ============ CLOSET/GUARDA-ROUPA SUÍTE (área separada) ============ */}
                  <g style={{ opacity: Math.max(0, (svgProgress - 0.7) * 3) }}>
                    {/* Guarda-roupa - na área do closet (x=305-370, y=195-265) */}
                    <rect x="315" y="202" width="48" height="55" rx="1" stroke="#B45309" strokeWidth="0.4" fill="none" />
                    <line x1="339" y1="202" x2="339" y2="257" stroke="#B45309" strokeWidth="0.2" />
                    {/* Espelho na porta */}
                    <rect x="318" y="208" width="17" height="42" rx="1" stroke="#B45309" strokeWidth="0.2" fill="none" />
                    {/* Puxadores */}
                    <circle cx="336" cy="230" r="1.5" stroke="#B45309" strokeWidth="0.1" fill="none" />
                    <circle cx="343" cy="230" r="1.5" stroke="#B45309" strokeWidth="0.1" fill="none" />
                  </g>

                  {/* ============ BANHEIRO SUÍTE ============ */}
                  <g style={{ opacity: Math.max(0, (svgProgress - 0.78) * 3) }}>
                    {/* Box amplo */}
                    <rect x="315" y="275" width="35" height="40" stroke="#B45309" strokeWidth="0.4" fill="none" />
                    <line x1="315" y1="275" x2="350" y2="315" stroke="#B45309" strokeWidth="0.15" strokeDasharray="3,2" />
                    <line x1="350" y1="275" x2="315" y2="315" stroke="#B45309" strokeWidth="0.15" strokeDasharray="3,2" />
                    {/* Ralo */}
                    <circle cx="332" cy="305" r="4" stroke="#B45309" strokeWidth="0.2" fill="none" />
                    {/* Chuveiro */}
                    <circle cx="332" cy="282" r="5" stroke="#B45309" strokeWidth="0.2" fill="none" />

                    {/* Vaso sanitário */}
                    <ellipse cx="358" cy="290" rx="7" ry="5" stroke="#B45309" strokeWidth="0.35" fill="none" />
                    <ellipse cx="358" cy="289" rx="4.5" ry="3.5" stroke="#B45309" strokeWidth="0.2" fill="none" />
                    <rect x="351" y="293" width="14" height="5" rx="1" stroke="#B45309" strokeWidth="0.25" fill="none" />

                    {/* Bancada com cuba */}
                    <rect x="315" y="318" width="50" height="14" rx="1" stroke="#B45309" strokeWidth="0.4" fill="none" />
                    <ellipse cx="340" cy="325" rx="10" ry="5" stroke="#B45309" strokeWidth="0.25" fill="none" />
                    <circle cx="340" cy="320" r="1.5" stroke="#B45309" strokeWidth="0.1" fill="none" />
                  </g>

                  {/* ============ LABELS (com tipografia melhorada) ============ */}
                  <g style={{ opacity: Math.max(0, (svgProgress - 0.85) * 5) }}>
                    <text x="70" y="72" fontSize="8" fontWeight="300" letterSpacing="0.5" className="fill-stone-400" textAnchor="middle">SALA</text>
                    <text x="220" y="82" fontSize="8" fontWeight="300" letterSpacing="0.5" className="fill-stone-400" textAnchor="middle">COZINHA</text>
                    <text x="340" y="70" fontSize="7" fontWeight="300" letterSpacing="0.5" className="fill-stone-400" textAnchor="middle">A.S.</text>
                    <text x="60" y="175" fontSize="7" fontWeight="300" letterSpacing="0.5" className="fill-stone-400" textAnchor="middle">QUARTO</text>
                    <text x="270" y="155" fontSize="6" fontWeight="300" letterSpacing="0.3" className="fill-stone-400" textAnchor="middle">WC</text>
                    <text x="120" y="290" fontSize="8" fontWeight="300" letterSpacing="0.5" className="fill-stone-400" textAnchor="middle">HALL</text>
                    <text x="270" y="285" fontSize="7" fontWeight="300" letterSpacing="0.5" className="fill-stone-400" textAnchor="middle">SUÍTE</text>
                    <text x="340" y="232" fontSize="6" fontWeight="300" letterSpacing="0.3" className="fill-stone-400" textAnchor="middle">CLOSET</text>
                    <text x="340" y="298" fontSize="6" fontWeight="300" letterSpacing="0.3" className="fill-stone-400" textAnchor="middle">WC</text>
                  </g>

                  {/* ============ ÁREAS INTERATIVAS (hover) ============ */}
                  <g style={{ opacity: svgProgress > 0.9 ? 1 : 0 }}>
                    {rooms.map((room) => (
                      <rect
                        key={room.id}
                        x={room.x}
                        y={room.y}
                        width={room.width}
                        height={room.height}
                        fill={hoveredRoom === room.id ? "rgba(180, 83, 9, 0.08)" : "transparent"}
                        stroke={hoveredRoom === room.id ? "#B45309" : "transparent"}
                        strokeWidth="1.5"
                        style={{
                          cursor: "pointer",
                          transition: "all 0.2s ease"
                        }}
                        onMouseEnter={(e) => {
                          setHoveredRoom(room.id);
                          const svgRect = e.currentTarget.ownerSVGElement?.getBoundingClientRect();
                          if (svgRect) {
                            const scaleX = svgRect.width / 380;
                            const scaleY = svgRect.height / 340;
                            setTooltipPos({
                              x: (room.x + room.width / 2) * scaleX,
                              y: (room.y + room.height / 2) * scaleY
                            });
                          }
                        }}
                        onMouseLeave={() => setHoveredRoom(null)}
                      />
                    ))}
                  </g>
                </svg>

                {/* Tooltip */}
                {hoveredRoom && svgProgress > 0.9 && (
                  <div
                    className="absolute pointer-events-none z-20 transform -translate-x-1/2 -translate-y-full"
                    style={{
                      left: tooltipPos.x,
                      top: tooltipPos.y - 10,
                    }}
                  >
                    <div className="bg-gray-900 text-white px-3 py-2 rounded-lg shadow-lg text-center">
                      <p className="font-medium text-sm">
                        {rooms.find(r => r.id === hoveredRoom)?.name}
                      </p>
                      <p className="text-xs text-gray-300">
                        {rooms.find(r => r.id === hoveredRoom)?.area}
                      </p>
                    </div>
                    <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-gray-900 mx-auto" />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-400 transition-opacity duration-300"
            style={{ opacity: svgProgress < 0.95 ? 1 : 0 }}
          >
            <span className="text-[10px] uppercase tracking-widest">
              {textProgress < 1 ? "Role para ler" : "Role para desenhar"}
            </span>
            <div className="w-5 h-8 border-2 border-stone-300 rounded-full flex justify-center pt-1.5">
              <div className="w-1 h-2.5 bg-stone-400 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Componente principal que renderiza a versão correta
export default function IntroSection() {
  return (
    <>
      <IntroSectionMobile />
      <IntroSectionDesktop />
    </>
  );
}
