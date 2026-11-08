import { HeroCollage } from "@/components/hero/HeroCollage";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { defaultWa } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="anasayfa"
      aria-labelledby="home-h1"
      className="relative overflow-x-clip pb-16 pt-10 md:pb-24 md:pt-16"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 grid-lines opacity-50" aria-hidden />
      <div
        className="pointer-events-none absolute left-0 top-10 -z-10 size-[18rem] rounded-full bg-electric/20 blur-[100px] md:size-[28rem]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 -z-10 size-[16rem] rounded-full bg-accent/15 blur-[90px] md:size-[22rem]"
        aria-hidden
      />

      <div className="container-x relative grid min-w-0 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-10">
        <div className="min-w-0">
          <p className="eyebrow">BCY Dijital · Kimlik &amp; Web Site</p>
          <h1
            id="home-h1"
            className="mt-5 font-display text-[clamp(2rem,6.5vw,4.25rem)] font-bold uppercase leading-[1.05] tracking-[-0.035em] text-ink"
          >
            <span className="block">Dijitalde</span>
            <span className="block text-accent">Fark Yaratan</span>
            <span className="block">Deneyimler.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            Kurumsal kimlik, logo, özel içerik, web site, mail entegrasyonu ve Google’da işletme
            tanıtımını aynı masada kuruyoruz. Amaç net: marka değerini büyütmek.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/projeler" className="w-full sm:w-auto">
              Projeleri İncele
            </ButtonLink>
            <ButtonLink
              href="/#teklif"
              variant="ghost"
              className="w-full sm:w-auto"
              analyticsEvent="proposal_cta"
              analyticsParams={{ cta_location: "home_hero" }}
            >
              Projenizi Konuşalım
            </ButtonLink>
          </div>
          <p className="mt-5 text-sm text-muted">
            WhatsApp’tan yazmak isterseniz{" "}
            <a href={defaultWa} className="font-semibold text-accent underline-offset-4 hover:underline">
              buradan ulaşın
            </a>
            .
          </p>
        </div>

        <div className="min-w-0">
          <HeroCollage />
        </div>
      </div>
    </section>
  );
}
