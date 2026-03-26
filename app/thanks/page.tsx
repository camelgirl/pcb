export default function ThanksPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 md:py-20 text-center">
      <div className="rounded-2xl border border-[rgba(212,168,83,0.12)] bg-[#111113] p-10">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 border border-green-500/30 mb-4">
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#22c55e" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="font-display text-3xl font-bold tracking-tight text-zinc-100">Message received</h1>
        <p className="mt-4 font-sans text-zinc-400">
          Thanks for reaching out. We&apos;ll get back to you shortly at your email.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-copper-500/10 border border-copper-500/30 px-5 py-2.5 font-display text-sm text-copper-200 hover:bg-copper-500/15 transition-colors"
        >
          Back to home
        </a>
      </div>
    </main>
  );
}

