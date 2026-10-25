import Link from "next/link";

/** Statik sayfa. 31 Ekim 2026 sonrası bir sonraki yayında kaldırılmalı. */
export function CampaignBand() {
  return (
    <div className="bg-accent text-white">
      <div className="container-x flex flex-col gap-1 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <p className="text-sm font-medium leading-snug md:text-[0.95rem]">
          31 Ekim&apos;e Kadar Kurumsal Web Sitesi Projelerinde %20 İndirim
        </p>
        <Link
          href="/#teklif"
          className="inline-flex min-h-11 shrink-0 items-center text-sm font-semibold text-white underline decoration-white/50 underline-offset-4 hover:decoration-white"
        >
          Teklif Al →
        </Link>
      </div>
    </div>
  );
}
