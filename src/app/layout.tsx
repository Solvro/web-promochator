import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { Providers } from "@/components/providers";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://promochator.solvro.pl"),
  title: "PromoCHATor",
  description:
    "Nasz inteligentny system przeanalizuje temat Twojej pracy dyplomowej i przedstawi Ci najbardziej odpowiednich promotorów z kadry akademickiej PWr wraz z ich powiązanymi pracami",
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
  openGraph: {
    title: "PromoCHATor",
    description:
      "Nasz inteligentny system przeanalizuje temat Twojej pracy dyplomowej i przedstawi Ci najbardziej odpowiednich promotorów z kadry akademickiej PWr wraz z ich powiązanymi pracami",
    url: "https://promochator.solvro.pl",
    siteName: "PromoCHATor",
    type: "website",
    locale: "pl_PL",
    // TODO: Add image
    // images: './opengraph-image.png',
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
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
