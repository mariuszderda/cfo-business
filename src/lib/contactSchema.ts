import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Podaj imię i nazwisko"),
  email: z.string().email("Nieprawidłowy adres e-mail"),
  message: z.string().min(10, "Opisz krótko sytuację (min. 10 znaków)"),
});

export type ContactData = z.infer<typeof contactSchema>;