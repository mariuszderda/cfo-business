import GoogleAnalytics from '@/components/GoogleAnalytics';
import Header from '@/components/Header';
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Polityka prywatności — Adrian Derda",
  description:
    "Informacje o przetwarzaniu danych osobowych w serwisie adrianderda.pl.",
};

const EMAIL = "kontakt@adrianderda.pl";

const purposes = [
  {
    purpose: "Odpowiedź na zapytanie i umówienie rozmowy",
    data: "imię i nazwisko, e-mail, treść wiadomości",
    basis: "art. 6 ust. 1 lit. f – uzasadniony interes",
    retention: "do 12 miesięcy od ostatniego kontaktu",
  },
  {
    purpose: "Zawarcie i wykonanie umowy",
    data: "dane kontaktowe i dane potrzebne do usługi",
    basis: "art. 6 ust. 1 lit. b – umowa",
    retention: "do przedawnienia roszczeń",
  },
  {
    purpose: "Rozliczenia podatkowe",
    data: "dane do rozliczenia wynagrodzenia",
    basis: "art. 6 ust. 1 lit. c – obowiązek prawny",
    retention: "5 lat od końca roku podatkowego",
  },
  {
    purpose: "Bezpieczeństwo serwisu",
    data: "adres IP, przeglądarka, czas wizyty (logi serwera)",
    basis: "art. 6 ust. 1 lit. f – uzasadniony interes",
    retention: "do 30 dni",
  },
  {
    purpose: "Ochrona formularza przed spamem (Google reCAPTCHA)",
    data: "adres IP, informacje o urządzeniu i przeglądarce, sposób korzystania ze strony, pliki cookies Google",
    basis: "art. 6 ust. 1 lit. f – uzasadniony interes",
    retention: "na czas weryfikacji wysyłki formularza",
  },
  {
    purpose: "Statystyki ruchu na stronie (Google Analytics)",
    data: "identyfikator cookies, źródło wejścia (np. YouTube), odwiedzone podstrony, urządzenie, przeglądarka, przybliżona lokalizacja",
    basis: "art. 6 ust. 1 lit. a – zgoda",
    retention: "14 miesięcy lub do cofnięcia zgody",
  },
];

const link =
  "text-brand-accent underline underline-offset-4 decoration-brand-accent/40 hover:decoration-brand-accent transition-colors";
const paragraph = "text-text-primary/80 leading-relaxed";

