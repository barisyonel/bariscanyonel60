import { ContactForm } from "@/components/ContactForm";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { site } from "@/lib/site";

export function QuoteSection() {
  return (
    <section id="teklif" className="hairline section-pad scroll-mt-24" aria-labelledby="teklif-heading">
      <div className="container-x grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-accent">TEKLİF</p>
          <h2 id="teklif-heading" className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Projenizi Birlikte Planlayalım
          </h2>
          <p className="mt-4 max-w-md text-muted">
            İhtiyacınızı birkaç adımda anlatın, projeniz için size özel yol haritası oluşturalım.
            Form işletme adınızı, istediğiniz hizmeti ve kabaca bütçe yönünüzü alır. Yanıt yazılı teklif
            olarak döner; telefonda konuşmak isterseniz numarayı da kullanabilirsiniz.
          </p>
          <p className="mt-6 text-sm text-muted">Telefonda konuşmak isterseniz</p>
          <PhoneLink className="mt-2 inline-flex min-h-11 items-center text-lg font-semibold text-ink underline-offset-4 hover:underline">
            Hemen Ara · {site.phone}
          </PhoneLink>
        </div>
        <div className="rounded-card border border-accent/15 bg-accent-mist p-5 shadow-sm md:p-8">
          <ContactForm variant="quote" />
        </div>
      </div>
    </section>
  );
}
