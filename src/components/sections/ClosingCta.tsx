import Link from "next/link";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { defaultWa } from "@/lib/site";

const btn =
  "inline-flex min-h-11 w-full items-center justify-center rounded-btn px-6 py-2.5 text-[0.95rem] font-medium transition-colors sm:w-auto";

export function ClosingCta() {
  return (
    <section className="hairline section-pad" aria-labelledby="kapanis-heading">
      <div className="container-x">
        <div className="rounded-card bg-ink px-6 py-10 text-white md:px-12 md:py-14">
          <h2 id="kapanis-heading" className="max-w-2xl text-3xl font-semibold md:text-4xl">
            İşletmenizin Profesyonel Bir Web Sitesine İhtiyacı mı Var?
          </h2>
          <p className="mt-4 max-w-xl text-white/75">
            Projenizi anlatın, ihtiyaçlarınıza uygun web sitesi çözümünü birlikte belirleyelim.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/#teklif" className={`${btn} bg-white text-ink hover:bg-accent hover:text-white`}>
              Ücretsiz Teklif Al
            </Link>
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
