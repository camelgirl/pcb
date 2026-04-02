"use client";

import Logo from "./Logo";

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-[rgba(212,168,83,0.10)] bg-[#09090b]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        <a href="#" className="flex items-center gap-3 group">
          <Logo size={36} />
          <div className="leading-tight">
            <div className="font-display text-sm font-bold text-zinc-100">
              Bridge PCB
            </div>
            <div className="font-mono text-xs text-zinc-500">US-based sourcing agent</div>
          </div>
        </a>
        <nav
          className="hidden items-center gap-7 md:flex"
          aria-label="Primary"
        >
          <a className="nav-link text-sm text-zinc-400" href="#services">Services</a>
          <a className="nav-link text-sm text-zinc-400" href="#capabilities">Capabilities</a>
          <a className="nav-link text-sm text-zinc-400" href="#industries">Industries</a>
          <a className="nav-link text-sm text-zinc-400" href="#why-us">Why Us</a>
          <a className="nav-link text-sm text-zinc-400" href="#testimonial">Clients</a>
          <a className="nav-link text-sm text-zinc-400" href="#contact">Contact</a>
        </nav>
        <a
          href="#contact"
          className="btn-copper inline-flex items-center justify-center rounded-lg px-5 py-2.5 font-display text-sm focus:outline-none focus:ring-2 focus:ring-copper-500/40"
        >
          Contact us
          <svg
            aria-hidden="true"
            className="ml-1.5 h-4 w-4"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </a>
      </div>
    </header>
  );
}
