import SectionHeading from '../components/common/SectionHeading';
import GhostNumber from '../components/common/GhostNumber';
import { aiWorkflow } from '../data/aiWorkflow';
import '../assets/css/sections/AiWorkflow.css';

export default function AiWorkflow() {
  return (
    <section className="section aiwork" id="ai">
      <div className="container">
        <SectionHeading lead="How I work with" accent="AI" note={aiWorkflow.intro} />

        <ol className="aiwork__steps">
          {aiWorkflow.steps.map(({ title, text }, index) => (
            <li className="aiwork__step reveal" key={title}>
              <GhostNumber index={index} />
              <h3 className="aiwork__step-title">{title}</h3>
              <p className="aiwork__step-text">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
