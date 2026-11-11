"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PlaySquare, Briefcase, Users } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import ParallaxY from "@/components/ui/ParallaxY";
const CREDIBILITY = [
  {
    icon: PlaySquare,
    value: "@DerdaAnaliza",
    label: "Kanał YouTube",
    href: "https://youtube.com/@DerdaAnaliza",
  },
  {
    icon: Briefcase,
    value: "10+ lat",
    label: "w finansach korporacyjnych", // TODO: uzupełnić
  },
  {
    icon: Users,
    value: "100M+ zł",
    label: "Projekty CAPEX", // TODO: uzupełnić
  },
];

const PARAGRAPHS = [
  "Nazywam się Adrian Derda. Pracuję w finansach od ponad 10 lat, głównie w dużych grupach z branży górniczej, hutniczej i energetycznej. Robiłem budżety, raporty dla zarządów i kontroling inwestycji, w tym projektów za ponad 100 mln zł.",
  "W dużej firmie wszystko jest policzone: jest MPK, marża na każdym produkcie i prognoza gotówki. W mniejszych firmach często tego brakuje, chociaż decyzje są tak samo ważne. Chcę to zmieniać, krok po kroku, z firmami, które naprawdę tego potrzebują.",
  <>Na YouTube <a href="https://youtube.com/@DerdaAnaliza" target="_blank" rel="noopener noreferrer">(@DerdaAnaliza)</a> pokazuję, jak to robić u siebie. Na przykładach, bez teorii dla teorii.</>,
];

/*                        */



export default function About() {
  /* Parallax zdjęcia — element-relative, bezpieczny bo target = sekcja */
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], ["12px", "-12px"]);
  const frameY = useTransform(scrollYProgress, [0, 1], ["6px", "-6px"]);

  return (
    <section id="about" ref={sectionRef} className="relative bg-white py-20 md:py-28">

      {/* Dekoracyjne blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <ParallaxY speed={-16} className="absolute top-[-3rem] right-[-3rem] w-64 h-64">
          <div className="w-full h-full rounded-full opacity-[0.05]" style={{ background: "#C8A96E" }} />
        </ParallaxY>
        <ParallaxY speed={-12} className="absolute bottom-[-2rem] left-[-3rem] w-52 h-52">
          <div className="w-full h-full rounded-full opacity-[0.04]" style={{ background: "#1E2228" }} />
        </ParallaxY>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Lewa kolumna: tekst ── */}
          <div className="flex flex-col gap-6">
            <FadeInSection>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="h-0.5 w-8 bg-brand-accent" />
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
                  O mnie
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-primary leading-tight">
                Liczę, zamiast robić slajdy.
              </h2>
            </FadeInSection>

            {PARAGRAPHS.map((text, i) => (
              <FadeInSection key={i} delay={0.15 + i * 0.1}>
                <p className="text-text-secondary leading-relaxed text-base">{text}</p>
              </FadeInSection>
            ))}

            <FadeInSection delay={0.5}>
              <div className="flex flex-wrap gap-6 pt-6 border-t border-brand-border mt-2">
                {CREDIBILITY.map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-brand-cream flex items-center justify-center flex-shrink-0">
                      <item.icon size={16} className="text-brand-primary" />
                    </div>
                    <div className="flex flex-col leading-tight">
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-bold text-brand-primary hover:text-brand-accent transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-sm font-bold text-brand-primary">{item.value}</span>
                      )}
                      <span className="text-xs text-text-secondary">{item.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>

          {/* ── Prawa kolumna: zdjęcie z parallax ── */}
          <FadeInSection delay={0.2} className="flex justify-center md:justify-end">
            <div className="relative">
              {/* Złota ramka — porusza się niezależnie */}
              <motion.div
                style={{ y: frameY }}
                className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-brand-accent/30 pointer-events-none"
                aria-hidden
              />
              {/* Zdjęcie — wolniejsze od scrolla */}
              <motion.div style={{ y: photoY }} className="relative z-10">
                {/* TODO: Wymienić na zdjęcie Adriana */}
                <Image
                  src="/Adrian-Derda-Photo-2.jpg"
                  alt="Adrian Derda — Controlling i finanse dla firm"
                  width={480}
                  height={600}
                  className="rounded-2xl object-cover shadow-xl max-h-[70vh] w-auto"
                />
              </motion.div>
            </div>
          </FadeInSection>

        </div>
      </div>
    </section>
  );
}
