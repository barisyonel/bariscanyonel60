import Image from "next/image";
import Link from "next/link";
import { Marquee } from "@/components/ui/Marquee";

const clients = [
  { slug: "prime-dizayn", name: "Prime Dizayn", src: "/clients/prime-dizayn.jpg", width: 1024, height: 320 },
  { slug: "dalyan-palmiye-resort", name: "Dalyan Palmiye Resort", src: "/clients/dalyan-palmiye.jpg", width: 1120, height: 391 },
  { slug: "samlioglu-hukuk", name: "Şamlıoğlu Hukuk", src: "/clients/samlioglu-hukuk.png", width: 640, height: 495 },
  { slug: "aevum-troia", name: "Aevum Troia", src: "/clients/aevum-troia.png", width: 640, height: 240 },
  { slug: "guzubey-asansor", name: "Guzubey Asansör", src: "/clients/guzubey-asansor.png", width: 541, height: 243 },
  { slug: "polat-mermer", name: "Polat Mermer", src: "/clients/polat-mermer-logo.png", width: 622, height: 274 },
  { slug: "mygoldenfood", name: "Mygoldenfood", src: "/clients/mygoldenfood.png", width: 640, height: 343 },
  { slug: "metod-muhendislik", name: "Metod Mühendislik", src: "/clients/metod-muhendislik.png", width: 464, height: 111 },
] as const;

export function ClientLogoStrip() {
  return (
    <section aria-labelledby="isletmeler-heading" className="border-y border-line bg-white py-8 md:py-10">
      <div className="container-x">
        <p id="isletmeler-heading" className="text-xs font-semibold tracking-[0.16em] text-muted">
          BİRLİKTE ÇALIŞTIĞIMIZ İŞLETMELER
        </p>
      </div>
      <div className="mt-5">
        <Marquee
          label="Birlikte çalıştığımız işletmeler"
          items={clients.map((client) => (
            <Link
              key={client.slug}
              href={`/projeler/${client.slug}`}
              className="flex h-[4.25rem] items-center rounded-xl bg-white px-4 ring-1 ring-line"
            >
              <Image
                src={client.src}
                alt={`${client.name} logosu`}
                width={client.width}
                height={client.height}
                className={`w-auto object-contain ${
                  client.slug === "polat-mermer" ? "h-12 max-w-[13.5rem]" : "h-10 max-w-[10.5rem]"
                }`}
              />
            </Link>
          ))}
        />
      </div>
    </section>
  );
}
