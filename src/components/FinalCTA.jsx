import { WHATSAPP_URL } from '../constants';
import useReveal from '../hooks/useReveal';

export default function FinalCTA() {
  const ref = useReveal();

  return (
    <section className="final" style={{ borderBottom: '1px solid var(--line)' }}>
      <div className="wrap reveal" ref={ref}>
        <h2>¿Tenés algo en tu negocio que hoy hacés a mano?</h2>
        <p>Contámelo por WhatsApp y vemos si tiene sentido armar algo.</p>
        <a className="btn-primary" href={WHATSAPP_URL} target="_blank" rel="noopener">
          Escribime ahora <span className="arrow">→</span>
        </a>
      </div>
    </section>
  );
}
