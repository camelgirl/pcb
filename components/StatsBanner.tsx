export default function StatsBanner() {
  return (
    <section className="border-y border-[rgba(212,168,83,0.12)] bg-[#0d0d10]">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          <div>
            <div className="font-display text-5xl font-bold copper-text">40+</div>
            <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest mt-1">Years of PCB expertise</div>
          </div>
          <div>
            <div className="font-display text-5xl font-bold copper-text">10+</div>
            <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest mt-1">Major markets served</div>
          </div>
          <div>
            <div className="font-display text-5xl font-bold copper-text">100+</div>
            <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest mt-1">Global clients</div>
          </div>
          <div>
            <div className="font-display text-5xl font-bold copper-text">6</div>
            <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest mt-1">Factories in Asia</div>
          </div>
        </div>
      </div>
    </section>
  );
}
