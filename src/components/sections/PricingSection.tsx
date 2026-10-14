import Image from "next/image";
import Link from "next/link";

export function PricingSection() {
  return (
    <section id="fiyatlandirma" className="hairline section-pad" aria-labelledby="fiyatlandirma-heading">
      <div className="container-x">
        <h2 id="fiyatlandirma-heading" className="sr-only">
          Şeffaf çerçeve, yazılı teklif
        </h2>

        <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:overflow-visible sm:px-0">
          <Link
            href="/iletisim"
            aria-label="Paketler hakkında teklif alın"
            className="mx-auto block w-[56rem] max-w-none overflow-hidden rounded-card border border-line sm:w-full sm:max-w-[1024px]"
          >
            <Image
              src="/paketler.jpg"
              alt="BCY Dijital web sitesi paketleri: Başlangıç — küçük işletme ve net vitrin ihtiyacı; Kurumsal (önerilen) — marka güveni ve dönüşüm odaklı, 10+ sayfa, özel tasarım, teknik ve yerel SEO; Premium — büyüme için SEO, GEO ve reklam hazır, e-ticaret veya gelişmiş panel"
              width={1024}
              height={409}
              quality={90}
              sizes="(max-width: 640px) 896px, (max-width: 1100px) 100vw, 1024px"
              className="h-auto w-full"
            />
          </Link>
        </div>
        <p className="mt-3 text-center text-sm text-muted sm:hidden">Paketleri görmek için kaydırın →</p>
      </div>
    </section>
  );
}
