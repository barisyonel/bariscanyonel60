import type { Metadata } from "next";
import { Cinzel, Montserrat } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFAB } from "@/components/ui/WhatsAppFAB";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { JsonLd } from "@/components/JsonLd";
import { localBusiness, person } from "@/lib/schema";
import { site } from "@/lib/site";
import { Analytics } from "@/components/layout/Analytics";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { SiteIntro } from "@/components/ui/SiteIntro";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "Tokat Web Tasarım | BCY Dijital — Web Sitesi, SEO ve GEO",
    template: "%s | BCY Dijital",
  },
  description:
    "Tokat web tasarım ve kurumsal web sitesi stüdyosu. BCY Dijital: 5 iş günü teslim, SEO, e-ticaret ve GEO. Tokat, Çanakkale ve İzmir.",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "KxXeRgFkidt01EtYymscAT5XKW9mY2S0QU8EIPPfnw4",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${cinzel.variable} ${montserrat.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-btn focus:bg-accent focus:px-4 focus:py-2 focus:text-base"
        >
          İçeriğe atla
        </a>
        <JsonLd data={[localBusiness(), person()]} />
        <SiteIntro />
        <ScrollProgress />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppFAB />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
