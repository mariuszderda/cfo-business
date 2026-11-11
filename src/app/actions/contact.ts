"use server";
import { Resend } from "resend";
import { contactSchema, type ContactData } from "@/lib/contactSchema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContact(input: ContactData, token: string) {
  const parsed = contactSchema.safeParse(input);
  if (!parsed.success || !token) return { ok: false };
  const { name, email, message } = parsed.data;

  const verify = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      secret: process.env.RECAPTCHA_SECRET_KEY!,
      response: token,
    }),
  }).then((r) => r.json());

  if (!verify.success || verify.action !== "contact" || verify.score < 0.5) {
    return { ok: false };
  }

  const { error } = await resend.emails.send({
    from: "Formularz <formularz@adrianderda.pl>",
    to: "adrian@adrianderda.pl",
    replyTo: email,
    subject: `Zapytanie ze strony: ${name}`,
    text: `${name} <${email}>\n\n${message}`,
  });

  return { ok: !error };
}