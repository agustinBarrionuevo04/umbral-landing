import useReveal from '../hooks/useReveal';

const SERVICES = [
  {
    title: 'Control de stock e inventario',
    description: 'Saber cuánto tenés de cada cosa, en tiempo real, sin abrir una planilla.',
  },
  {
    title: 'Gestión de pedidos y ventas',
    description: 'Un lugar único donde queda registrado qué entró, qué salió y qué falta.',
  },
  {
    title: 'Paneles simples de estado',
    description: 'Una pantalla clara para ver cómo está el negocio hoy, sin gráficos que nadie lee.',
  },
  {
    title: 'Integraciones con lo que ya usás',
    description: 'Conectamos el sistema nuevo con las herramientas que ya tenés instaladas.',
  },
];

export default function Services() {
  const headRef = useReveal();
  const gridRef = useReveal();

  return (
    <section id="hacemos">
      <div className="wrap">
        <div className="section-head reveal" ref={headRef}>
          <span className="mono">Qué hacemos</span>
          <h2>Sistemas hechos para tu negocio puntual, no plantillas genéricas.</h2>
          <p>Cada sistema se arma según cómo trabajás vos, no al revés.</p>
        </div>
        <div className="services stagger" ref={gridRef}>
          {SERVICES.map((service) => (
            <div className="service" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
