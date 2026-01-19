"use client";

import { useEffect, useState, useRef } from "react";

export default function Hero() {
  const [parallaxY, setParallaxY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;

      const rect = heroRef.current.getBoundingClientRect();
      const heroBottom = rect.bottom;

      // Só aplica parallax enquanto o hero está visível
      if (heroBottom > 0) {
        // Limita o parallax a no máximo 50px para não cortar a imagem
        const maxParallax = 50;
        const newParallax = Math.min(window.scrollY * 0.1, maxParallax);
        setParallaxY(newParallax);
      } else {
        // Reseta quando o hero sai da tela
        setParallaxY(0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="inicio" className="bg-white pt-16">
      {/* ========== MOBILE VERSION - Full image with centered text ========== */}
      <div className="md:hidden px-3 py-4">
        <div ref={heroRef} className="relative h-[320px] sm:h-[360px] rounded-[16px] overflow-hidden">
          {/* Full screen image */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/hero.png')" }}
            />
            {/* Dark overlay - mais escuro para legibilidade */}
            <div className="absolute inset-0 bg-black/60" />
          </div>

          {/* Centered content */}
          <div className="relative h-full flex flex-col items-center justify-center text-center px-5">
            {/* Logo */}
            <img
              src="/Tipografia com R.svg"
              alt="Later Nobilis"
              className="h-4 w-auto mb-4 brightness-0 invert"
            />

            {/* Title */}
            <h2 className="text-xl sm:text-2xl font-normal text-white leading-tight mb-6">
              CONHEÇA A MELHOR{" "}
              <span className="font-semibold">IMOBILIÁRIA BOUTIQUE</span>{" "}
              DE BRASÍLIA
            </h2>

            {/* Button */}
            <button className="group px-8 py-3 bg-white text-gray-900 text-sm tracking-wider hover:bg-gray-100 transition-colors rounded-lg">
              Ler Mais
            </button>

          </div>
        </div>
      </div>

      {/* ========== DESKTOP VERSION - Original layout ========== */}
      <div className="hidden md:block max-w-7xl mx-auto px-4 py-8 pb-16">
        <div className="relative h-[380px] lg:h-[450px]">
          {/* Container da imagem com overflow hidden */}
          <div
            className="absolute inset-0 overflow-hidden rounded-[16px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Wrapper para parallax (com transição suave) */}
            <div
              className="absolute inset-0 transition-transform duration-300 ease-out"
              style={{ transform: `translateY(${parallaxY}px)` }}
            >
              {/* Imagem com hover scale (com transição) */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-out"
                style={{
                  backgroundImage: "url('/hero.png')",
                  transform: `scale(${isHovered ? 1.08 : 1.02})`
                }}
              />
            </div>
          </div>

          {/* Overlay branco com texto - canto superior esquerdo */}
          <div className="absolute top-0 left-0 bg-white w-[55%] lg:w-[48%] h-[58%] rounded-br-[16px] flex items-center justify-center">
            <div className="px-6">
              {/* Logo Tipografia */}
              <div className="mb-4">
                <img
                  src="/Tipografia com R.svg"
                  alt="Later Nobilis"
                  className="h-5 lg:h-6 w-auto brightness-0"
                />
              </div>

              <h2 className="text-xl lg:text-3xl font-normal text-gray-800 leading-tight">
                CONHEÇA A MELHOR{" "}
                <span className="font-semibold text-primary">IMOBILIÁRIA<br />BOUTIQUE</span>{" "}
                DE BRASÍLIA
              </h2>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-6 right-6 flex flex-col items-center gap-2 text-white/80">
            <span className="text-xs uppercase tracking-widest">Role</span>
            <div className="w-5 h-8 border-2 border-white/50 rounded-full flex justify-center pt-1.5">
              <div className="w-1 h-2.5 bg-white/70 rounded-full animate-bounce" />
            </div>
          </div>
        </div>

        {/* Botão - fora do container principal */}
        <div className="relative -mt-5 ml-[8%] lg:ml-[calc((100%-72rem)/2+1.5rem)]">
          <button className="group px-16 py-3 bg-gray-900 text-white text-sm tracking-wider hover:bg-gray-800 transition-colors rounded-lg overflow-hidden">
            <span className="relative block overflow-hidden h-4">
              <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                Ler Mais
              </span>
              <span className="absolute top-full left-0 block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                Ler Mais
              </span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
