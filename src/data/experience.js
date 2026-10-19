import sphinxImage from '../assets/images/experience/sphinx-worldbiz.jpg';
import policyxImage from '../assets/images/experience/policyx.jpg';
import hautImage from '../assets/images/experience/haut-it-solutions.jpg';

/** `tone` picks the accent colour (red | blue | violet). `image` is optional — a styled placeholder renders without it. */
export const experience = [
  {
    company: 'Sphinx Worldbiz',
    role: 'UI/UX Designer',
    period: 'Aug 2025 — Present',
    current: true,
    tone: 'red',
    image: sphinxImage,
    points: [
      'Designing responsive web experiences across travel, enterprise and government-facing products.',
      'Creating reusable Figma components, variants, auto-layout structures and scalable design patterns.',
      'Working closely with developers through implementation to keep visual consistency and UI behaviour accurate.',
      'Designing complex flows — search, booking, forms, dashboards, approvals and transactional journeys.',
      'Using AI-assisted workflows to speed up exploration, content structuring, UX iteration and frontend problem-solving.',
    ],
  },
  {
    company: 'PolicyX.com',
    role: 'UI/UX Designer',
    period: 'Sep 2022 — Jun 2025',
    tone: 'blue',
    image: policyxImage,
    points: [
      'Designed insurance websites, quote journeys, comparison experiences and internal CRM workflows.',
      'Created landing pages and campaign interfaces focused on clarity, conversion and responsive behaviour.',
      'Worked on information-heavy forms and comparison tables where hierarchy and progressive disclosure were critical.',
      'Translated designs into responsive HTML, CSS and Bootstrap interfaces when needed.',
    ],
  },
  {
    company: 'Haut IT Solutions',
    role: 'Web Designer',
    period: 'Feb 2022 — Aug 2022',
    tone: 'violet',
    image: hautImage,
    points: [
      'Designed responsive websites and landing pages for small-business clients.',
      'Worked across visual design, layout, responsive behaviour and frontend implementation.',
    ],
  },
];
