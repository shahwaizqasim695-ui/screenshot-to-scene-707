import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, Send, Feather } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Maxine Cross — Author" },
      {
        name: "description",
        content:
          "Write to Maxine Cross — reader letters, media and press enquiries, and correspondence about The Impossible Client.",
      },
      { property: "og:title", content: "Contact Maxine Cross" },
      {
        property: "og:description",
        content:
          "Write to Maxine Cross — reader letters, media enquiries, and correspondence about The Impossible Client.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const EMAIL = "Admin@shearforce.net";

function Contact() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const body = encodeURIComponent(`Dear Maxine,\n\n${message}\n\nWith regards,\n${name}`);
    const title = encodeURIComponent(subject || "A letter from a reader");
    window.location.href = `mailto:${EMAIL}?subject=${title}&body=${body}`;
  }

  const inputClass =
    "w-full border border-input bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold/50";

  return (
    <div>
      <section className="relative overflow-hidden pt-36 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--accent),transparent_65%)] opacity-60" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="eyebrow">Correspondence</p>
          <h1 className="mt-5 font-display text-5xl font-semibold text-foreground sm:text-6xl">
            Write a Letter
          </h1>
          <div className="ornament mx-auto mt-6 w-48 text-sm">
            <span>&#10022;</span>
          </div>
          <p className="mt-8 text-base leading-relaxed text-muted-foreground">
            Reader letters, media and press enquiries, or a simple hello — every
            note is read with pleasure. Letters open in your own mail application.
          </p>
        </div>
      </section>

      <section className="pb-28">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 lg:grid-cols-[1fr_1.3fr]">
          <aside className="flex flex-col gap-8 border border-border bg-card/50 p-10">
            <div>
              <Feather className="h-7 w-7 text-gold" />
              <h2 className="mt-4 font-display text-2xl font-semibold text-foreground">
                The writing desk
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                For all enquiries regarding <em>The Impossible Client</em>, interviews,
                review copies, and speaking invitations, please write to the author's
                desk below.
              </p>
            </div>
            <div className="ornament w-full text-xs">
              <span>&#10022;</span>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-gold" />
              <div>
                <p className="eyebrow text-[0.6rem]">Email</p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="mt-1 block text-sm text-foreground transition-colors hover:text-gold"
                >
                  {EMAIL}
                </a>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground/80">
              Replies may take a few days — the next novel is always whispering.
            </p>
          </aside>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="eyebrow text-[0.6rem]">Your name</span>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Aurelia"
                  className={inputClass}
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="eyebrow text-[0.6rem]">Subject</span>
                <input
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="A letter from a reader"
                  className={inputClass}
                />
              </label>
            </div>
            <label className="flex flex-col gap-2">
              <span className="eyebrow text-[0.6rem]">Your letter</span>
              <textarea
                required
                rows={9}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Dear Maxine, ..."
                className={inputClass + " resize-none"}
              />
            </label>
            <button type="submit" className="btn-primary self-start">
              <Send className="h-4 w-4" /> Send the letter
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
