import { googleAdsConversionSendTo } from "@/lib/analytics-config";
import { readCookieConsent } from "@/lib/cookie-consent";

type Gtag = (...args: unknown[]) => void;
type Fbq = {
  (...args: unknown[]): void;
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[];
  loaded: boolean;
  version: string;
  push: Fbq;
};

declare global {
  interface Window {
    gtag?: Gtag;
    dataLayer?: unknown[];
    fbq?: Fbq;
    _fbq?: Fbq;
  }
}

export function trackGoogleAdsConversion(): void {
  if (!readCookieConsent() || typeof window === "undefined" || !window.gtag) {
    return;
  }

  window.gtag("event", "conversion", {
    send_to: googleAdsConversionSendTo,
  });
}

export function trackMetaLead(): void {
  if (!readCookieConsent() || typeof window === "undefined" || !window.fbq) {
    return;
  }

  window.fbq("track", "Lead");
}

export type AnalyticsEventName =
  | "generate_lead"
  | "phone_click"
  | "whatsapp_click"
  | "quote_form_start"
  | "quote_form_submit";

/**
 * GA4 / dataLayer olayı. Çerez onayı ve gtag yoksa sessizce çıkar.
 * Dönüşüm kimliği burada üretilmez; mevcut gtag yapılandırması kullanılır.
 */
export function trackAnalyticsEvent(
  name: AnalyticsEventName,
  params?: Record<string, string>
): void {
  if (typeof window === "undefined" || !readCookieConsent()) return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...params });
  window.gtag?.("event", name, params);
}

export function trackMetaContact(): void {
  if (!readCookieConsent() || typeof window === "undefined" || !window.fbq) {
    return;
  }

  window.fbq("track", "Contact");
}

export function isWhatsAppHref(href: string): boolean {
  return /(?:^|\/\/)(?:wa\.me|api\.whatsapp\.com)\b/i.test(href);
}
