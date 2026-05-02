import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Adrian Derda — Zewnętrzny Dyrektor Finansowy",
  description:
    "Wspieram właścicieli firm w podejmowaniu lepszych decyzji finansowych. Zewnętrzny CFO dla firm 10–100 mln obrotów.",
  keywords: [
    "zewnętrzny dyrektor finansowy",
    "CFO na zlecenie",
    "kontroling",
    "finanse dla firm",
    "Adrian Derda",
  ],
  authors: [{ name: "Adrian Derda" }],
  openGraph: {
    title: "Adrian Derda — Zewnętrzny Dyrektor Finansowy",
    description:
      "Wspieram właścicieli firm w podejmowaniu lepszych decyzji finansowych.",
    url: "https://adrianderda.pl",
    siteName: "Adrian Derda",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "https://adrianderda.pl/og-image.jpg", // TODO: dodać właściwy plik OG image
        width: 1200,
        height: 630,
        alt: "Adrian Derda — Zewnętrzny Dyrektor Finansowy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adrian Derda — Zewnętrzny Dyrektor Finansowy",
    description:
      "Wspieram właścicieli firm w podejmowaniu lepszych decyzji finansowych.",
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
