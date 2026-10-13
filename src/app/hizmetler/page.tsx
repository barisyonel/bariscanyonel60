import { ServiceCard } from "@/components/sections/ServiceCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Reveal } from "@/components/ui/Reveal";
import { meta } from "@/lib/seo";
import { serviceIconId } from "@/lib/serviceIcons";
import { services } from "@/lib/services";

export const metadata = meta({
  title: "Hizmetler: Web Tasarım, SEO, GEO ve Meta Reklam",
  description:
    "Kurumsal web tasarım, e-ticaret, SEO, GEO ve Meta reklam yönetimi. BCY Dijital’in Tokat, Çanakkale, İzmir ve İstanbul’daki işletmelere sunduğu hizmetler.",
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
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold md:text-5xl">
          Hizmetler: web tasarım, SEO, GEO ve Meta reklam
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted">
          BCY Dijital; kurumsal web tasarım, e-ticaret, SEO, GEO ve Meta reklam yönetimini tek çatı
          altında, Tokat, Çanakkale, İzmir ve İstanbul odaklı sunar. Her hizmet ölçülebilir bir
          hedefe bağlanır.
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
