import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, MoonStar } from "lucide-react";
import heroNight from "@/assets/hero-night.jpg";
import coverAsset from "@/assets/impossible-client-cover.jpg.asset.json";
import { book } from "@/lib/book";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maxine Cross — Author of The Impossible Client" },
      {
        name: "description",
        content:
          "Step into a world of elegant suspense. The Impossible Client, a novel of secrets, longing, and danger by Maxine Cross — published by The Collingwood Press.",
      },
      { property: "og:title", content: "Maxine Cross — Author of The Impossible Client" },
      {
        property: "og:description",
        content:
          "Elizabeth Withrow has spent years building a life no one can take from her. A novel of secrets, longing, and danger.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden pt-24 pb-16">
        <img
          src={heroNight}
          alt="Moonlit gates of an elegant estate"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="eyebrow">A novel of suspense by Maxine Cross</p>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
              The Impossible
              <br />
              <span className="text-gold">Client</span>
            </h1>
            <p className="mt-5 font-display text-2xl italic text-secondary">
              {book.tagline}
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Elizabeth Withrow has spent years building a life no one can take from her.
              But when Troy Anderson walks into her office, the past she escaped years ago
              begins moving closer — and this time, running may not be enough.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#the-impossible-client" className="btn-primary">
                Discover the novel <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#author" className="btn-outline">
                About Maxine
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[340px]">
            <div className="absolute -inset-6 rounded-full bg-lamplight/15 blur-3xl" />
            <img
              src={coverAsset.url}
              alt="The Impossible Client — book cover by Maxine Cross"
              className="cover-frame relative w-full"
              width={440}
              height={648}
            />
          </div>
        </div>
      </section>

      {/* The novel */}
      <section id="the-impossible-client" className="scroll-mt-24 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="eyebrow">The novel</p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-foreground sm:text-5xl">
            A story in the shadows
          </h2>
          <div className="ornament mx-auto mt-6 w-48 text-sm">
            <span>&#10022;</span>
          </div>
          <div className="mt-10 space-y-6 text-left text-base leading-relaxed text-muted-foreground sm:text-lg">
            {book.synopsis.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-center gap-3">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Paperback &middot; ISBN {book.isbn} &middot; {book.publisher}
            </p>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="border-y border-border bg-card/40 py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 text-center">
          <MoonStar className="h-7 w-7 text-gold" />
          <blockquote className="font-display text-2xl italic leading-snug text-foreground sm:text-4xl">
            &ldquo;Trusting him could mean risking her independence — and her heart.&rdquo;
          </blockquote>
          <p className="eyebrow text-[0.6rem] text-muted-foreground">
            {book.title}, by {book.author}
          </p>
        </div>
      </section>

      {/* Author teaser */}
      <section id="author" className="scroll-mt-24 py-24">
        <div className="mx-auto grid max-w-5xl items-center gap-14 px-6 md:grid-cols-2">
          <div>
            <p className="eyebrow">The author</p>
            <h2 className="mt-4 font-display text-4xl font-semibold text-foreground sm:text-5xl">
              Maxine Cross
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Maxine Cross writes the kind of stories she loves to lose herself in —
              elegant, romantic, sophisticated, and a bit mysterious. Her characters
              carry secrets, her romances walk a fine line between longing and danger,
              and her settings glow with lamplight and moonlit gardens.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              <em>The Impossible Client</em> is her debut novel of romantic suspense,
              published by The Collingwood Press.
            </p>
            <div className="mt-8">
              <a href="/about" className="btn-outline">
                Read her story
              </a>
            </div>
          </div>
          <div className="border border-border bg-card/50 p-10 text-center">
            <p className="font-display text-3xl italic leading-snug text-gold">
              &ldquo;Elegant, romantic,
              <br />
              sophisticated and
              <br />
              a bit mysterious.&rdquo;
            </p>
            <div className="ornament mx-auto mt-8 w-32 text-xs">
              <span>&#10022;</span>
            </div>
            <p className="eyebrow mt-6 text-[0.6rem] text-muted-foreground">
              The Maxine Cross signature
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative overflow-hidden py-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroNight})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="eyebrow">Stay in touch</p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-foreground sm:text-5xl">
            Correspond with Maxine
          </h2>
          <p className="mt-5 text-base text-muted-foreground">
            Questions about the novel, media enquiries, or a note to the author —
            all letters are welcome.
          </p>
          <div className="mt-9">
            <a href="/contact" className="btn-primary">
              Write a letter <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
