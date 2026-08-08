import { projects } from '../data/projects';
import useReveal from '../hooks/useReveal';
import ProjectCard from './ProjectCard';

export default function Portfolio() {
  const headRef = useReveal();
  const noteRef = useReveal();
  const listRef = useReveal();

  return (
    <section id="proyectos">
      <div className="wrap">
        <div className="section-head reveal" ref={headRef}>
          <span className="mono">Lo que construimos</span>
          <h2>Ejemplos reales de sistemas, no maquetas vacías.</h2>
          <p>
            Todavía no son casos de clientes cerrados — son demos funcionales que armamos para
            mostrar exactamente qué tipo de sistema recibís.
          </p>
        </div>
        <div className="portfolio-note reveal" ref={noteRef}>
          <span className="dot" aria-hidden="true"></span>
          Demos propias, no clientes actuales todavía.
        </div>

        <div className="projects stagger" ref={listRef}>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
