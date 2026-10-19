import Icon from '../components/common/Icon';
import { profile } from '../data/profile';
import '../assets/css/sections/Hero.css';

export default function Hero() {
  const { role, location, headline, summary, resumeUrl, stats, panel, quote } = profile;

  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="hero__eyebrow">
            <span className="hero__dot" aria-hidden="true" />
            {role} · {location}
          </p>

          <h1 className="hero__title">
            <span className="hero__line" style={{ '--i': 0 }}>
              {headline.lead}
            </span>
            <span className="hero__line hero__line--mix" style={{ '--i': 1 }}>
              <span className="serif-accent">{headline.italic}</span>
              <span className="marker">{headline.block}</span>
            </span>
          </h1>

          <p className="hero__summary">{summary}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href={resumeUrl} download>
              <Icon name="download" strokeWidth={2} />
              Download résumé
            </a>
            <a className="btn btn--blue" href="#work">
              See the work →
            </a>
          </div>

          <dl className="hero__stats">
            {stats.map(({ value, label }) => (
              <div className="hero__stat" key={label}>
                <dt className="hero__stat-value">{value}</dt>
                <dd className="hero__stat-label">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero__portrait">
          <div className="hero__frame">
            <span className="hero__bracket hero__bracket--tl" aria-hidden="true" />
            <span className="hero__bracket hero__bracket--br" aria-hidden="true" />
            <ul className="hero__panel">
              {panel.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
          <blockquote className="hero__quote">
            {quote.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </blockquote>
          <span className="hero__orbit" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
