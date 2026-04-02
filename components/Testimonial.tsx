function StarIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5 text-copper-400" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function Testimonial() {
  return (
    <section id="testimonial" className="bg-[#0d0d10]">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-copper-800/40 bg-copper-900/20 px-3 py-1 font-mono text-xs text-copper-400 mb-4">
            Client Feedback
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight text-zinc-100">
            Reviews that prove our support
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-[#111113] border border-[rgba(212,168,83,0.12)] rounded-2xl p-8 transition-all duration-200 hover:-translate-y-1 hover:border-[rgba(212,168,83,0.25)]">
            <div className="flex gap-1 mb-4">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <blockquote className="font-sans text-lg text-zinc-300 italic leading-relaxed">
              &quot;Boards arrived two days ahead of schedule. Impedance was spot-on, silkscreen clean, no
              lifted pads — our QA passed them first attempt. Having US-based support we could actually
              call made stackup questions painless.&quot;
            </blockquote>
            <div className="mt-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-copper-600 font-display font-bold text-sm text-[#09090b]">
                A
              </div>
              <div>
                <div className="font-display font-semibold text-zinc-100 text-sm">Anastasia</div>
                <div className="font-mono text-xs text-zinc-500">Hardware Engineer — Austin, TX</div>
              </div>
            </div>
          </div>

          <div className="bg-[#111113] border border-[rgba(212,168,83,0.12)] rounded-2xl p-8 transition-all duration-200 hover:-translate-y-1 hover:border-[rgba(212,168,83,0.25)]">
            <div className="flex gap-1 mb-4">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <blockquote className="font-sans text-lg text-zinc-300 italic leading-relaxed">
              &quot;We had a timeline risk mid-build. The team responded fast, coordinated with the
              manufacturer, and gave clear options. Updates were consistent — no guessing.&quot;
            </blockquote>
            <div className="mt-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-copper-600 font-display font-bold text-sm text-[#09090b]">
                J
              </div>
              <div>
                <div className="font-display font-semibold text-zinc-100 text-sm">Jordan</div>
                <div className="font-mono text-xs text-zinc-500">Product Lead — Seattle, WA</div>
              </div>
            </div>
          </div>

          <div className="bg-[#111113] border border-[rgba(212,168,83,0.12)] rounded-2xl p-8 transition-all duration-200 hover:-translate-y-1 hover:border-[rgba(212,168,83,0.25)]">
            <div className="flex gap-1 mb-4">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <blockquote className="font-sans text-lg text-zinc-300 italic leading-relaxed">
              &quot;QA support was excellent. They flagged potential issues early, shared evidence, and
              coordinated shipping so we received parts ready for assembly.&quot;
            </blockquote>
            <div className="mt-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-copper-600 font-display font-bold text-sm text-[#09090b]">
                M
              </div>
              <div>
                <div className="font-display font-semibold text-zinc-100 text-sm">Morgan</div>
                <div className="font-mono text-xs text-zinc-500">QA Manager — Chicago, IL</div>
              </div>
            </div>
          </div>

          <div className="bg-[#111113] border border-[rgba(212,168,83,0.12)] rounded-2xl p-8 transition-all duration-200 hover:-translate-y-1 hover:border-[rgba(212,168,83,0.25)]">
            <div className="flex gap-1 mb-4">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <blockquote className="font-sans text-lg text-zinc-300 italic leading-relaxed">
              &quot;Enterprise-ready process. We got documentation, clear checkpoints, and fast responses
              throughout. Repeat orders have been smooth.&quot;
            </blockquote>
            <div className="mt-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-copper-600 font-display font-bold text-sm text-[#09090b]">
                R
              </div>
              <div>
                <div className="font-display font-semibold text-zinc-100 text-sm">Rebecca</div>
                <div className="font-mono text-xs text-zinc-500">Operations — New York, NY</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-b from-[#1a1408] to-[#111113] border border-copper-800/30 rounded-2xl p-8 flex flex-col justify-between md:col-span-2 lg:col-span-2">
            <div>
              <div className="font-display text-4xl font-black copper-text mb-2">100+</div>
              <div className="font-display font-semibold text-zinc-100">Global clients served</div>
              <div className="mt-2 font-sans text-sm text-zinc-400">
                Trusted workflows for prototype through sustained production — with US-based communication.
              </div>
            </div>
            <a
              href="#contact"
              className="mt-8 btn-copper inline-flex items-center justify-center rounded-xl px-5 py-3 font-display text-sm focus:outline-none"
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
        </div>
      </div>
    </section>
  );
}
