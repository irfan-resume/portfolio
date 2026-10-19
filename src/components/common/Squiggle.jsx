/** Decorative hand-drawn wave used beside experience visuals. */
export default function Squiggle({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 50"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M4 30c8-14 16-14 22 0s14 14 22 0 14-14 22 0 14 14 22 0 14-14 22 0" />
    </svg>
  );
}
