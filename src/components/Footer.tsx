import { PlaySquare, Link2, Mail } from "lucide-react";

const NAV_LINKS = [
  { label: "O mnie", href: "#about" },
  { label: "Jak działam", href: "#process" },
  { label: "Co zyskujesz", href: "#features" },
  { label: "Pakiety", href: "#pricing" },
  { label: "Kontakt", href: "#cta" },
];

const SOCIAL = [
  {
    icon: Mail,
    label: "E-mail",
    href: "mailto:adrian@adrianderda.pl",
    text: "adrian@adrianderda.pl",
  },
  {
    icon: PlaySquare,
    label: "YouTube",
    href: "https://youtube.com/@DerdaAnaliza",
    text: "@DerdaAnaliza",
  },
  {
    icon: Link2,
    label: "LinkedIn",
    href: "https://linkedin.com/in/adrianderda", // TODO: uzupełnić poprawny URL LinkedIn
    text: "Adrian Derda",
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand-primary">

      {/* Główna treść footera */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Kolumna 1 — Logo i opis */}
          <div className="flex flex-col gap-3">
            <span className="text-white font-bold text-lg tracking-tight">
              Adrian Derda
            </span>
            <p className="text-text-muted text-sm leading-relaxed">
              Zewnętrzny Dyrektor Finansowy. Wspieram właścicieli firm w podejmowaniu lepszych decyzji finansowych.
            </p>
          </div>

          {/* Kolumna 2 — Nawigacja */}
          <div className="flex flex-col gap-3">
            <span className="text-white text-sm font-semibold uppercase tracking-wider mb-1">
              Nawigacja
            </span>
            <nav aria-label="Nawigacja w stopce">
              <ul className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-text-muted text-sm hover:text-brand-accent transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Kolumna 3 — Kontakt i social */}
          <div className="flex flex-col gap-3">
            <span className="text-white text-sm font-semibold uppercase tracking-wider mb-1">
              Kontakt
            </span>
            <ul className="flex flex-col gap-3">
              {SOCIAL.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="flex items-center gap-3 text-text-muted hover:text-brand-accent transition-colors duration-200 group"
                  >
                    <item.icon
                      size={16}
                      className="flex-shrink-0 group-hover:text-brand-accent transition-colors"
                    />
                    <span className="text-sm">{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Stopka dolna */}
      <div className="border-t border-[#00544A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-text-muted text-xs">
            © 2025 Adrian Derda. Wszelkie prawa zastrzeżone.
          </p>
          <a
            href="#"
            className="text-text-muted text-xs hover:text-brand-accent transition-colors"
          >
            Polityka prywatności
          </a>
        </div>
      </div>

    </footer>
  );
}
