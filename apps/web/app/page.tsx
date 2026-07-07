import type { CSSProperties } from "react";

/* ------------------------------------------------------------------ */
/*  Placeholder content — swap for real data later                     */
/* ------------------------------------------------------------------ */

const ISSUE_INDEX = [
  { n: "01", title: "A little warmth, a little order", cat: "Note" },
  { n: "02", title: "On bread that asks for patience", cat: "Kitchen" },
  { n: "03", title: "Salt, oil, and three good things", cat: "Flavors" },
  { n: "04", title: "Notes from the edge of the table", cat: "Note" },
  { n: "05", title: "Small habits that stay", cat: "Habits" },
];

const ESSAYS = [
  {
    n: "01",
    cat: "Kitchen",
    title: "On bread and patience",
    excerpt: "Some things can't be hurried. Bread is one of them.",
    author: "The Editors",
    read: "4 min",
  },
  {
    n: "02",
    cat: "Flavors",
    title: "Salt, oil, and a little sea",
    excerpt: "Three things that are almost always enough.",
    author: "M. K.",
    read: "3 min",
  },
  {
    n: "03",
    cat: "Note",
    title: "A table for one",
    excerpt: "A small meal cooked without hurry, just for yourself.",
    author: "L. P.",
    read: "5 min",
  },
  {
    n: "04",
    cat: "Habits",
    title: "Small habits in the kitchen",
    excerpt: "What we quietly repeat shapes the way we cook.",
    author: "A. F.",
    read: "4 min",
  },
  {
    n: "05",
    cat: "Flavors",
    title: "The season a tomato makes sense",
    excerpt: "A short reminder that some things keep their own time.",
    author: "R. S.",
    read: "6 min",
  },
  {
    n: "06",
    cat: "Note",
    title: "For everything worth writing down",
    excerpt: "A few words on keeping a small kitchen notebook.",
    author: "The Editors",
    read: "3 min",
  },
];

const NOTES = [
  { date: "07.02", title: "The best ingredient is the one within reach", tag: "Kitchen" },
  { date: "03.02", title: "Salt at the end, not the start", tag: "Flavors" },
  { date: "28.01", title: "Slow turns out to be faster", tag: "Habit" },
  { date: "21.01", title: "Write down what didn't work, too", tag: "Note" },
];

/* small helper for staggered entrance delays */
const delay = (i: number): CSSProperties => ({ animationDelay: `${i * 90}ms` });

