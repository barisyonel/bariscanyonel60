import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb } from "@/lib/schema";
import { meta } from "@/lib/seo";
import { services } from "@/lib/services";

export const metadata = meta({
  title: "Hizmetler — Web Tasarım, E-Ticaret, SEO, GEO",
  description:
    "BCY Dijital'in Tokat, Çanakkale ve İzmir'de sunduğu hizmetler: kurumsal web tasarım, e-ticaret, SEO optimizasyonu ve yapay zekâ aramalarında görünürlük (GEO).",
  path: "/hizmetler",
});

export default function HizmetlerPage() {
  return (
    <div className="container-x section-pad">
      <JsonLd data={breadcrumb([{ name: "Ana Sayfa", path: "/" }, { name: "Hizmetler", path: "/hizmetler" }])} />
      <Reveal>
        <p className="eyebrow">Hizmetler</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold md:text-5xl">
          İşletmenizi dijitalde görünür, ulaşılır ve tercih edilir yapan dört hizmet.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted">
          BCY Dijital; kurumsal web tasarım, e-ticaret, SEO ve GEO hizmetlerini tek çatı altında,
          Tokat, Çanakkale ve İzmir odaklı sunar. Her hizmet, ölçülebilir bir hedefe bağlanır.
        </p>
      </Reveal>
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {services.map((s, i) => (
          <Reveal key={s.slug} delay={i * 0.06}>
            <Link href={`/hizmetler/${s.slug}`} className="motion-card group block h-full rounded-card border border-line bg-elevated p-7 hover:border-accent/50">
              <h2 className="text-2xl font-semibold transition-colors group-hover:text-accent">{s.title}</h2>
              <p className="mt-3 text-muted">{s.answer}</p>
              <ul className="mt-5 space-y-2">
                {s.bullets.slice(0, 3).map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-[0.93rem] text-muted">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {b}
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-block text-sm text-accent">Hizmet detayı →</span>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
