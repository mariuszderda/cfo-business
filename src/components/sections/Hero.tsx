"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  /* Window scroll — hero zajmuje cały ekran, więc używamy globalnego scrollY */
  const { scrollY } = useScroll();

  /* Trzy blobsy na różnych "warstwach głębi" — każdy porusza się inaczej */
  const blobY1 = useTransform(scrollY, [0, 700], [0, -22]);
  const blobY2 = useTransform(scrollY, [0, 700], [0, -30]);
  const blobY3 = useTransform(scrollY, [0, 700], [0, -14]);
  const blobY4 = useTransform(scrollY, [0, 700], [0, -18]);
  const blobOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const photoY = useTransform(scrollY, [0, 700], [0, -10]);

  return (
    <section className="relative min-h-screen bg-white flex items-center">
      {/* Wrapper blobsów — overflow-hidden tylko tu, nie na sekcji */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>

      {/* ── Blobs paralaxowe w tle ── */}
      <motion.div
        aria-hidden
        style={{ y: blobY1, opacity: blobOpacity }}
        className="absolute top-20 right-[5%] w-72 h-72 rounded-full pointer-events-none"
      >
        <div className="w-full h-full rounded-full opacity-[0.06]" style={{ background: "#1E2228" }} />
      </motion.div>

      <motion.div
        aria-hidden
        style={{ y: blobY2, opacity: blobOpacity }}
        className="absolute bottom-20 right-[15%] w-40 h-40 rounded-full pointer-events-none"
      >
        <div className="w-full h-full rounded-full opacity-[0.10]" style={{ background: "#C8A96E" }} />
      </motion.div>

      <motion.div
        aria-hidden
        style={{ y: blobY3, opacity: blobOpacity }}
        className="absolute top-1/2 left-[5%] w-56 h-56 rounded-full pointer-events-none"
      >
        <div className="w-full h-full rounded-full opacity-[0.04]" style={{ background: "#1E2228" }} />
      </motion.div>

      {/* Dodatkowy mały złoty blob — górny lewy, szybki */}
      <motion.div
        aria-hidden
        style={{ y: blobY4, opacity: blobOpacity }}
        className="absolute top-32 left-[20%] w-20 h-20 rounded-full pointer-events-none"
      >
        <div className="w-full h-full rounded-full opacity-[0.06]" style={{ background: "#C8A96E" }} />
      </motion.div>

      </div>{/* /blobs wrapper */}

      {/* ── Treść ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-20 md:pt-32 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Lewa kolumna: tekst */}
          <div className="flex flex-col gap-6 order-2 md:order-1">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2"
            >
              <span className="h-0.5 w-8 bg-brand-accent" />
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
                Zewnętrzny Dyrektor Finansowy
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary leading-tight"
            >
              Prowadzisz firmę. Ale czy wiesz, co naprawdę dzieje się z Twoimi pieniędzmi?
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-lg"
            >
              Jestem zewnętrznym dyrektorem finansowym dla firm, które wyrosły z prowadzenia finansów &bdquo;na wyczucie&rdquo;.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <a
                href="#cta"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#cta")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-brand-accent text-brand-cream font-semibold text-base hover:bg-brand-accent-hover transition-colors duration-200 shadow-sm"
              >
                Porozmawiajmy o Twojej firmie →
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4 pt-4 border-t border-brand-border"
            >
              {[
                { value: "10–100 mln", label: "obrotów firm" },
                { value: "YouTube", label: "@DerdaAnaliza" },
                { value: "Bez etatu", label: "pełne zaangażowanie" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col">
                  <span className="text-sm font-bold text-brand-primary">{item.value}</span>
                  <span className="text-xs text-text-secondary">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Prawa kolumna: zdjęcie */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            {/* TODO: Wymienić na zdjęcie Adriana */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              <div
                className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-brand-accent/40"
                aria-hidden
              />
              {/* Subtelny parallax zdjęcia — wolniejszy niż tło */}
              <motion.div
                style={{ y: photoY }}
              >
                {/* Float loop na zdjęciu */}
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <Image
                    src="https://placehold.co/540x680/1E2228/C8A96E?text=Adrian+Derda"
                    alt="Adrian Derda — Zewnętrzny Dyrektor Finansowy"
                    width={540}
                    height={680}
                    priority
                    className="rounded-2xl object-cover shadow-2xl max-h-[60vh] md:max-h-[75vh] w-auto"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-3 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden
      >
        <span className="text-xs text-text-secondary tracking-widest uppercase">Przewiń</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-0.5 h-8 bg-brand-accent/50 rounded-full"
        />
      </motion.div>
    </section>
  );
}
