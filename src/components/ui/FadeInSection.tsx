"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
  /** Opóźnienie animacji w sekundach — używane do staggeru list */
  delay?: number;
  /** Przesunięcie startowe Y (domyślnie 40px) */
  yOffset?: number;
}

/**
 * Wrapper fade-in z dołu przy wejściu elementu w viewport.
 * Używany jako "use client" — opakuj nim sekcje server components.
 * - once: true → animuje się tylko raz
 * - duration: 0.6s, easing: easeOut
 * - stagger: przekaż `delay` (0.1 * index) dla list
 */
export default function FadeInSection({
  children,
  className,
  delay = 0,
  yOffset = 40,
}: FadeInSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
