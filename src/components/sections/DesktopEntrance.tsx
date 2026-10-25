import Image from "next/image";
import Link from "next/link";

const alt =
  "BCY Dijital profesyonel web sitesi: bu ay sonuna kadar %20 indirim. Modern tasarım, SEO altyapısı, mobil uyum ve WhatsApp entegrasyonu.";

export function DesktopEntrance() {
  return (
    <div className="pt-4 md:container-x md:pt-8">
      <Link
        href="/#teklif"
        aria-label="Bu ay sonuna kadar yüzde 20 indirim. Hemen teklif alın"
        className="mx-auto block max-w-[1024px] overflow-hidden bg-white md:rounded-card md:border md:border-line"
      >
        <Image
          src="/kampanya-web-giris.jpg"
          alt={alt}
          width={1024}
          height={576}
          quality={90}
          priority
          sizes="(max-width: 1100px) 100vw, 1024px"
          className="h-auto w-full"
        />
      </Link>
    </div>
  );
}
