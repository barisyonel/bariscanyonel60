"use client";
import { useActionState, useEffect, useRef } from "react";
import { sendContact, type FormState } from "@/lib/actions";
import { trackGoogleAdsConversion } from "@/lib/gtag";

const inputCls =
  "w-full rounded-btn border border-line bg-elevated px-4 py-3 text-ink placeholder:text-muted/70 focus:border-accent focus:outline-none";

export function ContactForm() {
  const [state, action, pending] = useActionState<FormState, FormData>(sendContact, null);
  const trackedConversion = useRef(false);

  useEffect(() => {
    if (!state?.ok || trackedConversion.current) return;
    trackedConversion.current = true;
    trackGoogleAdsConversion();
  }, [state?.ok]);

  return (
    <form action={action} className="space-y-4" aria-describedby={state ? "form-status" : undefined}>
      {/* honeypot */}
      <input type="text" name="web_url" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm text-muted">Adınız</label>
          <input id="name" name="name" required minLength={2} className={inputCls} placeholder="Ad Soyad" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm text-muted">Telefon</label>
          <input id="phone" name="phone" type="tel" required minLength={10} className={inputCls} placeholder="05xx xxx xx xx" />
        </div>
      </div>
      <div>
        <label htmlFor="business" className="mb-1.5 block text-sm text-muted">İşletme türü</label>
        <select id="business" name="business" className={inputCls} defaultValue="Hizmet işletmesi">
          <option>Hizmet işletmesi</option>
          <option>Mağaza / e-ticaret</option>
          <option>Emlak / otomotiv</option>
          <option>Üretim / mühendislik</option>
          <option>Diğer</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm text-muted">Mesajınız</label>
        <textarea id="message" name="message" rows={4} className={inputCls} placeholder="Kısaca ihtiyacınızı anlatın" />
      </div>
      <button
        type="submit"
        disabled={pending}
        className="rounded-btn bg-accent px-6 py-3 font-medium text-base transition-colors hover:bg-[#3eb0db] disabled:opacity-60"
      >
        {pending ? "Gönderiliyor…" : "Gönder"}
      </button>
      {state && (
        <p id="form-status" role="status" className={state.ok ? "text-accent" : "text-[#e87d7d]"}>
          {state.message}
        </p>
      )}
    </form>
  );
}
