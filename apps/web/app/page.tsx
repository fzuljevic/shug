import Link from "next/link";
import { stagger } from "@/components/editorial";

/* ------------------------------------------------------------------ */
/*  Home — kept intentionally short: a small hero and three doorways.  */
/* ------------------------------------------------------------------ */

const SECTIONS = [
  {
    n: "01",
    label: "Guides",
    href: "/guides",
    blurb: "Things worth doing slowly — plans, routines, and the odd good habit.",
  },
  {
    n: "02",
    label: "Blog",
    href: "/blog",
    blurb: "Essays and small notes from between the projects.",
  },
  {
    n: "03",
    label: "Utils",
    href: "/utils",
    blurb: "Everyday conversions, timings, and quiet reference.",
  },
];

export default function Home() {
  return (
    <div id="top">
      {/* ===================== HERO / MASTHEAD ===================== */}
      <section className="mx-auto max-w-editorial px-5 pb-16 pt-14 sm:px-8 sm:pt-20 lg:px-12">
        <div className="flex items-center gap-4 animate-rise-in" style={stagger(0)}>
          <span className="eyebrow">Field notebook</span>
          <span className="rule w-16 animate-reveal-line" />
          <span className="eyebrow">Early version</span>
        </div>

        <h1
          className="font-display mt-8 max-w-4xl text-[clamp(2.6rem,7vw,6rem)] font-medium leading-[0.94] tracking-[-0.02em] animate-rise-in"
          style={stagger(1)}
        >
          The quiet beginning of an{" "}
          <em className="font-light italic">ongoing notebook.</em>
        </h1>

        <p
          className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft animate-rise-in sm:text-xl"
          style={stagger(2)}
        >
          A small place for ideas, notes, and everyday habits. No rush and no
          noise — just what&apos;s worth writing down. Start anywhere below.
        </p>
      </section>

      {/* ===================== THREE DOORWAYS ===================== */}
      <section className="border-t border-ink">
        <div className="mx-auto max-w-editorial px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
          <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-3">
            {SECTIONS.map((s, i) => (
              <Link
                key={s.href}
                href={s.href}
                className="group flex flex-col bg-paper p-7 transition-colors duration-300 hover:bg-panel sm:p-8 animate-rise-in"
                style={stagger(3 + i)}
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-6xl font-light leading-none text-ink/15 transition-colors duration-300 group-hover:text-ink/30">
                    {s.n}
                  </span>
                  <span className="font-mono text-[0.6rem] uppercase tracking-label text-ink-soft">
                    Section
                  </span>
                </div>

                <h2 className="font-display mt-10 text-3xl font-medium tracking-tight text-ink">
                  {s.label}
                </h2>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">
                  {s.blurb}
                </p>

                <span className="mt-8 inline-flex items-center gap-2 border-t border-line pt-4 font-mono text-[0.62rem] uppercase tracking-wide text-ink">
                  Open
                  <span
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
