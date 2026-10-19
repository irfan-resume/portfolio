import '../../assets/css/components/Logo.css';

/** "irfan Khan." wordmark — the dotted "i" is drawn as an inline SVG. */
export default function Logo({ onClick }) {
  return (
    <a href="#top" className="logo" aria-label="Irfan Khan — UI/UX Designer & Frontend Developer" onClick={onClick}>
      <span className="logo__block logo__block--dark" aria-hidden="true">
        <svg className="logo__i" viewBox="0 0 30 100" aria-hidden="true" focusable="false">
          <circle cx="15" cy="13" r="12.5" fill="var(--accent)" />
          <rect x="2.5" y="33" width="25" height="67" rx="2" fill="#fff" />
        </svg>
        rfan
      </span>
      <span className="logo__block logo__block--accent" aria-hidden="true">
        Khan.
      </span>
    </a>
  );
}
