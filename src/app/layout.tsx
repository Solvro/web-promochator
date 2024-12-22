import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { Providers } from "@/components/providers";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://promochator.solvro.pl"),
  alternates: {
    canonical: "./",
  },
  title: "PromoCHATor",
  description:
    "Nasz inteligentny system przeanalizuje temat Twojej pracy dyplomowej i przedstawi Ci najbardziej odpowiednich promotorów z kadry akademickiej PWr wraz z ich powiązanymi pracami",
  robots: "index, follow",
  keywords: [
    "praca dyplomowa",
    "praca magisterska",
    "praca inżynierska",
    "promotorzy pwr",
    "wyszukiwarka promotorów",
    "dobór promotora",
    "politechnika wrocławska",
    "studia pwr",
    "solvro",
  ],
  icons: [
    {
      url: "/favicon.ico",
      type: "image/x-icon",
    },
    {
      sizes: "32x32",
      type: "image/png",
      url: "/favicon-32x32.png",
    },
    {
      sizes: "16x16",
      type: "image/png",
      url: "/favicon-16x16.png",
    },
  ],
  openGraph: {
    title: "PromoCHATor - Znajdź idealnego promotora!",
    description:
      "Nasz inteligentny system przeanalizuje temat Twojej pracy dyplomowej i przedstawi Ci najbardziej odpowiednich promotorów z kadry akademickiej PWr wraz z ich powiązanymi pracami",
    url: "https://promochator.solvro.pl",
    siteName: "PromoCHATor",
    type: "website",
    locale: "pl_PL",
    images: [
      {
        url: "/og-image.png",
        width: 1512,
        height: 982,
        alt: "PromoCHATor - Znajdź idealnego promotora!",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PromoCHATor - Znajdź idealnego promotora!",
    description: "https://promochator.solvro.pl",
    images: ["/og-image.png"],
  },
  appleWebApp: {
    title: "PromoCHATor - Znajdź idealnego promotora!",
    statusBarStyle: "black-translucent",
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: "normal",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={poppins.className}>
      <body className="bg-chat-background">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
