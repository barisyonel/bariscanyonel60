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

export function trackMetaContact(): void {
  if (!readCookieConsent() || typeof window === "undefined" || !window.fbq) {
    return;
  }

  window.fbq("track", "Contact");
}

export function isWhatsAppHref(href: string): boolean {
  return /(?:^|\/\/)(?:wa\.me|api\.whatsapp\.com)\b/i.test(href);
}
