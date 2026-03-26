interface LogoProps {
  size?: number;
}

export default function Logo({ size = 36 }: LogoProps) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoIconGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d4a853" />
          <stop offset="100%" stopColor="#b8860b" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="url(#logoIconGrad)" />
      <rect x="13" y="18" width="7" height="30" rx="2" fill="white" />
      <rect x="44" y="18" width="7" height="30" rx="2" fill="white" />
      <rect x="13" y="18" width="38" height="7" rx="2" fill="white" />
      <rect x="13" y="39" width="38" height="5" rx="1.5" fill="white" opacity="0.55" />
      <circle cx="16.5" cy="21.5" r="3.5" fill="#b8860b" />
      <circle cx="47.5" cy="21.5" r="3.5" fill="#b8860b" />
      <circle cx="16.5" cy="41.5" r="2.5" fill="#946b09" opacity="0.8" />
      <circle cx="47.5" cy="41.5" r="2.5" fill="#946b09" opacity="0.8" />
      <circle cx="32" cy="21.5" r="3" fill="#d4a853" />
    </svg>
  );
}
