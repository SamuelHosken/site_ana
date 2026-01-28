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
    <section id="inicio" className="relative z-10 bg-white pt-16">
      {/* ========== MOBILE VERSION - Full image with centered text ========== */}
      <div className="md:hidden px-4 pt-5 pb-0">
        <div ref={heroRef} className="relative h-[420px] rounded-[20px] overflow-hidden">
          {/* Full screen image */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
              style={{ backgroundImage: "url('/hero.png')" }}
            />
            {/* Dark overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30" />
          </div>

          {/* Centered content */}
          <div className="relative h-full flex flex-col items-center justify-center text-center px-5">
            {/* Logo */}
            <img
              src="/Tipografia com R.svg"
              alt="Later Nobilis"
              className="h-4 w-auto mb-4 brightness-0 invert opacity-90"
            />

            {/* Title */}
            <h2 className="text-[22px] leading-[1.3] font-normal text-white mb-3">
              CONHEÇA A MELHOR{" "}
              <span className="font-semibold">IMOBILIÁRIA BOUTIQUE</span>{" "}
              DE BRASÍLIA
            </h2>

            {/* Tagline */}
            <p className="text-white/70 text-xs mb-6 max-w-[280px]">
              Exclusividade e estratégia para valorizar seu patrimônio
            </p>

            {/* Button */}
            <button
              onClick={() => {
                const element = document.getElementById("sobre");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="group flex items-center gap-2 px-6 py-3 bg-white text-gray-900 text-xs font-semibold tracking-wider uppercase hover:bg-white/90 transition-all duration-300 rounded-full shadow-lg"
            >
              Explorar
              <svg
                className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            {/* Scroll indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
              <div className="w-5 h-7 border border-white/40 rounded-full flex justify-center pt-1.5">
                <div className="w-0.5 h-2 bg-white/60 rounded-full animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== DESKTOP VERSION - Original layout ========== */}
      <div className="hidden md:block max-w-7xl mx-auto px-4 pt-12 pb-0">
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
          <button
            onClick={() => {
              const element = document.getElementById("sobre");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="group flex items-center gap-3 px-10 py-3.5 bg-gray-900 text-white text-sm tracking-widest uppercase hover:bg-gray-800 transition-all duration-300 rounded-full"
          >
            Explorar
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
