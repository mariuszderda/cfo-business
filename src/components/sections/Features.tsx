"use client";

import { motion } from "framer-motion";
import { Search, Wallet, BarChart3, Handshake, Target, Shield } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import ParallaxY from "@/components/ui/ParallaxY";

const FEATURES = [
  {
    icon: Search,
    title: "Wiesz, gdzie jest Twój zysk",
    description:
      "Nie tylko co pokazuje wynik netto — ale które produkty, klienci i kanały sprzedaży naprawdę Ci płacą. I które tylko wyglądają na rentowne.",
  },
  {
    icon: Wallet,
    title: "Masz kontrolę nad gotówką",
    description:
      "Koniec z niespodziankami na koncie. Wiesz z wyprzedzeniem kiedy, skąd i ile wpłynie — i możesz planować zamiast reagować.",
  },
  {
    icon: BarChart3,
    title: "Podejmujesz decyzje na podstawie danych",
    description:
      "Inwestycja, zatrudnienie, nowy produkt — każda decyzja ma teraz swoje liczby. Nie zgadujemy. Liczymy.",
  },
  {
    icon: Handshake,
    title: "Masz partnera, nie dostawcę",
    description:
      "Nie dostajesz raportów do szuflady. Dostajesz kogoś, kto siada z Tobą, wyjaśnia co widzą liczby i mówi wprost, co rekomenduje.",
  },
  {
    icon: Target,
    title: "Wiesz dla kogo pracujesz",
    description:
      "Który klient jest naprawdę rentowny? Który tylko duży? Razem określimy, gdzie warto inwestować czas i zasoby.",
  },
  {
    icon: Shield,
    title: "Finansowa pewność w trudnych momentach",
    description:
      "Negocjacje z bankiem, sezon słabszy niż zakładany, nowy wspólnik — masz obok siebie kogoś, kto wie co robi.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-white py-20 md:py-28">

      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <ParallaxY speed={-16} className="absolute top-0 left-[-5rem] w-80 h-80">
          <div className="w-full h-full rounded-full opacity-[0.04]" style={{ background: "#1E2228" }} />
        </ParallaxY>
        <ParallaxY speed={-12} className="absolute bottom-10 right-[-4rem] w-56 h-56">
          <div className="w-full h-full rounded-full opacity-[0.06]" style={{ background: "#C8A96E" }} />
        </ParallaxY>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <FadeInSection className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-0.5 w-8 bg-brand-accent" />
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
              Co zyskujesz
            </span>
            <span className="h-0.5 w-8 bg-brand-accent" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-primary max-w-2xl mx-auto leading-tight">
            Co się zmienia, gdy masz kogoś od finansów po swojej stronie
          </h2>
        </FadeInSection>

        {/* Grid 3×2 kart */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => (
            <FadeInSection key={feature.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02, boxShadow: "0 8px 30px rgba(15,44,74,0.10)" }}
                transition={{ duration: 0.2 }}
                className="bg-white border border-brand-border rounded-xl p-6 flex flex-col gap-4 h-full cursor-default"
              >
                <div className="w-11 h-11 rounded-lg bg-brand-cream flex items-center justify-center flex-shrink-0">
                  <feature.icon size={20} className="text-brand-primary" />
                </div>
                <h3 className="text-base font-bold text-brand-primary leading-snug">
                  {feature.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed flex-1">
                  {feature.description}
                </p>
              </motion.div>
            </FadeInSection>
          ))}
        </div>

      </div>
    </section>
  );
}
