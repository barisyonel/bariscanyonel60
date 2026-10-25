import { ContactForm } from "@/components/ContactForm";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { site } from "@/lib/site";

export function QuoteSection() {
  return (
    <section id="teklif" className="hairline section-pad scroll-mt-24" aria-labelledby="teklif-heading">
      <div className="container-x grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <h2 id="teklif-heading" className="text-3xl font-semibold md:text-4xl">
            Web Siteniz İçin Ücretsiz Teklif Alın
          </h2>
          <p className="mt-4 max-w-md text-muted">
            İhtiyacınızı birkaç kısa bilgiyle anlatın, projeniz için size özel teklif hazırlayalım.
          </p>
          <p className="mt-6 text-sm text-muted">Telefonda konuşmak isterseniz</p>
          <PhoneLink className="mt-2 inline-flex min-h-11 items-center text-lg font-semibold text-ink underline-offset-4 hover:underline">
            Hemen Ara · {site.phone}
          </PhoneLink>
        </div>
        <div className="rounded-card border border-line bg-elevated p-5 md:p-8">
          <ContactForm variant="quote" />
        </div>
      </div>
    </section>
  );
}
