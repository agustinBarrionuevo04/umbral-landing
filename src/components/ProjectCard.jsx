import BrowserFrame from './BrowserFrame';

export default function ProjectCard({ project }) {
  const { label, title, description, tags, shots, twoColumn } = project;

  return (
    <div className="project">
      <div className="project-info">
        <span className="mono">{label}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <div className={`project-shots${twoColumn ? ' two' : ''}`}>
        {shots.map((shot) => (
          <BrowserFrame key={shot.src} {...shot} />
        ))}
      </div>
    </div>
  );
}
