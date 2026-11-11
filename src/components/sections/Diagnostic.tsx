import FadeInSection from "@/components/ui/FadeInSection";
import ParallaxY from "@/components/ui/ParallaxY";

const QUESTIONS = [
  "Sprzedaż rośnie, a na koncie jakoś tego nie widać.",
  "Nie wiesz do końca, na których produktach zarabiasz, a na których dokładasz.",
  "Pieniądze na najbliższe miesiące planujesz raczej w głowie niż w tabelce.",
  "Masz wrażenie, że gdzieś ucieka kasa, ale trudno powiedzieć gdzie.",
  "Bank poprosił o prognozę i zrobiło się nerwowo."
];

export default function Diagnostic() {
  return (
    <section className="relative bg-brand-cream py-20 md:py-28">

      {/* Blobs w izolowanym wrapperze — overflow-hidden tu, nie na sekcji */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <ParallaxY speed={-14} className="absolute top-10 right-[-4rem] w-64 h-64">
          <div className="w-full h-full rounded-full opacity-[0.07]" style={{ background: "#C8A96E" }} />
        </ParallaxY>
        <ParallaxY speed={-10} className="absolute bottom-0 left-[-3rem] w-48 h-48">
          <div className="w-full h-full rounded-full opacity-[0.05]" style={{ background: "#1E2228" }} />
        </ParallaxY>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Nagłówek */}
        <FadeInSection className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-primary mb-4">
            Brzmi znajomo?
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-xl mx-auto">
            Jeśli rozpoznajesz swoją firmę w kilku z tych zdań, warto pogadać.
          </p>
        </FadeInSection>

        {/* Lista pytań */}
        <div className="flex flex-col gap-4">
          {QUESTIONS.map((question, i) => (
            <FadeInSection key={i} delay={i * 0.1}>
              <div className="flex items-start gap-5 bg-white rounded-xl p-5 border border-brand-border shadow-sm">
                <span
                  aria-hidden
                  className="flex-shrink-0 w-9 h-9 rounded-full bg-brand-accent text-brand-cream font-bold text-sm flex items-center justify-center"
                >
                  {i + 1}
                </span>
                <p className="text-text-primary text-base leading-relaxed pt-1">{question}</p>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* Zdanie zamykające */}
        <FadeInSection delay={0.7} className="mt-10">
          <p className="text-center text-text-secondary text-base sm:text-lg leading-relaxed border-t border-brand-border pt-8">
            Większość firm tej wielkości ma te same {" "}
            <span className="font-semibold text-brand-primary">pytania</span>.
            Na szczęście da się na nie odpowiedzieć liczbami.
          </p>
        </FadeInSection>

      </div>
    </section>
  );
}
