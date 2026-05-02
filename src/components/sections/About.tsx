"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PlaySquare, Briefcase, Users } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import ParallaxY from "@/components/ui/ParallaxY";

const PARAGRAPHS = [
  "Przez lata pracowałem z finansami firm — od analizy danych, przez budowanie modeli, po controlling i raportowanie zarządcze. Widziałem, co się dzieje, gdy właściciel firmy nie ma nikogo, kto przełoży liczby na decyzje.",
  "Dlatego robię to, co robię: wchodzę do Twojej firmy jako zewnętrzny dyrektor finansowy — bez etatu, bez biurka, ale z pełnym zaangażowaniem. Mówię językiem liczb, ale tłumaczę je na Twój język: co kupić, co zmienić, skąd wziąć, czego unikać.",
  "Prowadzę też kanał na YouTube, gdzie uczę analizy danych i controllingu — bo wierzę, że finansami można zarządzać prosto, jeśli ktoś pokaże jak.",
];

const CREDIBILITY = [
  {
    icon: PlaySquare,
    value: "@DerdaAnaliza",
    label: "Kanał YouTube",
    href: "https://youtube.com/@DerdaAnaliza",
  },
  {
    icon: Briefcase,
    value: "X lat",
    label: "w finansach korporacyjnych", // TODO: uzupełnić
  },
  {
    icon: Users,
    value: "X firm",
    label: "we współpracy", // TODO: uzupełnić
  },
];

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
          <div className="w-full h-full rounded-full opacity-[0.05]" style={{ background: "#C9A961" }} />
        </ParallaxY>
        <ParallaxY speed={-12} className="absolute bottom-[-2rem] left-[-3rem] w-52 h-52">
          <div className="w-full h-full rounded-full opacity-[0.04]" style={{ background: "#0F2C4A" }} />
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
                Nie jestem kolejnym konsultantem z teczką pełną slajdów.
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
                  src="https://placehold.co/480x600/0F2C4A/C9A961?text=Adrian+Derda"
                  alt="Adrian Derda — Zewnętrzny Dyrektor Finansowy"
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
