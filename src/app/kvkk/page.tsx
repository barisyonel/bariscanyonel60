import { meta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = meta({
  title: "KVKK Aydınlatma Metni",
  description:
    "BCY Dijital'in 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamındaki aydınlatma metni: hangi veriler, hangi amaçla ve ne kadar süreyle işlenir.",
  path: "/kvkk",
});

export default function KvkkPage() {
  return (
    <div className="container-x section-pad">
      <div className="prose-bcy mx-auto max-w-2xl">
        <p className="eyebrow not-prose">Yasal</p>
        <h1 className="mt-3 text-3xl font-semibold md:text-4xl">KVKK Aydınlatma Metni</h1>
        <p className="mt-6">
          Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, veri
          sorumlusu sıfatıyla {site.person} ({site.name}) tarafından hazırlanmıştır.
        </p>
        <h2>İşlenen kişisel veriler</h2>
        <p>
          İletişim formu veya WhatsApp üzerinden bize ulaştığınızda ad-soyad, telefon numarası,
          e-posta adresi ve mesaj içeriğinizde paylaştığınız bilgiler işlenir. Form gönderimleri
          yalnızca talebinize dönüş amacıyla işlenir.
        </p>
        <h2>Çerezler ve analitik</h2>
        <p>
          Zorunlu çerezler sitenin çalışması için gereklidir. Analitik ve reklam çerezleri
          (Google Ads, isteğe bağlı Google Analytics, Meta Pixel) yalnızca çerez banner&apos;ında
          onay vermeniz halinde yüklenir. Tercihinizi tarayıcı ayarlarından da yönetebilirsiniz.
        </p>
        <h2>İşleme amaçları ve hukuki sebep</h2>
        <p>
          Verileriniz; talebinize dönüş yapmak, teklif hazırlamak ve hizmet sürecini yürütmek
          amacıyla, KVKK m.5/2(c) "sözleşmenin kurulması veya ifası" ve m.5/2(f) "meşru menfaat"
          hukuki sebeplerine dayanarak işlenir. Verileriniz pazarlama amaçlı üçüncü kişilerle
          paylaşılmaz, yurt dışına aktarılmaz.
        </p>
        <h2>Saklama süresi</h2>
        <p>
          Teklif görüşmesiyle sınırlı kalan veriler en geç 2 yıl, sözleşme ilişkisine dönüşen
          süreçlerde ilgili mevzuattaki zamanaşımı süreleri boyunca saklanır ve süre sonunda silinir.
        </p>
        <h2>Haklarınız</h2>
        <p>
          KVKK m.11 kapsamında; verilerinizin işlenip işlenmediğini öğrenme, düzeltilmesini veya
          silinmesini isteme ve işlemeye itiraz etme haklarına sahipsiniz. Taleplerinizi{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> adresine iletebilirsiniz; başvurular
          en geç 30 gün içinde yanıtlanır.
        </p>
      </div>
    </div>
  );
}
