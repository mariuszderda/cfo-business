"use client";

import Script from "next/script";
import { useSyncExternalStore } from "react";

const KEY = "cookie-consent";
const EVENT = "cookie-consent-change";

const subscribe = (cb: () => void) => {
  window.addEventListener(EVENT, cb);
  return () => window.removeEventListener(EVENT, cb);
};
const getSnapshot = () => {
  try {
    return localStorage.getItem(KEY) ?? "unset";
  } catch {
    return "denied";
  }
};
const getServerSnapshot = () => "pending";

const choose = (value: "granted" | "denied") => {
  try {
    localStorage.setItem(KEY, value);
  } catch {}
  window.dispatchEvent(new Event(EVENT));
};

export default function GoogleAnalytics() {
  const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (!GA_ID) return null;

  if (consent === "unset") {
    return (
      <div className="fixed bottom-4 inset-x-4 z-[100] mx-auto max-w-xl rounded-md bg-white border border-brand-border p-4 shadow-lg text-sm text-text-primary">
        <p className="mb-3">
          Strona używa plików cookies do anonimowych statystyk odwiedzin
          (Google Analytics). Czy wyrażasz na to zgodę?
        </p>
        <div className="flex gap-3 justify-end">
          <button onClick={() => choose("denied")} className="px-4 py-2 rounded-md border border-brand-border">
            Odrzucam
          </button>
          <button onClick={() => choose("granted")} className="px-4 py-2 rounded-md bg-brand-accent text-brand-cream font-semibold">
            Akceptuję
          </button>
        </div>
      </div>
    );
  }

  if (consent !== "granted") return null;

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