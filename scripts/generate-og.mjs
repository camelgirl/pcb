import sharp from "sharp";
import { writeFileSync } from "fs";

// 1200×630 OG image as SVG, then rasterise to PNG via sharp
const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#d4a853"/>
      <stop offset="100%" stop-color="#b8860b"/>
    </linearGradient>
    <radialGradient id="glowTR" cx="100%" cy="0%" r="60%">
      <stop offset="0%" stop-color="#d4a853" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#d4a853" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowBL" cx="0%" cy="100%" r="50%">
      <stop offset="0%" stop-color="#d4a853" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#d4a853" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="#09090b"/>

  <!-- Copper glows -->
  <rect width="1200" height="630" fill="url(#glowTR)"/>
  <rect width="1200" height="630" fill="url(#glowBL)"/>

  <!-- Logo icon -->
  <g transform="translate(80, 72)">
    <rect width="64" height="64" rx="14" fill="url(#logoGrad)"/>
    <rect x="13" y="18" width="7" height="30" rx="2" fill="white"/>
    <rect x="44" y="18" width="7" height="30" rx="2" fill="white"/>
    <rect x="13" y="18" width="38" height="7" rx="2" fill="white"/>
    <rect x="13" y="39" width="38" height="5" rx="1.5" fill="white" opacity="0.55"/>
    <circle cx="16.5" cy="21.5" r="3.5" fill="#b8860b"/>
    <circle cx="47.5" cy="21.5" r="3.5" fill="#b8860b"/>
    <circle cx="16.5" cy="41.5" r="2.5" fill="#946b09" opacity="0.8"/>
    <circle cx="47.5" cy="41.5" r="2.5" fill="#946b09" opacity="0.8"/>
    <circle cx="32" cy="21.5" r="3" fill="#d4a853"/>
  </g>

  <!-- "Bridge PCB" wordmark -->
  <text x="160" y="112" font-family="Arial, sans-serif" font-size="32" font-weight="700" fill="#f4f4f5">Bridge PCB</text>

  <!-- "US-based" badge -->
  <rect x="310" y="90" width="96" height="28" rx="14" fill="rgba(212,168,83,0.15)" stroke="rgba(212,168,83,0.35)" stroke-width="1"/>
  <text x="358" y="109" font-family="Arial, sans-serif" font-size="13" font-weight="500" fill="#d4a853" text-anchor="middle">US-based</text>

  <!-- Headline -->
  <text x="80" y="240" font-family="Arial, sans-serif" font-size="76" font-weight="800" fill="#f4f4f5" letter-spacing="-2">PCB &amp; PCBA</text>
  <text x="80" y="330" font-family="Arial, sans-serif" font-size="76" font-weight="800" fill="#d4a853" letter-spacing="-2">Manufacturing</text>

  <!-- Description -->
  <text x="80" y="400" font-family="Arial, sans-serif" font-size="26" fill="#a1a1aa">US-based sourcing agent backed by leading manufacturers in China.</text>
  <text x="80" y="436" font-family="Arial, sans-serif" font-size="26" fill="#a1a1aa">Technical support, QA &amp; logistics — 2L to 46L, HDI, Flex, Rigid-Flex &amp; PCBA.</text>

  <!-- Pill tags -->
  <rect x="80"  y="484" width="72"  height="36" rx="18" fill="#18181b" stroke="#3f3f46" stroke-width="1"/>
  <text x="116" y="507" font-family="Arial, sans-serif" font-size="17" fill="#a1a1aa" text-anchor="middle">HDI</text>

  <rect x="164" y="484" width="160" height="36" rx="18" fill="#18181b" stroke="#3f3f46" stroke-width="1"/>
  <text x="244" y="507" font-family="Arial, sans-serif" font-size="17" fill="#a1a1aa" text-anchor="middle">Flex &amp; Rigid-Flex</text>

  <rect x="336" y="484" width="112" height="36" rx="18" fill="#18181b" stroke="#3f3f46" stroke-width="1"/>
  <text x="392" y="507" font-family="Arial, sans-serif" font-size="17" fill="#a1a1aa" text-anchor="middle">Backplane</text>

  <rect x="460" y="484" width="152" height="36" rx="18" fill="#18181b" stroke="#3f3f46" stroke-width="1"/>
  <text x="536" y="507" font-family="Arial, sans-serif" font-size="17" fill="#a1a1aa" text-anchor="middle">PCBA Turnkey</text>

  <rect x="624" y="484" width="136" height="36" rx="18" fill="#18181b" stroke="#3f3f46" stroke-width="1"/>
  <text x="692" y="507" font-family="Arial, sans-serif" font-size="17" fill="#a1a1aa" text-anchor="middle">DFM Review</text>

  <!-- Domain -->
  <text x="1120" y="582" font-family="monospace, Courier New" font-size="18" fill="#52525b" text-anchor="end">bridgepcb.com</text>
</svg>
`;

const buffer = Buffer.from(svg);

await sharp(buffer)
  .png()
  .toFile("public/og-image.png");

console.log("✓ Generated public/og-image.png (1200×630)");
