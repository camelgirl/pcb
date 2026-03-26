export default function WhyUs() {
  return (
    <section id="why-us" className="bg-[#09090b]">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="grid gap-14 md:grid-cols-2 md:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-copper-800/40 bg-copper-900/20 px-3 py-1 font-mono text-xs text-copper-400 mb-4">
              Why Us
            </div>
            <h2 className="font-display text-4xl font-bold tracking-tight text-zinc-100">
              A US-based partner who stays accountable, quote to delivery
            </h2>
            <p className="mt-4 font-sans text-lg text-zinc-400">
              Our decentralized structure gives you a local team that takes full responsibility for
              your relationship — with the manufacturing depth of a global operation behind it.
            </p>

            <div className="mt-8 grid gap-3">
              {/* Feature 1 */}
              <div className="card-dark flex items-start gap-4 rounded-xl p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-copper-600 text-white shadow-copper-sm">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 21l1.9-5.7a8.5 8.5 0 113.8 3.8z"
                    />
                  </svg>
                </span>
                <div>
                  <div className="font-display font-semibold text-zinc-100">US-based, your timezone</div>
                  <div className="mt-1 font-sans text-sm text-zinc-400">
                    Planning calls, fast decisions, and escalations handled without waiting for
                    overseas business hours.
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="card-dark flex items-start gap-4 rounded-xl p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-copper-600 text-white shadow-copper-sm">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </span>
                <div>
                  <div className="font-display font-semibold text-zinc-100">Single point of accountability</div>
                  <div className="mt-1 font-sans text-sm text-zinc-400">
                    We own the communication loop — you don&apos;t chase updates across suppliers
                    and time zones.
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="card-dark flex items-start gap-4 rounded-xl p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-copper-600 text-white shadow-copper-sm">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </span>
                <div>
                  <div className="font-display font-semibold text-zinc-100">Enterprise-ready process</div>
                  <div className="mt-1 font-sans text-sm text-zinc-400">
                    Documentation, revision control, and quality records that scale with your
                    program.
                  </div>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="card-dark flex items-start gap-4 rounded-xl p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-copper-600 text-white shadow-copper-sm">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </span>
                <div>
                  <div className="font-display font-semibold text-zinc-100">Long-term relationship</div>
                  <div className="mt-1 font-sans text-sm text-zinc-400">
                    Customer satisfaction drives our operational excellence. We improve outcomes
                    across every repeat order.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#111113] border border-[rgba(212,168,83,0.12)] rounded-2xl p-8">
            <h3 className="font-display text-lg font-bold text-zinc-100">What you can expect</h3>
            <div className="mt-6 space-y-0">
              <div className="relative flex gap-4 pb-8 step-connector">
                <span className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-copper-500 font-display font-bold text-[#09090b] text-xs shadow-copper-sm">
                  1
                </span>
                <div className="pt-0.5">
                  <div className="font-display font-semibold text-zinc-100">Clear specs intake</div>
                  <div className="mt-1 font-sans text-sm text-zinc-400">
                    We ask the right questions upfront — board type, layers, material, impedance,
                    quantity, lead time, and QA requirements — to eliminate rework.
                  </div>
                </div>
              </div>
              <div className="relative flex gap-4 pb-8 step-connector">
                <span className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-copper-500 font-display font-bold text-[#09090b] text-xs shadow-copper-sm">
                  2
                </span>
                <div className="pt-0.5">
                  <div className="font-display font-semibold text-zinc-100">Coordinated build</div>
                  <div className="mt-1 font-sans text-sm text-zinc-400">
                    Our team collaborates with manufacturing and quality to satisfy all requirements.
                    You get status updates and escalation when it matters.
                  </div>
                </div>
              </div>
              <div className="relative flex gap-4">
                <span className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-copper-500 font-display font-bold text-[#09090b] text-xs shadow-copper-sm">
                  3
                </span>
                <div className="pt-0.5">
                  <div className="font-display font-semibold text-zinc-100">Delivery to your dock</div>
                  <div className="mt-1 font-sans text-sm text-zinc-400">
                    Logistics coordination, packaging, labeling, and incoming QA support — no
                    surprises at receiving.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-[#1a1408] border border-copper-800/30 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <svg
                  className="h-4 w-4 text-copper-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <div className="font-display text-sm font-semibold text-zinc-100">
                  Sustainable &amp; enterprise-grade
                </div>
              </div>
              <div className="font-sans text-sm text-zinc-400">
                We prioritize sustainable business growth alongside ESG responsibility — delivering
                operational excellence you can build a long-term supply chain on.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
