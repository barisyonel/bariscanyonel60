import { Reveal } from "@/components/ui/Reveal";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb, projectsItemListSchema } from "@/lib/schema";
import { meta } from "@/lib/seo";
import { projects } from "@/lib/projects";

export const metadata = meta({
  title: "Projeler ve Referans Vaka Çalışmaları",
  description:
    "BCY Dijital referansları: Prime Dizayn (İstanbul), asansör, hukuk, sanayi, gayrimenkul, otel ve daha fazlası — canlı URL’li web tasarım vaka çalışmaları.",
  path: "/projeler",
});

export default function ProjelerPage() {
  return (
    <div className="container-x section-pad">
      <JsonLd
        data={[
          breadcrumb([
            { name: "Ana Sayfa", path: "/" },
            { name: "Projeler", path: "/projeler" },
          ]),
          projectsItemListSchema(projects),
        ]}
      />
      <Reveal>
        <p className="eyebrow">Projeler</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold md:text-5xl">
          Projeler ve referans vaka çalışmaları
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted">
          Her işte problemi, çözümü ve sonucu açıkça anlatıyoruz. Ekran görüntüsü galerisi değil;
          sektöre göre filtreleyebileceğiniz gerçek vaka çalışmaları.
        </p>
      </Reveal>
      <div className="mt-12">
        <ProjectGrid />
      </div>
    </div>
  );
}
