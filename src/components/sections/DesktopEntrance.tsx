import Image from "next/image";
import Link from "next/link";

const mobileAlt =
  "BCY Dijital kampanya görseli: profesyonel web sitesi, bu ay sonuna kadar yüzde 20 indirim, modern tasarım, SEO altyapısı, mobil uyum ve WhatsApp ile teklif.";

const desktopAlt =
  "BCY Dijital masaüstü kampanya görseli: dizüstü ve telefonda örnek site, bu ay sonuna kadar yüzde 20 indirim ve hemen teklif al butonu.";

export function DesktopEntrance() {
  return (
    <div className="bg-white">
      <Link
        href="/#teklif"
        className="mx-auto block max-w-[1100px] md:px-6 md:pt-4"
      >
        <Image
          src="/kampanya-web-sitesi-20-indirim.jpg"
          alt={mobileAlt}
          width={1024}
          height={1024}
          quality={85}
          priority
          sizes="100vw"
          className="h-auto w-full md:hidden"
        />
        <Image
          src="/kampanya-web-giris.jpg"
          alt={desktopAlt}
          width={1024}
          height={576}
          quality={85}
          priority
          sizes="(max-width: 1100px) 100vw, 1100px"
          className="hidden h-auto w-full md:block md:overflow-hidden md:rounded-[18px] md:border md:border-line"
        />
      </Link>
    </div>
  );
}
