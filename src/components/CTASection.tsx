"use client";

import ScrollReveal from "./ScrollReveal";

export default function CTASection() {
  return (
    <section id="contato" className="py-14 sm:py-16 md:py-20 px-4 md:px-6 bg-stone-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      {/* Subtle background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Decorative top line */}
        <ScrollReveal>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-primary/30" />
            <span className="text-primary text-[10px] font-medium tracking-[0.2em] uppercase">
              Exclusividade
            </span>
            <div className="h-px w-10 bg-primary/30" />
          </div>
        </ScrollReveal>

        {/* Main headline */}
        <ScrollReveal delay={100}>
          <h2 className="text-lg sm:text-xl md:text-2xl text-gray-800 font-light leading-tight mb-4">
            Seu imóvel pode fazer parte{" "}
            <span className="font-bodoni text-primary">da nossa seleção exclusiva?</span>
          </h2>
        </ScrollReveal>

        {/* Animated decorative line */}
        <ScrollReveal delay={200}>
          <div className="group flex justify-center mb-5">
            <div className="h-[2px] w-16 bg-primary/20 rounded-full overflow-hidden">
              <div className="h-full w-0 bg-primary transition-all duration-1000 ease-out group-hover:w-full animate-line-expand" />
            </div>
          </div>
        </ScrollReveal>

        {/* Subtitle */}
        <ScrollReveal delay={300}>
          <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed mb-6">
            Descubra se seu imóvel se encaixa no nosso portfólio e como podemos{" "}
            <span className="text-gray-700 font-medium">vender mais rápido</span>, por mais valor.
          </p>
        </ScrollReveal>

        {/* Button */}
        <ScrollReveal delay={400}>
          <a
            href="#contato"
            className="group relative inline-block px-6 py-3 bg-primary text-white text-sm font-medium rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            <span className="relative z-10">Quero vender meu imóvel</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </ScrollReveal>
      </div>

      <style jsx>{`
        @keyframes line-expand {
          0% { width: 0; }
          100% { width: 100%; }
        }
        .animate-line-expand {
          animation: line-expand 1.5s ease-out forwards;
          animation-delay: 0.5s;
        }
      `}</style>
    </section>
  );
}
