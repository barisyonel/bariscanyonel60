export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  /** İlgili proje slug'ı */
  projectSlug: string;
  /** 1–5 yıldız; varsayılan 5 */
  rating?: number;
};

export const testimonials: Testimonial[] = [
  {
    projectSlug: "guzubey-asansor",
    company: "Guzubey Asansör",
    name: "Yönetim",
    role: "Tokat · Asansör",
    quote:
      "BCY Dijital ile çalışmaktan çok memnun kaldık. Siteyi isteğimize göre şekillendirdiler; süreç şeffaftı, iletişim hızlıydı. İlgileri ve teslim kalitesi beklediğimizin üzerindeydi — tekliflerde artık güvenle gösterebileceğimiz bir vitrinimız var.",
  },
  {
    projectSlug: "polat-mermer",
    company: "Polat Mermer",
    name: "Yönetim",
    role: "Tokat · Mermer & Doğal Taş",
    quote:
      "Ürünlerimizi hak ettiği profesyonel dilde anlatan bir site istedik; BCY tam da bunu verdi. Süreç boyunca her adıma hakimdi, ilgisini eksik etmedi. Sonuçtan çok memnunuz — müşterilerimiz artık markayı dijitale yakışır şekilde görüyor.",
  },
  {
    projectSlug: "dalyan-palmiye-resort",
    company: "Dalyan Palmiye Resort",
    name: "Yönetim",
    role: "Dalyan · Butik Otel",
    quote:
      "Otelimizi anlatan, rezervasyona yönlendiren temiz bir siteye ihtiyacımız vardı. BCY Dijital süreci baştan sona net yürütü; tasarım, hız ve içerik düzeni istediğimiz gibi oldu. Çalışmadan ve gösterdikleri ilgiden gerçekten memnun kaldık.",
  },
  {
    projectSlug: "imbat-osgb",
    company: "İmbat OSGB",
    name: "Yönetim",
    role: "OSGB · İş Güvenliği",
    quote:
      "İş yeri hekimliği ve İSG hizmetlerimizi işverenlere doğru anlatmak kritikti. BCY kurumsal ve güven veren bir site kurdu; süreç planlı ilerledi, her sorumuza zamanında dönüş yapıldı. Yaptıkları iş ve ilgilerinden çok memnunuz.",
  },
];

export function getTestimonialByProject(slug: string) {
  return testimonials.find((t) => t.projectSlug === slug);
}
