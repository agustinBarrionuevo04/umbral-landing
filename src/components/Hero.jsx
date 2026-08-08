import { useRef } from 'react';
import { WHATSAPP_URL } from '../constants';
import useThresholdDot from '../hooks/useThresholdDot';

export default function Hero() {
  const heroRef = useRef(null);
  const lineRef = useRef(null);
  useThresholdDot(heroRef, lineRef);

  return (
    <section className="hero" ref={heroRef}>
      <div className="threshold-line" ref={lineRef} aria-hidden="true"></div>
      <div className="wrap">
        <div className="hero-content">
          <span className="mono">Software a medida</span>
          <h1>
            El umbral entre <span className="hl-analog">el cuaderno</span> y{' '}
            <span className="hl-system">el sistema</span>.
          </h1>
          <p>
            Diseñamos y desarrollamos software para negocios que hoy resuelven todo a mano —
            planillas, cuadernos, memoria. Sin funciones que no vas a usar, sin curvas de
            aprendizaje raras.
          </p>
          <div className="hero-ctas">
            <a className="btn-primary" href={WHATSAPP_URL} target="_blank" rel="noopener">
              Contame tu problema <span className="arrow">→</span>
            </a>
            <a className="btn-secondary" href="#proyectos">
              Ver ejemplos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
