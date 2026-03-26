export default function Capabilities() {
  return (
    <section id="capabilities" className="bg-[#0d0d10]">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-copper-800/40 bg-copper-900/20 px-3 py-1 font-mono text-xs text-copper-400 mb-4">
            PCB Technologies
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight text-zinc-100">
            Broad technology range,
            <br />
            delivered reliably
          </h2>
          <p className="mt-4 font-sans text-lg text-zinc-400">
            From standard rigid boards to the most demanding HDI, backplane, and specialty
            constructions.
          </p>
        </div>

        {/* Product type cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="card-dark rounded-xl p-5">
            <div className="font-mono text-xs text-copper-400 uppercase tracking-wider mb-2">
              Rigid PCB — Line Cards
            </div>
            <div className="font-display font-semibold text-zinc-100 text-sm mb-1">2–40 Layers</div>
            <div className="text-sm text-zinc-400">
              Tight impedance control, buried &amp; blind vias, via-in-pad (VIPPO), copper fill.
              Board thickness 0.3–5.0 mm.
            </div>
          </div>
          <div className="card-dark rounded-xl p-5">
            <div className="font-mono text-xs text-copper-400 uppercase tracking-wider mb-2">
              Backplane
            </div>
            <div className="font-display font-semibold text-zinc-100 text-sm mb-1">2–56 Layers</div>
            <div className="text-sm text-zinc-400">
              High-speed backplane systems supporting 28G / 56G / 112G signaling. Back-drill,
              insertion loss management.
            </div>
          </div>
          <div className="card-dark rounded-xl p-5">
            <div className="font-mono text-xs text-copper-400 uppercase tracking-wider mb-2">
              Server / HPC
            </div>
            <div className="font-display font-semibold text-zinc-100 text-sm mb-1">20–40 Layers</div>
            <div className="text-sm text-zinc-400">
              Blade, rack, and cabinet server boards. Multi-platform (Purley, Whitely, Eagle
              Stream). 0.65 mm BGA pitch support.
            </div>
          </div>
          <div className="card-dark rounded-xl p-5">
            <div className="font-mono text-xs text-copper-400 uppercase tracking-wider mb-2">
              HDI
            </div>
            <div className="font-display font-semibold text-zinc-100 text-sm mb-1">4–30 Layers</div>
            <div className="text-sm text-zinc-400">
              Sequential lamination, 3+N+3, AnyLayer HDI. Laser holes ≥ 0.075 mm. PTH aspect
              ratio up to 40:1.
            </div>
          </div>
          <div className="card-dark rounded-xl p-5">
            <div className="font-mono text-xs text-copper-400 uppercase tracking-wider mb-2">
              Flex &amp; Rigid-Flex
            </div>
            <div className="font-display font-semibold text-zinc-100 text-sm mb-1">4–20 Layers</div>
            <div className="text-sm text-zinc-400">
              PI (polyimide) base material. Single, double, and multilayer flex; rigid-flex for
              space-constrained and wearable applications.
            </div>
          </div>
          <div className="card-dark rounded-xl p-5">
            <div className="font-mono text-xs text-copper-400 uppercase tracking-wider mb-2">
              Specialty
            </div>
            <div className="font-display font-semibold text-zinc-100 text-sm mb-1">
              Metal (IMS), Embedded Coin, Optical
            </div>
            <div className="text-sm text-zinc-400">
              Aluminum &amp; copper-core IMS for thermal management. Embedded copper coin for
              power-dense modules. 100G–400G optical module boards.
            </div>
          </div>
        </div>

        {/* Specs + Materials two-column */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {/* Tech specs table */}
          <div className="bg-[#111113] border border-[rgba(212,168,83,0.10)] rounded-xl p-6">
            <div className="font-mono text-xs text-copper-400 uppercase tracking-wider mb-4">
              Manufacturing Specs
            </div>
            <div className="space-y-2.5 text-sm">
              <div className="flex justify-between">
                <span className="text-zinc-500">Board thickness</span>
                <span className="font-mono font-semibold text-zinc-100">0.3 – 5.0 mm</span>
              </div>
              <div className="h-px bg-[rgba(212,168,83,0.08)]"></div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Min. mechanical drill</span>
                <span className="font-mono font-semibold text-zinc-100">≥ 0.15 mm</span>
              </div>
              <div className="h-px bg-[rgba(212,168,83,0.08)]"></div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Min. laser hole</span>
                <span className="font-mono font-semibold text-zinc-100">≥ 0.075 mm</span>
              </div>
              <div className="h-px bg-[rgba(212,168,83,0.08)]"></div>
              <div className="flex justify-between">
                <span className="text-zinc-500">PTH aspect ratio</span>
                <span className="font-mono font-semibold text-zinc-100">Up to 40:1</span>
              </div>
              <div className="h-px bg-[rgba(212,168,83,0.08)]"></div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Min. BGA pitch</span>
                <span className="font-mono font-semibold text-zinc-100">0.65 mm</span>
              </div>
              <div className="h-px bg-[rgba(212,168,83,0.08)]"></div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Max layers (backplane)</span>
                <span className="font-mono font-semibold text-zinc-100">56 L</span>
              </div>
            </div>
          </div>
          {/* Materials & surface finish */}
          <div className="bg-[#111113] border border-[rgba(212,168,83,0.10)] rounded-xl p-6">
            <div className="font-mono text-xs text-copper-400 uppercase tracking-wider mb-4">
              Materials &amp; Surface Finish
            </div>
            <div className="mb-3">
              <div className="text-xs font-semibold text-zinc-400 mb-1.5">Materials</div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#1a1a1e] border border-zinc-800 text-zinc-400 rounded-full px-3 py-1 text-xs">
                  Mid &amp; High Tg (lead-free)
                </span>
                <span className="bg-[#1a1a1e] border border-zinc-800 text-zinc-400 rounded-full px-3 py-1 text-xs">
                  Halogen-free
                </span>
                <span className="bg-[#1a1a1e] border border-zinc-800 text-zinc-400 rounded-full px-3 py-1 text-xs">
                  High-frequency (PTFE)
                </span>
                <span className="bg-[#1a1a1e] border border-zinc-800 text-zinc-400 rounded-full px-3 py-1 text-xs">
                  High-speed (low/very low/ultra low loss)
                </span>
                <span className="bg-[#1a1a1e] border border-zinc-800 text-zinc-400 rounded-full px-3 py-1 text-xs">
                  Polyimide (PI)
                </span>
                <span className="bg-[#1a1a1e] border border-zinc-800 text-zinc-400 rounded-full px-3 py-1 text-xs">
                  Buried capacitance &amp; resistance
                </span>
              </div>
            </div>
            <div>
              <div className="text-xs font-semibold text-zinc-400 mb-1.5">Surface Finish</div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#1a1a1e] border border-zinc-800 text-zinc-400 rounded-full px-3 py-1 text-xs">
                  Lead-free HASL
                </span>
                <span className="bg-[#1a1a1e] border border-zinc-800 text-zinc-400 rounded-full px-3 py-1 text-xs">
                  ENIG
                </span>
                <span className="bg-[#1a1a1e] border border-zinc-800 text-zinc-400 rounded-full px-3 py-1 text-xs">
                  Immersion Tin
                </span>
                <span className="bg-[#1a1a1e] border border-zinc-800 text-zinc-400 rounded-full px-3 py-1 text-xs">
                  Immersion Silver
                </span>
                <span className="bg-[#1a1a1e] border border-zinc-800 text-zinc-400 rounded-full px-3 py-1 text-xs">
                  Gold Fingers
                </span>
                <span className="bg-[#1a1a1e] border border-zinc-800 text-zinc-400 rounded-full px-3 py-1 text-xs">
                  OSP + ENIG
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gradient-to-r from-[#1a1408] to-[#12100a] border border-copper-800/30 rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="font-display font-semibold text-zinc-100">Typical RFQ inputs</div>
            <div className="mt-1 font-sans text-sm text-zinc-400">
              Gerbers, stackup / impedance requirements, material preferences, quantity, lead time
              target, and any QA or certification needs.
            </div>
          </div>
          <a
            href="#contact"
            className="btn-copper shrink-0 inline-flex items-center justify-center rounded-xl px-6 py-3 font-display text-sm focus:outline-none focus:ring-2 focus:ring-copper-500/40"
          >
            Send an RFQ
            <svg
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
      </div>
    </section>
  );
}
