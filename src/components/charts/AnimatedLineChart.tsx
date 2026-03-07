"use client";

import { useState } from "react";

export default function AnimatedLineChart({ isVisible }: { isVisible: boolean }) {
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

        <defs>
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#B45309" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#B45309" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          d={areaD}
          fill="url(#lineGradient1)"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.6s ease 0.3s",
          }}
        />

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
            <g
              style={{
                opacity: hoveredPoint === i ? 1 : 0,
                transform: `translate(0, ${hoveredPoint === i ? 0 : 4}px)`,
                transition: "all 0.25s ease",
                pointerEvents: "none",
              }}
            >
              <rect x={p.x - 32} y={p.y - 42} width="64" height="32" rx="4" fill="#1f2937" />
              <polygon points={`${p.x - 5},${p.y - 10} ${p.x + 5},${p.y - 10} ${p.x},${p.y - 4}`} fill="#1f2937" />
              <text x={p.x} y={p.y - 28} fontSize="7" fill="#9ca3af" textAnchor="middle">{p.month}</text>
              <text x={p.x} y={p.y - 17} fontSize="9" fill="#fff" textAnchor="middle" fontWeight="600">{p.value}</text>
            </g>
          </g>
        ))}

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

        <g
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translate(0, 0)" : "translate(-10px, 10px)",
            transition: "all 0.4s ease 1.1s",
          }}
        >
          <rect x="235" y="8" width="42" height="18" rx="4" fill="#B45309" />
          <text x="256" y="20" fontSize="9" fill="#fff" textAnchor="middle" fontWeight="600">+34%</text>
        </g>
      </svg>
    </div>
  );
}
