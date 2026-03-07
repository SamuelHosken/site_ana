"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export function useMultiOnScreen(count: number, threshold = 0.4) {
  const refs = useRef<(HTMLDivElement | null)[]>(new Array(count).fill(null));
  const [visible, setVisible] = useState<boolean[]>(new Array(count).fill(false));

  const setRef = useCallback((index: number) => (el: HTMLDivElement | null) => {
    refs.current[index] = el;
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = refs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setVisible((prev) => {
                const next = [...prev];
                next[index] = true;
                return next;
              });
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold }
    );

    refs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [threshold]);

  return { setRef, visible };
}
