import { CityLanding } from "@/components/CityLanding";
import { cities } from "@/lib/cities";
import { meta } from "@/lib/seo";

export const metadata = meta({
  title: "Çanakkale Web Tasarım — Site, SEO ve GEO Hizmeti",
  description:
    "Çanakkale'deki işletmeler için web tasarım, e-ticaret ve yerel SEO. Yerinde veya çevrim içi görüşme, şeffaf teklif, ölçülebilir sonuç.",
  path: "/canakkale-web-tasarim",
});

export default function Page() {
  return <CityLanding city={cities.canakkale} />;
}
