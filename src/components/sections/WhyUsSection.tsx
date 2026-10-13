import { site } from "@/lib/site";

type ComparisonRow = {
  feature: string;
  others: string;
  ours: string;
};

const ROWS: readonly ComparisonRow[] = [
  { feature: "Tasarım", others: "Hazır tema / şablon", ours: "İşletmeye özel tasarım" },
  { feature: "Altyapı", others: "Ağır WordPress / eski altyapı", ours: "Next.js, hızlı ve modern" },
  { feature: "SEO", others: "Temel ayarlar", ours: "Teknik ve yerel SEO iskeleti" },
  { feature: "Yapay zekâ aramaları", others: "Genelde düşünülmez", ours: "GEO uyumlu içerik yapısı" },
  { feature: "Performans", others: "Yavaş açılış", ours: "Core Web Vitals hedefiyle teslim" },
  { feature: "Mobil", others: "Sonradan uyarlanır", ours: "Önce mobil tasarlanır" },
  { feature: "Destek", others: "Teslimden sonra ulaşılamaz", ours: "Yayın sonrası bakım ve iletişim" },
  { feature: "Teklif", others: "Belirsiz paket, sürpriz maliyet", ours: "Kalem kalem yazılı teklif" },
] as const;

export function WhyUsSection() {
  return (
    <section id="neden-biz" className="hairline section-pad" aria-labelledby="neden-biz-heading">
      <div className="container-x">
        <h2
          id="neden-biz-heading"
          className="max-w-2xl text-3xl font-semibold text-ink md:text-4xl"
        >
          Neden {site.name}?
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Hazır tema ve belirsiz teslim yerine özel tasarım, ölçülebilir performans ve net süreç.
        </p>

        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-xl border-collapse text-left">
            <caption className="sr-only">Diğer ajanslar ile {site.name} karşılaştırması</caption>
            <thead>
              <tr className="border-b border-ink/80 text-sm">
                <th scope="col" className="py-3 pr-4 font-medium text-muted">
                  Konu
                </th>
                <th scope="col" className="px-4 py-3 font-medium text-muted">
                  Sık görülen
                </th>
                <th scope="col" className="py-3 pl-4 font-semibold text-ink">
                  {site.name}
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.feature} className="border-b border-line">
                  <th scope="row" className="py-4 pr-4 text-[0.95rem] font-medium text-ink">
                    {row.feature}
                  </th>
                  <td className="px-4 py-4 text-[0.95rem] text-muted">{row.others}</td>
                  <td className="py-4 pl-4 text-[0.95rem] text-ink">{row.ours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
