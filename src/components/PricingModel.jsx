import useReveal from '../hooks/useReveal';

export default function PricingModel() {
  const headRef = useReveal();
  const boxRef = useReveal();

  return (
    <section id="modelo">
      <div className="wrap">
        <div className="section-head reveal" ref={headRef}>
          <span className="mono">Cómo se cobra</span>
          <h2>Simple y por escrito, desde el principio.</h2>
        </div>
        <div className="model-box reveal" ref={boxRef}>
          <div className="model-item">
            <span className="mono">Pago inicial</span>
            <h3>Desarrollo e implementación</h3>
            <p>Cubre el diseño, la construcción y la puesta en marcha del sistema completo.</p>
          </div>
          <div className="model-item">
            <span className="mono">Cuota mensual</span>
            <h3>Hosting, soporte y mantenimiento</h3>
            <p>El sistema sigue funcionando y actualizado sin que vos tengas que ocuparte.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
