import SectionHeading from '../components/common/SectionHeading';
import Icon from '../components/common/Icon';
import { projects } from '../data/projects';
import { profile } from '../data/profile';
import { initials, pad2 } from '../utils/format';
import '../assets/css/sections/Projects.css';

const authorInitials = initials(profile.name);

function ProjectCard({ project, index }) {
  const { name, kind, role, industry, focus, tone, image } = project;

  return (
    <article className="wk reveal" data-tone={tone}>
      <div className="wk__media">
        <img src={image} alt={`${name} preview`} loading="lazy" decoding="async" />
      </div>

      <div className="wk__row">
        <span className="wk__by">
          <i aria-hidden="true">{authorInitials}</i>
          {role}
        </span>
        <span className="wk__chip">{industry}</span>
      </div>

      <h3 className="wk__title">{name}</h3>

      <p className="wk__kind">
        <span aria-hidden="true">
          <Icon name="layers" />
        </span>
        {kind}
      </p>

      <div className="wk__foot">
        <span className="wk__focus">{focus}</span>
        <span className="wk__num">{pad2(index + 1)}</span>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="section projects" id="work">
      <div className="container">
        <SectionHeading lead="Selected" accent="work" note="Real products. Complex flows. Practical design." />

        <div className="wk__grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
