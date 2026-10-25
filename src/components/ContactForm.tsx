"use client";
import { useActionState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { sendContact, type FormState } from "@/lib/actions";
import { trackAnalyticsEvent, trackGoogleAdsConversion, trackMetaLead } from "@/lib/gtag";

const field =
  "w-full rounded-btn border border-line px-4 py-3 text-base text-ink placeholder:text-muted/70 focus:border-accent focus:outline-none";

const services = [
  "Kurumsal Web Sitesi",
  "Mevcut Siteyi Yenileme",
  "SEO",
  "GEO",
  "Web Sitesi + SEO/GEO",
  "Diğer",
] as const;

export function ContactForm({ variant = "contact" }: { variant?: "contact" | "quote" }) {
  const [state, action, pending] = useActionState<FormState, FormData>(sendContact, null);
  const trackedConversion = useRef(false);
  const started = useRef(false);
  const router = useRouter();
  const formId = variant === "quote" ? "home_quote" : "contact";
  const inputCls = `${field} ${variant === "quote" ? "bg-base" : "bg-elevated"}`;

  useEffect(() => {
    if (!state?.ok || trackedConversion.current) return;
    trackedConversion.current = true;
    trackAnalyticsEvent("generate_lead", { form_id: formId });
    trackGoogleAdsConversion();
    trackMetaLead();
    router.push("/tesekkurler");
  }, [state?.ok, router, formId]);

  function onFocus() {
    if (started.current) return;
    started.current = true;
    trackAnalyticsEvent("quote_form_start", { form_id: formId });
  }

  return (
    <form
      action={action}
      className="space-y-4"
      aria-describedby={state ? "form-status" : undefined}
      onFocus={onFocus}
      onSubmit={() => trackAnalyticsEvent("quote_form_submit", { form_id: formId })}
    >
      <input type="text" name="web_url" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      {variant === "quote" ? <input type="hidden" name="form_variant" value="quote" /> : null}

      {variant === "quote" ? (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="quote-name" className="mb-1.5 block text-sm text-muted">
                Ad Soyad
              </label>
              <input id="quote-name" name="name" required minLength={2} autoComplete="name" className={inputCls} />
            </div>
            <div>
              <label htmlFor="quote-business" className="mb-1.5 block text-sm text-muted">
                Firma Adı
              </label>
              <input
                id="quote-business"
                name="business"
                required
                minLength={2}
                autoComplete="organization"
                className={inputCls}
              />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="quote-phone" className="mb-1.5 block text-sm text-muted">
                Telefon
              </label>
              <input
                id="quote-phone"
                name="phone"
                type="tel"
                required
                minLength={10}
                autoComplete="tel"
                inputMode="tel"
                className={inputCls}
                placeholder="05xx xxx xx xx"
              />
            </div>
            <div>
              <label htmlFor="quote-email" className="mb-1.5 block text-sm text-muted">
                E-posta
              </label>
              <input id="quote-email" name="email" type="email" required autoComplete="email" className={inputCls} />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="quote-website" className="mb-1.5 block text-sm text-muted">
                Mevcut web siteniz var mı?
              </label>
              <select id="quote-website" name="website_status" required className={inputCls} defaultValue="">
                <option value="" disabled>
                  Seçin
                </option>
                <option>Evet</option>
                <option>Hayır</option>
              </select>
            </div>
            <div>
              <label htmlFor="quote-service" className="mb-1.5 block text-sm text-muted">
                İstenen hizmet
              </label>
              <select id="quote-service" name="service" required className={inputCls} defaultValue="">
                <option value="" disabled>
                  Seçin
                </option>
                {services.map((service) => (
                  <option key={service}>{service}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="quote-message" className="mb-1.5 block text-sm text-muted">
              Kısa proje açıklaması
            </label>
            <textarea id="quote-message" name="message" rows={4} className={inputCls} />
          </div>
        </>
      ) : (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm text-muted">
                Adınız
              </label>
              <input id="name" name="name" required minLength={2} className={inputCls} placeholder="Ad Soyad" />
            </div>
            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm text-muted">
                Telefon
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                minLength={10}
                className={inputCls}
                placeholder="05xx xxx xx xx"
              />
            </div>
          </div>
          <div>
            <label htmlFor="business" className="mb-1.5 block text-sm text-muted">
              İşletme türü
            </label>
            <select id="business" name="business" className={inputCls} defaultValue="Hizmet işletmesi">
              <option>Hizmet işletmesi</option>
              <option>Mağaza / e-ticaret</option>
              <option>Emlak / otomotiv</option>
              <option>Üretim / mühendislik</option>
              <option>Diğer</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm text-muted">
              Mesajınız
            </label>
            <textarea id="message" name="message" rows={4} className={inputCls} placeholder="Kısaca ihtiyacınızı anlatın" />
          </div>
        </>
      )}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex min-h-12 w-full items-center justify-center rounded-btn bg-ink px-6 py-3 font-medium text-white transition-colors hover:bg-accent disabled:opacity-60 sm:w-auto"
      >
        {pending ? "Gönderiliyor…" : variant === "quote" ? "Ücretsiz Teklif İste" : "Gönder"}
      </button>
      <p className="text-xs text-muted">
        Formu göndererek bilgilerinizin{" "}
        <Link href="/gizlilik-politikasi" className="underline underline-offset-2 hover:text-ink">
          Gizlilik Politikası
        </Link>{" "}
        kapsamında işlenmesini kabul etmiş olursunuz.
      </p>
      {state && (
        <p id="form-status" role="status" className={state.ok ? "text-accent" : "text-[#b42318]"}>
          {state.message}
        </p>
      )}
    </form>
  );
}
