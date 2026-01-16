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
    <section id="inicio" className="bg-white pt-20">
      {/* ========== MOBILE VERSION - Full image with centered text ========== */}
      <div className="md:hidden px-4 py-6">
        <div ref={heroRef} className="relative h-[450px] sm:h-[500px] rounded-[20px] overflow-hidden">
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
          <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
            {/* Logo */}
            <img
              src="/Tipografia com R.svg"
              alt="Later Nobilis"
              className="h-5 w-auto mb-6 brightness-0 invert"
            />

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-normal text-white leading-tight mb-8">
              CONHEÇA A MELHOR{" "}
              <span className="font-semibold">IMOBILIÁRIA BOUTIQUE</span>{" "}
              DE BRASÍLIA
            </h2>

            {/* Button */}
            <button className="group px-10 py-4 bg-white text-gray-900 text-sm tracking-wider hover:bg-gray-100 transition-colors rounded-lg">
              Ler Mais
            </button>

          </div>
        </div>
      </div>

      {/* ========== DESKTOP VERSION - Original layout ========== */}
      <div className="hidden md:block max-w-[100rem] mx-auto px-4 py-12 pb-20">
        <div className="relative h-[500px] lg:h-[600px]">
          {/* Container da imagem com overflow hidden */}
          <div
            className="absolute inset-0 overflow-hidden rounded-[20px]"
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
          <div className="absolute top-0 left-0 bg-white w-[55%] lg:w-[50%] h-[60%] rounded-br-[20px] flex items-center justify-center">
            <div className="px-8">
              {/* Logo Tipografia */}
              <div className="mb-6">
                <img
                  src="/Tipografia com R.svg"
                  alt="Later Nobilis"
                  className="h-6 lg:h-8 w-auto brightness-0"
                />
              </div>

              <h2 className="text-2xl lg:text-4xl font-normal text-gray-800 leading-tight">
                CONHEÇA A MELHOR{" "}
                <span className="font-semibold text-primary">IMOBILIÁRIA<br />BOUTIQUE</span>{" "}
                DE BRASÍLIA
              </h2>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 text-white/80">
            <span className="text-xs uppercase tracking-widest">Role</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-white/70 rounded-full animate-bounce" />
            </div>
          </div>
        </div>

        {/* Botão - fora do container principal */}
        <div className="relative -mt-6 ml-[8%] lg:ml-[calc((100%-80rem)/2+2rem)]">
          <button className="group px-20 py-4 bg-gray-900 text-white text-sm tracking-wider hover:bg-gray-800 transition-colors rounded-lg overflow-hidden">
            <span className="relative block overflow-hidden h-5">
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
