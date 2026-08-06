import { CityLanding } from "@/components/CityLanding";
import { cities } from "@/lib/cities";
import { meta } from "@/lib/seo";

export const metadata = meta({
  title: "İstanbul Web Tasarım — Site, SEO ve GEO Hizmeti",
  description:
    "İstanbul'daki işletmeler için web tasarım, e-ticaret ve yerel SEO. 5 iş gününde teslim, şeffaf teklif, ölçülebilir sonuç. BCY Dijital.",
  path: "/istanbul-web-tasarim",
});

export default function Page() {
  return <CityLanding city={cities.istanbul} />;
}
