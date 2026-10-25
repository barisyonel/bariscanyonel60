import { ButtonLink } from "@/components/ui/ButtonLink";
import { defaultWa } from "@/lib/site";

const benefits = [
  "5 İş Gününde Teslim",
  "SEO + GEO Altyapısı",
  "Mobil Uyumlu Tasarım",
  "Alan Adı ve Site Size Ait",
] as const;

export function Hero() {
  return (
    <section id="anasayfa" aria-labelledby="home-h1" className="pb-8 pt-8 md:pb-14 md:pt-14">
      <div className="container-x">
        <p className="text-xs font-semibold tracking-[0.16em] text-accent">KURUMSAL WEB TASARIM</p>
        <h1
          id="home-h1"
          className="mt-3 max-w-[16ch] text-[clamp(1.9rem,4.8vw,3.6rem)] font-semibold leading-[1.08] text-ink"
        >
          İşletmenize Özel Profesyonel Web Sitesi Yaptırın
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:mt-5 md:text-lg">
          Hazır şablon değil, markanıza özel tasarım. Mobil uyumlu, hızlı, Google ve yapay zekâ
          aramalarına hazır profesyonel web siteleri.
        </p>
        <ul className="mt-6 grid max-w-xl grid-cols-2 gap-x-4 gap-y-2.5">
          {benefits.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm font-medium text-ink md:text-[0.95rem]">
              <span className="mt-0.5 text-accent" aria-hidden>
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/#teklif" className="w-full sm:w-auto">
            Ücretsiz Teklif Al
          </ButtonLink>
          <ButtonLink href={defaultWa} variant="ghost" external className="w-full sm:w-auto">
            WhatsApp&apos;tan Yaz
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
