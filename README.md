# adrianderda.pl — Wizytówka biznesowa

Next.js 15 / TypeScript / Tailwind CSS v4 / Framer Motion

## Uruchomienie lokalne

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Zmienne środowiskowe

Utwórz plik `.env.local` w katalogu `website/`:

```env
# Google Analytics 4 — wdrożenie w drugiej iteracji
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## Deploy na Vercel

1. Wejdź na [vercel.com](https://vercel.com) i kliknij **Add New Project**
2. Zaimportuj repozytorium z GitHuba
3. **Root Directory** ustaw na `website` (jeśli repo zawiera też brief i example-images)
4. Dodaj zmienne środowiskowe w ustawieniach projektu
5. Kliknij **Deploy** — Vercel automatycznie wyda certyfikat SSL

## Rzeczy do uzupełnienia przez Adriana

| Co | Gdzie w kodzie |
|---|---|
| Zdjęcie Adriana | zastąp placeholder w `Hero.tsx` i `About.tsx` — szukaj `TODO: Wymienić` |
| Ceny pakietów | `src/components/sections/Pricing.tsx` — szukaj `TODO: Adrian uzupełnia` |
| Lata doświadczenia i liczba firm | `src/components/sections/About.tsx` — szukaj `TODO: uzupełnić` |
| URL LinkedIn | `src/components/Footer.tsx` — szukaj `TODO: uzupełnić` |
| Resend API (formularz) | `src/components/sections/CTA.tsx` — szukaj `TODO: Podpiąć Resend` |
| Google Analytics ID | `.env.local` → `NEXT_PUBLIC_GA_MEASUREMENT_ID` |

## Stack

- **Next.js 15** (App Router, static export)
- **TypeScript**
- **Tailwind CSS v4** (paleta `brand-*` w `globals.css`)
- **Framer Motion** (animacje fade-in, hover, float)
- **shadcn/ui** (Button, Card, Input, Textarea, Badge)
- **react-hook-form + zod** (walidacja formularza)
- **sonner** (toast "Dziękuję, odezwę się w 24h")
- **lucide-react** (ikony)
