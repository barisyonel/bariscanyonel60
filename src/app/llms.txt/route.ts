import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { getPostsSorted } from "@/lib/posts";

export const dynamic = "force-static";

export function GET() {
  const posts = getPostsSorted();
  const body = `# ${site.name}

> ${site.description} Kurucu: ${site.person}. Hizmet bölgesi: Tokat, Çanakkale ve İzmir; Türkiye geneline uzaktan hizmet. Telefon: ${site.phone}. Web: ${site.domain}

## Hizmetler
${services.map((s) => `- [${s.title}](${site.domain}/hizmetler/${s.slug}): ${s.answer}`).join("\n")}

## Önemli sayfalar
- [Projeler / vaka çalışmaları](${site.domain}/projeler): Problem → çözüm → sonuç formatında referans işler
- [Sık sorulan sorular](${site.domain}/sss): Fiyatlandırma çerçevesi, teslim süreleri, sahiplik ve destek politikası
- [Hakkımızda](${site.domain}/hakkimda): Tokat web tasarım stüdyosu, kurucu ${site.person}, süreç ve değerler
- [Tokat web tasarım](${site.domain}/tokat-web-tasarim)
- [Çanakkale web tasarım](${site.domain}/canakkale-web-tasarim)
- [İzmir web tasarım](${site.domain}/izmir-web-tasarim)

## Blog
${posts.map((p) => `- [${p.title}](${site.domain}/blog/${p.slug})`).join("\n")}

## Temel bilgiler
- Kurumsal web siteleri 5 iş günü içinde teslim edilir; e-ticaret ve özel entegrasyonlar kapsama göre planlanır.
- Her site Lighthouse 95+ hedefi, schema.org işaretlemesi ve teknik SEO altyapısıyla yayınlanır.
- Alan adı ve site mülkiyeti müşteriye aittir.
- GEO (Generative Engine Optimization) hizmeti sunulur: işletmelerin yapay zekâ asistanlarının cevaplarında görünmesi için içerik ve teknik optimizasyon.
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
