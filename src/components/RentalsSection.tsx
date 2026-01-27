"use client";

import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

// Hook to detect visibility
function useOnScreen(ref: React.RefObject<HTMLElement | null>, threshold = 0.3) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return isVisible;
}

// Animated Line Chart - Valorização ao longo do tempo
function AnimatedLineChart({ isVisible }: { isVisible: boolean }) {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  const viewBoxWidth = 295;
  const viewBoxHeight = 135;

  const points = [
    { x: 25, y: 105, value: "R$ 850k", month: "Jan" },
    { x: 60, y: 92, value: "R$ 920k", month: "Fev" },
    { x: 95, y: 97, value: "R$ 890k", month: "Mar" },
    { x: 130, y: 75, value: "R$ 1.05M", month: "Abr" },
    { x: 165, y: 80, value: "R$ 1.02M", month: "Mai" },
    { x: 200, y: 58, value: "R$ 1.18M", month: "Jun" },
    { x: 235, y: 63, value: "R$ 1.14M", month: "Jul" },
    { x: 270, y: 42, value: "R$ 1.32M", month: "Ago" },
  ];

  const smoothPathD = points
    .map((p, i) => {
      if (i === 0) return `M ${p.x} ${p.y}`;
      const prev = points[i - 1];
      const cpX = (prev.x + p.x) / 2;
      return `C ${cpX} ${prev.y}, ${cpX} ${p.y}, ${p.x} ${p.y}`;
    })
    .join(" ");

  const areaD = `${smoothPathD} L 270 120 L 25 120 Z`;

  return (
    <div className="relative w-full h-full">
      <svg viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`} className="w-full h-full">
        {/* Grid lines */}
        {[0, 1, 2, 3].map((i) => (
          <line
            key={`h-${i}`}
            x1="25"
            y1={30 + i * 30}
            x2="275"
            y2={30 + i * 30}
            stroke="#f0f0f0"
            strokeWidth="0.5"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: `opacity 0.3s ease ${i * 0.05}s`,
            }}
          />
        ))}

        {/* Gradient fill */}
        <defs>
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#B45309" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#B45309" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Area fill */}
        <path
          d={areaD}
          fill="url(#lineGradient1)"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.6s ease 0.3s",
          }}
        />

        {/* Main line */}
        <path
          d={smoothPathD}
          fill="none"
          stroke="#B45309"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: 500,
            strokeDashoffset: isVisible ? 0 : 500,
            transition: "stroke-dashoffset 1.2s ease-out 0.2s",
          }}
        />

        {/* Points */}
        {points.map((p, i) => (
          <g key={i}>
            <circle
              cx={p.x}
              cy={p.y}
              r={hoveredPoint === i ? 6 : 4}
              fill="#fff"
              stroke="#B45309"
              strokeWidth="2"
              style={{
                opacity: isVisible ? 1 : 0,
                transition: "all 0.2s ease",
                transitionDelay: isVisible ? `${0.5 + i * 0.06}s` : "0s",
                cursor: "pointer",
              }}
              onMouseEnter={() => setHoveredPoint(i)}
              onMouseLeave={() => setHoveredPoint(null)}
            />
            {/* Tooltip inside SVG */}
            <g
              style={{
                opacity: hoveredPoint === i ? 1 : 0,
                transform: `translate(0, ${hoveredPoint === i ? 0 : 4}px)`,
                transition: "all 0.25s ease",
                pointerEvents: "none",
              }}
            >
              <rect
                x={p.x - 32}
                y={p.y - 42}
                width="64"
                height="32"
                rx="4"
                fill="#1f2937"
              />
              <polygon
                points={`${p.x - 5},${p.y - 10} ${p.x + 5},${p.y - 10} ${p.x},${p.y - 4}`}
                fill="#1f2937"
              />
              <text x={p.x} y={p.y - 28} fontSize="7" fill="#9ca3af" textAnchor="middle">
                {p.month}
              </text>
              <text x={p.x} y={p.y - 17} fontSize="9" fill="#fff" textAnchor="middle" fontWeight="600">
                {p.value}
              </text>
            </g>
          </g>
        ))}

        {/* X axis labels */}
        {points.map((p, i) => (
          <text
            key={`x-${i}`}
            x={p.x}
            y="132"
            fontSize="8"
            fill="#a0a0a0"
            textAnchor="middle"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: `opacity 0.3s ease ${0.6 + i * 0.03}s`,
            }}
          >
            {p.month}
          </text>
        ))}

        {/* Growth indicator */}
        <g
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translate(0, 0)" : "translate(-10px, 10px)",
            transition: "all 0.4s ease 1.1s",
          }}
        >
          <rect x="235" y="8" width="42" height="18" rx="4" fill="#B45309" />
          <text x="256" y="20" fontSize="9" fill="#fff" textAnchor="middle" fontWeight="600">
            +34%
          </text>
        </g>
      </svg>
    </div>
  );
}

// Animated Bar Chart - Consultoria de investimento
function AnimatedBarChart({ isVisible }: { isVisible: boolean }) {
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  const bars = [
    { x: 35, height: 30, label: "Renda", value: "6.2%", color: "#D97706" },
    { x: 80, height: 50, label: "Reserva", value: "8.5%", color: "#B45309" },
    { x: 125, height: 70, label: "Valorização", value: "12.3%", color: "#92400E" },
    { x: 170, height: 80, label: "Total", value: "15.8%", color: "#78350F" },
  ];

  return (
    <div className="relative w-full h-full">
      <svg viewBox="0 0 220 135" className="w-full h-full">
        {/* Horizontal reference lines */}
        {[0, 1, 2, 3].map((i) => (
          <line
            key={`ref-${i}`}
            x1="30"
            y1={25 + i * 25}
            x2="200"
            y2={25 + i * 25}
            stroke="#f0f0f0"
            strokeWidth="0.5"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: `opacity 0.2s ease ${i * 0.03}s`,
            }}
          />
        ))}

        {/* Bars */}
        {bars.map((bar, i) => {
          const barCenterX = bar.x + 15;
          const barTopY = 115 - bar.height;
          const tooltipY = Math.max(barTopY - 35, 5);

          return (
            <g key={i}>
              {/* Bar background */}
              <rect
                x={bar.x}
                y={25}
                width="30"
                height="90"
                fill="#fafafa"
                rx="4"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transition: `opacity 0.2s ease ${i * 0.03}s`,
                }}
              />

              {/* Animated bar */}
              <rect
                x={bar.x}
                y={barTopY}
                width="30"
                height={bar.height}
                fill={bar.color}
                rx="4"
                className="cursor-pointer"
                style={{
                  transform: isVisible ? "scaleY(1)" : "scaleY(0)",
                  transformOrigin: `${barCenterX}px 115px`,
                  transition: `transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.15 + i * 0.1}s, opacity 0.3s ease`,
                  opacity: hoveredBar !== null && hoveredBar !== i ? 0.4 : 1,
                }}
                onMouseEnter={() => setHoveredBar(i)}
                onMouseLeave={() => setHoveredBar(null)}
              />

              {/* Value on top of bar - hide when hovered */}
              <text
                x={barCenterX}
                y={barTopY - 5}
                fontSize="8"
                fill="#78350F"
                textAnchor="middle"
                fontWeight="600"
                style={{
                  opacity: isVisible && hoveredBar !== i ? 1 : 0,
                  transition: "opacity 0.3s ease",
                }}
              >
                {bar.value}
              </text>

              {/* Labels */}
              <text
                x={barCenterX}
                y="128"
                fontSize="8"
                fill={hoveredBar === i ? "#78350F" : "#888"}
                textAnchor="middle"
                fontWeight={hoveredBar === i ? "600" : "400"}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transition: "all 0.3s ease",
                }}
              >
                {bar.label}
              </text>

              {/* Tooltip inside SVG */}
              <g
                style={{
                  opacity: hoveredBar === i ? 1 : 0,
                  transform: `translate(0, ${hoveredBar === i ? 0 : 4}px)`,
                  transition: "all 0.25s ease",
                  pointerEvents: "none",
                }}
              >
                <rect
                  x={barCenterX - 32}
                  y={tooltipY}
                  width="64"
                  height="28"
                  rx="4"
                  fill="#1f2937"
                />
                <polygon
                  points={`${barCenterX - 5},${tooltipY + 28} ${barCenterX + 5},${tooltipY + 28} ${barCenterX},${tooltipY + 34}`}
                  fill="#1f2937"
                />
                <text x={barCenterX} y={tooltipY + 12} fontSize="7" fill="#9ca3af" textAnchor="middle">
                  {bar.label}
                </text>
                <text x={barCenterX} y={tooltipY + 22} fontSize="9" fill="#fff" textAnchor="middle" fontWeight="600">
                  {bar.value} a.a.
                </text>
              </g>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

// Animated Contract/Document Chart - Reajuste contratual
function AnimatedContractChart({ isVisible }: { isVisible: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-full h-full">
      <svg
        viewBox="0 0 200 140"
        className="w-full h-full cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <defs>
          <filter id="docShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.08" />
          </filter>
        </defs>

        {/* Document shadow/back page */}
        <rect
          x="62"
          y="20"
          width="80"
          height="105"
          rx="4"
          fill="#e8e8e8"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? (isHovered ? "translate(4px, 4px)" : "translate(3px, 3px)") : "translate(0, 0)",
            transition: "all 0.4s ease",
          }}
        />

        {/* Main document */}
        <rect
          x="55"
          y="15"
          width="80"
          height="105"
          rx="4"
          fill="#fff"
          stroke="#e5e5e5"
          strokeWidth="1"
          filter="url(#docShadow)"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? (isHovered ? "scale(1.03)" : "scale(1)") : "scale(0.95)",
            transformOrigin: "95px 67px",
            transition: "all 0.4s ease",
          }}
        />

        {/* Document header line */}
        <rect
          x="65"
          y="28"
          width={isHovered ? 60 : 50}
          height="6"
          rx="2"
          fill="#B45309"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "all 0.4s ease 0.15s",
          }}
        />

        {/* Document content lines */}
        {[0, 1, 2, 3, 4].map((i) => (
          <rect
            key={i}
            x="65"
            y={45 + i * 14}
            width={isHovered ? 55 - i * 5 : 45 - i * 5}
            height="4"
            rx="1.5"
            fill={isHovered ? "#B45309" : "#e8e8e8"}
            fillOpacity={isHovered ? 0.3 + i * 0.1 : 1}
            style={{
              opacity: isVisible ? 1 : 0,
              transition: `all 0.35s ease ${0.2 + i * 0.05}s`,
            }}
          />
        ))}

        {/* Check badge */}
        <g
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? (isHovered ? "scale(1.15)" : "scale(1)") : "scale(0)",
            transformOrigin: "120px 100px",
            transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s",
          }}
        >
          <circle cx="120" cy="100" r="14" fill="#B45309" />
          <path
            d="M113 100 L118 105 L128 95"
            fill="none"
            stroke="#fff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              strokeDasharray: 25,
              strokeDashoffset: isVisible ? 0 : 25,
              transition: "stroke-dashoffset 0.4s ease 0.5s",
            }}
          />
        </g>

        {/* Percentage badge */}
        <g
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? (isHovered ? "translateY(-3px)" : "translateY(0)") : "translateY(10px)",
            transition: "all 0.4s ease 0.4s",
          }}
        >
          <rect
            x="140"
            y="30"
            width="38"
            height="18"
            rx="4"
            fill={isHovered ? "#B45309" : "#D97706"}
            style={{ transition: "fill 0.3s ease" }}
          />
          <text x="159" y="42" fontSize="9" fill="#fff" textAnchor="middle" fontWeight="600">
            +12.5%
          </text>
        </g>

        {/* Decorative seal */}
        <circle
          cx="75"
          cy="100"
          r={isHovered ? 10 : 8}
          fill="none"
          stroke="#D97706"
          strokeWidth="1.5"
          strokeDasharray="3 2"
          style={{
            opacity: isVisible ? 0.5 : 0,
            transform: isHovered ? "rotate(180deg)" : "rotate(0deg)",
            transformOrigin: "75px 100px",
            transition: "all 0.6s ease",
          }}
        />
      </svg>
    </div>
  );
}

// Animated Shield/Security Chart - Jurídico especializado
function AnimatedShieldChart({ isVisible }: { isVisible: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-full h-full">
      <svg
        viewBox="0 0 200 140"
        className="w-full h-full cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Outer glow ring */}
        <circle
          cx="85"
          cy="70"
          r={isHovered ? 52 : 48}
          fill="none"
          stroke="#B45309"
          strokeWidth="0.5"
          strokeDasharray="3 5"
          style={{
            opacity: isVisible ? (isHovered ? 0.4 : 0.2) : 0,
            transition: "all 0.5s ease",
          }}
        />

        {/* Shield layers */}
        {[0, 1, 2].map((i) => {
          const offset = i * 6;
          return (
            <path
              key={i}
              d={`M85 ${18 + offset} L${120 - offset} ${30 + offset * 0.5} L${120 - offset} ${65 + offset * 0.3} C${120 - offset} ${90 - offset} 85 ${110 - offset * 1.5} 85 ${110 - offset * 1.5} C85 ${110 - offset * 1.5} ${50 + offset} ${90 - offset} ${50 + offset} ${65 + offset * 0.3} L${50 + offset} ${30 + offset * 0.5} Z`}
              fill="#B45309"
              fillOpacity={isHovered ? 0.08 + i * 0.06 : 0.05 + i * 0.04}
              stroke="#B45309"
              strokeWidth="0.5"
              strokeOpacity={isHovered ? 0.4 : 0.2}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? isHovered
                    ? `scale(${1.02 - i * 0.01})`
                    : "scale(1)"
                  : "scale(0.8)",
                transformOrigin: "85px 70px",
                transition: `all 0.5s ease ${0.1 + i * 0.08}s`,
              }}
            />
          );
        })}

        {/* Central shield */}
        <path
          d="M85 35 L103 43 L103 60 C103 75 85 87 85 87 C85 87 67 75 67 60 L67 43 Z"
          fill="#B45309"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? (isHovered ? "scale(1.05)" : "scale(1)") : "scale(0)",
            transformOrigin: "85px 61px",
            transition: "all 0.5s ease 0.3s",
          }}
        />

        {/* Check mark */}
        <path
          d="M77 58 L83 64 L95 52"
          fill="none"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: 30,
            strokeDashoffset: isVisible ? 0 : 30,
            transition: "stroke-dashoffset 0.5s ease 0.5s",
          }}
        />

        {/* Stats - aligned properly */}
        <g
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(15px)",
            transition: "all 0.4s ease 0.6s",
          }}
        >
          {/* Stat 1 */}
          <text x="150" y="42" fontSize="11" fill="#78350F" fontWeight="700" textAnchor="start">
            100%
          </text>
          <text x="150" y="53" fontSize="8" fill="#999" textAnchor="start">
            Segurança
          </text>

          {/* Stat 2 */}
          <text x="150" y="75" fontSize="11" fill="#78350F" fontWeight="700" textAnchor="start">
            24/7
          </text>
          <text x="150" y="86" fontSize="8" fill="#999" textAnchor="start">
            Suporte
          </text>

          {/* Stat 3 */}
          <text x="150" y="108" fontSize="11" fill="#78350F" fontWeight="700" textAnchor="start">
            0
          </text>
          <text x="150" y="119" fontSize="8" fill="#999" textAnchor="start">
            Riscos
          </text>
        </g>

        {/* Small decorative dots */}
        {[
          { x: 25, y: 45 },
          { x: 20, y: 85 },
          { x: 30, y: 115 },
        ].map((dot, i) => (
          <circle
            key={i}
            cx={dot.x}
            cy={dot.y}
            r={isHovered ? 3 : 2}
            fill="#B45309"
            fillOpacity="0.25"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: `all 0.4s ease ${0.7 + i * 0.1}s`,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export default function RentalsSection() {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const ref4 = useRef<HTMLDivElement>(null);

  const isVisible1 = useOnScreen(ref1, 0.4);
  const isVisible2 = useOnScreen(ref2, 0.4);
  const isVisible3 = useOnScreen(ref3, 0.4);
  const isVisible4 = useOnScreen(ref4, 0.4);

  const features = [
    {
      ref: ref1,
      isVisible: isVisible1,
      title: "Gestão estratégica de rentabilidade",
      description:
        "Tratamos o seu imóvel como um ativo financeiro. Realizamos estudos periódicos do valor do metro quadrado e entregamos relatórios semestrais para que você acompanhe a valorização do seu patrimônio ao longo do tempo.",
      chart: <AnimatedLineChart isVisible={isVisible1} />,
    },
    {
      ref: ref2,
      isVisible: isVisible2,
      title: "Consultoria personalizada de investimento",
      description:
        "Analisamos o seu objetivo com o imóvel, seja geração de renda, reserva de valor ou valorização patrimonial. Definimos uma estratégia sob medida, estabelecendo valores e condições de locação que maximizem a rentabilidade do seu investimento.",
      chart: <AnimatedBarChart isVisible={isVisible2} />,
    },
    {
      ref: ref3,
      isVisible: isVisible3,
      title: "Estratégia de reajuste e valorização contratual",
      description:
        "Estruturamos contratos com cláusulas pensadas para proteger e potencializar o seu patrimônio, com definição estratégica de índices de reajuste e mecanismos que buscam sempre a melhor atualização possível do aluguel em seu favor.",
      chart: <AnimatedContractChart isVisible={isVisible3} />,
    },
    {
      ref: ref4,
      isVisible: isVisible4,
      title: "Jurídico especializado integrado",
      description:
        "Contamos, em nosso ecossistema, com um time jurídico dedicado exclusivamente à gestão de locações. Isso garante contratos mais seguros, proteção patrimonial e decisões sempre alinhadas aos seus interesses. Mais segurança e tranquilidade.",
      chart: <AnimatedShieldChart isVisible={isVisible4} />,
    },
  ];

  return (
    <section className="py-14 sm:py-12 md:py-16 px-4 md:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <ScrollReveal className="mb-10 sm:mb-12 md:mb-14">
          <div className="group">
            <span className="inline-block text-primary text-xs font-medium tracking-widest uppercase mb-3">
              Gestão de Ativos Imobiliários em Aluguéis
            </span>

            <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl text-gray-800 tracking-tight mb-2">
              Como maximizamos a{" "}
              <span className="font-bodoni text-primary">rentabilidade</span> do
              seu patrimônio?
            </h2>

            <div className="h-[2px] w-20 sm:w-20 bg-primary/20 rounded-full overflow-hidden">
              <div className="h-full w-0 bg-primary transition-all duration-700 ease-out group-hover:w-full" />
            </div>
          </div>
        </ScrollReveal>

        {/* Features with Charts */}
        <div className="space-y-10 sm:space-y-12 md:space-y-14">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={feature.ref}
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
                <div className="relative bg-gradient-to-br from-stone-50 to-white rounded-xl border border-stone-100 p-4 sm:p-5 transition-all duration-300 group-hover:border-primary/20 group-hover:shadow-lg group-hover:shadow-primary/5">
                  <div className="h-[140px] sm:h-[160px]">{feature.chart}</div>

                  {/* Subtle corner accent */}
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
