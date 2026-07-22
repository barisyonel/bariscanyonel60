"use client";

import Script from "next/script";
import { useSyncExternalStore } from "react";
import {
  gaId,
  googleAdsId,
  metaPixelId,
} from "@/lib/analytics-config";
import {
  readCookieConsent,
  subscribeCookieConsent,
} from "@/lib/cookie-consent";

function getConsentSnapshot() {
  return readCookieConsent();
}

function getServerConsentSnapshot() {
  return false;
}

export function Analytics() {
  const hasConsent = useSyncExternalStore(
    subscribeCookieConsent,
    getConsentSnapshot,
    getServerConsentSnapshot
  );

  const primaryGtagId = gaId ?? googleAdsId;
  const shouldLoadGtag = hasConsent && !!primaryGtagId;

  const gtagConfigLines = [
    gaId ? `gtag('config', '${gaId}', { anonymize_ip: true });` : null,
    googleAdsId ? `gtag('config', '${googleAdsId}');` : null,
  ]
    .filter(Boolean)
    .join("\n              ");

  if (!hasConsent) {
    return null;
  }

  return (
    <>
      {shouldLoadGtag && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${primaryGtagId}`}
            strategy="afterInteractive"
          />
          <Script id="google-tag" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              ${gtagConfigLines}
            `}
          </Script>
        </>
      )}
      {metaPixelId && (
        <>
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${metaPixelId}');
              fbq('track', 'PageView');
            `}
          </Script>
          <noscript>
            {/* Meta Pixel noscript fallback — 1x1 tracking pixel */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}
    </>
  );
}
