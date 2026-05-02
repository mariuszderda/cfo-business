"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  children: React.ReactNode;
  /** Stacking order — pass incrementing values (10, 11, 12 …) */
  zIndex: number;
  /**
   * Mark the last sticky section so it never scales/fades out
   * (the footer slides in naturally below it).
   */
  isLast?: boolean;
}

/**
 * Sticky-stacking card.
 *
 * Desktop (md+): `position: sticky; top: 0` — each section sticks to the
 * viewport top while the next one slides up and covers it like a card.
 * As a section is being covered it gently scales to 0.94 and fades to 0.7,
 * reinforcing the "card going into the background" feel.
 *
 * Mobile: plain block — sticky stacking is uncomfortable on small screens.
 */
export default function StickySection({ children, zIndex, isLast = false }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  /**
   * scrollYProgress 0 → 1 maps to:
   *   0 = this section's top edge at viewport top (fully visible & stuck)
   *   1 = this section's bottom edge at viewport top (about to be fully covered)
   *
   * The animation window [0.5, 1] means the effect kicks in exactly when the
   * NEXT section starts entering from the bottom of the viewport.
   */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale   = useTransform(scrollYProgress, [0.5, 1], [1,   0.94]);
  const opacity = useTransform(scrollYProgress, [0.5, 1], [1,   0.7 ]);

  return (
    <div
      ref={ref}
      /*
       * md:sticky  — enables the effect only on desktop
       * min-h-screen — each card occupies at least one viewport height,
       *               giving the scroll engine enough "room" to drive the animation
       * data-scroll-target — anchor for Header navigation;
       *   Header scrolls to this wrapper's offsetTop (static layout position)
       *   instead of using scrollIntoView on the inner <section>, which breaks
       *   because sticky elements are always considered "in view" by the browser.
       */
      data-scroll-target
      className="relative md:sticky md:top-0 min-h-screen"
      style={{ zIndex }}
    >
      <motion.div
        style={
          isLast
            ? { transformOrigin: "50% 0" }
            : { scale, opacity, transformOrigin: "50% 0" }
        }
        className="min-h-screen w-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
