import { Reveal } from "@/components/ui/Reveal";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb } from "@/lib/schema";
import { meta } from "@/lib/seo";

export const metadata = meta({
  title: "Projeler — Referans Çalışmalarımız",
  description:
    "BCY Dijital'in Tokat ve çevresinde tamamladığı web tasarım, e-ticaret ve SEO projeleri: asansör, gayrimenkul, otomotiv, sigorta, mühendislik ve gıda sektörleri.",
  path: "/projeler",
});

export default function ProjelerPage() {
  return (
    <div className="container-x section-pad">
      <JsonLd data={breadcrumb([{ name: "Ana Sayfa", path: "/" }, { name: "Projeler", path: "/projeler" }])} />
      <Reveal>
        <p className="eyebrow">Projeler</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold md:text-5xl">
          Her proje bir vaka çalışması: problem, çözüm, sonuç.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted">
          Ekran görüntüsü galerisi değil; her işte neyi neden yaptığımızı ve ne sonuç aldığımızı
          açıkça anlatıyoruz. Sektöre göre filtreleyebilirsiniz.
        </p>
      </Reveal>
      <div className="mt-12">
        <ProjectGrid />
      </div>
    </div>
  );
}
