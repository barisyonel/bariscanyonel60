import { TokatLanding } from "@/components/tokat/TokatLanding";
import { meta } from "@/lib/seo";
import { tokatMeta } from "@/lib/tokat-landing";

export const metadata = meta({
  title: tokatMeta.title,
  description: tokatMeta.description,
  path: "/tokat-web-tasarim",
  absoluteTitle: true,
});

export default function Page() {
  return <TokatLanding />;
}
