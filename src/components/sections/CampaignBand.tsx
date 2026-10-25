import Link from "next/link";

/** Statik sayfa. 31 Ekim 2026 sonrası bir sonraki yayında kaldırılmalı. */
export function CampaignBand() {
  return (
    <div className="border-b border-white/10 bg-ink text-white lg:hidden">
      <div className="container-x flex flex-col gap-1 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <p className="text-sm leading-snug md:text-[0.95rem]">
          31 Ekim&apos;e Kadar Kurumsal Web Sitesi Projelerinde %20 İndirim
        </p>
        <Link
          href="/#teklif"
          className="inline-flex min-h-11 shrink-0 items-center text-sm font-semibold text-white underline-offset-4 hover:underline"
        >
          Teklif Al →
        </Link>
      </div>
    </div>
  );
}
