"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4001";

type HealthState = "checking" | "ok" | "error";

type FooterLink = { label: string; href: string };

const COLUMNS: { title: string; links: FooterLink[] }[] = [
  {
    title: "Read",
    links: [
      { label: "Recipes", href: "/recipes" },
      { label: "Blog", href: "/blog" },
      { label: "Utils", href: "/utils" },
      { label: "Home", href: "/" },
    ],
  },
  {
    title: "The Notebook",
    links: [
      { label: "About", href: "#" },
      { label: "Our approach", href: "#" },
      { label: "Contributors", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Elsewhere",
    links: [
      { label: "Newsletter", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "Bluesky", href: "#" },
      { label: "RSS", href: "#" },
    ],
  },
];

export function SiteFooter() {
  const [health, setHealth] = useState<HealthState>("checking");

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const res = await fetch(`${apiUrl}/api/health`, { cache: "no-store" });
        const data = await res.json();
        if (active) setHealth(res.ok && data.status === "ok" ? "ok" : "error");
      } catch {
        if (active) setHealth("error");
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  const statusLabel =
    health === "ok" ? "All good" : health === "error" ? "Reconnecting" : "Checking";

  return (
    <footer id="about" className="border-t border-ink bg-ink text-paper">
      <div className="mx-auto max-w-editorial px-5 py-16 sm:px-8 lg:px-12">
        {/* Big wordmark */}
        <div className="flex flex-col gap-10 border-b border-paper/15 pb-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow text-paper/50">Only just started · 2026</p>
            <h2 className="font-display mt-4 text-5xl font-medium leading-[0.9] tracking-tight sm:text-7xl">
              Salt&nbsp;&amp;&nbsp;Bread
            </h2>
          </div>
          <form
            id="subscribe"
            onSubmit={(e) => e.preventDefault()}
            className="w-full max-w-sm"
          >
            <label className="eyebrow text-paper/50">The odd note, no rush</label>
            <div className="mt-3 flex items-center border-b border-paper/40 pb-2">
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-transparent font-mono text-sm text-paper placeholder:text-paper/40 focus:outline-none"
              />
              <button
                type="submit"
                className="font-mono text-xs uppercase tracking-wide text-paper transition-opacity hover:opacity-60"
              >
                Join →
              </button>
            </div>
          </form>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-8 py-12 sm:grid-cols-3">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="eyebrow text-paper/50">{col.title}</p>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="link-underline text-sm text-paper/80 transition-colors hover:text-paper"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Colophon */}
        <div className="flex flex-col gap-4 border-t border-paper/15 pt-8 font-mono text-[0.66rem] uppercase tracking-wide text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Salt &amp; Bread — set in Fraunces &amp; Space Mono</span>
          <span className="inline-flex items-center gap-2">
            <span
              className={`inline-block h-1.5 w-1.5 rounded-full ${
                health === "ok"
                  ? "bg-paper"
                  : health === "error"
                    ? "bg-paper/40"
                    : "animate-pulse bg-paper/60"
              }`}
            />
            Status · {statusLabel}
          </span>
        </div>
      </div>
    </footer>
  );
}
