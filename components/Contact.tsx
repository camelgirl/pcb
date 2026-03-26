"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const params = new URLSearchParams();
      data.forEach((value, key) => {
        params.append(key, String(value));
      });

      // Netlify Forms needs a static HTML target under `public/`.
      await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });

      setSubmitted(true);
      router.push("/thanks");
    } catch {
      setSubmitting(false);
      alert("Something went wrong — please email sales@bridgepcb.com directly.");
    }
  }

  return (
    <section id="contact" className="relative bg-[#09090b]">
      <div className="absolute inset-0 circuit-grid opacity-40 pointer-events-none"></div>
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-copper-800/40 bg-copper-900/20 px-3 py-1 font-mono text-xs text-copper-400 mb-4">
            Contact
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight text-zinc-100">
            Contact us
          </h2>
          <p className="mt-4 font-sans text-lg text-zinc-400">No friction. We&apos;ll respond quickly from the US.</p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl">
          <div className="bg-[#111113] border border-[rgba(212,168,83,0.12)] rounded-2xl p-8">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 border border-green-500/30 mx-auto mb-4">
                  <svg
                    width="32"
                    height="32"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#22c55e"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="font-display text-xl font-bold text-zinc-100">Request sent!</div>
                <div className="mt-2 font-sans text-zinc-400">
                  We&apos;ll get back to you at your email shortly.
                </div>
              </div>
            ) : (
              <form
                name="quote"
                method="POST"
                className="grid gap-5"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="quote" />
                <p className="hidden">
                  <label>
                    Don&apos;t fill this out: <input name="bot-field" />
                  </label>
                </p>

                <div className="grid gap-5 md:grid-cols-2">
                  <label className="grid gap-1.5">
                    <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
                      Name <span className="text-copper-500">*</span>
                    </span>
                    <input
                      required
                      name="name"
                      autoComplete="name"
                      className="w-full bg-[#0d0d10] border border-zinc-800 rounded-lg px-4 py-3 text-zinc-100 text-sm placeholder:text-zinc-600 focus:border-copper-600/60 focus:ring-2 focus:ring-copper-500/15 focus:outline-none transition-all"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="grid gap-1.5">
                    <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">Company</span>
                    <input
                      name="company"
                      autoComplete="organization"
                      className="w-full bg-[#0d0d10] border border-zinc-800 rounded-lg px-4 py-3 text-zinc-100 text-sm placeholder:text-zinc-600 focus:border-copper-600/60 focus:ring-2 focus:ring-copper-500/15 focus:outline-none transition-all"
                      placeholder="Company (optional)"
                    />
                  </label>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <label className="grid gap-1.5">
                    <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
                      Email <span className="text-copper-500">*</span>
                    </span>
                    <input
                      required
                      type="email"
                      name="email"
                      autoComplete="email"
                      className="w-full bg-[#0d0d10] border border-zinc-800 rounded-lg px-4 py-3 text-zinc-100 text-sm placeholder:text-zinc-600 focus:border-copper-600/60 focus:ring-2 focus:ring-copper-500/15 focus:outline-none transition-all"
                      placeholder="you@company.com"
                    />
                  </label>
                  <label className="grid gap-1.5">
                    <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">Phone</span>
                    <input
                      name="phone"
                      autoComplete="tel"
                      className="w-full bg-[#0d0d10] border border-zinc-800 rounded-lg px-4 py-3 text-zinc-100 text-sm placeholder:text-zinc-600 focus:border-copper-600/60 focus:ring-2 focus:ring-copper-500/15 focus:outline-none transition-all"
                      placeholder="(optional)"
                    />
                  </label>
                </div>

                <label className="grid gap-1.5">
                  <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
                    What do you need? <span className="text-copper-500">*</span>
                  </span>
                  <textarea
                    required
                    name="details"
                    rows={5}
                    className="w-full resize-y bg-[#0d0d10] border border-zinc-800 rounded-lg px-4 py-3 text-zinc-100 text-sm placeholder:text-zinc-600 focus:border-copper-600/60 focus:ring-2 focus:ring-copper-500/15 focus:outline-none transition-all"
                    placeholder="Board type, layers, material, quantity, lead time target, impedance needs, PCBA requirements, and any QA or certification needs."
                  ></textarea>
                </label>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-copper inline-flex items-center justify-center rounded-lg px-7 py-3.5 font-display text-base focus:outline-none focus:ring-2 focus:ring-copper-500/40 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Sending…" : "Submit request"}
                    {!submitting && (
                      <svg
                        className="ml-2 h-4 w-4"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M3 8h10M9 4l4 4-4 4" />
                      </svg>
                    )}
                  </button>
                  <div className="font-sans text-sm text-zinc-500">
                    Prefer email?{" "}
                    <a
                      className="text-copper-400 hover:text-copper-300 underline underline-offset-2 transition-colors"
                      href="mailto:sales@bridgepcb.com"
                    >
                      sales@bridgepcb.com
                    </a>
                  </div>
                </div>
              </form>
            )}

            {!submitted && (
              <div className="mt-5 flex items-center gap-2 font-mono text-xs text-zinc-600">
                <svg
                  className="h-3.5 w-3.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                By submitting, you agree we may contact you about your request. No spam.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
