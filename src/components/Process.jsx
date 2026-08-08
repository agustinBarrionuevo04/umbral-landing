import useReveal from '../hooks/useReveal';

const STEPS = [
  {
    num: '01',
    title: 'Diagnóstico',
    description: 'Charlamos sobre cómo funciona tu negocio hoy. Sin tecnicismos, sin compromiso.',
  },
  {
    num: '02',
    title: 'Propuesta',
    description: 'Alcance y precio definidos antes de empezar. Sin sorpresas en el camino.',
  },
  {
    num: '03',
    title: 'Desarrollo',
    description:
      'Vas viendo avances reales durante el proceso, no un sistema cerrado que aparece al final.',
  },
  {
    num: '04',
    title: 'Acompañamiento',
    description: 'Capacitación al entregarlo y soporte después. No te dejamos solo con algo nuevo.',
  },
];

export default function Process() {
  const headRef = useReveal();
  const listRef = useReveal();

  return (
    <section id="proceso">
      <div className="wrap">
        <div className="section-head reveal" ref={headRef}>
          <span className="mono">Cómo trabajamos</span>
          <h2>Cuatro pasos. Sabés en qué etapa estás en todo momento.</h2>
        </div>
        <div className="process stagger" ref={listRef}>
          {STEPS.map((step) => (
            <div className="step" key={step.num}>
              <div className="step-num">{step.num}</div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
