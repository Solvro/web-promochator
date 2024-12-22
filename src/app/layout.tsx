import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";

import { Providers } from "@/components/providers";

import "./globals.css";

export const metadata: Metadata = {
  title: "PromoCHATor",
  description: "Znajdź swojego promotora!",
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
        <Providers>
          {children}
          <Script
            src="https://analytics.solvro.pl/script.js"
            data-website-id="88ac5040-01fa-43fb-9b6d-18315f691419"
          />
        </Providers>
      </body>
    </html>
  );
}
