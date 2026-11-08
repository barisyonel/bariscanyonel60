import { ButtonLink } from "@/components/ui/ButtonLink";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { defaultWa } from "@/lib/site";

const btn =
  "inline-flex min-h-11 w-full items-center justify-center rounded-btn px-6 py-2.5 text-[0.95rem] font-semibold transition-colors sm:w-auto";

export function ClosingCta() {
  return (
    <section className="section-pad" aria-labelledby="kapanis-heading">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-card border border-line bg-elevated px-6 py-14 md:px-14 md:py-20">
          <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" aria-hidden />
          <div
            className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full bg-accent/20 blur-[90px]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-16 size-64 rounded-full bg-electric/25 blur-[90px]"
            aria-hidden
          />

          <p className="relative eyebrow">Sıradaki proje</p>
          <h2
            id="kapanis-heading"
            className="relative mt-4 max-w-4xl font-display text-[clamp(2.2rem,7vw,5rem)] font-bold uppercase leading-[0.95] tracking-tight"
          >
            Web Site
            <br />
            <span className="text-accent">şimdi.</span>
          </h2>
          <p className="relative mt-5 max-w-xl text-muted md:text-lg">
            İşinizi anlatın; size nasıl bir site kurabileceğimizi birlikte netleştirelim. Kısa bir
            keşif yeter — ardından kapsam yazılı gelir.
          </p>
          <div className="relative mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink
              href="/#teklif"
              className="w-full sm:w-auto"
              analyticsEvent="proposal_cta"
              analyticsParams={{ cta_location: "home_closing" }}
            >
              Ücretsiz teklif al
            </ButtonLink>
            <WhatsAppLink
              href={defaultWa}
              className={`${btn} border border-line text-ink hover:border-accent/50 hover:text-accent`}
            >
              WhatsApp’tan yaz
            </WhatsAppLink>
          </div>
        </div>
      </div>
    </section>
  );
}
