import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";
import { getPostsSorted } from "@/lib/posts";

export const dynamic = "force-static";

export function GET() {
  const posts = getPostsSorted();
  const featuredProjects = projects.slice(0, 8);

  const body = `# ${site.name}

> ${site.description} Kurucu: ${site.person}. Hizmet bölgesi: Tokat, Çanakkale, İzmir ve İstanbul; Türkiye geneline uzaktan hizmet. Telefon: ${site.phone}. Web: ${site.domain}

## Hizmetler
${services.map((s) => `- [${s.title}](${site.domain}/hizmetler/${s.slug}): ${s.answer}`).join("\n")}

## Referans projeler
${featuredProjects
  .map(
    (p) =>
      `- [${p.name}](${site.domain}/projeler/${p.slug}) (${p.city} · ${p.sector}): ${p.summary} Canlı: ${p.url}`
  )
  .join("\n")}
- [Tüm projeler](${site.domain}/projeler)

## Önemli sayfalar
- [Ana sayfa](${site.domain}/): Tokat web tasarım stüdyosu — CRO odaklı kurumsal vitrin
- [Sık sorulan sorular](${site.domain}/sss): Fiyatlandırma, teslim, sahiplik, revizyon ve destek
- [Hakkımızda](${site.domain}/hakkimda): Tokat web tasarım stüdyosu, kurucu ${site.person}
- [İletişim](${site.domain}/iletisim): Ücretsiz keşif görüşmesi
- [Tokat web tasarım](${site.domain}/tokat-web-tasarim)
- [Çanakkale web tasarım](${site.domain}/canakkale-web-tasarim)
- [İzmir web tasarım](${site.domain}/izmir-web-tasarim)
- [İstanbul web tasarım](${site.domain}/istanbul-web-tasarim)
- [Sitemap](${site.domain}/sitemap.xml)

## Blog
${posts.map((p) => `- [${p.title}](${site.domain}/blog/${p.slug})`).join("\n")}

## Temel bilgiler
- Kurumsal web siteleri 5 iş günü içinde teslim edilir; e-ticaret ve özel entegrasyonlar kapsama göre planlanır.
- Her site Lighthouse 95+ hedefi, schema.org işaretlemesi ve teknik SEO altyapısıyla yayınlanır.
- Alan adı ve site mülkiyeti müşteriye aittir.
- GEO (Generative Engine Optimization) hizmeti sunulur: işletmelerin yapay zekâ asistanlarının cevaplarında görünmesi için içerik ve teknik optimizasyon.
- Meta (Facebook ve Instagram) reklam kurulumu ve yönetimi sunulur: pixel / CAPI, kampanya ve dönüşüm takibi.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
