import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import Tooltip from "./Tooltip";

export default function HoldingsSection() {
  return (
    <section className="py-16 px-5 md:px-6 bg-stone-50">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Imagem - esquerda no desktop */}
          <ScrollReveal animation="reveal-left" className="order-1">
            <div className="relative h-[220px] md:h-[320px] lg:h-[380px] bg-gradient-to-br from-stone-200 to-stone-300 rounded-xl overflow-hidden">
              <Image
                src="/Fotos Site/holdings-family-offices.jpg"
                alt="Estruturas patrimoniais familiares"
                fill
                className="object-cover object-[center_-40px]"
                sizes="(min-width: 1024px) 50vw, 100vw"
                loading="lazy"
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
                  <Tooltip
                    term="holdings"
                    explanation="Empresa criada para administrar e proteger o patrimônio familiar, centralizando bens como imóveis, investimentos e participações societárias."
                  />
                  {" "}e{" "}
                  <Tooltip
                    term="family offices"
                    explanation="Estrutura privada que gerencia o patrimônio de famílias de alta renda, oferecendo serviços financeiros, jurídicos e de investimentos personalizados."
                  />.
                </p>

                <p className="text-gray-600 text-sm leading-relaxed hidden md:block">
                  Desenvolvemos um{" "}
                  <Tooltip
                    term="know-how"
                    explanation="Conhecimento prático e especializado adquirido através de experiência. O &quot;saber fazer&quot; que diferencia especialistas no mercado."
                  />
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
