import { HeroShowcase } from "@/components/hero/HeroShowcase";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { defaultWa } from "@/lib/site";

const trust = ["Ücretsiz ön görüşme", "Size özel tasarım", "Mobil uyumlu"] as const;

export function Hero() {
  return (
    <section
      id="anasayfa"
      aria-labelledby="home-h1"
      className="relative overflow-hidden pb-10 pt-8 md:pb-14 md:pt-12"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_80%_20%,rgba(20,184,212,0.16),transparent_46%),radial-gradient(ellipse_at_10%_80%,rgba(8,126,164,0.1),transparent_42%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35] [background-image:linear-gradient(to_right,rgba(8,126,164,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(8,126,164,0.08)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
        aria-hidden
      />
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className="min-w-0">
          <p className="text-xs font-semibold tracking-[0.18em] text-accent">KURUMSAL WEB TASARIM</p>
          <h1
            id="home-h1"
            className="mt-4 max-w-3xl text-[clamp(2.15rem,4.6vw,3.75rem)] font-semibold leading-[1.08] tracking-tight text-ink"
          >
            İşletmenizi Dijitalde <span className="text-accent">Öne Çıkaran</span> Web Siteleri
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            Markanıza özel, hızlı, modern ve satış odaklı web siteleri tasarlıyorum. Sadece güzel
            görünen değil, işletmenize müşteri kazandıran dijital deneyimler oluşturuyorum. Tokat
            merkezli stüdyoda keşif, yazılı kapsam ve yayın aynı kişi tarafından yürütülür; alan adı
            ve site teslimden sonra size kalır.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              href="/#teklif"
              className="w-full sm:w-auto"
              analyticsEvent="proposal_cta"
              analyticsParams={{ cta_location: "home_hero" }}
            >
              Ücretsiz Teklif Al →
            </ButtonLink>
            <ButtonLink href="/projeler" variant="ghost" className="w-full sm:w-auto">
              Projeleri İncele
            </ButtonLink>
          </div>
          <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-ink">
            {trust.map((item) => (
              <li key={item} className="inline-flex items-center gap-1.5">
                <span className="text-accent" aria-hidden>
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted">
            WhatsApp ile yazmak isterseniz{" "}
            <a href={defaultWa} className="font-semibold text-accent underline-offset-4 hover:underline">
              buradan ulaşın
            </a>
            .
          </p>
        </div>

        <HeroShowcase />
      </div>
    </section>
  );
}
