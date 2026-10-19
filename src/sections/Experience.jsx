import SectionHeading from '../components/common/SectionHeading';
import Squiggle from '../components/common/Squiggle';
import { experience } from '../data/experience';
import { initials } from '../utils/format';
import '../assets/css/sections/Experience.css';

function ExperienceVisual({ company, role, current, image }) {
  return (
    <div className="xp__media" aria-hidden="true">
      <Squiggle className="xp__squiggle" />

      <div className={`xp__panel ${image ? 'has-img' : ''}`}>
        {image ? (
          <img className="xp__img" src={image} alt="" loading="lazy" decoding="async" />
        ) : (
          <>
            <span className="xp__mono">{initials(company)}</span>
            <div className="xp__wire">
              <i />
              <i />
              <i />
              <i />
            </div>
            <span className="xp__brand">{company}</span>
          </>
        )}
      </div>

      <div className="xp__float">
        <span className="xp__dot" />
        <div>
          <b>{role}</b>
          <small>{current ? 'Current role' : 'Previous role'}</small>
        </div>
      </div>
    </div>
  );
}

function ExperienceRow({ job, flipped }) {
  const { company, role, period, current, tone, points } = job;

  return (
    <li className={`xp__row reveal ${flipped ? 'is-flip' : ''}`} data-tone={tone}>
      <ExperienceVisual {...job} />

      <div className="xp__body">
        <div className="xp__eyebrow">
          <span>{period}</span>
          {current && <span className="xp__badge">Current</span>}
        </div>
        <h3 className="xp__company">{company}</h3>
        <p className="xp__role">{role}</p>
        <ul className="xp__points">
          {points.map((point) => (
            <li key={point.slice(0, 24)}>{point}</li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <SectionHeading lead="Four+ years, real" accent="products" />

        <ol className="xp__list">
          {experience.map((job, index) => (
            <ExperienceRow key={job.company} job={job} flipped={index % 2 === 1} />
          ))}
        </ol>
      </div>
    </section>
  );
}
