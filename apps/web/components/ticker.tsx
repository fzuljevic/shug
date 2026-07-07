const PHRASES = [
  "The quiet beginning of a kitchen story",
  "Flavors, notes, and small habits",
  "A little warmth, a little order, a little good taste",
  "For everything worth writing down",
  "Still early — we're building slowly",
];

export function Ticker() {
  // duplicated once so the -50% translate loops seamlessly
  const loop = [...PHRASES, ...PHRASES];

  return (
    <div className="overflow-hidden border-b border-ink/15 bg-ink text-paper">
      <div className="flex w-max animate-marquee whitespace-nowrap py-2 will-change-transform">
        {loop.map((phrase, i) => (
          <span
            key={i}
            className="flex items-center font-mono text-[0.66rem] uppercase tracking-label"
          >
            <span className="px-6">{phrase}</span>
            <span aria-hidden className="text-paper/40">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