function Section({
                   number,
                   title,
                   children,
                 }: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-brand-border pt-10 mt-10">
      <h2 className="flex items-baseline gap-3 text-xl sm:text-2xl font-semibold text-text-primary mb-5">
        <span className="text-sm font-medium text-brand-accent tabular-nums">
          {String(number).padStart(2, "0")}
        </span>
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <>
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
      <header>
        <p className="text-sm font-medium uppercase tracking-widest text-brand-accent mb-3">
          <Link href="/">adrianderda.pl</Link>
        </p>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-text-primary mb-4">
          Polityka prywatności
        </h1>
        <p className="text-sm text-text-muted">
          Obowiązuje od 11 listopada 2026 r.
        </p>
      </header>

      <Section number={1} title="Administrator">
        <p className={paragraph}>
          Administratorem danych osobowych zbieranych przez serwis{" "}
          <a className={link} href="https://www.adrianderda.pl">
            www.adrianderda.pl
          </a>{" "}
          jest Adrian Derda (osoba fizyczna). Kontakt:{" "}
          <a className={link} href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          . Nie wyznaczyłem inspektora ochrony danych.
        </p>
      </Section>

      <Section number={2} title="Jakie dane przetwarzam i w jakim celu">
        {/* Telefon: karty */}
        <div className="space-y-4 md:hidden">
          {purposes.map((row) => (
            <div
              key={row.purpose}
              className="rounded-md border border-brand-border bg-white p-5"
            >
              <h3 className="font-semibold text-text-primary mb-3">
                {row.purpose}
              </h3>
              <dl className="space-y-2 text-sm">
                <div>
                  <dt className="text-text-muted">Dane</dt>
                  <dd className="text-text-primary/80">{row.data}</dd>
                </div>
                <div>
                  <dt className="text-text-muted">Podstawa (RODO)</dt>
                  <dd className="text-text-primary/80">{row.basis}</dd>
                </div>
                <div>
                  <dt className="text-text-muted">Jak długo</dt>
                  <dd className="text-text-primary/80">{row.retention}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>

        {/* Desktop: tabela */}
        <div className="hidden md:block overflow-hidden rounded-md border border-brand-border bg-white">
          <table className="w-full text-sm text-left">
            <thead className="bg-brand-primary text-white">
            <tr>
              <th scope="col" className="px-5 py-3 font-semibold w-[22%]">
                Cel
              </th>
              <th scope="col" className="px-5 py-3 font-semibold w-[32%]">
                Dane
              </th>
              <th scope="col" className="px-5 py-3 font-semibold w-[24%]">
                Podstawa (RODO)
              </th>
              <th scope="col" className="px-5 py-3 font-semibold w-[22%]">
                Jak długo
              </th>
            </tr>
            </thead>
            <tbody className="divide-y divide-brand-border">
            {purposes.map((row) => (
              <tr key={row.purpose} className="align-top">
                <th
                  scope="row"
                  className="px-5 py-4 font-semibold text-text-primary"
                >
                  {row.purpose}
                </th>
                <td className="px-5 py-4 text-text-primary/80">{row.data}</td>
                <td className="px-5 py-4 text-text-primary/80">
                  {row.basis}
                </td>
                <td className="px-5 py-4 text-text-primary/80">
                  {row.retention}
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>

        <p className={paragraph}>
          Podanie danych jest dobrowolne, ale bez adresu e-mail nie będę mógł
          odpowiedzieć. Nie podejmuję zautomatyzowanych decyzji i nie profiluję.
        </p>
      </Section>

      <Section number={3} title="Komu przekazuję dane">
        <p className={paragraph}>
          Dane przetwarzają w moim imieniu dostawca hostingu Vercel Inc. (USA),
          dostawca usługi wysyłki wiadomości z formularza kontaktowego Resend
          (USA) i dostawca poczty e-mail Zoho Corporation B.V. (Holandia),
          wspierana przez spółkę matkę Zoho Corporation Pvt. Ltd. (Indie).
          Google Ireland Limited (Irlandia) przetwarza dane jako dostawca
          usługi reCAPTCHA chroniącej formularz przed spamem oraz – tylko po
          wyrażeniu zgody na cookies analityczne – jako dostawca narzędzia
          analitycznego. W razie potrzeby dostęp do danych może mieć też
          księgowy lub prawnik.
        </p>
        <p className={paragraph}>
          Jeśli dane trafiają poza Europejski Obszar Gospodarczy (USA –
          hosting, Resend i Google, Indie – spółka matka Zoho), odbywa się to
          na podstawie
          EU–US Data Privacy Framework lub standardowych klauzul umownych
          zatwierdzonych przez Komisję Europejską.
        </p>
        <p className={paragraph}>
          Nie sprzedaję danych i nie udostępniam ich w celach marketingowych.
        </p>
      </Section>

      <Section number={4} title="Cookies">
        <p className={paragraph}>
          Serwis używa trzech rodzajów plików cookies:
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-md border border-brand-border bg-white p-5">
            <h3 className="font-semibold text-text-primary mb-2">Niezbędne</h3>
            <p className="text-sm text-text-primary/80 leading-relaxed">
              Potrzebne do działania strony i zapamiętania Twojego wyboru w
              banerze cookies. Nie wymagają zgody.
            </p>
          </div>
          <div className="rounded-md border border-brand-border bg-white p-5">
            <h3 className="font-semibold text-text-primary mb-2">
              Bezpieczeństwa (Google reCAPTCHA)
            </h3>
            <p className="text-sm text-text-primary/80 leading-relaxed">
              Chronią formularz kontaktowy przed spamem i automatami. Usługa
              reCAPTCHA ocenia, czy formularz wypełnia człowiek, i w tym celu
              może zapisywać pliki cookies Google oraz analizować informacje o
              urządzeniu i sposobie korzystania ze strony.
            </p>
          </div>
          <div className="rounded-md border border-brand-border bg-white p-5">
            <h3 className="font-semibold text-text-primary mb-2">
              Analityczne (Google Analytics)
            </h3>
            <p className="text-sm text-text-primary/80 leading-relaxed">
              Pokazują, ile osób odwiedza stronę, skąd przychodzą (np. z
              YouTube) i które podstrony czytają. Uruchamiam je wyłącznie po
              Twojej zgodzie w banerze cookies. Dane są zbiorcze, nie służą do
              Twojej identyfikacji ani do reklam, a adresy IP nie są
              zapisywane.
            </p>
          </div>
        </div>
        <p className={paragraph}>
          Zgodę możesz w każdej chwili zmienić lub cofnąć w ustawieniach
          cookies dostępnych w stopce strony. Cookies można też usunąć lub
          zablokować w ustawieniach przeglądarki. Więcej o tym, jak Google
          przetwarza dane:{" "}
          <a
            className={link}
            href="https://policies.google.com/technologies/partner-sites"
            target="_blank"
            rel="noopener noreferrer"
          >
            policies.google.com/technologies/partner-sites
          </a>
          . Linki do YouTube i LinkedIn prowadzą do serwisów, które mają własne
          polityki prywatności.
        </p>
      </Section>

      <Section number={5} title="Twoje prawa">
        <p className={paragraph}>
          Masz prawo do dostępu do swoich danych i otrzymania ich kopii, ich
          sprostowania, usunięcia, ograniczenia przetwarzania i przeniesienia
          oraz do sprzeciwu wobec przetwarzania opartego na uzasadnionym
          interesie. Zgodę na cookies analityczne możesz cofnąć w dowolnym
          momencie, bez wpływu na zgodność z prawem wcześniejszego
          przetwarzania.
        </p>
        <p className={paragraph}>
          Możesz też złożyć skargę do Prezesa Urzędu Ochrony Danych Osobowych (
          <a
            className={link}
            href="https://uodo.gov.pl"
            target="_blank"
            rel="noopener noreferrer"
          >
            uodo.gov.pl
          </a>
          ). Wystarczy napisać na{" "}
          <a className={link} href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>{" "}
          – odpowiem w ciągu miesiąca.
        </p>
      </Section>

      <Section number={6} title="Zmiany polityki">
        <p className={paragraph}>
          Polityka może być aktualizowana, a aktualna wersja jest zawsze
          dostępna w serwisie. Obowiązuje od 11.11.2026 r.
        </p>
      </Section>

      <p className="mt-14">
        <Link className={link} href="/">
          ← Wróć na stronę główną
        </Link>
      </p>
    </main>
    </>
  );
}