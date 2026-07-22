import { CityLanding } from "@/components/CityLanding";
import { cities } from "@/lib/cities";
import { meta } from "@/lib/seo";

export const metadata = meta({
  title: "Tokat Web Tasarım — Kurumsal Site, SEO ve GEO | BCY Dijital",
  description:
    "Tokat web tasarım ve web sitesi yaptırmak isteyen işletmeler için: kurumsal tasarım, e-ticaret, yerel SEO. Yüz yüze görüşme, 5 iş günü teslim, yazılı teklif.",
  path: "/tokat-web-tasarim",
});

export default function Page() {
  return <CityLanding city={cities.tokat} />;
}
