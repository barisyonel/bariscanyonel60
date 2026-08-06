"use client";

import dynamic from "next/dynamic";

const SiteIntro = dynamic(
  () => import("@/components/ui/SiteIntro").then((m) => m.SiteIntro),
  { ssr: false }
);
const ScrollProgress = dynamic(
  () => import("@/components/ui/ScrollProgress").then((m) => m.ScrollProgress),
  { ssr: false }
);
const WhatsAppFAB = dynamic(
  () => import("@/components/ui/WhatsAppFAB").then((m) => m.WhatsAppFAB),
  { ssr: false }
);
const CookieBanner = dynamic(
  () => import("@/components/layout/CookieBanner").then((m) => m.CookieBanner),
  { ssr: false }
);

/** İlk paint’i yormayan, hydrate sonrası yüklenen chrome parçaları. */
export function DeferredChrome() {
  return (
    <>
      <SiteIntro />
      <ScrollProgress />
      <WhatsAppFAB />
      <CookieBanner />
    </>
  );
}
