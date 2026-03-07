"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const [parallaxY, setParallaxY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  // Trigger entrance animation
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Parallax on scroll (mobile + desktop)
  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = 0;
        if (!heroRef.current) return;

        const rect = heroRef.current.getBoundingClientRect();
        if (rect.bottom > 0) {
          const maxParallax = 50;
          const newParallax = Math.min(window.scrollY * 0.1, maxParallax);
          setParallaxY(newParallax);
        } else {
          setParallaxY(0);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section id="inicio" className="relative z-10 bg-white pt-16">
      {/* ========== MOBILE VERSION - Cinematic entrance ========== */}
      <div className="md:hidden px-5 pt-5 pb-0">
        <div ref={heroRef} className="relative h-[420px] rounded-[20px] overflow-hidden">
          {/* Image with zoom-out + parallax */}
          <div
            className="absolute inset-0 transition-transform duration-[2s] ease-out"
            style={{ transform: `translateY(${parallaxY}px)` }}
          >
            <div
              className={`absolute inset-0 transition-transform duration-[2.5s] ease-out ${
                loaded ? "scale-105" : "scale-[1.2]"
              }`}
            >
              <Image
                src="/hero.jpg"
                alt="Later Nobilis Hero"
                fill
                priority
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>
          </div>

          {/* Overlay that lightens slightly on load */}
          <div
            className={`absolute inset-0 transition-all duration-[2s] ease-out ${
              loaded
                ? "bg-gradient-to-t from-black/70 via-black/45 to-black/20"
                : "bg-gradient-to-t from-black/80 via-black/60 to-black/40"
            }`}
          />

          {/* Centered content — staggered entrance */}
          <div className="relative h-full flex flex-col items-center justify-center text-center px-5">
            {/* Logo — 0ms */}
            <Image
              src="/Tipografia com R.svg"
              alt="Later Nobilis"
              width={120}
              height={16}
              className={`h-4 w-auto mb-3 brightness-0 invert transition-all duration-700 ease-out ${
                loaded ? "opacity-90 translate-y-0 blur-0" : "opacity-0 translate-y-3 blur-sm"
              }`}
              priority
            />

            {/* Decorative line — 300ms */}
            <div
              className={`h-px bg-white/40 mb-4 transition-all duration-700 ease-out delay-300 ${
                loaded ? "w-16 opacity-100" : "w-0 opacity-0"
              }`}
            />

            {/* Title — 500ms */}
            <h1
              className={`text-[22px] leading-[1.3] font-normal text-white mb-3 transition-all duration-700 ease-out delay-500 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              CONHEÇA A MELHOR{" "}
              <span className="font-semibold">IMOBILIÁRIA BOUTIQUE</span>{" "}
              DE BRASÍLIA
            </h1>

            {/* Tagline — 800ms */}
            <p
              className={`text-white/70 text-xs mb-6 max-w-[280px] transition-all duration-700 ease-out delay-[800ms] ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Exclusividade e estratégia para valorizar seu patrimônio
            </p>

            {/* Button — 1100ms */}
            <button
              onClick={() => {
                const element = document.getElementById("sobre");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className={`group flex items-center gap-2 px-6 py-3 bg-white text-gray-900 text-xs font-semibold tracking-wider uppercase hover:bg-white/90 transition-all duration-700 ease-out delay-[1100ms] rounded-full shadow-lg ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
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

            {/* Scroll indicator — 1500ms */}
            <div
              className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 transition-all duration-700 ease-out delay-[1500ms] ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
            >
              <div className="w-5 h-7 border border-white/40 rounded-full flex justify-center pt-1.5">
                <div className="w-0.5 h-2 bg-white/60 rounded-full animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== DESKTOP VERSION - Original layout ========== */}
      <div className="hidden md:block max-w-7xl mx-auto px-5 pt-12 pb-0">
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
                className="absolute inset-0 transition-transform duration-700 ease-out"
                style={{
                  transform: `scale(${isHovered ? 1.08 : 1.02})`
                }}
              >
                <Image
                  src="/hero.jpg"
                  alt="Later Nobilis Hero"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(min-width: 768px) 1280px, 100vw"
                />
              </div>
            </div>
          </div>

          {/* Overlay branco com texto - canto superior esquerdo */}
          <div className="absolute top-0 left-0 bg-white w-[55%] lg:w-[48%] h-[58%] rounded-br-[16px] flex items-center justify-center">
            <div className="px-6">
              {/* Logo Tipografia */}
              <div className="mb-4">
                <Image
                  src="/Tipografia com R.svg"
                  alt="Later Nobilis"
                  width={150}
                  height={24}
                  className="h-5 lg:h-6 w-auto brightness-0"
                  priority
                />
              </div>

              <h1 className="text-xl lg:text-3xl font-normal text-gray-800 leading-tight">
                CONHEÇA A MELHOR{" "}
                <span className="font-semibold text-primary">IMOBILIÁRIA<br />BOUTIQUE</span>{" "}
                DE BRASÍLIA
              </h1>
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
