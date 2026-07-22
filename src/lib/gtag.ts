import { googleAdsConversionSendTo } from "@/lib/analytics-config";
import { readCookieConsent } from "@/lib/cookie-consent";

type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: Gtag;
    dataLayer?: unknown[];
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
