import Image from "next/image";
import { getInstagramFeed, getInstagramProfileUrl } from "@/lib/instagram";

export async function InstagramReels() {
  const { items, connected } = await getInstagramFeed();
  const profile = getInstagramProfileUrl();

  return (
    <section id="dijital-feed" className="section-pad" aria-labelledby="reels-heading">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Instagram{connected ? " · Canlı" : ""}</p>
            <h2
              id="reels-heading"
              className="mt-3 max-w-2xl font-display text-3xl font-bold uppercase tracking-tight md:text-5xl"
            >
              Dijital feed
            </h2>
            <p className="mt-4 max-w-xl text-muted">
              {connected
                ? "Instagram hesabından güncel gönderiler ve Reels."
                : "Projeler, tasarım süreci ve günlük işlerden kısa kesitler."}
            </p>
          </div>
          <a
            href={profile}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-sm font-semibold text-accent"
          >
            Instagram’da bak →
          </a>
        </div>

        <div className="reels-scroll mt-10">
          {items.map((item) => (
            <a
              key={item.id}
              href={item.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-[11.5rem] overflow-hidden rounded-card border border-line bg-elevated sm:w-[14rem]"
            >
              <div className="relative aspect-[9/16]">
                <Image
                  src={item.cover}
                  alt={item.caption}
                  fill
                  sizes="(max-width: 640px) 46vw, 224px"
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-base via-transparent to-transparent" />
                <span className="absolute left-3 top-3 rounded-btn border border-accent/40 bg-base/70 px-2.5 py-1 text-[0.65rem] font-semibold tracking-wide text-accent backdrop-blur-sm">
                  {item.category}
                </span>
                <p className="absolute inset-x-3 bottom-3 font-display text-sm font-bold leading-snug text-ink">
                  {item.caption}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
