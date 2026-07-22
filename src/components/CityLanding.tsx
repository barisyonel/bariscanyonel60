import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb, faqSchema } from "@/lib/schema";
import { services } from "@/lib/services";
import { waLink } from "@/lib/site";
import type { cities } from "@/lib/cities";

type City = (typeof cities)[keyof typeof cities];

export function CityLanding({ city }: { city: City }) {
  const cityFaq = [
    {
      q: `${city.name}'de web sitesi yaptırmak ne kadar sürer?`,
      a: "Kurumsal web sitelerini 5 iş günü içinde teslim ediyoruz. İçerikleriniz hazırsa süreç daha da hızlanır; ilk görüşmede net bir takvim veriyoruz.",
    },
    {
      q: `Görüşme için ${city.name} içinde buluşabilir miyiz?`,
      a: `Evet. ${city.name} için yüz yüze veya görüntülü keşif görüşmesi planlıyoruz; dilerseniz süreci tamamen çevrim içi de yürütebiliriz.`,
    },
    {
      q: "Sitem Google'da ve yapay zekâ aramalarında çıkar mı?",
      a: "Her siteyi teknik SEO altyapısı ve schema işaretlemesiyle teslim ediyoruz. GEO hizmetimizle sitenizin ChatGPT gibi asistanların cevaplarında görünmesi için ek çalışma da yapıyoruz.",
    },
  ];
  return (
    <div className="container-x section-pad">
      <JsonLd
        data={[
          breadcrumb([{ name: "Ana Sayfa", path: "/" }, { name: city.title, path: city.path }]),
          faqSchema(cityFaq),
        ]}
      />
      <Reveal>
        <p className="eyebrow">{city.name}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold md:text-5xl">{city.heroTitle}</h1>
        <p className="mt-5 max-w-2xl text-lg text-muted">{city.intro}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <MagneticButton href="/iletisim">Ücretsiz Keşif Görüşmesi</MagneticButton>
          <MagneticButton
            href={waLink(`Merhaba, ${city.name}'deki işletmem için web sitesi yaptırmak istiyorum.`)}
            variant="ghost"
            external
          >
            WhatsApp&apos;tan yazın
          </MagneticButton>
        </div>
      </Reveal>

      <Reveal>
        <h2 className="mt-16 text-2xl font-semibold md:text-3xl">Neden yerelden çalışmalısınız?</h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {city.why.map((w) => (
            <li key={w} className="rounded-card border border-line bg-elevated p-6 text-[0.95rem] text-muted">
              {w}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-2xl text-muted">
          Bugüne kadar {city.sectors} sektörlerinde işletmelerle çalıştık.{" "}
          <Link href="/projeler" className="text-accent underline underline-offset-4">Projelerimize göz atın</Link>
          {city.name === "Tokat" && (
            <>
              {" · "}
              <Link href="/blog" className="text-accent underline underline-offset-4">
                Tokat web tasarım blogu
              </Link>
              {" · "}
              <Link href="/hakkimda" className="text-accent underline underline-offset-4">
                Hakkımızda
              </Link>
            </>
          )}
          .
        </p>
      </Reveal>

      <Reveal>
        <h2 className="mt-16 text-2xl font-semibold md:text-3xl">{city.name}&apos;de sunduğumuz hizmetler</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {services.map((s) => (
            <Link key={s.slug} href={`/hizmetler/${s.slug}`} className="motion-card group rounded-card border border-line bg-elevated p-6 hover:border-accent/50">
              <h3 className="text-lg font-semibold transition-colors group-hover:text-accent">{s.title}</h3>
              <p className="mt-2 text-[0.93rem] text-muted">{s.short}</p>
            </Link>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <h2 className="mt-16 text-2xl font-semibold md:text-3xl">Sık sorulanlar</h2>
        <div className="mt-6 max-w-2xl space-y-3">
          {cityFaq.map((f) => (
            <details key={f.q} className="rounded-card border border-line bg-elevated p-5">
              <summary className="cursor-pointer list-none font-medium marker:content-none">{f.q}</summary>
              <p className="mt-3 text-[0.95rem] text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
