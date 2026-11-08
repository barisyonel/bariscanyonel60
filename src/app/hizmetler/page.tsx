import { ServiceCard } from "@/components/sections/ServiceCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Reveal } from "@/components/ui/Reveal";
import { meta } from "@/lib/seo";
import { serviceIconId } from "@/lib/serviceIcons";
import { services } from "@/lib/services";

export const metadata = meta({
  title: "Hizmetler: Web Site, Kurumsal Kimlik, SEO ve Marka Büyümesi",
  description:
    "Kurumsal kimlik, logo, özel içerik, web site, mail entegrasyonu, domain & hosting, Google’da işletme tanıtımı, SEO, GEO ve reklam. BCY Dijital.",
  path: "/hizmetler",
});

export default function HizmetlerPage() {
  return (
    <div className="container-x section-pad">
      <Breadcrumbs
        className="mb-8"
        items={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Hizmetler", path: "/hizmetler" },
        ]}
      />
      <Reveal>
        <p className="eyebrow">Hizmetler</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold uppercase tracking-tight md:text-5xl">
          Web site, kimlik ve marka büyümesi
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted">
          Kurumsal kimlik, logo tasarımı, işletmeye özgü içerik, mail entegrasyonu, domain &amp;
          hosting, Google’da işletme tanıtımı, SEO, GEO ve reklam aynı stüdyoda yürür. Amaç marka
          değerini büyütmek.
        </p>
      </Reveal>
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:gap-6">
        {services.map((s, i) => (
          <Reveal key={s.slug} delay={i * 0.06}>
            <ServiceCard
              href={`/hizmetler/${s.slug}`}
              title={s.title}
              short={s.short}
              benefits={s.bullets}
              iconId={serviceIconId(s.slug)}
            />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
