"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: "reveal" | "reveal-left" | "reveal-right" | "reveal-scale";
  delay?: number;
  threshold?: number;
}

// Singleton observer map: one observer per threshold value
const observerMap = new Map<number, IntersectionObserver>();

function getObserver(threshold: number): IntersectionObserver {
  if (observerMap.has(threshold)) {
    return observerMap.get(threshold)!;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold, rootMargin: "0px 0px -50px 0px" }
  );

  observerMap.set(threshold, observer);
  return observer;
}

export default function ScrollReveal({
  children,
  className = "",
  animation = "reveal",
  delay = 0,
  threshold = 0.1
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = getObserver(threshold);
    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold]);

  const delayClass = delay > 0 ? `delay-${delay}` : "";

  return (
    <div ref={ref} className={`${animation} ${delayClass} ${className}`}>
      {children}
    </div>
  );
}
