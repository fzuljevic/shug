import type { CSSProperties, ReactNode } from "react";

/* ------------------------------------------------------------------ */
/*  Shared editorial building blocks                                   */
/*  Kept deliberately small — the same look across every page.         */
/* ------------------------------------------------------------------ */

/** Staggered entrance delay helper for `animate-rise-in`. */
export const stagger = (i: number): CSSProperties => ({
  animationDelay: `${i * 90}ms`,
});

/**
 * Masthead for an interior page. Mirrors the home hero, one notch smaller,
 * so every page opens the same way.
 */
export function PageHeader({
  eyebrow,
  aside,
  title,
  intro,
  meta,
}: {
  eyebrow: string;
  aside?: string;
  title: ReactNode;
  intro?: ReactNode;
  meta?: string[];
}) {
  return (
    <section className="mx-auto max-w-editorial px-5 pb-14 pt-14 sm:px-8 sm:pt-20 lg:px-12">
      <div className="flex items-center gap-4 animate-rise-in" style={stagger(0)}>
        <span className="eyebrow">{eyebrow}</span>
        <span className="rule w-16 animate-reveal-line" />
        {aside && <span className="eyebrow">{aside}</span>}
      </div>

      <h1
        className="font-display mt-7 text-[clamp(2.4rem,6vw,5rem)] font-medium leading-[0.96] tracking-[-0.02em] animate-rise-in"
        style={stagger(1)}
      >
        {title}
      </h1>

      {intro && (
        <p
          className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft animate-rise-in sm:text-xl"
          style={stagger(2)}
        >
          {intro}
        </p>
      )}

      {meta && meta.length > 0 && (
        <div
          className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[0.7rem] uppercase tracking-wide text-ink-soft animate-rise-in"
          style={stagger(3)}
        >
          {meta.map((m, i) => (
            <span key={m} className="flex items-center gap-x-5">
              {i > 0 && <span className="text-ink-faint">/</span>}
              {m}
            </span>
          ))}
        </div>
      )}
    </section>
  );
}

/** Small kicker + big title, with an optional right-aligned link. */
export function SectionHeader({
  kicker,
  title,
  href,
  linkLabel = "View all →",
}: {
  kicker: string;
  title: string;
  href?: string;
  linkLabel?: string;
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
          {linkLabel}
        </a>
      )}
    </div>
  );
}

/** Typographic article card — a big number stands in for a cover image. */
export function ArticleCard({
  n,
  cat,
  title,
  excerpt,
  author,
  read,
  href = "#",
}: {
  n: string;
  cat: string;
  title: string;
  excerpt: string;
  author: string;
  read: string;
  href?: string;
}) {
  return (
    <a
      href={href}
      className="group flex flex-col bg-paper p-7 transition-colors duration-300 hover:bg-panel sm:p-8"
    >
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
