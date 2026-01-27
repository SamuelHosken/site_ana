"use client";

import ScrollReveal from "./ScrollReveal";

export default function HoldingsSection() {
  return (
    <section className="py-14 sm:py-12 md:py-16 px-4 md:px-6 bg-stone-50">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Imagem à esquerda */}
          <ScrollReveal animation="reveal-left">
            <div className="relative">
              <div className="relative h-[280px] sm:h-[320px] md:h-[380px] bg-gradient-to-br from-stone-200 to-stone-300 rounded-xl overflow-hidden">
                <img
                  src="/holdings.jpg"
                  alt="Estruturas patrimoniais familiares"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                {/* Overlay decorativo */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

            </div>
          </ScrollReveal>

          {/* Texto à direita */}
          <ScrollReveal animation="reveal-right" delay={100}>
            <div>
              {/* Header */}
              <span className="inline-block text-primary text-xs font-medium tracking-widest uppercase mb-3">
                Ativos Imobiliários em Holdings e Family Offices
              </span>
              <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl text-gray-800 tracking-tight mb-4">
                Especialização em{" "}
                <span className="font-bodoni text-primary">estruturas patrimoniais familiares</span>
              </h2>
              <div className="h-[2px] w-20 bg-primary/20 rounded-full mb-6" />

              {/* Content */}
              <div className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Fazemos parte de um ecossistema de instituições patrimoniais familiares e atuamos
                  oferecendo <strong className="text-gray-800">soluções imobiliárias altamente especializadas</strong> para
                  holdings patrimoniais e family offices.
                </p>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Por já gerenciarmos ativos imobiliários no segmento de wealth, desenvolvemos um{" "}
                  <strong className="text-gray-800">know-how raro no mercado</strong>: a gestão de imóveis dentro de
                  holdings patrimoniais e holdings imobiliárias, com{" "}
                  <strong className="text-gray-800">visão jurídica, estratégica e tributária</strong>.
                </p>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Nossa abordagem vai além da locação. Entendemos que cada ativo deve gerar{" "}
                  <strong className="text-gray-800">rentabilidade consistente</strong> e{" "}
                  <strong className="text-gray-800">dividendos recorrentes</strong> para os beneficiários,
                  sempre com visão de longo prazo e{" "}
                  <span className="text-primary font-medium">absoluta segurança patrimonial</span>.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
