import type { Metadata } from "next";
import { PageHeader, SectionHeader } from "@/components/editorial";

export const metadata: Metadata = {
  title: "Utils — Salt & Bread",
  description: "Kitchen conversions, timings, and quiet reference.",
};

/* ------------------------------------------------------------------ */
/*  Static kitchen reference — no data fetching, just useful tables.   */
/* ------------------------------------------------------------------ */

type Row = { label: string; value: string };
type Card = { n: string; kicker: string; title: string; note: string; rows: Row[] };

const CARDS: Card[] = [
  {
    n: "01",
    kicker: "By weight",
    title: "Cup to grams",
    note: "Rough but reliable for the usual suspects.",
    rows: [
      { label: "Flour, plain", value: "1 cup · 120 g" },
      { label: "Sugar, white", value: "1 cup · 200 g" },
      { label: "Butter", value: "1 cup · 227 g" },
      { label: "Water", value: "1 cup · 240 g" },
    ],
  },
  {
    n: "02",
    kicker: "Heat",
    title: "Oven temperatures",
    note: "Celsius, Fahrenheit, and the old gas marks.",
    rows: [
      { label: "Low", value: "150° · 300° · Gas 2" },
      { label: "Moderate", value: "180° · 350° · Gas 4" },
      { label: "Hot", value: "200° · 400° · Gas 6" },
      { label: "Very hot", value: "230° · 450° · Gas 8" },
    ],
  },
  {
    n: "03",
    kicker: "In a pinch",
    title: "Substitutions",
    note: "When the shelf comes up a little short.",
    rows: [
      { label: "1 cup buttermilk", value: "Milk + 1 tbsp lemon" },
      { label: "1 egg (baking)", value: "¼ cup yoghurt" },
      { label: "Self-raising", value: "Plain + 2 tsp baking powder" },
      { label: "1 tbsp cornflour", value: "2 tbsp plain flour" },
    ],
  },
  {
    n: "04",
    kicker: "By the clock",
    title: "Simple timings",
    note: "The everyday ones, kept close to hand.",
    rows: [
      { label: "Soft-boiled egg", value: "6 min" },
      { label: "Hard-boiled egg", value: "9 min" },
      { label: "White rice", value: "12 min" },
      { label: "Dried pasta", value: "9–11 min" },
    ],
  },
];

/* the small spoon-and-cup ready reckoner */
const SPOONS = [
  { label: "1 tablespoon", value: "3 teaspoons · 15 ml" },
  { label: "1 fluid ounce", value: "2 tablespoons · 30 ml" },
  { label: "1 cup", value: "16 tablespoons · 240 ml" },
  { label: "1 pinch", value: "≈ 1/16 teaspoon" },
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
        intro="A handful of conversions and timings we always end up looking for. Nothing clever — just the numbers, close by, so the cooking needn't stop."
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
                Spoons &amp; cups
              </h2>
              <p className="mt-6 max-w-sm text-paper/70">
                The four we&apos;ve stopped needing to look up — but they live
                here anyway, just in case.
              </p>
            </div>

            <dl className="lg:col-span-8">
              {SPOONS.map((row) => (
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
