"use client";

import Script from "next/script";

/**
 * Google Analytics 4 — wdrożenie w drugiej iteracji.
 * Ustaw GA_MEASUREMENT_ID w .env.local, np. G-XXXXXXXXXX.
 * TODO: Włączyć po ustawieniu zmiennej środowiskowej.
 */
export default function GoogleAnalytics() {
  const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  // Komponent jest wyłączony dopóki GA_ID nie zostanie ustawiony
  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
