import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { DeferredChrome } from "@/components/layout/DeferredChrome";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { localBusiness, person } from "@/lib/schema";
import { site } from "@/lib/site";
import { Analytics } from "@/components/layout/Analytics";

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "BCY Dijital | Kurumsal Web Sitesi ve Dijital Hizmetler",
    template: "%s | BCY Dijital",
  },
  description:
    "Kurumsal web sitesi, e-ticaret, SEO ve reklam. BCY Dijital, Barış Can Yönel’in Tokat merkezli stüdyosudur.",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "KxXeRgFkidt01EtYymscAT5XKW9mY2S0QU8EIPPfnw4",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={sans.variable}>
      <body className="pb-[calc(3.6rem+env(safe-area-inset-bottom))] md:pb-0">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-btn focus:bg-accent focus:px-4 focus:py-2 focus:text-base"
        >
          İçeriğe atla
        </a>
        <JsonLd data={[localBusiness(), person()]} />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <MobileActionBar />
        <DeferredChrome />
        <Analytics />
      </body>
    </html>
  );
}
