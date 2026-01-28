"use client";

import ScrollReveal from "./ScrollReveal";

export default function HoldingsSection() {
  return (
    <section className="py-16 px-4 md:px-6 bg-stone-50">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Imagem - esquerda no desktop */}
          <ScrollReveal animation="reveal-left" className="order-1">
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

          {/* Texto - direita no desktop */}
          <ScrollReveal animation="reveal-right" delay={100} className="order-2">
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
                  <strong className="text-gray-800">soluções imobiliárias especializadas</strong> para{" "}
                  <span className="relative inline-block group/tooltip">
                    <strong className="text-gray-800 border-b-2 border-primary/40 cursor-help transition-colors group-hover/tooltip:border-primary">
                      holdings
                    </strong>
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-3 bg-white rounded-xl shadow-xl border border-stone-100 w-64 opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-300 transform group-hover/tooltip:-translate-y-0 translate-y-2 z-50 pointer-events-none">
                      <span className="block text-primary text-xs font-semibold mb-1">Holdings</span>
                      <span className="block text-gray-600 text-xs leading-relaxed">
                        Empresa criada para administrar e proteger o patrimônio familiar, centralizando bens como imóveis, investimentos e participações societárias.
                      </span>
                      <span className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white" />
                    </span>
                  </span>
                  {" "}e{" "}
                  <span className="relative inline-block group/tooltip2">
                    <strong className="text-gray-800 border-b-2 border-primary/40 cursor-help transition-colors group-hover/tooltip2:border-primary">
                      family offices
                    </strong>
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-3 bg-white rounded-xl shadow-xl border border-stone-100 w-64 opacity-0 invisible group-hover/tooltip2:opacity-100 group-hover/tooltip2:visible transition-all duration-300 transform group-hover/tooltip2:-translate-y-0 translate-y-2 z-50 pointer-events-none">
                      <span className="block text-primary text-xs font-semibold mb-1">Family Office</span>
                      <span className="block text-gray-600 text-xs leading-relaxed">
                        Estrutura privada que gerencia o patrimônio de famílias de alta renda, oferecendo serviços financeiros, jurídicos e de investimentos personalizados.
                      </span>
                      <span className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white" />
                    </span>
                  </span>.
                </p>

                <p className="text-gray-600 text-sm leading-relaxed hidden md:block">
                  Desenvolvemos um{" "}
                  <span className="relative inline-block group/tooltip">
                    <strong className="text-gray-800 border-b-2 border-primary/40 cursor-help transition-colors group-hover/tooltip:border-primary">
                      know-how
                    </strong>
                    {/* Tooltip */}
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-3 bg-white rounded-xl shadow-xl border border-stone-100 w-64 opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-300 transform group-hover/tooltip:-translate-y-0 translate-y-2 z-50 pointer-events-none">
                      <span className="block text-primary text-xs font-semibold mb-1">Know-how</span>
                      <span className="block text-gray-600 text-xs leading-relaxed">
                        Conhecimento prático e especializado adquirido através de experiência. O "saber fazer" que diferencia especialistas no mercado.
                      </span>
                      {/* Arrow */}
                      <span className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white" />
                    </span>
                  </span>
                  {" "}raro no mercado:
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
        </div>
      </div>
    </section>
  );
}
