import SectionHeading from '../components/common/SectionHeading';
import { education } from '../data/education';
import '../assets/css/sections/Education.css';

export default function Education() {
  return (
    <section className="section education" id="education">
      <div className="container">
        <SectionHeading lead="Where it" accent="started" note={education.note} />

        <ol className="tl">
          {education.items.map(({ title, org, period, tone }, index) => (
            <li className={`tl__item reveal ${index === 0 ? 'is-active' : ''}`} data-tone={tone} key={title}>
              <span className="tl__dot" aria-hidden="true" />
              <div className="tl__card">
                <div className="tl__top">
                  <h3 className="tl__title">{title}</h3>
                  {period && <span className="tl__period">{period}</span>}
                </div>
                <p className="tl__org">{org}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
