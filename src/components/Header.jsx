import { WHATSAPP_URL } from '../constants';
import useHeaderScrolled from '../hooks/useHeaderScrolled';

export default function Header() {
  const scrolled = useHeaderScrolled();

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <nav>
        <div className="brand">
          <img className="brand-logo" src="/logos/umbral-logo-full.svg" alt="Umbral" />
        </div>
        <div className="nav-right">
          <a href="#proyectos" className="nav-link">
            Ejemplos
          </a>
          <a className="cta-nav" href={WHATSAPP_URL} target="_blank" rel="noopener">
            <span className="long">Hablemos por</span> WhatsApp
          </a>
        </div>
      </nav>
    </header>
  );
}
