import { useState } from 'react';
import Logo from '../common/Logo';
import { navLinks } from '../../data/navigation';
import { profile } from '../../data/profile';
import { useScrolled } from '../../hooks/useScrolled';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import '../../assets/css/components/Navbar.css';

const sectionIds = navLinks.map((link) => link.id);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled();
  const active = useActiveSection(sectionIds);
  useLockBodyScroll(menuOpen);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <Logo onClick={closeMenu} />

        <nav id="primary-nav" className={`nav__links ${menuOpen ? 'is-open' : ''}`} aria-label="Sections">
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav__link ${active === id ? 'is-active' : ''}`}
              aria-current={active === id ? 'true' : undefined}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
          <a className="btn btn--primary nav__cta" href={profile.resumeUrl} download onClick={closeMenu}>
            Résumé
          </a>
        </nav>

        <div className="nav__tools">
          <button
            type="button"
            className={`nav__burger ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="primary-nav"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
