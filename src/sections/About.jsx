import SectionHeading from '../components/common/SectionHeading';
import GhostNumber from '../components/common/GhostNumber';
import { about } from '../data/about';
import '../assets/css/sections/About.css';

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <SectionHeading lead="Where I'm" accent="useful" />

        <div className="about__grid">
          <div className="about__prose reveal">
            {about.paragraphs.map((text) => (
              <p key={text.slice(0, 24)}>{text}</p>
            ))}
          </div>

          <ul className="about__principles reveal">
            {about.principles.map(({ title, text }, index) => (
              <li className="about__principle" key={title}>
                <GhostNumber index={index} />
                <h3 className="about__principle-title">{title}</h3>
                <p className="about__principle-text">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
