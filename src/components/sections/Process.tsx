import FadeInSection from "@/components/ui/FadeInSection";
import ParallaxY from "@/components/ui/ParallaxY";

const STEPS = [
  {
    title: "Rozmowa (bezpłatna)",
    description:
      "Opowiadasz mi o firmie. Słucham. Pytam o to, o co nikt do tej pory nie pytał. Po 45 minutach oboje wiemy, czy i jak mogę pomóc.",
  },
  {
    title: "Diagnoza finansowa",
    description:
      "Wchodzę w liczby Twojej firmy. Buduję obraz: gdzie jesteś, gdzie tracisz, co możesz zyskać. Bez upiększania.",
  },
  {
    title: "Stałe wsparcie lub projekt",
    description:
      "Działamy dalej w formie, która pasuje do Twojej firmy — jako stały zewnętrzny CFO lub przy konkretnym projekcie: budżet, model, restrukturyzacja, przygotowanie do finansowania.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative bg-brand-cream py-20 md:py-28">

      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <ParallaxY speed={-18} className="absolute top-[-3rem] right-[-4rem] w-72 h-72">
          <div className="w-full h-full rounded-full opacity-[0.06]" style={{ background: "#00695C" }} />
        </ParallaxY>
        <ParallaxY speed={-12} className="absolute bottom-[-2rem] left-[-3rem] w-52 h-52">
          <div className="w-full h-full rounded-full opacity-[0.08]" style={{ background: "#D4921A" }} />
        </ParallaxY>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Nagłówek */}
        <FadeInSection className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-0.5 w-8 bg-brand-accent" />
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
              Jak działam
            </span>
            <span className="h-0.5 w-8 bg-brand-accent" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-primary">
            Jak zaczynamy
          </h2>
        </FadeInSection>

        {/* Kroki */}
        <div className="relative">
          {/* Linia łącząca kroki — widoczna na desktop */}
          <div
            aria-hidden
            className="hidden md:block absolute left-[2.25rem] top-10 bottom-10 w-0.5 bg-brand-border"
          />

          <div className="flex flex-col gap-8">
            {STEPS.map((step, i) => (
              <FadeInSection key={i} delay={i * 0.15}>
                <div className="flex items-start gap-6 relative">
                  {/* Numer w dużym kółku */}
                  <div className="flex-shrink-0 w-[4.5rem] h-[4.5rem] rounded-full bg-brand-accent text-brand-primary font-bold text-xl flex items-center justify-center shadow-md relative z-10">
                    {i + 1}
                  </div>

                  {/* Treść kroku */}
                  <div className="bg-white rounded-xl border border-brand-border p-6 flex-1 shadow-sm">
                    <h3 className="text-lg font-bold text-brand-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>

        {/* CTA pod procesem */}
        <FadeInSection delay={0.5} className="text-center mt-12">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-brand-accent text-brand-primary font-semibold text-base hover:bg-brand-accent-hover transition-colors duration-200"
          >
            Zacznij od bezpłatnej rozmowy →
          </a>
        </FadeInSection>

      </div>
    </section>
  );
}
