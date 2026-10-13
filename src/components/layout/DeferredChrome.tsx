"use client";

import dynamic from "next/dynamic";

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
      <WhatsAppFAB />
      <CookieBanner />
    </>
  );
}
