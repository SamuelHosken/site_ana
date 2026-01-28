"use client";

import ScrollReveal from "./ScrollReveal";

export default function HoldingsSection() {
  return (
    <section className="py-16 px-4 md:px-6 bg-stone-50">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Texto - primeiro no mobile */}
          <ScrollReveal animation="reveal-left" className="order-2 lg:order-1">
            <div>
              {/* Header */}
              <span className="inline-block text-primary text-xs font-medium tracking-widest uppercase mb-3">
                Holdings e Family Offices
              </span>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-800 tracking-tight mb-3">
                Especialização em{" "}
                <span className="font-bodoni text-primary">estruturas patrimoniais</span>
              </h2>
              <div className="h-[2px] w-20 bg-primary/20 rounded-full mb-5" />

              {/* Content - simplificado para mobile */}
              <div className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Fazemos parte de um ecossistema de instituições patrimoniais familiares, oferecendo{" "}
                  <strong className="text-gray-800">soluções imobiliárias especializadas</strong> para
                  holdings e family offices.
                </p>

                <p className="text-gray-600 text-sm leading-relaxed hidden md:block">
                  Desenvolvemos um <strong className="text-gray-800">know-how raro no mercado</strong>:
                  a gestão de imóveis dentro de holdings patrimoniais, com{" "}
                  <strong className="text-gray-800">visão jurídica, estratégica e tributária</strong>.
                </p>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Cada ativo gera <strong className="text-gray-800">rentabilidade consistente</strong> e{" "}
                  <strong className="text-gray-800">dividendos recorrentes</strong>, com visão de longo prazo e{" "}
                  <span className="text-primary font-medium">absoluta segurança patrimonial</span>.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Imagem - segundo no mobile */}
          <ScrollReveal animation="reveal-right" delay={100} className="order-1 lg:order-2">
            <div className="relative h-[220px] md:h-[320px] lg:h-[380px] bg-gradient-to-br from-stone-200 to-stone-300 rounded-xl overflow-hidden">
              <img
                src="/holdings.jpg"
                alt="Estruturas patrimoniais familiares"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
