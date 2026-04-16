import type { Metadata } from "next";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Barlow_Semi_Condensed, Geist_Mono } from "next/font/google";
import "./globals.css";

config.autoAddCss = false;

const brandSans = Barlow_Semi_Condensed({
  variable: "--font-brand-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sellatuparley | Link Tree Oficial",
    template: "%s | Sellatuparley",
  },
  description:
    "Accede al link tree oficial de Sellatuparley con canales, taquillas disponibles, promociones y soporte.",
  applicationName: "Sellatuparley",
  keywords: [
    "Sellatuparley",
    "link tree",
    "taquillas",
    "apuestas deportivas",
    "canales oficiales",
    "promociones",
  ],
  openGraph: {
    title: "Sellatuparley | Link Tree Oficial",
    description:
      "Canales oficiales, taquillas disponibles, promociones y soporte en un solo lugar.",
    type: "website",
    locale: "es_ES",
    siteName: "Sellatuparley",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sellatuparley | Link Tree Oficial",
    description:
      "Canales oficiales, taquillas disponibles, promociones y soporte en un solo lugar.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${brandSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
