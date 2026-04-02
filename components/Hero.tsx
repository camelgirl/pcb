export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#09090b]">
      {/* Circuit grid layers */}
      <div className="absolute inset-0 circuit-grid opacity-100 pointer-events-none"></div>
      <div className="absolute inset-0 via-overlay opacity-60 pointer-events-none"></div>

      {/* Copper blobs */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-copper-500/8 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-copper-500/8 blur-3xl"></div>

      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="flex flex-col gap-12 md:flex-row md:items-center">

          {/* Left column */}
          <div className="md:w-7/12 animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-copper-800/40 bg-copper-900/20 px-4 py-1.5 font-mono text-xs text-copper-400 mb-7">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
              US-based sourcing agent — backed by leading PCB manufacturers in China
            </div>

            <h1 className="font-display text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight text-zinc-100">
              YOUR ONE-STOP SHOP FOR
              <br />
              <span className="copper-text">PCB &amp; PCBA</span>
              <br />
              MANUFACTURING
            </h1>
            <p className="mt-6 font-sans text-zinc-400 text-lg leading-relaxed max-w-xl">
              From concept to creation — we handle technical support, manufacturing coordination,
              quality assurance, and logistics so your team stays focused on engineering.
            </p>

            {/* CTA buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="btn-copper inline-flex items-center justify-center rounded-xl px-7 py-3.5 font-display text-base focus:outline-none focus:ring-2 focus:ring-copper-500/40"
              >
                Contact us
                <svg
                  aria-hidden="true"
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
              <a
                href="#capabilities"
                className="btn-ghost inline-flex items-center justify-center rounded-xl px-7 py-3.5 font-display text-base focus:outline-none"
              >
                Our capabilities
              </a>
            </div>

            {/* Stat mini-cards */}
            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3 animate-fade-up-delay-2">
              <div className="card-dark rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-copper-500 to-copper-700 shadow-copper-sm">
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <div className="font-display text-sm font-bold text-zinc-100">US-based speed</div>
                </div>
                <div className="font-sans text-sm text-zinc-400">
                  Same-timezone response loops. No late-night overseas follow-ups.
                </div>
              </div>
              <div className="card-dark rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-copper-500 to-copper-700 shadow-copper-sm">
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"
                      />
                    </svg>
                  </span>
                  <div className="font-display text-sm font-bold text-zinc-100">2L–46L &amp; HDI</div>
                </div>
                <div className="font-sans text-sm text-zinc-400">
                  Standard through advanced HDI, Flex, Rigid-Flex, and PCBA.
                </div>
              </div>
              <div className="card-dark rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-copper-500 to-copper-700 shadow-copper-sm">
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </span>
                  <div className="font-display text-sm font-bold text-zinc-100">China manufacturing</div>
                </div>
                <div className="font-sans text-sm text-zinc-400">
                  Backed by leading PCB manufacturers in China.
                </div>
              </div>
            </div>
          </div>

          {/* Right column — decorative circuit board SVG art */}
          <div className="md:w-5/12 flex items-center justify-center animate-fade-up-delay-1">
            <svg
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full max-w-sm opacity-50"
              aria-hidden="true"
            >
              {/* Grid traces */}
              {/* Horizontal traces */}
              <path d="M20 60 H160" stroke="#d4a853" strokeWidth="1.5" />
              <path d="M20 60 V120" stroke="#d4a853" strokeWidth="1.5" />
              <path d="M20 120 H100" stroke="#d4a853" strokeWidth="1.5" />
              <path d="M100 120 V180" stroke="#d4a853" strokeWidth="1.5" />
              <path d="M100 180 H200" stroke="#d4a853" strokeWidth="1.5" />
              <path d="M200 60 H380" stroke="#d4a853" strokeWidth="1.5" />
              <path d="M200 60 V180" stroke="#d4a853" strokeWidth="1.5" />
              <path d="M200 180 H380" stroke="#d4a853" strokeWidth="1.5" />
              <path d="M380 60 V180" stroke="#d4a853" strokeWidth="1.5" />

              <path d="M60 180 V240" stroke="#d4a853" strokeWidth="1.5" />
              <path d="M60 240 H180" stroke="#d4a853" strokeWidth="1.5" />
              <path d="M180 240 V300" stroke="#d4a853" strokeWidth="1.5" />
              <path d="M180 300 H340" stroke="#d4a853" strokeWidth="1.5" />
              <path d="M340 180 V300" stroke="#d4a853" strokeWidth="1.5" />

              <path d="M20 300 H100" stroke="#d4a853" strokeWidth="1.5" />
              <path d="M20 300 V360" stroke="#d4a853" strokeWidth="1.5" />
              <path d="M20 360 H380" stroke="#d4a853" strokeWidth="1.5" />
              <path d="M380 300 V360" stroke="#d4a853" strokeWidth="1.5" />

              {/* Dotted signal traces */}
              <path d="M100 60 H200" stroke="#d4a853" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
              <path d="M60 120 H160" stroke="#d4a853" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
              <path d="M260 180 V300" stroke="#d4a853" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
              <path d="M60 300 V360" stroke="#d4a853" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
              <path d="M340 60 V180" stroke="#d4a853" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />

              {/* Via circles at intersections */}
              <circle cx="20" cy="60" r="4" fill="#d4a853" opacity="0.7" />
              <circle cx="160" cy="60" r="3" fill="none" stroke="#d4a853" strokeWidth="1.5" opacity="0.7" />
              <circle cx="200" cy="60" r="4" fill="#d4a853" opacity="0.7" />
              <circle cx="380" cy="60" r="3" fill="none" stroke="#d4a853" strokeWidth="1.5" opacity="0.7" />
              <circle cx="20" cy="120" r="3" fill="none" stroke="#d4a853" strokeWidth="1.5" opacity="0.6" />
              <circle cx="100" cy="120" r="4" fill="#d4a853" opacity="0.65" />
              <circle cx="100" cy="180" r="3" fill="none" stroke="#d4a853" strokeWidth="1.5" opacity="0.6" />
              <circle cx="200" cy="180" r="4" fill="#d4a853" opacity="0.7" />
              <circle cx="380" cy="180" r="3" fill="none" stroke="#d4a853" strokeWidth="1.5" opacity="0.6" />
              <circle cx="60" cy="240" r="4" fill="#d4a853" opacity="0.65" />
              <circle cx="180" cy="240" r="3" fill="none" stroke="#d4a853" strokeWidth="1.5" opacity="0.6" />
              <circle cx="180" cy="300" r="4" fill="#d4a853" opacity="0.7" />
              <circle cx="340" cy="300" r="3" fill="none" stroke="#d4a853" strokeWidth="1.5" opacity="0.6" />
              <circle cx="20" cy="360" r="4" fill="#d4a853" opacity="0.65" />
              <circle cx="380" cy="360" r="4" fill="#d4a853" opacity="0.65" />
              <circle cx="260" cy="180" r="3" fill="none" stroke="#d4a853" strokeWidth="1.5" opacity="0.5" />
              <circle cx="260" cy="300" r="3" fill="none" stroke="#d4a853" strokeWidth="1.5" opacity="0.5" />

              {/* IC component rectangle — large central IC */}
              <rect x="210" y="75" width="160" height="90" rx="4"
                fill="#1c1c20" stroke="#d4a853" strokeWidth="1.5" opacity="0.8" />
              <rect x="220" y="85" width="140" height="70" rx="2"
                fill="none" stroke="#d4a853" strokeWidth="0.75" opacity="0.35" />
              {/* IC label */}
              <text x="290" y="122" textAnchor="middle" fontSize="9" fill="#d4a853" opacity="0.7"
                fontFamily="monospace" fontWeight="600">PCB-01</text>
              <text x="290" y="134" textAnchor="middle" fontSize="7" fill="#d4a853" opacity="0.45"
                fontFamily="monospace">BRIDGE</text>
              {/* IC pin marks */}
              <path d="M210 90 H200" stroke="#d4a853" strokeWidth="1" opacity="0.5" />
              <path d="M210 100 H200" stroke="#d4a853" strokeWidth="1" opacity="0.5" />
              <path d="M210 110 H200" stroke="#d4a853" strokeWidth="1" opacity="0.5" />
              <path d="M210 120 H200" stroke="#d4a853" strokeWidth="1" opacity="0.5" />
              <path d="M210 130 H200" stroke="#d4a853" strokeWidth="1" opacity="0.5" />
              <path d="M210 140 H200" stroke="#d4a853" strokeWidth="1" opacity="0.5" />
              <path d="M370 90 H380" stroke="#d4a853" strokeWidth="1" opacity="0.5" />
              <path d="M370 100 H380" stroke="#d4a853" strokeWidth="1" opacity="0.5" />
              <path d="M370 110 H380" stroke="#d4a853" strokeWidth="1" opacity="0.5" />
              <path d="M370 120 H380" stroke="#d4a853" strokeWidth="1" opacity="0.5" />
              <path d="M370 130 H380" stroke="#d4a853" strokeWidth="1" opacity="0.5" />
              <path d="M370 140 H380" stroke="#d4a853" strokeWidth="1" opacity="0.5" />
              <path d="M230 75 V65" stroke="#d4a853" strokeWidth="1" opacity="0.5" />
              <path d="M250 75 V65" stroke="#d4a853" strokeWidth="1" opacity="0.5" />
              <path d="M270 75 V65" stroke="#d4a853" strokeWidth="1" opacity="0.5" />
              <path d="M290 75 V65" stroke="#d4a853" strokeWidth="1" opacity="0.5" />
              <path d="M310 75 V65" stroke="#d4a853" strokeWidth="1" opacity="0.5" />
              <path d="M330 75 V65" stroke="#d4a853" strokeWidth="1" opacity="0.5" />
              <path d="M350 75 V65" stroke="#d4a853" strokeWidth="1" opacity="0.5" />
              <path d="M230 165 V175" stroke="#d4a853" strokeWidth="1" opacity="0.5" />
              <path d="M255 165 V175" stroke="#d4a853" strokeWidth="1" opacity="0.5" />
              <path d="M280 165 V175" stroke="#d4a853" strokeWidth="1" opacity="0.5" />
              <path d="M305 165 V175" stroke="#d4a853" strokeWidth="1" opacity="0.5" />
              <path d="M330 165 V175" stroke="#d4a853" strokeWidth="1" opacity="0.5" />
              <path d="M355 165 V175" stroke="#d4a853" strokeWidth="1" opacity="0.5" />

              {/* Small IC left */}
              <rect x="25" y="195" width="80" height="55" rx="3"
                fill="#1c1c20" stroke="#d4a853" strokeWidth="1.5" opacity="0.7" />
              <text x="65" y="226" textAnchor="middle" fontSize="8" fill="#d4a853" opacity="0.6"
                fontFamily="monospace">MCU</text>
              <path d="M25 205 H15" stroke="#d4a853" strokeWidth="1" opacity="0.5" />
              <path d="M25 215 H15" stroke="#d4a853" strokeWidth="1" opacity="0.5" />
              <path d="M25 225 H15" stroke="#d4a853" strokeWidth="1" opacity="0.5" />
              <path d="M25 235 H15" stroke="#d4a853" strokeWidth="1" opacity="0.5" />
              <path d="M105 205 H115" stroke="#d4a853" strokeWidth="1" opacity="0.5" />
              <path d="M105 220 H115" stroke="#d4a853" strokeWidth="1" opacity="0.5" />
              <path d="M105 235 H115" stroke="#d4a853" strokeWidth="1" opacity="0.5" />

              {/* Resistor component symbols */}
              <rect x="130" y="110" width="20" height="8" rx="1"
                fill="#1c1c20" stroke="#d4a853" strokeWidth="1" opacity="0.6" />
              <path d="M120 114 H130" stroke="#d4a853" strokeWidth="1" opacity="0.5" />
              <path d="M150 114 H160" stroke="#d4a853" strokeWidth="1" opacity="0.5" />

              <rect x="50" y="268" width="20" height="8" rx="1"
                fill="#1c1c20" stroke="#d4a853" strokeWidth="1" opacity="0.6" />
              <path d="M40 272 H50" stroke="#d4a853" strokeWidth="1" opacity="0.5" />
              <path d="M70 272 H80" stroke="#d4a853" strokeWidth="1" opacity="0.5" />

              {/* Capacitor symbols */}
              <path d="M195 210 V225" stroke="#d4a853" strokeWidth="1.2" opacity="0.6" />
              <path d="M190 213 H200" stroke="#d4a853" strokeWidth="1.2" opacity="0.6" />
              <path d="M190 221 H200" stroke="#d4a853" strokeWidth="1.2" opacity="0.6" />
              <path d="M195 225 V235" stroke="#d4a853" strokeWidth="1.2" opacity="0.5" />

              {/* Bottom medium IC */}
              <rect x="50" y="315" width="110" height="35" rx="3"
                fill="#1c1c20" stroke="#d4a853" strokeWidth="1.5" opacity="0.65" />
              <text x="105" y="337" textAnchor="middle" fontSize="8" fill="#d4a853" opacity="0.55"
                fontFamily="monospace">FPGA-01</text>
              <path d="M60 315 V305" stroke="#d4a853" strokeWidth="1" opacity="0.45" />
              <path d="M80 315 V305" stroke="#d4a853" strokeWidth="1" opacity="0.45" />
              <path d="M100 315 V305" stroke="#d4a853" strokeWidth="1" opacity="0.45" />
              <path d="M120 315 V305" stroke="#d4a853" strokeWidth="1" opacity="0.45" />
              <path d="M140 315 V305" stroke="#d4a853" strokeWidth="1" opacity="0.45" />
              <path d="M60 350 V360" stroke="#d4a853" strokeWidth="1" opacity="0.45" />
              <path d="M90 350 V360" stroke="#d4a853" strokeWidth="1" opacity="0.45" />
              <path d="M120 350 V360" stroke="#d4a853" strokeWidth="1" opacity="0.45" />
              <path d="M150 350 V360" stroke="#d4a853" strokeWidth="1" opacity="0.45" />

              {/* Right side connector block */}
              <rect x="210" y="315" width="120" height="35" rx="3"
                fill="#1c1c20" stroke="#d4a853" strokeWidth="1.5" opacity="0.65" />
              <text x="270" y="337" textAnchor="middle" fontSize="8" fill="#d4a853" opacity="0.55"
                fontFamily="monospace">CONN-J1</text>
              <path d="M215 350 V360" stroke="#d4a853" strokeWidth="1" opacity="0.45" />
              <path d="M230 350 V360" stroke="#d4a853" strokeWidth="1" opacity="0.45" />
              <path d="M245 350 V360" stroke="#d4a853" strokeWidth="1" opacity="0.45" />
              <path d="M260 350 V360" stroke="#d4a853" strokeWidth="1" opacity="0.45" />
              <path d="M275 350 V360" stroke="#d4a853" strokeWidth="1" opacity="0.45" />
              <path d="M290 350 V360" stroke="#d4a853" strokeWidth="1" opacity="0.45" />
              <path d="M305 350 V360" stroke="#d4a853" strokeWidth="1" opacity="0.45" />
              <path d="M320 350 V360" stroke="#d4a853" strokeWidth="1" opacity="0.45" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
