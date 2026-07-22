import Link from "next/link";
import { site, defaultWa } from "@/lib/site";
import { BrandLogo } from "@/components/BrandLogo";
import { services } from "@/lib/services";

const quickLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/projeler", label: "Projeler" },
  { href: "/blog", label: "Blog" },
  { href: "/hakkimda", label: "Hakkımızda" },
  { href: "/sss", label: "SSS" },
  { href: "/iletisim", label: "İletişim" },
] as const;

const techStrip = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind",
  "Vercel",
  "Cloudflare",
  "Schema.org",
] as const;

export function Footer() {
  return (
    <footer className="hairline">
      <div className="container-x section-pad grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <BrandLogo size="footer" />
          <p className="mt-4 max-w-sm text-[0.95rem] text-muted">{site.description}</p>
          <div className="mt-6 flex flex-wrap gap-3" aria-label="Sosyal medya">
            {site.sameAs.map((url) => {
              const label = url.includes("linkedin")
                ? "LinkedIn"
                : url.includes("instagram")
                  ? "Instagram"
                  : url.includes("medium")
                    ? "Medium"
                    : "Sosyal";
              return (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline rounded-btn border border-line px-3 py-1.5 text-xs text-muted hover:border-accent/40 hover:text-accent"
                >
                  {label}
                </a>
              );
            })}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-3">
          <div className="space-y-2.5 text-[0.95rem]">
            <p className="eyebrow">Hızlı Menü</p>
            {quickLinks.map((l) => (
              <Link key={l.href} className="link-underline block text-muted hover:text-accent" href={l.href}>
                {l.label}
              </Link>
            ))}
          </div>
          <div className="space-y-2.5 text-[0.95rem]">
            <p className="eyebrow">Hizmetler</p>
            {services.map((s) => (
              <Link
                key={s.slug}
                className="link-underline block text-muted hover:text-accent"
                href={`/hizmetler/${s.slug}`}
              >
                {s.title}
              </Link>
            ))}
            <Link className="link-underline block text-muted hover:text-accent" href="/projeler">
              Projeler
            </Link>
            <Link className="link-underline block text-muted hover:text-accent" href="/blog">
              Blog
            </Link>
          </div>
          <div className="space-y-2.5 text-[0.95rem]">
            <p className="eyebrow">Bölgeler</p>
            <Link className="link-underline block text-muted hover:text-accent" href="/tokat-web-tasarim">
              Tokat Web Tasarım
            </Link>
            <Link className="link-underline block text-muted hover:text-accent" href="/canakkale-web-tasarim">
              Çanakkale Web Tasarım
            </Link>
            <Link className="link-underline block text-muted hover:text-accent" href="/izmir-web-tasarim">
              İzmir Web Tasarım
            </Link>
            <Link className="link-underline block text-muted hover:text-accent" href="/kvkk">
              KVKK
            </Link>
          </div>
        </div>

        <div className="space-y-5 text-[0.95rem] lg:col-span-3">
          <div className="space-y-2.5">
            <p className="eyebrow">İletişim</p>
            <a className="link-underline block text-muted hover:text-accent" href={`tel:+${site.phoneRaw}`}>
              {site.phone}
            </a>
            <a
              className="link-underline block text-muted hover:text-accent"
              href={defaultWa}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp&apos;tan yazın
            </a>
            <a className="link-underline block text-muted hover:text-accent" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <p className="text-muted">Tokat, Türkiye</p>
          </div>

          <div>
            <p className="eyebrow">Çalışma Saatleri</p>
            <p className="mt-2 text-muted">Pzt–Cmt · 09:00–19:00</p>
            <p className="text-sm text-muted">Pazar: randevu ile</p>
          </div>

          <div>
            <p className="eyebrow mb-2">Harita</p>
            <a
              href="https://maps.google.com/?q=Tokat,Türkiye"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-card border border-line bg-elevated transition-[border-color,box-shadow] hover:border-accent/40 hover:shadow-[0_16px_40px_-24px_rgba(33,154,203,0.35)]"
              aria-label="Tokat konumunu Google Haritalar'da aç"
            >
              <div className="relative aspect-[16/10] bg-[linear-gradient(145deg,#0f1d34,#050c18)]">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
                  <span className="h-3 w-3 rounded-full bg-accent shadow-[0_0_16px_rgba(33,154,203,0.9)]" />
                  <span className="text-sm font-medium text-ink">Tokat, Türkiye</span>
                  <span className="text-xs text-muted">Haritada aç →</span>
                </div>
                <div
                  className="pointer-events-none absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(33,154,203,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(33,154,203,0.15) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-x flex flex-wrap items-center gap-2 py-4" aria-label="Teknolojiler">
          <span className="mr-1 text-xs uppercase tracking-wider text-muted">Teknolojiler</span>
          {techStrip.map((t) => (
            <span
              key={t}
              className="rounded-full border border-line px-2.5 py-0.5 text-[0.7rem] text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="hairline">
        <div className="container-x flex flex-col gap-2 py-5 text-[0.85rem] text-muted md:flex-row md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name} — {site.person}
          </p>
          <p>Tokat, Çanakkale & İzmir&apos;de web tasarım, SEO ve GEO</p>
        </div>
      </div>
    </footer>
  );
}
