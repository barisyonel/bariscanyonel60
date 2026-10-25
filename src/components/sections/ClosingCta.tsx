import { ButtonLink } from "@/components/ui/ButtonLink";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { defaultWa } from "@/lib/site";

const btn =
  "inline-flex min-h-11 w-full items-center justify-center rounded-btn px-6 py-2.5 text-[0.95rem] font-medium transition-colors sm:w-auto";

export function ClosingCta() {
  return (
    <section className="hairline section-pad" aria-labelledby="kapanis-heading">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[18px] bg-navy px-6 py-12 text-white shadow-(--shadow-lg) md:px-12 md:py-16">
          <div className="pointer-events-none absolute -right-16 -top-20 size-64 rounded-full bg-accent/30 blur-3xl" aria-hidden />
          <h2 id="kapanis-heading" className="relative max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
            İşletmenizin Profesyonel Bir Web Sitesine İhtiyacı mı Var?
          </h2>
          <p className="relative mt-4 max-w-xl text-white/75">
            Projenizi anlatın, işletmenize özel nasıl bir web deneyimi oluşturabileceğimizi birlikte planlayalım.
            Kısa bir keşif yeter: ne sattığınızı, müşterinizin sizi nerede aradığını ve sitenin hangi
            işi üstlenmesi gerektiğini konuşuruz. Ardından kapsam yazılı gelir.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink
              href="/#teklif"
              variant="light"
              className="w-full sm:w-auto"
              analyticsEvent="proposal_cta"
              analyticsParams={{ cta_location: "home_closing" }}
            >
              Ücretsiz Teklif Al
            </ButtonLink>
            <WhatsAppLink
              href={defaultWa}
              className={`${btn} border border-white/30 text-white hover:border-white`}
            >
              WhatsApp&apos;tan Yaz
            </WhatsAppLink>
            <PhoneLink className={`${btn} border border-white/30 text-white hover:border-white`}>
              Hemen Ara
            </PhoneLink>
          </div>
        </div>
      </div>
    </section>
  );
}
