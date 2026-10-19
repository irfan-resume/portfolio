import SectionHeading from '../components/common/SectionHeading';
import Icon from '../components/common/Icon';
import { skills } from '../data/skills';
import '../assets/css/sections/Skills.css';

function SkillCard({ title, tone, icon, items }) {
  return (
    <article className="skillcard" data-tone={tone}>
      <div className="skillcard__head">
        <span className="skillcard__icon" aria-hidden="true">
          <Icon name={icon} strokeWidth={1.7} />
        </span>
        <h3 className="skillcard__title">{title}</h3>
        <span className="skillcard__count">{items.length} skills</span>
      </div>

      <span className="skillcard__bar" aria-hidden="true" />

      <ul className="skillcard__list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <span className="skillcard__badge" aria-hidden="true">
        <Icon name={icon} strokeWidth={1.7} />
      </span>
    </article>
  );
}

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <SectionHeading lead="Tools of the" accent="trade" note={skills.note} />

        <div className="skills__grid">
          {skills.groups.map((group) => (
            <SkillCard key={group.title} {...group} />
          ))}
        </div>

        <div className="skills__foot reveal">
          <span className="skills__pill">
            <i aria-hidden="true">⚡</i> {skills.footnote}
          </span>
        </div>
      </div>
    </section>
  );
}
