function VerifiedCheckIcon() {
  return (
    <svg aria-hidden="true" className="h-3 w-3" fill="currentColor" viewBox="0 0 12 12">
      <path d="M10.5 2.5L5 8.5 2 5.5l-1 1L5 10.5l6.5-7-1-1z" />
    </svg>
  );
}

const shieldBase = (
  <>
    <path
      d="M22 2L3 9.5V22c0 12 8 22.5 19 26 11-3.5 19-14 19-26V9.5L22 2z"
      fill="url(#certCopperG)"
    />
    <path
      d="M22 2L3 9.5V22c0 12 8 22.5 19 26 11-3.5 19-14 19-26V9.5L22 2z"
      stroke="rgba(212,168,83,0.4)"
      strokeWidth="1"
    />
    <path
      d="M22 5L6 11.5V22c0 10.5 7 19.5 16 23 9-3.5 16-12.5 16-23V11.5L22 5z"
      fill="white"
      fillOpacity="0.08"
    />
  </>
);

export default function Certifications() {
  return (
    <section className="border-y border-[rgba(212,168,83,0.08)] bg-[#0d0d10]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-copper-800/40 bg-copper-900/20 px-3 py-1 font-mono text-xs text-copper-400 mb-3">
            Certifications
          </div>
          <h2 className="font-display text-xl font-bold text-zinc-100">Quality you can verify</h2>
        </div>

        {/* Shared SVG defs for shield gradient */}
        <svg aria-hidden="true" width="0" height="0" style={{ position: "absolute" }}>
          <defs>
            <linearGradient id="certCopperG" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#d4a853" />
              <stop offset="100%" stopColor="#7a580c" />
            </linearGradient>
          </defs>
        </svg>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {/* ISO 9001 */}
          <div className="card-dark flex flex-col items-center rounded-xl px-4 py-6 text-center">
            <svg aria-hidden="true" width="44" height="50" viewBox="0 0 44 50" fill="none" className="mb-3">
              {shieldBase}
              <text
                x="22"
                y="27"
                textAnchor="middle"
                fontSize="9.5"
                fontWeight="800"
                fill="white"
                fontFamily="Inter,sans-serif"
                letterSpacing="0.5"
              >
                ISO
              </text>
              <path d="M12 31h20" stroke="white" strokeWidth="0.8" opacity="0.4" />
              <text
                x="22"
                y="37"
                textAnchor="middle"
                fontSize="7"
                fontWeight="600"
                fill="white"
                fontFamily="Inter,sans-serif"
                opacity="0.85"
              >
                9001
              </text>
            </svg>
            <div className="font-display font-bold text-zinc-100 text-sm">ISO 9001</div>
            <div className="font-mono text-xs text-zinc-500 mt-1">Quality Management</div>
            <div className="mt-2 flex items-center gap-1 font-mono text-copper-400 text-xs">
              <VerifiedCheckIcon />
              Verified
            </div>
          </div>

          {/* IATF 16949 */}
          <div className="card-dark flex flex-col items-center rounded-xl px-4 py-6 text-center">
            <svg aria-hidden="true" width="44" height="50" viewBox="0 0 44 50" fill="none" className="mb-3">
              {shieldBase}
              <text
                x="22"
                y="26"
                textAnchor="middle"
                fontSize="8.5"
                fontWeight="800"
                fill="white"
                fontFamily="Inter,sans-serif"
                letterSpacing="0.3"
              >
                IATF
              </text>
              <path d="M12 30h20" stroke="white" strokeWidth="0.8" opacity="0.4" />
              <text
                x="22"
                y="37"
                textAnchor="middle"
                fontSize="7"
                fontWeight="600"
                fill="white"
                fontFamily="Inter,sans-serif"
                opacity="0.85"
              >
                16949
              </text>
            </svg>
            <div className="font-display font-bold text-zinc-100 text-sm">IATF 16949</div>
            <div className="font-mono text-xs text-zinc-500 mt-1">Automotive Quality</div>
            <div className="mt-2 flex items-center gap-1 font-mono text-copper-400 text-xs">
              <VerifiedCheckIcon />
              Verified
            </div>
          </div>

          {/* AS9100D */}
          <div className="card-dark flex flex-col items-center rounded-xl px-4 py-6 text-center">
            <svg aria-hidden="true" width="44" height="50" viewBox="0 0 44 50" fill="none" className="mb-3">
              {shieldBase}
              <text
                x="22"
                y="27"
                textAnchor="middle"
                fontSize="9.5"
                fontWeight="800"
                fill="white"
                fontFamily="Inter,sans-serif"
                letterSpacing="0.5"
              >
                AS
              </text>
              <path d="M12 31h20" stroke="white" strokeWidth="0.8" opacity="0.4" />
              <text
                x="22"
                y="37"
                textAnchor="middle"
                fontSize="7"
                fontWeight="600"
                fill="white"
                fontFamily="Inter,sans-serif"
                opacity="0.85"
              >
                9100D
              </text>
            </svg>
            <div className="font-display font-bold text-zinc-100 text-sm">AS9100D</div>
            <div className="font-mono text-xs text-zinc-500 mt-1">Aerospace Quality</div>
            <div className="mt-2 flex items-center gap-1 font-mono text-copper-400 text-xs">
              <VerifiedCheckIcon />
              Verified
            </div>
          </div>

          {/* ISO 13485 */}
          <div className="card-dark flex flex-col items-center rounded-xl px-4 py-6 text-center">
            <svg aria-hidden="true" width="44" height="50" viewBox="0 0 44 50" fill="none" className="mb-3">
              {shieldBase}
              <text
                x="22"
                y="27"
                textAnchor="middle"
                fontSize="9.5"
                fontWeight="800"
                fill="white"
                fontFamily="Inter,sans-serif"
                letterSpacing="0.5"
              >
                ISO
              </text>
              <path d="M12 31h20" stroke="white" strokeWidth="0.8" opacity="0.4" />
              <text
                x="22"
                y="37"
                textAnchor="middle"
                fontSize="7"
                fontWeight="600"
                fill="white"
                fontFamily="Inter,sans-serif"
                opacity="0.85"
              >
                13485
              </text>
            </svg>
            <div className="font-display font-bold text-zinc-100 text-sm">ISO 13485</div>
            <div className="font-mono text-xs text-zinc-500 mt-1">Medical Devices</div>
            <div className="mt-2 flex items-center gap-1 font-mono text-copper-400 text-xs">
              <VerifiedCheckIcon />
              Verified
            </div>
          </div>

          {/* Nadcap */}
          <div className="card-dark flex flex-col items-center rounded-xl px-4 py-6 text-center">
            <svg aria-hidden="true" width="44" height="50" viewBox="0 0 44 50" fill="none" className="mb-3">
              {shieldBase}
              <path
                d="M16 24l3.5-9 2.5 6 2-4 2 7"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <text
                x="22"
                y="37"
                textAnchor="middle"
                fontSize="7"
                fontWeight="700"
                fill="white"
                fontFamily="Inter,sans-serif"
                opacity="0.9"
                letterSpacing="1"
              >
                NADCAP
              </text>
            </svg>
            <div className="font-display font-bold text-zinc-100 text-sm">Nadcap</div>
            <div className="font-mono text-xs text-zinc-500 mt-1">Aerospace Special Process</div>
            <div className="mt-2 flex items-center gap-1 font-mono text-copper-400 text-xs">
              <VerifiedCheckIcon />
              Verified
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
