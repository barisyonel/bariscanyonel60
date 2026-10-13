import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { meta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = meta({
  title: "Gizlilik Politikası",
  description:
    "BCY Dijital web sitesinde hangi verilerin toplandığı, nasıl kullanıldığı, hangi hizmet sağlayıcılarla işlendiği ve çerez tercihlerinizi nasıl yöneteceğiniz.",
  path: "/gizlilik-politikasi",
});

const updated = "13 Ekim 2026";

export default function PrivacyPage() {
  return (
    <div className="container-x section-pad">
      <Breadcrumbs
        className="mx-auto mb-8 max-w-2xl"
        items={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Gizlilik Politikası", path: "/gizlilik-politikasi" },
        ]}
      />
      <div className="prose-bcy mx-auto max-w-2xl">
        <h1 className="text-3xl font-semibold md:text-4xl">Gizlilik Politikası</h1>
        <p className="mt-3 text-sm text-muted">Son güncelleme: {updated}</p>
        <p className="mt-6">
          Bu politika, {site.domain.replace("https://", "")} adresindeki web sitesini ziyaret
          ettiğinizde ve bizimle iletişime geçtiğinizde bilgilerinizin nasıl işlendiğini açıklar.
          Kişisel verilerin işlenmesine ilişkin yasal bilgilendirme için{" "}
          <Link href="/kvkk">KVKK Aydınlatma Metni</Link>’ni inceleyebilirsiniz.
        </p>

        <h2>Topladığımız bilgiler</h2>
        <ul>
          <li>
            <strong>İletişim formu:</strong> adınız, telefon numaranız, işletme türünüz ve mesajınız.
          </li>
          <li>
            <strong>WhatsApp ve telefon:</strong> bize yazdığınızda veya aradığınızda paylaştığınız
            bilgiler.
          </li>
          <li>
            <strong>Analitik veriler:</strong> yalnızca çerezlere onay verirseniz; ziyaret edilen
            sayfalar, cihaz ve tarayıcı türü gibi anonim kullanım bilgileri.
          </li>
        </ul>

        <h2>Bilgileri nasıl kullanıyoruz</h2>
        <p>
          Form ve mesaj bilgilerinizi yalnızca talebinize dönüş yapmak, teklif hazırlamak ve hizmet
          sürecini yürütmek için kullanırız. Bilgilerinizi satmayız ve pazarlama amacıyla üçüncü
          kişilerle paylaşmayız.
        </p>

        <h2>Hizmet sağlayıcılar</h2>
        <p>Site ve iletişim altyapısı için aşağıdaki hizmetlerden yararlanıyoruz:</p>
        <ul>
          <li>
            <strong>Vercel:</strong> sitenin barındırılması ve sunulması.
          </li>
          <li>
            <strong>Resend:</strong> iletişim formu mesajlarının bize e-posta olarak iletilmesi.
          </li>
          <li>
            <strong>Google (Analytics, Ads) ve Meta Pixel:</strong> yalnızca çerez onayı verdiğinizde,
            ziyaret ölçümü ve reklam performansı için.
          </li>
        </ul>
        <p>
          Bu sağlayıcılar verileri kendi gizlilik politikalarına göre ve kendi sunucularında
          işleyebilir.
        </p>

        <h2>Çerezler ve tercihleriniz</h2>
        <p>
          Sitenin çalışması için gerekli olan dışında hiçbir analitik veya reklam çerezi, siz çerez
          bildirimindeki “Kabul Et” butonuna basmadan yüklenmez. Onay tercihiniz tarayıcınızın yerel
          depolamasında saklanır; tarayıcı verilerini temizleyerek onayınızı geri alabilirsiniz.
        </p>

        <h2>Saklama süresi</h2>
        <p>
          Teklif görüşmesiyle sınırlı kalan iletişim bilgileri en geç 2 yıl saklanır. Hizmet
          ilişkisine dönüşen süreçlerde ilgili mevzuattaki süreler uygulanır.
        </p>

        <h2>Haklarınız ve iletişim</h2>
        <p>
          Hakkınızda tuttuğumuz bilgileri öğrenmek, düzeltilmesini veya silinmesini istemek için{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> adresine yazabilir ya da{" "}
          <a href={`tel:+${site.phoneRaw}`}>{site.phone}</a> numarasını arayabilirsiniz. Talepler en
          geç 30 gün içinde yanıtlanır.
        </p>
      </div>
    </div>
  );
}
