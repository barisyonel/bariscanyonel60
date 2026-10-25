import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { services } from "@/lib/services";
import { defaultWa, site } from "@/lib/site";

const QUICK_LINKS = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/projeler", label: "Projeler" },
  { href: "/blog", label: "Blog" },
  { href: "/hakkimda", label: "Hakkımızda" },
  { href: "/sss", label: "SSS" },
  { href: "/iletisim", label: "İletişim" },
] as const;

const REGION_LINKS = [
  { href: "/tokat-web-tasarim", label: "Tokat Web Tasarım" },
  { href: "/canakkale-web-tasarim", label: "Çanakkale Web Tasarım" },
  { href: "/izmir-web-tasarim", label: "İzmir Web Tasarım" },
  { href: "/istanbul-web-tasarim", label: "İstanbul Web Tasarım" },
] as const;

function socialLabel(url: string): string {
  if (url.includes("linkedin")) return "LinkedIn";
  if (url.includes("instagram")) return "Instagram";
  if (url.includes("medium")) return "Medium";
  return "Sosyal";
}

function FooterHeading({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm font-semibold text-white">{children}</p>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="overflow-hidden border-t border-white/10 bg-navy text-white">
      <div className="container-x pt-12 md:pt-16">
        <div className="surface-ink relative isolate flex flex-col gap-8 overflow-hidden rounded-[1.5rem] px-7 py-12 md:min-h-[22rem] md:justify-center md:px-14 md:py-16">
          <Image
            src="/footer-bg.jpg"
            alt=""
            fill
            quality={90}
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="-z-10 object-cover object-right"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[#0b0f16]/80 md:bg-transparent md:bg-linear-to-r md:from-[#0b0f16] md:from-30% md:via-[#0b0f16]/60 md:via-50% md:to-transparent md:to-75%"
          />
          <div className="max-w-xl">
            <p className="text-3xl font-semibold leading-tight text-white md:text-5xl">
              Projenizi birlikte netleştirelim
            </p>
            <p className="mt-5 text-white/65 md:text-lg">
              15 dakikalık ücretsiz keşif görüşmesi, yazılı teklif, sürpriz maliyet yok.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/iletisim"
              className="inline-flex min-h-11 items-center justify-center rounded-btn bg-white px-6 py-2.5 text-[0.95rem] font-medium text-ink transition-colors hover:bg-accent hover:text-white"
            >
              Ücretsiz Keşif Görüşmesi
            </Link>
            <WhatsAppLink
              href={defaultWa}
              className="inline-flex min-h-11 items-center justify-center rounded-btn border border-white/25 px-6 py-2.5 text-[0.95rem] font-medium text-white transition-colors hover:border-white"
            >
              WhatsApp
            </WhatsAppLink>
          </div>
        </div>
      </div>

      <div className="container-x grid gap-12 py-14 md:py-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <div className="inline-flex rounded-xl bg-white px-3 py-2">
            <BrandLogo size="footer" />
          </div>
          <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-white/70">
            {site.city} merkezli {site.name}: kurumsal web sitesi, SEO, GEO ve Meta reklam.
          </p>

          <div className="mt-8">
            <FooterHeading>Sosyal Medya</FooterHeading>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Sosyal medya">
              {site.sameAs.map((url) => (
                <li key={url}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-10 items-center rounded-btn border border-white/15 px-3.5 py-2 text-sm text-white transition-colors hover:border-white"
                  >
                    {socialLabel(url)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-2 lg:gap-8">
          <nav aria-labelledby="footer-quick-heading">
            <FooterHeading>
              <span id="footer-quick-heading">Hızlı Linkler</span>
            </FooterHeading>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[0.95rem] text-white/70 transition-colors duration-300 hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-services-heading">
            <FooterHeading>
              <span id="footer-services-heading">Hizmetler</span>
            </FooterHeading>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/hizmetler/${s.slug}`}
                    className="text-[0.95rem] text-white/70 transition-colors duration-300 hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/hizmetler"
                  className="text-[0.95rem] font-medium text-accent transition-colors duration-300 hover:text-white"
                >
                  Tüm hizmetler →
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="space-y-8 lg:col-span-3">
          <div>
            <FooterHeading>İletişim</FooterHeading>
            <ul className="mt-4 space-y-3 text-[0.95rem]">
              <li>
                <a
                  href={`tel:+${site.phoneRaw}`}
                  className="font-medium text-white transition-colors hover:text-cyan"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-white/70 transition-colors hover:text-white"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <WhatsAppLink
                  href={defaultWa}
                  className="text-white/70 transition-colors hover:text-white"
                >
                  WhatsApp&apos;tan yazın
                </WhatsAppLink>
              </li>
              <li className="text-white/70">
                {site.city}, Türkiye
                <span className="mt-1 block text-sm text-white/70">
                  Pzt–Cmt · 09:00–19:00
                </span>
              </li>
            </ul>
          </div>

          <div>
            <FooterHeading>Bölgeler</FooterHeading>
            <ul className="mt-4 space-y-2">
              {REGION_LINKS.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="text-[0.9rem] text-white/70 transition-colors hover:text-white"
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-5 text-[0.85rem] text-white/70 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.person}
            <span className="mt-1 block text-white/55">Web Tasarım ve Dijital Çözümler</span>
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <p className="text-[0.8rem]">
              {site.regions.join(" · ")} · Web tasarım, SEO, GEO
            </p>
            <Link href="/gizlilik-politikasi" className="hover:text-white">
              Gizlilik Politikası
            </Link>
            <Link href="/kvkk" className="hover:text-white">
              KVKK
            </Link>
          </div>
        </div>
      </div>

      <div className="wordmark-slot" aria-hidden>
        <p className="wordmark wordmark-on-dark whitespace-nowrap">BCY Dijital</p>
      </div>
    </footer>
  );
}
