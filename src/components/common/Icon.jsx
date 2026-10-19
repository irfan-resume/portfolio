/**
 * Line icon set (24×24, stroke-based, inherits `currentColor`).
 * Usage: <Icon name="code" />
 */
const PATHS = {
  pen: (
    <>
      <path d="m12 19 7-7 3 3-7 7-3-3Z" />
      <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5Z" />
      <path d="m2 2 7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </>
  ),
  code: <path d="m8 7-5 5 5 5M16 7l5 5-5 5M13.5 4l-3 16" />,
  sparkles: (
    <>
      <path d="M9.5 3.5 11 8l4.5 1.5L11 11l-1.5 4.5L8 11 3.5 9.5 8 8Z" />
      <path d="M17.5 13.5 18.3 16l2.5.8-2.5.8-.8 2.4-.8-2.4-2.5-.8 2.5-.8Z" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      <path d="M12 8.5 13.3 11 15.5 12l-2.2 1-1.3 2.5-1.3-2.5L8.5 12l2.2-1Z" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  grid: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </>
  ),
  layers: (
    <>
      <path d="m12 2 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5M3 17l9 5 9-5" />
    </>
  ),
  download: <path d="M12 3v12M7.5 11 12 15.5 16.5 11M4.5 20h15" />,
  arrowUp: <path d="M12 19V5M6.5 10.5 12 5l5.5 5.5" />,
  arrowRight: <path d="M5 12h13M12.5 5.5 19 12l-6.5 6.5" />,
  arrowUpRight: <path d="M7 17 17 7M8.5 7H17v8.5" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  linkedin: (
    <>
      <path d="M6.5 9.5v8M6.5 6.5v.01M10.5 17.5v-4.5a3 3 0 0 1 6 0v4.5M10.5 9.5v8" />
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
    </>
  ),
};

export default function Icon({ name, strokeWidth = 1.8, className, ...rest }) {
  const path = PATHS[name];
  if (!path) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...rest}
    >
      {path}
    </svg>
  );
}
