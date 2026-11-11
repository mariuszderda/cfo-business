import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Adrian Derda — Controlling i finanse dla firm",
  description:
    "Kontroler finansowy z ponad 10-letnim doświadczeniem. Pomagam firmom policzyć marże, koszty i gotówkę. Pierwsza rozmowa jest bezpłatna.",
  keywords: [
    "controlling i finanse dla firm",
    "zewnętrzny dyrektor finansowy",
    "CFO na zlecenie",
    "controlling",
    "finanse dla firm",
    "Adrian Derda",
  ],
  authors: [{ name: "Adrian Derda" }],
  openGraph: {
    title: "Adrian Derda — Controlling i finanse dla firm",
    description:
      "Kontroler finansowy z ponad 10-letnim doświadczeniem. Pomagam firmom policzyć marże, koszty i gotówkę. Pierwsza rozmowa jest bezpłatna.",
    url: "https://adrianderda.pl",
    siteName: "Adrian Derda",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "https://adrianderda.pl/og-image.jpg", // TODO: dodać właściwy plik OG image
        width: 1200,
        height: 630,
        alt: "Adrian Derda — Controlling i finanse dla firm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adrian Derda — Controlling i finanse dla firm",
    description:
      "Kontroler finansowy z ponad 10-letnim doświadczeniem. Pomagam firmom policzyć marże, koszty i gotówkę. Pierwsza rozmowa jest bezpłatna.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-white text-text-primary`}>
        {children}
        <Toaster position="bottom-center" richColors />
      </body>
    </html>
  );
}
