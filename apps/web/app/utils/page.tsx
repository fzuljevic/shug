import type { Metadata } from "next";
import { PageHeader, SectionHeader } from "@/components/editorial";

export const metadata: Metadata = {
  title: "Utils — Field Notes",
  description: "Everyday conversions, timings, and quiet reference.",
};

/* ------------------------------------------------------------------ */
/*  Static reference — no data fetching, just useful tables.           */
/* ------------------------------------------------------------------ */

type Row = { label: string; value: string };
type Card = { n: string; kicker: string; title: string; note: string; rows: Row[] };

const CARDS: Card[] = [
  {
    n: "01",
    kicker: "By length",
    title: "Inches to centimeters",
    note: "Rough but reliable for the usual suspects.",
    rows: [
      { label: "1 inch", value: "2.54 cm" },
      { label: "1 foot", value: "30.48 cm" },
      { label: "1 yard", value: "0.91 m" },
      { label: "1 mile", value: "1.61 km" },
    ],
  },
  {
    n: "02",
    kicker: "Time",
    title: "Time zones at a glance",
    note: "UTC offsets for the ones we check most.",
    rows: [
      { label: "New York", value: "UTC−5" },
      { label: "London", value: "UTC+0" },
      { label: "Tokyo", value: "UTC+9" },
      { label: "Sydney", value: "UTC+11" },
    ],
  },
  {
    n: "03",
    kicker: "In a pinch",
    title: "Keyboard shortcuts",
    note: "When the mouse comes up a little short.",
    rows: [
      { label: "Copy", value: "Ctrl / Cmd + C" },
      { label: "Paste", value: "Ctrl / Cmd + V" },
      { label: "Undo", value: "Ctrl / Cmd + Z" },
      { label: "Find", value: "Ctrl / Cmd + F" },
    ],
  },
  {
    n: "04",
    kicker: "By the clock",
    title: "Simple timings",
    note: "The everyday ones, kept close to hand.",
    rows: [
      { label: "Short break", value: "5 min" },
      { label: "Pomodoro", value: "25 min" },
      { label: "Deep work block", value: "50 min" },
      { label: "Daily review", value: "10 min" },
    ],
  },
];

/* the small ready reckoner */
const UNITS = [
  { label: "1 byte", value: "8 bits" },
  { label: "1 kilobyte", value: "1,024 bytes" },
  { label: "1 megabyte", value: "1,024 KB" },
  { label: "1 gigabyte", value: "1,024 MB" },
];

/* ------------------------------------------------------------------ */

export default function UtilsPage() {
  return (
    <div id="top">
      <PageHeader
        eyebrow="Quiet reference"
        aside="Utils"
        title={
          <>
            The small things, <em className="font-light italic">kept to hand.</em>
          </>
        }
        intro="A handful of conversions and timings we always end up looking for. Nothing clever — just the numbers, close by, so the work needn't stop."
        meta={["Reference", "No sign-up", "Always here"]}
      />

      {/* ===================== REFERENCE CARDS ===================== */}
      <section className="border-t border-ink">
        <div className="mx-auto max-w-editorial px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <SectionHeader kicker="Look it up" title="Reference" />

          <div className="mt-12 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2">
            {CARDS.map((card) => (
              <div key={card.n} className="flex flex-col bg-paper p-7 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="font-display text-5xl font-light leading-none text-ink/15">
                    {card.n}
                  </span>
                  <span className="font-mono text-[0.6rem] uppercase tracking-label text-ink-soft">
                    {card.kicker}
                  </span>
                </div>

                <h3 className="font-display mt-8 text-2xl font-medium leading-snug tracking-tight text-ink">
                  {card.title}
                </h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-ink-soft">
                  {card.note}
                </p>

                <dl className="mt-6">
                  {card.rows.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-baseline justify-between gap-4 border-t border-line py-3 last:border-b"
                    >
                      <dt className="text-[0.9rem] text-ink">{row.label}</dt>
                      <dd className="text-right font-mono text-[0.7rem] uppercase tracking-wide text-ink-faint">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== READY RECKONER ===================== */}
      <section className="border-t border-ink bg-ink text-paper">
        <div className="mx-auto max-w-editorial px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="eyebrow text-paper/50">Off by heart</span>
              <h2 className="font-display mt-3 text-4xl font-medium tracking-tight sm:text-5xl">
                Bits &amp; bytes
              </h2>
              <p className="mt-6 max-w-sm text-paper/70">
                The four we&apos;ve stopped needing to look up — but they live
                here anyway, just in case.
              </p>
            </div>

            <dl className="lg:col-span-8">
              {UNITS.map((row) => (
                <div
                  key={row.label}
                  className="flex items-baseline justify-between gap-6 border-t border-paper/15 py-5 last:border-b"
                >
                  <dt className="font-display text-xl text-paper sm:text-2xl">
                    {row.label}
                  </dt>
                  <dd className="text-right font-mono text-[0.7rem] uppercase tracking-wide text-paper/60">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}
