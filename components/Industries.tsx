export default function Industries() {
  return (
    <section id="industries" className="relative bg-[#09090b]">
      <div className="absolute inset-0 circuit-grid opacity-30 pointer-events-none"></div>
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-copper-800/40 bg-copper-900/20 px-3 py-1 font-mono text-xs text-copper-400 mb-4">
            Industries We Serve
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight text-zinc-100">
            Built for the most demanding applications
          </h2>
          <p className="mt-4 font-sans text-lg text-zinc-400">
            Our manufacturing partners hold certifications for automotive, aerospace, medical, and
            high-reliability electronics.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* Communication */}
          <div className="card-dark rounded-2xl p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-copper-500 to-copper-700 shadow-copper-sm mb-5">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path
                  d="M5 8.5a9 9 0 0114 0"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path
                  d="M7.5 11a6 6 0 019 0"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  opacity="0.7"
                />
                <path
                  d="M10 13.5a3 3 0 014 0"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  opacity="0.45"
                />
                <circle cx="12" cy="15.5" r="1.5" fill="white" />
                <path d="M12 17v4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M9.5 21h5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="font-display font-bold text-zinc-100 mb-2">Communication &amp; Network</h3>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              Switch equipment (28G/56G/112G backbone), 5G AAU &amp; small cells, 100G–400G
              optical modules, power supply boards.
            </p>
            <div className="flex flex-wrap gap-1.5">
              <span className="bg-[#1c1c20] border border-zinc-800 text-zinc-500 rounded-full px-2.5 py-0.5 text-xs">
                5G mmWave
              </span>
              <span className="bg-[#1c1c20] border border-zinc-800 text-zinc-500 rounded-full px-2.5 py-0.5 text-xs">
                400G Optical
              </span>
              <span className="bg-[#1c1c20] border border-zinc-800 text-zinc-500 rounded-full px-2.5 py-0.5 text-xs">
                112G Backplane
              </span>
            </div>
          </div>

          {/* Servers / HPC */}
          <div className="card-dark rounded-2xl p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-copper-500 to-copper-700 shadow-copper-sm mb-5">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24">
                <rect
                  x="2"
                  y="3"
                  width="20"
                  height="5"
                  rx="1.5"
                  fill="white"
                  fillOpacity="0.25"
                  stroke="white"
                  strokeWidth="1.4"
                />
                <rect
                  x="2"
                  y="10"
                  width="20"
                  height="5"
                  rx="1.5"
                  fill="white"
                  fillOpacity="0.45"
                  stroke="white"
                  strokeWidth="1.4"
                />
                <rect
                  x="2"
                  y="17"
                  width="20"
                  height="4"
                  rx="1.5"
                  fill="white"
                  fillOpacity="0.2"
                  stroke="white"
                  strokeWidth="1.4"
                />
                <circle cx="18.5" cy="5.5" r="1.1" fill="white" />
                <circle cx="18.5" cy="12.5" r="1.1" fill="white" />
                <circle cx="18.5" cy="19" r="0.9" fill="white" opacity="0.5" />
                <path
                  d="M5 5.5h8M5 12.5h6"
                  stroke="white"
                  strokeWidth="1"
                  strokeLinecap="round"
                  opacity="0.45"
                />
              </svg>
            </div>
            <h3 className="font-display font-bold text-zinc-100 mb-2">Supercomputers &amp; Servers</h3>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              Blade, rack, and cabinet server boards. Flash &amp; hybrid storage. AI accelerator
              boards. Multi-platform (Purley, Whitely, Eagle Stream).
            </p>
            <div className="flex flex-wrap gap-1.5">
              <span className="bg-[#1c1c20] border border-zinc-800 text-zinc-500 rounded-full px-2.5 py-0.5 text-xs">
                HPC / AI
              </span>
              <span className="bg-[#1c1c20] border border-zinc-800 text-zinc-500 rounded-full px-2.5 py-0.5 text-xs">
                20–40 Layer
              </span>
              <span className="bg-[#1c1c20] border border-zinc-800 text-zinc-500 rounded-full px-2.5 py-0.5 text-xs">
                0.65mm BGA
              </span>
            </div>
          </div>

          {/* Automotive */}
          <div className="card-dark rounded-2xl p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-copper-500 to-copper-700 shadow-copper-sm mb-5">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path
                  d="M5 17.5V13.5L7.5 8h9l2.5 5.5v4H5z"
                  fill="white"
                  fillOpacity="0.2"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 13.5l1.5-3.5h5l1.5 3.5"
                  fill="white"
                  fillOpacity="0.35"
                  stroke="white"
                  strokeWidth="1.3"
                  strokeLinejoin="round"
                />
                <circle
                  cx="8.5"
                  cy="17.5"
                  r="2"
                  fill="white"
                  fillOpacity="0.2"
                  stroke="white"
                  strokeWidth="1.4"
                />
                <circle
                  cx="15.5"
                  cy="17.5"
                  r="2"
                  fill="white"
                  fillOpacity="0.2"
                  stroke="white"
                  strokeWidth="1.4"
                />
                <circle cx="8.5" cy="17.5" r="0.8" fill="white" />
                <circle cx="15.5" cy="17.5" r="0.8" fill="white" />
                <path
                  d="M2 17.5h3M19 17.5h3"
                  stroke="white"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  opacity="0.4"
                />
              </svg>
            </div>
            <h3 className="font-display font-bold text-zinc-100 mb-2">Automotive Electronics</h3>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              BMS/BCU for EV batteries, ADAS (radar, camera, LiDAR), ECU &amp; inverter control,
              infotainment. IATF 16949 certified.
            </p>
            <div className="flex flex-wrap gap-1.5">
              <span className="bg-[#1c1c20] border border-zinc-800 text-zinc-500 rounded-full px-2.5 py-0.5 text-xs">
                IATF 16949
              </span>
              <span className="bg-[#1c1c20] border border-zinc-800 text-zinc-500 rounded-full px-2.5 py-0.5 text-xs">
                EV / BMS
              </span>
              <span className="bg-[#1c1c20] border border-zinc-800 text-zinc-500 rounded-full px-2.5 py-0.5 text-xs">
                ADAS
              </span>
            </div>
          </div>

          {/* Aerospace */}
          <div className="card-dark rounded-2xl p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-copper-500 to-copper-700 shadow-copper-sm mb-5">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path
                  d="M12 2c-2.8 3.5-3.5 7.5-3.5 10h7C15.5 9.5 14.8 5.5 12 2z"
                  fill="white"
                  fillOpacity="0.35"
                  stroke="white"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.5 16l-2.5 4.5h3.5"
                  fill="white"
                  fillOpacity="0.2"
                  stroke="white"
                  strokeWidth="1.3"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.5 16l2.5 4.5h-3.5"
                  fill="white"
                  fillOpacity="0.2"
                  stroke="white"
                  strokeWidth="1.3"
                  strokeLinejoin="round"
                />
                <path d="M8.5 12h7v4h-7z" fill="white" fillOpacity="0.1" />
                <circle
                  cx="12"
                  cy="9"
                  r="2"
                  fill="white"
                  fillOpacity="0.55"
                  stroke="white"
                  strokeWidth="1.2"
                />
                <path
                  d="M10.5 20c.4 1.2 1 1.8 1.5 1.8s1.1-.6 1.5-1.8"
                  stroke="white"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.6"
                />
              </svg>
            </div>
            <h3 className="font-display font-bold text-zinc-100 mb-2">Aerospace &amp; Defense</h3>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              High-speed rail comms, aerospace-qualified boards, national defense programs. Nadcap
              &amp; AS9100 certified. Fast QTA sample capability.
            </p>
            <div className="flex flex-wrap gap-1.5">
              <span className="bg-[#1c1c20] border border-zinc-800 text-zinc-500 rounded-full px-2.5 py-0.5 text-xs">
                Nadcap
              </span>
              <span className="bg-[#1c1c20] border border-zinc-800 text-zinc-500 rounded-full px-2.5 py-0.5 text-xs">
                AS9100D
              </span>
              <span className="bg-[#1c1c20] border border-zinc-800 text-zinc-500 rounded-full px-2.5 py-0.5 text-xs">
                QTA / Fast-turn
              </span>
            </div>
          </div>

          {/* Industrial / Medical */}
          <div className="card-dark rounded-2xl p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-copper-500 to-copper-700 shadow-copper-sm mb-5">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path
                  d="M9 3h6v6h6v6h-6v6H9v-6H3v-6h6V3z"
                  fill="white"
                  fillOpacity="0.22"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.5 12H7.5l1.5-2.5 2.5 5 1.5-2.5H18.5"
                  stroke="white"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="font-display font-bold text-zinc-100 mb-2">Industrial Control &amp; Medical</h3>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              Medical imaging (ultrasound, CT, MRI), in-vitro analysis, life-support systems,
              industrial robots &amp; computers. ISO 13485 certified.
            </p>
            <div className="flex flex-wrap gap-1.5">
              <span className="bg-[#1c1c20] border border-zinc-800 text-zinc-500 rounded-full px-2.5 py-0.5 text-xs">
                ISO 13485
              </span>
              <span className="bg-[#1c1c20] border border-zinc-800 text-zinc-500 rounded-full px-2.5 py-0.5 text-xs">
                Medical Imaging
              </span>
              <span className="bg-[#1c1c20] border border-zinc-800 text-zinc-500 rounded-full px-2.5 py-0.5 text-xs">
                IPC Class 3
              </span>
            </div>
          </div>

          {/* Consumer */}
          <div className="card-dark rounded-2xl p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-copper-500 to-copper-700 shadow-copper-sm mb-5">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24">
                <rect
                  x="6.5"
                  y="2"
                  width="11"
                  height="19"
                  rx="2.5"
                  fill="white"
                  fillOpacity="0.2"
                  stroke="white"
                  strokeWidth="1.4"
                />
                <rect x="8.5" y="5" width="7" height="9.5" rx="1" fill="white" fillOpacity="0.42" />
                <circle cx="12" cy="18.5" r="1.2" fill="white" fillOpacity="0.75" />
                <path
                  d="M10.5 3.5h3"
                  stroke="white"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  opacity="0.5"
                />
                <path
                  d="M10 7h4M10 9h2.5M10 11h4M10 13h3"
                  stroke="white"
                  strokeWidth="0.85"
                  strokeLinecap="round"
                  opacity="0.65"
                />
              </svg>
            </div>
            <h3 className="font-display font-bold text-zinc-100 mb-2">Consumer Electronics</h3>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              Smartphones (HDI mass production), wearables (Rigid-Flex), smart home, MiniLED
              displays. Automated production with cleanliness control.
            </p>
            <div className="flex flex-wrap gap-1.5">
              <span className="bg-[#1c1c20] border border-zinc-800 text-zinc-500 rounded-full px-2.5 py-0.5 text-xs">
                HDI Mass Prod.
              </span>
              <span className="bg-[#1c1c20] border border-zinc-800 text-zinc-500 rounded-full px-2.5 py-0.5 text-xs">
                MiniLED
              </span>
              <span className="bg-[#1c1c20] border border-zinc-800 text-zinc-500 rounded-full px-2.5 py-0.5 text-xs">
                Wearables
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
