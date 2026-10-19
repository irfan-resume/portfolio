import Logo from '../common/Logo';
import Icon from '../common/Icon';
import { navLinks } from '../../data/navigation';
import { profile } from '../../data/profile';
import '../../assets/css/components/Footer.css';

const socials = [
  { label: 'LinkedIn', icon: 'linkedin', href: profile.linkedin, external: true },
  { label: 'Email', icon: 'mail', href: `mailto:${profile.email}` },
  { label: 'Download résumé', icon: 'download', href: profile.resumeUrl, download: true },
  { label: 'Back to top', icon: 'arrowUp', href: '#top' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ft">
      <div className="container ft__inner">
        <Logo />
        <span className="ft__sep" aria-hidden="true" />

        <div className="ft__mid">
          <nav className="ft__nav" aria-label="Footer">
            {navLinks.map(({ id, label }) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>
          <p className="ft__copy">
            © {year} {profile.name}. All rights reserved.
          </p>
        </div>

        <div className="ft__right">
          <div className="ft__social">
            {socials.map(({ label, icon, href, external, download }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                download={download || undefined}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
              >
                <Icon name={icon} />
              </a>
            ))}
          </div>
          <p className="ft__mail">
            Email: <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
