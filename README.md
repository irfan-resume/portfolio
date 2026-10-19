# Irfan Khan — Portfolio

Personal portfolio for a UI/UX Designer & Frontend Developer, built with **React 18** and **Vite 5**.
Dark theme, single page with scroll sections, fully responsive from small phones to large desktops.

## Getting started

```bash
npm install
npm run dev       # local dev server → http://localhost:5173
npm run build     # production build → dist/
npm run preview   # serve the production build locally
```

Requires Node.js 18+.

## Project structure

```
irfan-portfolio/
├── index.html                  # HTML shell, meta tags, Google Fonts
├── public/
│   ├── favicon.svg
│   └── resume/irfan-resume.pdf # linked from the "Résumé" buttons
└── src/
    ├── main.jsx                # entry — loads global CSS, mounts <App />
    ├── App.jsx                 # page composition (section order lives here)
    ├── assets/
    │   ├── css/
    │   │   ├── variables.css   # design tokens: colours, type scale, spacing, motion
    │   │   ├── global.css      # reset, base elements, .container, .section, .btn, .reveal
    │   │   ├── components/     # Logo, Navbar, Footer
    │   │   └── sections/       # one stylesheet per page section
    │   └── images/
    │       ├── projects/       # "Selected work" card images
    │       └── experience/     # company brand visuals
    ├── components/
    │   ├── common/             # Logo, Icon, SectionHeading, GhostNumber, Squiggle
    │   └── layout/             # Navbar, Footer
    ├── sections/               # Hero, About, Skills, Experience, Projects,
    │                           # AiWorkflow, Education, Principles, Contact
    ├── data/                   # all site copy — edit content here, not in JSX
    ├── hooks/                  # useReveal, useScrolled, useActiveSection, useLockBodyScroll
    └── utils/                  # small formatting helpers
```

Every component imports its own stylesheet from `src/assets/css`, so styles stay next to a single, predictable owner.

## Editing content

All text lives in `src/data/`:

| File | Controls |
| --- | --- |
| `profile.js` | name, role, contact details, hero headline, stats |
| `navigation.js` | navbar / footer links (ids must match section ids) |
| `about.js` | "Where I'm useful" paragraphs and cards |
| `skills.js` | "Tools of the trade" skill groups |
| `experience.js` | work history, brand image per company |
| `projects.js` | "Selected work" cards |
| `aiWorkflow.js`, `education.js`, `principles.js`, `contact.js` | the remaining sections |

### Replacing images

1. Drop the new file into `src/assets/images/projects/` or `src/assets/images/experience/`.
2. Update the matching `import` at the top of `src/data/projects.js` or `src/data/experience.js`.

Project cards use a 16:9 frame and experience panels a 5:4 frame (`object-fit: cover`), so
images in those ratios fit without cropping. Removing `image` from an experience entry shows
a styled placeholder instead.

### Updating the résumé

Replace `public/resume/irfan-resume.pdf` (keep the file name, or update `resumeUrl` in `profile.js`).

## Theme

Colours, fonts, spacing and radii are CSS custom properties in `src/assets/css/variables.css`.
Card accents use a `--tone` RGB triplet set per card via a `data-tone` attribute
(e.g. `data-tone="blue"`), defined in each section stylesheet.

## Responsive breakpoints

Desktop-first, with breakpoints at 1340, 1180, 980, 900, 860, 720, 640, 560 and 520 px.
Tested at 375, 768, 1024, 1366 and 1920 px with no horizontal overflow.

## Accessibility

Semantic landmarks and headings, visible focus styles, `aria-current` on the active nav link,
labelled form fields with linked error messages, and `prefers-reduced-motion` support.
