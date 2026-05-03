"use client";

import { useRef, useState, useLayoutEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  children: React.ReactNode;
  /** Stacking order — pass incrementing values (10, 11, 12 …) */
  zIndex: number;
  /** Last sticky section — no scale animation */
  isLast?: boolean;
}

/**
 * Sticky-stacking card — GSAP-style "bottom bottom" pin.
 *
 * Sections enter the viewport normally from below.
 * The card PINS when its bottom edge touches the viewport bottom
 * (the moment the whole card is first fully in view).
 * The next card then slides up from below while this one stays put.
 *
 * Three modes chosen automatically by content height:
 *
 *   fit      (content ≤ 100vh)    → sticky top: 0
 *   overflow (content 100–125vh)  → sticky top: -(overflow px)
 *                                    pins with bottom at viewport bottom
 *   tall     (content > 125vh)    → no sticky, plain scroll
 *                                    all content always accessible
 *
 * Mobile (below md): always plain block.
 */
export default function StickySection({ children, zIndex, isLast = false }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const [canStick,   setCanStick]   = useState(true);
  const [stickyTop,  setStickyTop]  = useState(0);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const overflow = el.scrollHeight - window.innerHeight;

      if (overflow > window.innerHeight * 0.25) {
        // More than 25% taller than viewport — disable sticky so all
        // content is accessible via normal scroll.
        setCanStick(false);
        setStickyTop(0);
      } else if (overflow > 0) {
        // Slightly overflows — use negative top so the card pins the moment
        // its BOTTOM hits the viewport bottom (GSAP "start: bottom bottom").
        setCanStick(true);
        setStickyTop(-overflow);
      } else {
        // Fits perfectly — standard top: 0 pin.
        setCanStick(true);
        setStickyTop(0);
      }
    };

    update();

    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.94]);

  return (
    <div
      ref={ref}
      data-scroll-target
      className={`relative ${canStick ? "md:sticky" : ""}`}
      style={{
        zIndex,
        top: canStick ? stickyTop : undefined,
      }}
    >
      <motion.div
        style={
          isLast || !canStick
            ? { transformOrigin: "50% 0" }
            : { scale, transformOrigin: "50% 0" }
        }
        className="min-h-screen w-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
