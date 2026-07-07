"use client";

import { useEffect, useState } from "react";
import { Ticker } from "./ticker";

const NAV = [
  { label: "Notes", href: "#essays" },
  { label: "Flavors", href: "#notes" },
  { label: "Kitchen", href: "#essays" },
  { label: "Archive", href: "#archive" },
  { label: "About", href: "#about" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <Ticker />

      <div
        className={`border-b transition-colors duration-500 ${
          scrolled
            ? "border-line bg-paper/85 backdrop-blur-md"
            : "border-transparent bg-paper"
        }`}
      >
        <div className="mx-auto flex max-w-editorial items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-12">
          {/* Wordmark */}
          <a href="#top" className="group flex items-baseline gap-3">
            <span className="font-display text-2xl font-medium tracking-tight text-ink sm:text-[1.7rem]">
              Salt&nbsp;&amp;&nbsp;Bread
            </span>
            <span className="hidden font-mono text-[0.6rem] uppercase tracking-label text-ink-faint sm:inline">
              Est. 2026
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="link-underline font-mono text-[0.72rem] uppercase tracking-wide text-ink-soft transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right utilities */}
          <div className="flex items-center gap-4">
            <a
              href="#subscribe"
              className="hidden items-center gap-2 border border-ink bg-ink px-4 py-2 font-mono text-[0.68rem] uppercase tracking-wide text-paper transition-colors hover:bg-transparent hover:text-ink sm:inline-flex"
            >
              Join
              <span aria-hidden>→</span>
            </a>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] border border-ink lg:hidden"
            >
              <span
                className={`h-px w-4 bg-ink transition-transform duration-300 ${
                  open ? "translate-y-[3px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-px w-4 bg-ink transition-transform duration-300 ${
                  open ? "-translate-y-[3px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-x-0 top-0 z-40 origin-top bg-paper transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ height: "100dvh" }}
      >
        <div className="flex h-full flex-col justify-between px-6 pb-10 pt-28">
          <nav className="flex flex-col">
            {NAV.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="group flex items-baseline justify-between border-b border-line py-5"
              >
                <span className="font-display text-4xl font-medium tracking-tight text-ink">
                  {item.label}
                </span>
                <span className="font-mono text-[0.7rem] text-ink-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </a>
            ))}
          </nav>

          <a
            href="#subscribe"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 border border-ink bg-ink py-4 font-mono text-xs uppercase tracking-wide text-paper"
          >
            Join the notebook →
          </a>
        </div>
      </div>
    </header>
  );
}
