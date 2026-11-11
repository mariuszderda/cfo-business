"use client";

import Link from 'next/link';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import FadeInSection from "@/components/ui/FadeInSection";
import ParallaxY from "@/components/ui/ParallaxY";
import Script from "next/script";
import { contactSchema, type ContactData } from "@/lib/contactSchema";
import { sendContact } from "@/app/actions/contact";

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!;

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

const getToken = () =>
  new Promise<string>((resolve, reject) => {
    if (!window.grecaptcha) return reject(new Error("reCAPTCHA not loaded"));
    window.grecaptcha.ready(() => {
      try {
        window.grecaptcha.execute(SITE_KEY, { action: "contact" }).then(resolve, reject);
      } catch (err) {
        reject(err);
      }
    });
  });

const inputClass =
  "w-full px-4 py-3 rounded-md bg-white border border-brand-border text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition";

const errorClass = "text-red-400 text-xs mt-1";

export default function CTA() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactData>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactData) => {
    try {
      const token = await getToken();
      const res = await sendContact(data, token);
      if (!res.ok) throw new Error("send failed");
      toast.success("Dziękuję, odezwę się w 24h!");
      reset();
    } catch {
      toast.error("Nie udało się wysłać. Napisz na kontakt@adrianderda.pl.");
    }
  };

  return (
    <section id="cta" className="relative bg-brand-primary min-h-screen flex flex-col justify-center">
      <Script src={`https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`} strategy="lazyOnload" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <ParallaxY speed={-18} className="absolute top-[-4rem] right-[-5rem] w-80 h-80">
          <div
            className="w-full h-full rounded-full border border-brand-accent/10"
            style={{ boxShadow: "0 0 80px 20px rgba(200,169,110,0.06)" }}
          />
        </ParallaxY>
        <ParallaxY speed={-14} className="absolute top-[10%] right-[5%] w-48 h-48">
          <div className="w-full h-full rounded-full border border-brand-accent/20 opacity-40" />
        </ParallaxY>
        <ParallaxY speed={-22} className="absolute bottom-[-3rem] left-[-4rem] w-72 h-72">
          <div className="w-full h-full rounded-full opacity-[0.08]" style={{ background: "#C8A96E" }} />
        </ParallaxY>
        <ParallaxY speed={-12} className="absolute bottom-[15%] left-[8%] w-32 h-32">
          <div className="w-full h-full rounded-full border border-white/5" />
        </ParallaxY>
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Nagłówek */}
        <FadeInSection className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Zacznijmy od rozmowy
          </h2>
          <p className="text-text-muted text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            Pierwsza rozmowa jest bezpłatna. Napisz w dwóch, trzech zdaniach, czym zajmuje się firma i co najbardziej Cię męczy w finansach. Odpiszę i umówimy termin.
          </p>
        </FadeInSection>

        {/* Formularz */}
        <FadeInSection delay={0.2}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="flex flex-col gap-5"
          >
            {/* Imię i nazwisko */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text-muted mb-1.5">
                Imię i nazwisko
              </label>
              <input
                id="name"
                type="text"
                placeholder="Np. Jan Kowalski"
                {...register("name")}
                className={inputClass}
                aria-invalid={!!errors.name}
              />
              {errors.name && <p className={errorClass}>{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-muted mb-1.5">
                Adres e-mail
              </label>
              <input
                id="email"
                type="email"
                placeholder="jan@firma.pl"
                {...register("email")}
                className={inputClass}
                aria-invalid={!!errors.email}
              />
              {errors.email && <p className={errorClass}>{errors.email.message}</p>}
            </div>

            {/* Opis sytuacji */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text-muted mb-1.5">
                Opisz krótko sytuację firmy
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="np. produkcja, 30 mln zł obrotu, sprzedaż rośnie, a gotówki brakuje"
                {...register("message")}
                className={`${inputClass} resize-none`}
                aria-invalid={!!errors.message}
              />
              {errors.message && <p className={errorClass}>{errors.message.message}</p>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 w-full sm:w-auto sm:self-center inline-flex justify-center items-center gap-2 px-10 py-3.5 rounded-md bg-brand-accent text-brand-cream font-semibold text-base hover:bg-brand-accent-hover disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200"
            >
              {isSubmitting ? "Wysyłanie…" : "Wyślij wiadomość →"}
            </button>
            <p className="text-xs text-text-muted text-center leading-relaxed">
              Administratorem danych jest Adrian Derda. Dane z formularza przetwarzam
              wyłącznie w celu odpowiedzi na zapytanie. Szczegóły w{" "}
              <Link href="/polityka-prywatnosci" className="underline underline-offset-2 hover:text-white">
                polityce prywatności
              </Link>
              .
            </p>
          </form>
        </FadeInSection>

      </div>
    </section>
  );
}
