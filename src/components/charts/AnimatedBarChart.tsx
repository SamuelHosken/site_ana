"use client";

import { useState } from "react";

export default function AnimatedBarChart({ isVisible }: { isVisible: boolean }) {
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

        {bars.map((bar, i) => {
          const barCenterX = bar.x + 15;
          const barTopY = 115 - bar.height;
          const tooltipY = Math.max(barTopY - 35, 5);

          return (
            <g key={i}>
              <rect
                x={bar.x} y={25} width="30" height="90" fill="#fafafa" rx="4"
                style={{ opacity: isVisible ? 1 : 0, transition: `opacity 0.2s ease ${i * 0.03}s` }}
              />
              <rect
                x={bar.x} y={barTopY} width="30" height={bar.height} fill={bar.color} rx="4"
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
              <text
                x={barCenterX} y={barTopY - 5} fontSize="8" fill="#78350F" textAnchor="middle" fontWeight="600"
                style={{ opacity: isVisible && hoveredBar !== i ? 1 : 0, transition: "opacity 0.3s ease" }}
              >
                {bar.value}
              </text>
              <text
                x={barCenterX} y="128" fontSize="8"
                fill={hoveredBar === i ? "#78350F" : "#888"}
                textAnchor="middle"
                fontWeight={hoveredBar === i ? "600" : "400"}
                style={{ opacity: isVisible ? 1 : 0, transition: "all 0.3s ease" }}
              >
                {bar.label}
              </text>
              <g
                style={{
                  opacity: hoveredBar === i ? 1 : 0,
                  transform: `translate(0, ${hoveredBar === i ? 0 : 4}px)`,
                  transition: "all 0.25s ease",
                  pointerEvents: "none",
                }}
              >
                <rect x={barCenterX - 32} y={tooltipY} width="64" height="28" rx="4" fill="#1f2937" />
                <polygon points={`${barCenterX - 5},${tooltipY + 28} ${barCenterX + 5},${tooltipY + 28} ${barCenterX},${tooltipY + 34}`} fill="#1f2937" />
                <text x={barCenterX} y={tooltipY + 12} fontSize="7" fill="#9ca3af" textAnchor="middle">{bar.label}</text>
                <text x={barCenterX} y={tooltipY + 22} fontSize="9" fill="#fff" textAnchor="middle" fontWeight="600">{bar.value} a.a.</text>
              </g>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
