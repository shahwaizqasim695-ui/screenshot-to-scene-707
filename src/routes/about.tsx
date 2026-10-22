import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Feather, MoonStar, Shield } from "lucide-react";
import heroNight from "@/assets/hero-night.jpg";
import coverAsset from "@/assets/impossible-client-cover.jpg.asset.json";
import { book } from "@/lib/book";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Maxine Cross — Author" },
      {
        name: "description",
        content:
          "Meet Maxine Cross, author of elegant, romantic, sophisticated, and mysterious novels of suspense, including her debut The Impossible Client.",
      },
      { property: "og:title", content: "About Maxine Cross — Author" },
      {
        property: "og:description",
        content:
          "Meet Maxine Cross — elegant, romantic, sophisticated, and a bit mysterious. Author of The Impossible Client.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const traits = [
  {
    icon: Feather,
    title: "Elegant",
    text: "Prose that moves quietly — polished, deliberate, and full of understated longing.",
  },
  {
    icon: MoonStar,
    title: "Romantic & Mysterious",
    text: "Attraction that walks a fine line with danger, in worlds lit by lamplight and moonlight.",
  },
  {
    icon: Shield,
    title: "Sophisticated",
    text: "Characters with careers, histories, and secrets worth keeping — grown-up suspense.",
  },
];

function About() {
  return (
    <div>
      <section className="relative overflow-hidden pt-36 pb-20">
        <img
          src={heroNight}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-25"
          loading="lazy"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="eyebrow">About the author</p>
          <h1 className="mt-5 font-display text-5xl font-semibold text-foreground sm:text-6xl">
            Maxine Cross
          </h1>
          <div className="ornament mx-auto mt-6 w-48 text-sm">
            <span>&#10022;</span>
          </div>
          <p className="mt-8 font-display text-xl italic leading-relaxed text-muted-foreground sm:text-2xl">
            &ldquo;I write for readers who like their romance with the lights low
            and a secret waiting in the next room.&rdquo;
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl space-y-6 px-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            Maxine Cross is the pen name of a novelist drawn to the shadowed corners
            of love stories — the moment when longing becomes dangerous, and the
            past refuses to stay buried. Her fiction is elegant, romantic,
            sophisticated, and a bit mysterious: evening gowns and locked doors,
            moonlit gardens and unanswered questions.
          </p>
          <p>
            Her debut novel, <em>{book.title}</em>, follows Elizabeth Withrow, a woman
            who has spent years building a life no one can take from her — until a
            wealthy, impossible client walks into her office, and a mysterious vehicle
            keeps appearing wherever she goes. Beneath the romance lies a question
            that drives every page: how far would you run to protect the secret of
            who you used to be?
          </p>
          <p>
            Maxine believes the best suspense doesn't shout. It whispers. It lets the
            reader feel the cold draft from a door someone forgot to close. When she
            isn't writing, she is reading, travelling through old cities in search of
            new shadows, and collecting the kind of details that only make sense at
            the end of a story.
          </p>
          <p>
            She publishes with The Collingwood Press and is at work on her next novel.
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-card/40 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="eyebrow">The signature</p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-foreground sm:text-4xl">
              What to expect on every page
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {traits.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="flex flex-col items-center gap-4 border border-border bg-background/60 p-8 text-center"
              >
                <Icon className="h-7 w-7 text-gold" />
                <h3 className="font-display text-2xl font-semibold text-foreground">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 px-6 text-center md:flex-row md:text-left">
          <img
            src={coverAsset.url}
            alt="The Impossible Client — book cover"
            className="cover-frame w-44 shrink-0"
            loading="lazy"
            width={440}
            height={648}
          />
          <div>
            <p className="eyebrow">Her debut</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
              {book.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {book.tagline} — A novel of secrets, longing, and danger, published by{" "}
              {book.publisher}.
            </p>
            <div className="mt-7">
              <a href="/" className="btn-primary">
                Discover the novel <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
