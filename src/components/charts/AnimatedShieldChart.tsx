"use client";

import { useState } from "react";

export default function AnimatedShieldChart({ isVisible }: { isVisible: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-full h-full">
      <svg
        viewBox="0 0 200 140"
        className="w-full h-full cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <circle
          cx="85" cy="70" r={isHovered ? 52 : 48} fill="none" stroke="#B45309" strokeWidth="0.5" strokeDasharray="3 5"
          style={{ opacity: isVisible ? (isHovered ? 0.4 : 0.2) : 0, transition: "all 0.5s ease" }}
        />

        {[0, 1, 2].map((i) => {
          const offset = i * 6;
          return (
            <path
              key={i}
              d={`M85 ${18 + offset} L${120 - offset} ${30 + offset * 0.5} L${120 - offset} ${65 + offset * 0.3} C${120 - offset} ${90 - offset} 85 ${110 - offset * 1.5} 85 ${110 - offset * 1.5} C85 ${110 - offset * 1.5} ${50 + offset} ${90 - offset} ${50 + offset} ${65 + offset * 0.3} L${50 + offset} ${30 + offset * 0.5} Z`}
              fill="#B45309"
              fillOpacity={isHovered ? 0.08 + i * 0.06 : 0.05 + i * 0.04}
              stroke="#B45309" strokeWidth="0.5" strokeOpacity={isHovered ? 0.4 : 0.2}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? (isHovered ? `scale(${1.02 - i * 0.01})` : "scale(1)") : "scale(0.8)",
                transformOrigin: "85px 70px",
                transition: `all 0.5s ease ${0.1 + i * 0.08}s`,
              }}
            />
          );
        })}

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

        <path
          d="M77 58 L83 64 L95 52" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
          style={{ strokeDasharray: 30, strokeDashoffset: isVisible ? 0 : 30, transition: "stroke-dashoffset 0.5s ease 0.5s" }}
        />

        <g style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateX(0)" : "translateX(15px)", transition: "all 0.4s ease 0.6s" }}>
          <text x="150" y="42" fontSize="11" fill="#78350F" fontWeight="700" textAnchor="start">100%</text>
          <text x="150" y="53" fontSize="8" fill="#999" textAnchor="start">Segurança</text>
          <text x="150" y="75" fontSize="11" fill="#78350F" fontWeight="700" textAnchor="start">24/7</text>
          <text x="150" y="86" fontSize="8" fill="#999" textAnchor="start">Suporte</text>
          <text x="150" y="108" fontSize="11" fill="#78350F" fontWeight="700" textAnchor="start">0</text>
          <text x="150" y="119" fontSize="8" fill="#999" textAnchor="start">Riscos</text>
        </g>

        {[{ x: 25, y: 45 }, { x: 20, y: 85 }, { x: 30, y: 115 }].map((dot, i) => (
          <circle
            key={i} cx={dot.x} cy={dot.y} r={isHovered ? 3 : 2} fill="#B45309" fillOpacity="0.25"
            style={{ opacity: isVisible ? 1 : 0, transition: `all 0.4s ease ${0.7 + i * 0.1}s` }}
          />
        ))}
      </svg>
    </div>
  );
}
