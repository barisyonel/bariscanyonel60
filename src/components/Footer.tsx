import type { ReactNode } from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
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

const TECH_STRIP = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind",
  "Vercel",
  "Schema.org",
] as const;

function socialLabel(url: string): string {
  if (url.includes("linkedin")) return "LinkedIn";
  if (url.includes("instagram")) return "Instagram";
  if (url.includes("medium")) return "Medium";
  return "Sosyal";
}

function FooterHeading({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow mb-0! text-[0.72rem] tracking-[0.2em]">{children}</p>
  );
}

/**
 * Premium footer — CTA, iletişim, hızlı linkler, hizmetler, sosyal.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-line bg-elevated/30">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(33,154,203,0.08),transparent_50%)]"
        aria-hidden
      />

      {/* CTA band */}
      <div className="relative border-b border-line">
        <div className="container-x flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between md:py-14">
          <div className="max-w-xl">
            <p className="eyebrow">Sonraki adım</p>
            <p className="mt-3 display text-2xl font-semibold leading-snug tracking-tight text-ink md:text-3xl">
              Projenizi birlikte netleştirelim
            </p>
            <p className="mt-3 text-[0.95rem] text-muted">
              Ücretsiz keşif görüşmesi — yazılı teklif, sürpriz yok.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/iletisim"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-btn bg-accent px-7 py-3 text-[0.95rem] font-medium text-base shadow-(--shadow-glow) transition-colors duration-300 hover:bg-accent-deep"
            >
              Ücretsiz Keşif Görüşmesi
              <span aria-hidden>→</span>
            </Link>
            <a
              href={defaultWa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-btn border border-line px-7 py-3 text-[0.95rem] font-medium text-ink transition-[border-color,color] duration-300 hover:border-accent/50 hover:text-accent"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main columns */}
      <div className="container-x relative grid gap-12 py-14 md:py-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <BrandLogo size="footer" />
          <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-muted">
            {site.city} merkezli {site.name}: kurumsal web, SEO, GEO ve Meta reklam — ölçülebilir
            teslim.
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
                    className="inline-flex min-h-10 items-center rounded-btn border border-line bg-base/40 px-3.5 py-2 text-xs font-medium uppercase tracking-[0.12em] text-muted transition-[border-color,color,background-color] duration-300 hover:border-accent/40 hover:bg-accent-soft/30 hover:text-accent"
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
                    className="text-[0.95rem] text-muted transition-colors duration-300 hover:text-accent"
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
                    className="text-[0.95rem] text-muted transition-colors duration-300 hover:text-accent"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/hizmetler"
                  className="text-[0.95rem] font-medium text-accent transition-colors duration-300 hover:text-ink"
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
                  className="font-medium text-ink transition-colors hover:text-accent"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-muted transition-colors hover:text-accent"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={defaultWa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors hover:text-accent"
                >
                  WhatsApp&apos;tan yazın
                </a>
              </li>
              <li className="text-muted">
                {site.city}, Türkiye
                <span className="mt-1 block text-sm text-muted/80">
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
                    className="text-[0.9rem] text-muted transition-colors hover:text-accent"
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Tech + legal */}
      <div className="relative border-t border-line">
        <div className="container-x flex flex-wrap items-center gap-2 py-4" aria-label="Teknolojiler">
          <span className="mr-1 text-[0.65rem] uppercase tracking-[0.16em] text-muted/70">
            Stack
          </span>
          {TECH_STRIP.map((t) => (
            <span
              key={t}
              className="rounded-btn border border-line/80 px-2.5 py-0.5 text-[0.68rem] text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="relative border-t border-line bg-base/40">
        <div className="container-x flex flex-col gap-3 py-5 text-[0.85rem] text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.name} — {site.person}
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <p className="text-[0.8rem]">
              {site.regions.join(" · ")} · Web tasarım, SEO, GEO
            </p>
            <Link href="/kvkk" className="hover:text-accent">
              KVKK
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
