"use client";

import { useRef, useState, useLayoutEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxYProps {
  children: React.ReactNode;
  /**
   * Ile pikseli element przesuwa się przez cały czas gdy sekcja
   * przechodzi przez viewport. Ujemna = wolniej niż scroll (unosi się w górę).
   * Default: -60
   */
  speed?: number;
  className?: string;
}

/**
 * Parallax oparty wyłącznie na window.scrollY — bez target ref,
 * bez scroll-container ambiguity. Bezpieczny w Next.js 15 App Router.
 */
export default function ParallaxY({
  children,
  speed = -60,
  className,
}: ParallaxYProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [range, setRange] = useState<[number, number]>([0, 1000]);

  /* Oblicz pozycję elementu w dokumencie po montażu */
  useLayoutEffect(() => {
    const update = () => {
      if (!ref.current) return;
      const top = ref.current.getBoundingClientRect().top + window.scrollY;
      const height = ref.current.offsetHeight;
      const vh = window.innerHeight;
      /* Parallax aktywny gdy element jest w oknie ±1 viewport */
      setRange([top - vh, top + height + vh]);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const { scrollY } = useScroll();
  /* Od wejścia do wyjścia z viewportu: przesuń o `speed` px */
  const y = useTransform(scrollY, range, [speed * -0.5, speed * 0.5]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
