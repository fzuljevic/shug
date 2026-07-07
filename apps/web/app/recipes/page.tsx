import type { Metadata } from "next";
import { PageHeader, SectionHeader } from "@/components/editorial";

export const metadata: Metadata = {
  title: "Recipes — Salt & Bread",
  description: "Things worth cooking slowly — bread, broth, and the odd good bite.",
};

/* ------------------------------------------------------------------ */
/*  Placeholder content — swap for real data later                     */
/* ------------------------------------------------------------------ */

const RECIPES = [
  {
    n: "01",
    cat: "Bread",
    title: "A slow country loaf",
    excerpt: "Flour, water, salt, and time. Mostly time.",
    time: "18 hr",
    yield: "1 loaf",
  },
  {
    n: "02",
    cat: "Soup",
    title: "White bean & rosemary",
    excerpt: "The kind of pot that quietly looks after itself.",
    time: "45 min",
    yield: "Serves 4",
  },
  {
    n: "03",
    cat: "Table",
    title: "Tomatoes, salt, good oil",
    excerpt: "Barely a recipe — more a reminder to keep it simple.",
    time: "10 min",
    yield: "Serves 2",
  },
  {
    n: "04",
    cat: "Pasta",
    title: "Garlic, oil, a little heat",
    excerpt: "Weeknight aglio e olio, cooked while the kettle sings.",
    time: "20 min",
    yield: "Serves 2",
  },
  {
    n: "05",
    cat: "Morning",
    title: "Soft eggs on toast",
    excerpt: "The first small ceremony of a slow day.",
    time: "8 min",
    yield: "Serves 1",
  },
  {
    n: "06",
    cat: "Sweet",
    title: "Olive oil & orange cake",
    excerpt: "Plain enough for breakfast, good enough for guests.",
    time: "1 hr",
    yield: "1 cake",
  },
];

/* the little "in the kitchen" index, echoing the original masthead panel */
const INDEX = [
  { n: "01", title: "A slow country loaf", cat: "Bread" },
  { n: "02", title: "White bean & rosemary", cat: "Soup" },
  { n: "03", title: "Tomatoes, salt, good oil", cat: "Table" },
  { n: "04", title: "Soft eggs on toast", cat: "Morning" },
];

/* ------------------------------------------------------------------ */

export default function RecipesPage() {
  return (
    <div id="top">
      <PageHeader
        eyebrow="From the kitchen"
        aside="Recipes"
        title={
          <>
            Things worth cooking <em className="font-light italic">slowly.</em>
          </>
        }
        intro="A short shelf of recipes — nothing fussy, nothing to prove. Bread that asks for patience, a pot that looks after itself, and a few good things for the table."
        meta={["6 recipes", "Feb 2026", "No fuss"]}
      />

      {/* ===================== RECIPE GRID ===================== */}
      <section className="border-t border-ink">
        <div className="mx-auto max-w-editorial px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <SectionHeader kicker="For slow days" title="The Shelf" />

          <div className="mt-12 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {RECIPES.map((r) => (
              <a
                key={r.n}
                href="#"
                className="group flex flex-col bg-paper p-7 transition-colors duration-300 hover:bg-panel sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-6xl font-light leading-none text-ink/15 transition-colors duration-300 group-hover:text-ink/30">
                    {r.n}
                  </span>
                  <span className="font-mono text-[0.6rem] uppercase tracking-label text-ink-soft">
                    {r.cat}
                  </span>
                </div>

                <h3 className="font-display mt-10 text-2xl font-medium leading-snug tracking-tight text-ink">
                  {r.title}
                </h3>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">
                  {r.excerpt}
                </p>

                <div className="mt-8 flex items-center justify-between border-t border-line pt-4 font-mono text-[0.62rem] uppercase tracking-wide text-ink-faint">
                  <span>{r.time}</span>
                  <span>{r.yield}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== KITCHEN INDEX ===================== */}
      <section className="border-t border-ink">
        <div className="mx-auto max-w-editorial px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeader kicker="Start here" title="If in doubt" />
              <p className="mt-6 max-w-sm text-ink-soft">
                A few we come back to most — the reliable ones, worth learning by
                heart before anything else.
              </p>
            </div>

            <aside className="lg:col-span-8">
              <div className="border border-line bg-panel/60 p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="eyebrow">In the kitchen</span>
                  <span className="font-mono text-[0.7rem] text-ink-faint">04</span>
                </div>
                <ol className="mt-6 divide-y divide-line">
                  {INDEX.map((item) => (
                    <li key={item.n}>
                      <a href="#" className="group flex items-baseline gap-4 py-4">
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
                        <span
                          aria-hidden
                          className="text-ink transition-transform duration-300 group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
