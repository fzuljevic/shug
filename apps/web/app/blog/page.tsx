import type { Metadata } from "next";
import { ArticleCard, PageHeader, SectionHeader } from "@/components/editorial";

export const metadata: Metadata = {
  title: "Blog — Salt & Bread",
  description: "Essays and small notes from between the cooking.",
};

/* ------------------------------------------------------------------ */
/*  Placeholder content — swap for real data later                     */
/* ------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------ */

export default function BlogPage() {
  return (
    <div id="top">
      <PageHeader
        eyebrow="For slow days"
        aside="Blog"
        title={
          <>
            Notes from the edge <em className="font-light italic">of the table.</em>
          </>
        }
        intro="Longer reads and shorter thoughts from between the cooking — gathered slowly, kept close to the kitchen."
      />

      {/* ===================== ESSAYS GRID ===================== */}
      <section id="essays" className="border-t border-ink">
        <div className="mx-auto max-w-editorial px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <SectionHeader kicker="Longer reads" title="Essays" href="#archive" />

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
