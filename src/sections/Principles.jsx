import SectionHeading from '../components/common/SectionHeading';
import GhostNumber from '../components/common/GhostNumber';
import Icon from '../components/common/Icon';
import { principles } from '../data/principles';
import '../assets/css/sections/Principles.css';

export default function Principles() {
  return (
    <section className="section principles" id="principles">
      <div className="container">
        <SectionHeading lead="What I" accent="care about" />

        <ul className="principles__grid">
          {principles.map(({ title, text, icon }, index) => (
            <li className="principle reveal" key={title}>
              <GhostNumber index={index} />
              <span className="principle__icon" data-tone={index % 6} aria-hidden="true">
                <Icon name={icon} strokeWidth={1.7} />
              </span>
              <h3 className="principle__title">{title}</h3>
              <p className="principle__text">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
