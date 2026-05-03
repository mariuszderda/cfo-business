"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import ParallaxY from "@/components/ui/ParallaxY";

const PLANS = [
  {
    name: "START",
    tagline: "Dla firm stawiających pierwsze kroki z CFO",
    price: "od X XXX zł netto / miesiąc", // TODO: Adrian uzupełnia cenę
    features: [
      "Diagnoza finansowa",
      "Miesięczny raport zarządczy",
      "1 spotkanie / miesiąc",
      "Konsultacje e-mail",
    ],
    featured: false,
  },
  {
    name: "STANDARD",
    tagline: "Dla rozwijających się firm potrzebujących regularnego wsparcia",
    price: "od X XXX zł netto / miesiąc", // TODO: Adrian uzupełnia cenę
    badge: "⭐ Najczęściej wybierany",
    features: [
      "Wszystko ze START",
      "Budżetowanie i prognozowanie",
      "Analiza rentowności",
      "2 spotkania / miesiąc",
      "Wsparcie w negocjacjach z bankiem",
    ],
    featured: true,
  },
  {
    name: "PREMIUM",
    tagline: "Pełna obecność CFO w firmie",
    price: "od X XXX zł netto / miesiąc", // TODO: Adrian uzupełnia cenę
    features: [
      "Wszystko ze STANDARD",
      "Controlling operacyjny",
      "Nieograniczone konsultacje",
      "Obecność na spotkaniach zarządu",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-brand-cream py-20 md:py-28">

      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <ParallaxY speed={-14} className="absolute top-10 left-[-5rem] w-80 h-80">
          <div className="w-full h-full rounded-full opacity-[0.05]" style={{ background: "#D4921A" }} />
        </ParallaxY>
        <ParallaxY speed={-10} className="absolute bottom-10 right-[-4rem] w-56 h-56">
          <div className="w-full h-full rounded-full opacity-[0.04]" style={{ background: "#00695C" }} />
        </ParallaxY>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Nagłówek */}
        <FadeInSection className="text-center mb-4">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-0.5 w-8 bg-brand-accent" />
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
              Pakiety
            </span>
            <span className="h-0.5 w-8 bg-brand-accent" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-primary">
            Wybierz zakres współpracy
          </h2>
        </FadeInSection>

        <FadeInSection delay={0.1} className="text-center mb-12">
          <p className="text-text-secondary text-base sm:text-lg max-w-xl mx-auto">
            Każda firma jest inna. Zaczynam od rozmowy — razem dobieramy formę dopasowaną do Twoich potrzeb.
          </p>
        </FadeInSection>

        {/* Karty pakietów */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {PLANS.map((plan, i) => (
            <FadeInSection key={plan.name} delay={i * 0.12}>
              <motion.div
                whileHover={
                  !plan.featured
                    ? { scale: 1.02, boxShadow: "0 8px 30px rgba(15,44,74,0.08)" }
                    : {}
                }
                transition={{ duration: 0.2 }}
                className={`relative bg-white rounded-xl flex flex-col h-full
                  ${plan.featured
                    ? "border-2 border-brand-accent shadow-xl scale-[1.02] md:scale-105"
                    : "border border-brand-border shadow-sm"
                  }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-block bg-brand-accent text-brand-primary text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap shadow-sm">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="p-7 flex flex-col gap-5 flex-1">
                  {/* Nagłówek planu */}
                  <div className="pt-2">
                    <h3 className={`text-lg font-extrabold tracking-wide mb-1
                      ${plan.featured ? "text-brand-accent" : "text-brand-primary"}`}>
                      {plan.name}
                    </h3>
                    <p className="text-text-secondary text-sm leading-snug">{plan.tagline}</p>
                  </div>

                  {/* Cena */}
                  <div className="border-t border-brand-border pt-5">
                    <p className="text-brand-primary font-bold text-base">{plan.price}</p>
                  </div>

                  {/* Lista cech */}
                  <ul className="flex flex-col gap-3 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-text-secondary">
                        <Check
                          size={16}
                          className="text-brand-accent flex-shrink-0 mt-0.5"
                          strokeWidth={2.5}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="#cta"
                    className="mt-4 inline-flex justify-center items-center gap-1 w-full px-5 py-3 rounded-md bg-brand-accent text-brand-primary font-semibold text-sm hover:bg-brand-accent-hover transition-colors duration-200"
                  >
                    Porozmawiajmy →
                  </a>
                </div>
              </motion.div>
            </FadeInSection>
          ))}
        </div>

      </div>
    </section>
  );
}
