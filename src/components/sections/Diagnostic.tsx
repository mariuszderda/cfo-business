import FadeInSection from "@/components/ui/FadeInSection";
import ParallaxY from "@/components/ui/ParallaxY";

const QUESTIONS = [
  "Masz przychody, ale nie wiesz czy firma naprawdę zarabia?",
  "Czy wiesz, które produkty lub usługi zarabiają dla Ciebie, a które tylko generują obrót?",
  "Czy masz plan finansowy na najbliższe 12 miesięcy — z prognozą gotówki?",
  "Czujesz, że gdzieś uciekają pieniądze — ale nie wiesz gdzie?",
  "Bank lub inwestor prosi o prognozy finansowe, a Ty nie wiesz od czego zacząć?",
  "Chciałbyś mieć kogoś, kto patrzy na firmę z dystansu i mówi wprost, co wymaga naprawy?",
];

export default function Diagnostic() {
  return (
    <section className="relative bg-brand-cream py-20 md:py-28">

      {/* Blobs w izolowanym wrapperze — overflow-hidden tu, nie na sekcji */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <ParallaxY speed={-14} className="absolute top-10 right-[-4rem] w-64 h-64">
          <div className="w-full h-full rounded-full opacity-[0.07]" style={{ background: "#D4921A" }} />
        </ParallaxY>
        <ParallaxY speed={-10} className="absolute bottom-0 left-[-3rem] w-48 h-48">
          <div className="w-full h-full rounded-full opacity-[0.05]" style={{ background: "#00695C" }} />
        </ParallaxY>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Nagłówek */}
        <FadeInSection className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-primary mb-4">
            Czy to brzmi znajomo?
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-xl mx-auto">
            Jeśli odpowiadasz &bdquo;tak&rdquo; na choćby trzy z tych pytań — czytaj dalej.
          </p>
        </FadeInSection>

        {/* Lista pytań */}
        <div className="flex flex-col gap-4">
          {QUESTIONS.map((question, i) => (
            <FadeInSection key={i} delay={i * 0.1}>
              <div className="flex items-start gap-5 bg-white rounded-xl p-5 border border-brand-border shadow-sm">
                <span
                  aria-hidden
                  className="flex-shrink-0 w-9 h-9 rounded-full bg-brand-accent text-brand-primary font-bold text-sm flex items-center justify-center"
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
            Nie jesteś w tym sam. Większość właścicieli firm{" "}
            <span className="font-semibold text-brand-primary">10–100 mln obrotów</span>,
            z którymi rozmawiam, zmaga się dokładnie z tym samym.
          </p>
        </FadeInSection>

      </div>
    </section>
  );
}
