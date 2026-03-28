function CheckIcon() {
  return (
    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-copper-900/40 border border-copper-700/30">
      <svg
        className="h-2.5 w-2.5 text-copper-400"
        fill="none"
        viewBox="0 0 10 10"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <path d="M1.5 5l2.5 2.5 4.5-4.5" />
      </svg>
    </span>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative bg-[#09090b]">
      <div className="absolute inset-0 circuit-grid opacity-40 pointer-events-none"></div>
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-copper-800/40 bg-copper-900/20 px-3 py-1 font-mono text-xs text-copper-400 mb-4">
            What We Offer
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight text-zinc-100">
            Innovative products and services
            <br />
            from concept to creation
          </h2>
          <p className="mt-4 font-sans text-lg text-zinc-400">
            We adapt to the complexity of high-mix, low-to-high-volume production — with a US team
            that owns your success.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Card 1 */}
          <div className="card-dark rounded-2xl p-7 flex flex-col">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-copper-500 to-copper-700 shadow-copper-sm mb-5">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24">
                <rect
                  x="7"
                  y="7"
                  width="10"
                  height="10"
                  rx="1.5"
                  fill="white"
                  fillOpacity="0.25"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <path d="M4 10h3M4 12h3M4 14h3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M17 10h3M17 12h3M17 14h3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <path
                  d="M9.5 12l1.5 1.5 3-3"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="font-display text-base font-bold text-zinc-100">
              Technical &amp; Commercial Support
            </h3>
            <p className="mt-2 font-sans text-sm text-zinc-400 leading-relaxed flex-1">
              Our technical team reviews every project for manufacturing feasibility, identifies
              challenges early, and develops a clear roadmap with milestones and deadlines.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2 text-xs text-zinc-400">
                <CheckIcon />
                Feasibility &amp; DFM review
              </li>
              <li className="flex items-center gap-2 text-xs text-zinc-400">
                <CheckIcon />
                Project roadmap &amp; milestones
              </li>
              <li className="flex items-center gap-2 text-xs text-zinc-400">
                <CheckIcon />
                Supply chain &amp; logistics
              </li>
            </ul>
          </div>

          {/* Card 2 (highlighted) */}
          <div className="rounded-2xl bg-gradient-to-br from-[#1e1608] to-[#120f04] border border-copper-600/30 shadow-copper p-7 flex flex-col transition-transform duration-200 hover:-translate-y-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-copper-500 to-copper-700 shadow-copper-sm mb-5">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24">
                <rect
                  x="3"
                  y="15.5"
                  width="18"
                  height="3"
                  rx="1"
                  fill="white"
                  fillOpacity="0.2"
                  stroke="white"
                  strokeWidth="1.3"
                />
                <rect
                  x="3"
                  y="10.5"
                  width="18"
                  height="3"
                  rx="1"
                  fill="white"
                  fillOpacity="0.38"
                  stroke="white"
                  strokeWidth="1.3"
                />
                <rect
                  x="3"
                  y="5.5"
                  width="18"
                  height="3"
                  rx="1"
                  fill="white"
                  fillOpacity="0.6"
                  stroke="white"
                  strokeWidth="1.3"
                />
                <path
                  d="M8 5.5v13M16 5.5v13"
                  stroke="white"
                  strokeWidth="1"
                  strokeDasharray="1.5 1.5"
                  opacity="0.45"
                />
                <circle cx="8" cy="7" r="1.1" fill="white" />
                <circle cx="16" cy="7" r="1.1" fill="white" />
              </svg>
            </div>
            <h3 className="font-display text-base font-bold text-zinc-100">
              Reliable PCBs — Standard &amp; Complex
            </h3>
            <p className="mt-2 font-sans text-sm text-zinc-400 leading-relaxed flex-1">
              From simple 2-layer boards to 46-layer HDI, Flex, Rigid-Flex, and specialty
              substrates — we source the right board for your design.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2 text-xs text-zinc-400">
                <CheckIcon />
                2L–46L, HDI (AnyLayer, 3+N+3)
              </li>
              <li className="flex items-center gap-2 text-xs text-zinc-400">
                <CheckIcon />
                Flex, Rigid-Flex, Metal (IMS)
              </li>
              <li className="flex items-center gap-2 text-xs text-zinc-400">
                <CheckIcon />
                PCBA turnkey available
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="card-dark rounded-2xl p-7 flex flex-col">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-copper-500 to-copper-700 shadow-copper-sm mb-5">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path
                  d="M2 21V9.5L8 5.5l6 4V21H2z"
                  fill="white"
                  fillOpacity="0.2"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 21V12l6-3.5V21"
                  fill="white"
                  fillOpacity="0.15"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <rect x="5" y="15" width="2.5" height="6" rx="0.5" fill="white" fillOpacity="0.65" />
                <rect x="8.5" y="13" width="2.5" height="2.5" rx="0.5" fill="white" fillOpacity="0.5" />
                <rect x="16" y="13" width="2.5" height="2.5" rx="0.5" fill="white" fillOpacity="0.4" />
                <path
                  d="M8 9.5V7M8 7l-1.5-1M8 7l1.5-1"
                  stroke="white"
                  strokeWidth="1"
                  strokeLinecap="round"
                  opacity="0.5"
                />
              </svg>
            </div>
            <h3 className="font-display text-base font-bold text-zinc-100">Capacity for Long-Term Programs</h3>
            <p className="mt-2 font-sans text-sm text-zinc-400 leading-relaxed flex-1">
              Dedicated prototype and quick-turn capacity, plus production sites that scale with
              your program — from NPI through sustained volume.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2 text-xs text-zinc-400">
                <CheckIcon />
                Dedicated QTA &amp; prototype team
              </li>
              <li className="flex items-center gap-2 text-xs text-zinc-400">
                <CheckIcon />
                Prototype to production scale-up
              </li>
              <li className="flex items-center gap-2 text-xs text-zinc-400">
                <CheckIcon />
                On-time delivery management
              </li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="card-dark rounded-2xl p-7 flex flex-col">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-copper-500 to-copper-700 shadow-copper-sm mb-5">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path
                  d="M12 21.5L3 9.5 6.5 3.5h11L21 9.5 12 21.5z"
                  fill="white"
                  fillOpacity="0.2"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path d="M3 9.5h18" stroke="white" strokeWidth="1.5" />
                <path
                  d="M8.5 3.5l-2 6M15.5 3.5l2 6"
                  stroke="white"
                  strokeWidth="1.1"
                  opacity="0.55"
                />
                <path d="M9 9.5L12 3.5l3 6" stroke="white" strokeWidth="1.1" opacity="0.8" />
                <path
                  d="M9 9.5L12 21.5M15 9.5L12 21.5"
                  stroke="white"
                  strokeWidth="1.1"
                  opacity="0.55"
                />
              </svg>
            </div>
            <h3 className="font-display text-base font-bold text-zinc-100">Value-Added Services</h3>
            <p className="mt-2 font-sans text-sm text-zinc-400 leading-relaxed flex-1">
              Technical data review, cost optimization, and access to special materials — we help
              you get the best price while protecting performance.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2 text-xs text-zinc-400">
                <CheckIcon />
                Cost-saving design review
              </li>
              <li className="flex items-center gap-2 text-xs text-zinc-400">
                <CheckIcon />
                Special technologies &amp; materials
              </li>
              <li className="flex items-center gap-2 text-xs text-zinc-400">
                <CheckIcon />
                Incoming QA on request
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
