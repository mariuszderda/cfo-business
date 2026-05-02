"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "O mnie", href: "#about" },
  { label: "Jak działam", href: "#process" },
  { label: "Co zyskujesz", href: "#features" },
  { label: "Pakiety", href: "#pricing" },
  { label: "Kontakt", href: "#cta" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* Zmiana tła po przekroczeniu 50px scrolla */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Zamknij menu mobilne po kliknięciu linku */
  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href) as HTMLElement | null;
    if (!el) return;

    const wrapper = el.closest("[data-scroll-target]") as HTMLElement | null;

    if (!wrapper) {
      // Brak sticky wrappera — zwykły scrollIntoView wystarczy
      el.scrollIntoView({ behavior: "smooth" });
      return;
    }

    /*
     * offsetTop i getBoundingClientRect() są zawodne dla position:sticky —
     * przeglądarka raportuje wizualną pozycję (0 gdy przyklejone), nie
     * pozycję w flow dokumentu.
     *
     * Rozwiązanie: zsumuj offsetHeight wszystkich [data-scroll-target]
     * wrapperów PRZED docelowym. Każdy wrapper ma min-h-screen w flow,
     * więc suma = dokładna pozycja scrollY do której trzeba trafić.
     */
    const allWrappers = Array.from(
      document.querySelectorAll("[data-scroll-target]")
    );
    const targetIndex = allWrappers.indexOf(wrapper);
    const scrollTop = allWrappers
      .slice(0, targetIndex)
      .reduce((acc, w) => acc + (w as HTMLElement).offsetHeight, 0);

    window.scrollTo({ top: scrollTop, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex flex-col leading-tight"
            aria-label="Adrian Derda — Zewnętrzny Dyrektor Finansowy"
          >
            <span
              className={`font-bold text-lg tracking-tight transition-colors duration-300 ${
                scrolled ? "text-brand-primary" : "text-brand-primary"
              }`}
            >
              Adrian Derda
            </span>
            <span className="text-xs text-text-secondary hidden sm:block">
              Zewnętrzny Dyrektor Finansowy
            </span>
          </a>

          {/* Nawigacja desktop */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Główna nawigacja">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-sm font-medium text-text-secondary hover:text-brand-primary transition-colors duration-200 relative group"
              >
                {link.label}
                {/* Podkreślenie hover */}
                <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-brand-accent group-hover:w-full transition-all duration-200" />
              </a>
            ))}
          </nav>

          {/* CTA button desktop */}
          <a
            href="#cta"
            onClick={(e) => { e.preventDefault(); handleNavClick("#cta"); }}
            className="hidden md:inline-flex items-center gap-1 px-5 py-2.5 rounded-md bg-brand-accent text-brand-primary font-semibold text-sm hover:bg-brand-accent-hover transition-colors duration-200"
          >
            Umów bezpłatną rozmowę →
          </a>

          {/* Hamburger mobile */}
          <button
            className="md:hidden p-2 text-brand-primary"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu mobilne */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-brand-border shadow-lg">
          <nav className="flex flex-col px-4 py-4 gap-1" aria-label="Menu mobilne">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="py-3 text-sm font-medium text-text-primary hover:text-brand-primary border-b border-brand-border/50 last:border-0 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={(e) => { e.preventDefault(); handleNavClick("#cta"); }}
              className="mt-3 inline-flex justify-center items-center gap-1 px-5 py-3 rounded-md bg-brand-accent text-brand-primary font-semibold text-sm hover:bg-brand-accent-hover transition-colors"
            >
              Umów bezpłatną rozmowę →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