/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <div id="top">
      {/* ===================== HERO / MASTHEAD ===================== */}
      <section className="mx-auto max-w-editorial px-5 pb-16 pt-14 sm:px-8 sm:pt-20 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Lead */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 animate-rise-in" style={delay(0)}>
              <span className="eyebrow">Kitchen notebook</span>
              <span className="rule w-16 animate-reveal-line" />
              <span className="eyebrow">Early version</span>
            </div>

            <h1
              className="font-display mt-8 text-[clamp(2.6rem,7vw,6rem)] font-medium leading-[0.94] tracking-[-0.02em] animate-rise-in"
              style={delay(1)}
            >
              The quiet beginning of a{" "}
              <em className="font-light italic">kitchen story.</em>
            </h1>

            <div
              className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[0.7rem] uppercase tracking-wide text-ink-soft animate-rise-in"
              style={delay(2)}
            >
              <span>Intro</span>
              <span className="text-ink-faint">/</span>
              <span>Salt &amp; Bread</span>
              <span className="text-ink-faint">/</span>
              <span>2 min read</span>
              <span className="text-ink-faint">/</span>
              <span>Feb 2026</span>
            </div>

            <p
              className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft animate-rise-in sm:text-xl"
              style={delay(3)}
            >
              This is only the beginning — a quiet place for flavors, notes, and
              small kitchen habits. No rush and no noise, just gathering what&apos;s
              worth writing down: a little warmth, a little order, and the odd
              good bite. It&apos;s still early, and that suits us fine.
            </p>

            <a
              href="#essays"
              className="link-underline mt-10 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-wide text-ink animate-rise-in"
              style={delay(4)}
            >
              Look through the notes
              <span aria-hidden>→</span>
            </a>
          </div>

          {/* Index panel — the "table of contents" */}
          <aside
            className="lg:col-span-4 animate-rise-in"
            style={delay(3)}
          >
            <div className="border border-line bg-panel/60 p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <span className="eyebrow">In the notebook</span>
                <span className="font-mono text-[0.7rem] text-ink-faint">05</span>
              </div>
              <ol className="mt-6 divide-y divide-line">
                {ISSUE_INDEX.map((item) => (
                  <li key={item.n}>
                    <a
                      href="#essays"
                      className="group flex items-baseline gap-4 py-4"
                    >
                      <span className="font-mono text-[0.7rem] text-ink-faint">
                        {item.n}
                      </span>
                      <span className="flex-1">
                        <span className="font-display block text-lg leading-snug text-ink transition-opacity group-hover:opacity-60">
                          {item.title}
                        </span>
                        <span className="mt-1 block font-mono text-[0.6rem] uppercase tracking-label text-ink-faint">
                          {item.cat}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </section>

      {/* ===================== ESSAYS GRID ===================== */}
      <section id="essays" className="border-t border-ink">
        <div className="mx-auto max-w-editorial px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <SectionHeader kicker="For slow days" title="Notes" href="#archive" />

          <div className="mt-12 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {ESSAYS.map((essay) => (
              <ArticleCard key={essay.n} {...essay} />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== MANIFESTO BAND ===================== */}
      <section className="border-t border-ink bg-ink text-paper">
        <div className="mx-auto max-w-editorial px-5 py-24 sm:px-8 lg:px-12">
          <p className="eyebrow text-paper/50">Our small habit</p>
          <blockquote className="font-display mt-8 max-w-4xl text-[clamp(1.8rem,4.4vw,3.4rem)] font-light leading-[1.12] tracking-tight">
            “Nothing grand, really — a little warmth, a little order, and the
            odd good taste. What&apos;s made slowly{" "}
            <em className="italic">tends to stay with you longer.</em>”
          </blockquote>
          <div className="mt-10 flex items-center gap-4 font-mono text-[0.68rem] uppercase tracking-wide text-paper/60">
            <span className="rule w-10 bg-paper/40" />
            From the first note
          </div>
        </div>
      </section>

      {/* ===================== FIELD NOTES ===================== */}
      <section id="notes" className="border-t border-ink">
        <div className="mx-auto max-w-editorial px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeader kicker="In passing" title="Small Notes" />
              <p className="mt-6 max-w-sm text-ink-soft">
                Shorter notes from between the cooking — the little things that
                don&apos;t need a whole story to be true.
              </p>
            </div>

            <ol className="lg:col-span-8">
              {NOTES.map((note) => (
                <li key={note.title}>
                  <a
                    href="#"
                    className="group flex items-center gap-6 border-t border-line py-6 last:border-b"
                  >
                    <span className="font-mono text-[0.7rem] text-ink-faint">
                      {note.date}
                    </span>
                    <span className="font-display flex-1 text-xl leading-snug text-ink transition-opacity group-hover:opacity-60 sm:text-2xl">
                      {note.title}
                    </span>
                    <span className="hidden font-mono text-[0.6rem] uppercase tracking-label text-ink-faint sm:inline">
                      {note.tag}
                    </span>
                    <span
                      aria-hidden
                      className="translate-x-0 text-ink transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ===================== ARCHIVE CTA ===================== */}
      <section id="archive" className="border-t border-ink">
        <div className="mx-auto flex max-w-editorial flex-col items-start gap-8 px-5 py-20 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12">
          <div>
            <span className="eyebrow">From the first note onward</span>
            <h2 className="font-display mt-5 max-w-2xl text-[clamp(2rem,4.5vw,3.4rem)] font-medium leading-[1] tracking-tight">
              Everything worth writing down, in one quiet place.
            </h2>
          </div>
          <a
            href="#"
            className="group inline-flex shrink-0 items-center gap-3 border border-ink px-6 py-4 font-mono text-xs uppercase tracking-wide text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            Open the archive
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Local components                                                   */
/* ------------------------------------------------------------------ */

function SectionHeader({
  kicker,
  title,
  href,
}: {
  kicker: string;
  title: string;
  href?: string;
}) {
  return (
    <div className="flex items-end justify-between gap-6">
      <div>
        <span className="eyebrow">{kicker}</span>
        <h2 className="font-display mt-3 text-4xl font-medium tracking-tight sm:text-5xl">
          {title}
        </h2>
      </div>
      {href && (
        <a
          href={href}
          className="link-underline hidden shrink-0 font-mono text-[0.7rem] uppercase tracking-wide text-ink-soft transition-colors hover:text-ink sm:inline"
        >
          View all →
        </a>
      )}
    </div>
  );
}

function ArticleCard({
  n,
  cat,
  title,
  excerpt,
  author,
  read,
}: {
  n: string;
  cat: string;
  title: string;
  excerpt: string;
  author: string;
  read: string;
}) {
  return (
    <a
      href="#"
      className="group flex flex-col bg-paper p-7 transition-colors duration-300 hover:bg-panel sm:p-8"
    >
      {/* typographic "cover" — no images */}
      <div className="flex items-center justify-between">
        <span className="font-display text-6xl font-light leading-none text-ink/15 transition-colors duration-300 group-hover:text-ink/30">
          {n}
        </span>
        <span className="font-mono text-[0.6rem] uppercase tracking-label text-ink-soft">
          {cat}
        </span>
      </div>

      <h3 className="font-display mt-10 text-2xl font-medium leading-snug tracking-tight text-ink">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">
        {excerpt}
      </p>

      <div className="mt-8 flex items-center justify-between border-t border-line pt-4 font-mono text-[0.62rem] uppercase tracking-wide text-ink-faint">
        <span>{author}</span>
        <span>{read}</span>
      </div>
    </a>
  );
}
