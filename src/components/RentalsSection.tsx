"use client";

import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";
import { useMultiOnScreen } from "@/hooks/useMultiOnScreen";
import AnimatedLineChart from "./charts/AnimatedLineChart";
import AnimatedBarChart from "./charts/AnimatedBarChart";
import AnimatedContractChart from "./charts/AnimatedContractChart";
import AnimatedShieldChart from "./charts/AnimatedShieldChart";

export default function RentalsSection() {
  const { setRef, visible } = useMultiOnScreen(4, 0.4);

  const features = [
    {
      title: "Gestão estratégica de rentabilidade",
      description:
        "Tratamos o seu imóvel como um ativo financeiro. Realizamos estudos periódicos do valor do metro quadrado e entregamos relatórios semestrais para que você acompanhe a valorização do seu patrimônio ao longo do tempo.",
      chart: <AnimatedLineChart isVisible={visible[0]} />,
    },
    {
      title: "Consultoria personalizada de investimento",
      description:
        "Analisamos o seu objetivo com o imóvel, seja geração de renda, reserva de valor ou valorização patrimonial. Definimos uma estratégia sob medida, estabelecendo valores e condições de locação que maximizem a rentabilidade do seu investimento.",
      chart: <AnimatedBarChart isVisible={visible[1]} />,
    },
    {
      title: "Estratégia de reajuste e valorização contratual",
      description:
        "Estruturamos contratos com cláusulas pensadas para proteger e potencializar o seu patrimônio, com definição estratégica de índices de reajuste e mecanismos que buscam sempre a melhor atualização possível do aluguel em seu favor.",
      chart: <AnimatedContractChart isVisible={visible[2]} />,
    },
    {
      title: "Jurídico especializado integrado",
      description:
        "Contamos, em nosso ecossistema, com um time jurídico dedicado exclusivamente à gestão de locações. Isso garante contratos mais seguros, proteção patrimonial e decisões sempre alinhadas aos seus interesses. Mais segurança e tranquilidade.",
      chart: <AnimatedShieldChart isVisible={visible[3]} />,
    },
  ];

  return (
    <section className="py-16 px-5 md:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <ScrollReveal className="mb-10 sm:mb-12 md:mb-14">
          <SectionHeader
            badge="Gestão de Ativos Imobiliários em Aluguéis"
            title={<>Como maximizamos a{" "}<span className="font-bodoni text-primary">rentabilidade</span> do seu patrimônio?</>}
          />
        </ScrollReveal>

        {/* Features with Charts */}
        <div className="space-y-10 sm:space-y-12 md:space-y-14">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={setRef(index)}
              className={`group grid lg:grid-cols-2 gap-6 lg:gap-10 items-center`}
            >
              {/* Content */}
              <ScrollReveal
                animation={index % 2 === 0 ? "reveal-left" : "reveal-right"}
                delay={index * 50}
                className={index % 2 === 1 ? "lg:order-2" : ""}
              >
                <div className="relative">
                  <span className="absolute -top-3 -left-2 text-5xl sm:text-6xl font-bold text-stone-200/60 select-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="relative z-10 pt-4">
                    <h3 className="text-primary text-sm font-medium tracking-wide mb-2 uppercase group-hover:text-primary/80 transition-colors">
                      <span className="text-primary/50">/</span> {feature.title}
                    </h3>

                    <div className="h-[1px] bg-primary/20 mb-3 rounded-full overflow-hidden max-w-[180px]">
                      <div className="h-full w-0 bg-primary transition-all duration-500 ease-out group-hover:w-full" />
                    </div>

                    <p className="text-gray-600 leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Chart */}
              <ScrollReveal
                animation={index % 2 === 0 ? "reveal-right" : "reveal-left"}
                delay={index * 50 + 100}
                className={index % 2 === 1 ? "lg:order-1" : ""}
              >
                <div className="relative bg-gradient-to-br from-stone-50 to-white rounded-xl border border-stone-100 p-5 transition-all duration-300 group-hover:border-primary/20 group-hover:shadow-lg group-hover:shadow-primary/5">
                  <div className="h-[150px] md:h-[160px]">{feature.chart}</div>

                  <div
                    className={`absolute ${
                      index % 2 === 0 ? "bottom-0 right-0 rounded-br-xl" : "bottom-0 left-0 rounded-bl-xl"
                    } w-16 h-16 bg-gradient-to-tl from-primary/5 to-transparent -z-10`}
                  />
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
