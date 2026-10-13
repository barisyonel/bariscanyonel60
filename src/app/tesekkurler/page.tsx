import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { projects } from "@/lib/projects";
import { defaultWa, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Teşekkürler",
  description: "Mesajınız BCY Dijital'e ulaştı. Aynı iş günü içinde size dönüş yapacağız.",
  robots: { index: false, follow: true },
};

const nextSteps = [
  { t: "Mesajınızı okuyoruz", p: "Talebinizi aynı iş günü içinde inceliyoruz." },
  { t: "Sizi arıyoruz", p: `${site.phone} numarasından ya da WhatsApp üzerinden size ulaşıyoruz.` },
  { t: "Yazılı teklif", p: "15 dakikalık görüşmenin ardından kalem kalem teklifinizi gönderiyoruz." },
];

export default function ThanksPage() {
  return (
    <div className="container-x section-pad">
      <div className="mx-auto max-w-2xl text-center">
        <span
          className="mx-auto flex size-14 items-center justify-center rounded-full bg-accent-soft text-2xl text-accent-deep"
          aria-hidden
        >
          ✓
        </span>
        <h1 className="mt-6 text-4xl font-semibold md:text-5xl">Teşekkürler, mesajınız ulaştı</h1>
        <p className="mt-5 text-lg text-muted">
          Aynı iş günü içinde size dönüş yapacağız. Acil bir durum varsa WhatsApp’tan yazabilir veya
          doğrudan arayabilirsiniz.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href={defaultWa} external>
            WhatsApp’tan yazın
          </ButtonLink>
          <a
            href={`tel:+${site.phoneRaw}`}
            className="inline-flex min-h-11 items-center justify-center rounded-btn border border-line bg-base px-6 py-2.5 text-[0.95rem] font-medium text-ink transition-colors hover:border-ink"
          >
            {site.phone}
          </a>
        </div>
      </div>

      <ol className="mx-auto mt-16 grid max-w-4xl gap-4 md:grid-cols-3">
        {nextSteps.map((s, i) => (
          <li key={s.t} className="rounded-card border border-line p-6">
            <span className="text-sm font-medium text-muted">{String(i + 1).padStart(2, "0")}</span>
            <h2 className="mt-2 text-lg font-semibold">{s.t}</h2>
            <p className="mt-1.5 text-[0.95rem] text-muted">{s.p}</p>
          </li>
        ))}
      </ol>

      <div className="mx-auto mt-16 max-w-4xl text-center">
        <p className="text-sm text-muted">Beklerken göz atın</p>
        <ul className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[0.95rem] font-medium">
          {projects.slice(0, 4).map((p) => (
            <li key={p.slug}>
              <Link href={`/projeler/${p.slug}`} className="link-underline text-ink">
                {p.name}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/blog" className="link-underline text-accent">
              Blog yazıları →
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
