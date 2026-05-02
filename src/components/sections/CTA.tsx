"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import FadeInSection from "@/components/ui/FadeInSection";
import ParallaxY from "@/components/ui/ParallaxY";

/* TODO: Podpiąć Resend API + adrian@adrianderda.pl */
const schema = z.object({
  name: z.string().min(2, "Podaj imię i nazwisko"),
  email: z.string().email("Nieprawidłowy adres e-mail"),
  message: z.string().min(10, "Opisz krótko sytuację (min. 10 znaków)"),
});

type FormData = z.infer<typeof schema>;

const inputClass =
  "w-full px-4 py-3 rounded-md bg-white border border-brand-border text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition";

const errorClass = "text-red-400 text-xs mt-1";

export default function CTA() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    /* Na razie: console.log + toast — Resend API w drugiej iteracji */
    console.log("Formularz kontaktowy:", data);
    await new Promise((r) => setTimeout(r, 400)); // symulacja wysyłki
    toast.success("Dziękuję, odezwę się w 24h!");
    reset();
  };

  return (
    <section id="cta" className="relative bg-brand-primary min-h-screen flex flex-col justify-center">

      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <ParallaxY speed={-18} className="absolute top-[-4rem] right-[-5rem] w-80 h-80">
          <div
            className="w-full h-full rounded-full border border-brand-accent/10"
            style={{ boxShadow: "0 0 80px 20px rgba(201,169,97,0.06)" }}
          />
        </ParallaxY>
        <ParallaxY speed={-14} className="absolute top-[10%] right-[5%] w-48 h-48">
          <div className="w-full h-full rounded-full border border-brand-accent/20 opacity-40" />
        </ParallaxY>
        <ParallaxY speed={-22} className="absolute bottom-[-3rem] left-[-4rem] w-72 h-72">
          <div className="w-full h-full rounded-full opacity-[0.08]" style={{ background: "#C9A961" }} />
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
            Pierwsze spotkanie jest bezpłatne. Powiedz mi w 2 zdaniach, co dzieje się u Ciebie w firmie — resztą zajmę się ja.
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
                placeholder="Np. Prowadzimy firmę produkcyjną, 15 mln przychodu, mam problem z rentownością i nie wiem gdzie szukać..."
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
              className="mt-2 w-full sm:w-auto sm:self-center inline-flex justify-center items-center gap-2 px-10 py-3.5 rounded-md bg-brand-accent text-brand-primary font-semibold text-base hover:bg-brand-accent-hover disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200"
            >
              {isSubmitting ? "Wysyłanie…" : "Wyślij wiadomość →"}
            </button>
          </form>
        </FadeInSection>

      </div>
    </section>
  );
}
