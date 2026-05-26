import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mais Influente | Digital Magazine Experience",
  description:
    "Uma experiência editorial premium que transforma uma revista em PDF em uma plataforma digital imersiva, interativa e mensurável.",
  keywords:
    "revista digital, revista premium, Mais Influente, mídia digital, experiência editorial, anúncio premium, newsletter, Liberado Junior",
  authors: [{ name: "Mais Influente — Liberado Junior Grupo de Comunicação" }],
  openGraph: {
    title: "Mais Influente | Digital Magazine Experience",
    description:
      "A revista deixa de ser apenas lida. Agora ela passa a ser vivida.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mais Influente | Digital Magazine Experience",
    description:
      "A revista deixa de ser apenas lida. Agora ela passa a ser vivida.",
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
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className="bg-[#080808] text-[#f0ede6] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
