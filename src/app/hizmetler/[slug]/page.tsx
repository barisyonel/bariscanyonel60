import { notFound } from "next/navigation";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { meta } from "@/lib/seo";
import { services, getService } from "@/lib/services";
import { projects } from "@/lib/projects";
import { waLink } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return meta({
    title: `${s.title} — Tokat, Çanakkale, İzmir & İstanbul`,
    description: s.answer.slice(0, 152),
    path: `/hizmetler/${s.slug}`,
  });
}

// Hizmet → ilgili vaka çalışmaları (iç bağlantı stratejisi)
const related: Record<string, string[]> = {
  "web-tasarim": ["prime-dizayn", "turanlar-ticaret", "guzubey-asansor", "samlioglu-hukuk", "aevum-troia"],
  "e-ticaret": ["mygoldenfood", "yonel-oto-yedek-parca"],
  seo: ["turanlar-ticaret", "aevum-troia", "izmak-makina-kalip", "guzubey-asansor"],
  geo: ["aevum-troia", "guzubey-asansor", "turanlar-ticaret"],
  "meta-reklam": ["guzubey-asansor", "turanlar-ticaret", "mygoldenfood", "yonel-oto-yedek-parca"],
};

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  const rel = (related[s.slug] || []).map((r) => projects.find((p) => p.slug === r)!).filter(Boolean);

  return (
    <div className="container-x section-pad">
      <JsonLd
        data={[
          serviceSchema(s.title, s.answer, s.slug),
          faqSchema(s.faq),
        ]}
      />
      <Breadcrumbs
        className="mb-8"
        items={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Hizmetler", path: "/hizmetler" },
          { name: s.title, path: `/hizmetler/${s.slug}` },
        ]}
      />
      <Reveal>
        <p className="eyebrow">Hizmet</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold md:text-5xl">{s.title}</h1>
        {/* GEO: varlık-tanımlayıcı, tek başına alıntılanabilir açılış paragrafı */}
        <p className="mt-5 max-w-2xl text-lg text-muted">{s.answer}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <ButtonLink href="/iletisim">Ücretsiz Keşif Görüşmesi</ButtonLink>
          <ButtonLink
            href={waLink(`Merhaba, ${s.title} hizmetiniz hakkında bilgi almak istiyorum.`)}
            variant="ghost"
            external
          >
            WhatsApp&apos;tan sorun
          </ButtonLink>
        </div>
      </Reveal>

      <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_320px]">
        <div className="prose-bcy max-w-2xl">
          {s.body.map((b) => (
            <Reveal key={b.h}>
              <h2>{b.h}</h2>
              <p>{b.p}</p>
            </Reveal>
          ))}

          <Reveal>
            <h2>Sık sorulanlar</h2>
            {s.faq.map((f) => (
              <details key={f.q} className="group mb-3 rounded-card border border-line bg-elevated p-5 not-prose">
                <summary className="cursor-pointer list-none font-medium marker:content-none">{f.q}</summary>
                <p className="mt-3 text-[0.95rem] text-muted">{f.a}</p>
              </details>
            ))}
          </Reveal>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-card border border-line bg-elevated p-6">
            <p className="eyebrow mb-4">Bu hizmette neler var</p>
            <ul className="space-y-2.5">
              {s.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-[0.93rem] text-muted">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          {rel.length > 0 && (
            <div className="rounded-card border border-line bg-elevated p-6">
              <p className="eyebrow mb-4">İlgili projeler</p>
              <ul className="space-y-3">
                {rel.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/projeler/${p.slug}`} className="group block">
                      <span className="font-medium transition-colors group-hover:text-accent">{p.name}</span>
                      <span className="block text-sm text-muted">{p.sector} · {p.city}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
