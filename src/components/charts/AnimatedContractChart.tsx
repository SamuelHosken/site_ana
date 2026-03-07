"use client";

import { useState } from "react";

export default function AnimatedContractChart({ isVisible }: { isVisible: boolean }) {
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

        <rect
          x="62" y="20" width="80" height="105" rx="4" fill="#e8e8e8"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? (isHovered ? "translate(4px, 4px)" : "translate(3px, 3px)") : "translate(0, 0)",
            transition: "all 0.4s ease",
          }}
        />

        <rect
          x="55" y="15" width="80" height="105" rx="4" fill="#fff" stroke="#e5e5e5" strokeWidth="1"
          filter="url(#docShadow)"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? (isHovered ? "scale(1.03)" : "scale(1)") : "scale(0.95)",
            transformOrigin: "95px 67px",
            transition: "all 0.4s ease",
          }}
        />

        <rect
          x="65" y="28" width={isHovered ? 60 : 50} height="6" rx="2" fill="#B45309"
          style={{ opacity: isVisible ? 1 : 0, transition: "all 0.4s ease 0.15s" }}
        />

        {[0, 1, 2, 3, 4].map((i) => (
          <rect
            key={i}
            x="65" y={45 + i * 14}
            width={isHovered ? 55 - i * 5 : 45 - i * 5} height="4" rx="1.5"
            fill={isHovered ? "#B45309" : "#e8e8e8"}
            fillOpacity={isHovered ? 0.3 + i * 0.1 : 1}
            style={{ opacity: isVisible ? 1 : 0, transition: `all 0.35s ease ${0.2 + i * 0.05}s` }}
          />
        ))}

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
            d="M113 100 L118 105 L128 95" fill="none" stroke="#fff" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round"
            style={{ strokeDasharray: 25, strokeDashoffset: isVisible ? 0 : 25, transition: "stroke-dashoffset 0.4s ease 0.5s" }}
          />
        </g>

        <g
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? (isHovered ? "translateY(-3px)" : "translateY(0)") : "translateY(10px)",
            transition: "all 0.4s ease 0.4s",
          }}
        >
          <rect x="140" y="30" width="38" height="18" rx="4" fill={isHovered ? "#B45309" : "#D97706"} style={{ transition: "fill 0.3s ease" }} />
          <text x="159" y="42" fontSize="9" fill="#fff" textAnchor="middle" fontWeight="600">+12.5%</text>
        </g>

        <circle
          cx="75" cy="100" r={isHovered ? 10 : 8} fill="none" stroke="#D97706" strokeWidth="1.5" strokeDasharray="3 2"
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
