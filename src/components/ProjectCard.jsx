export default function ProjectCard({ project }) {
  const { title, description, tech, impact, links } = project;

  return (
    <article className="card project">
      <div className="projectTop">
        <h3 className="cardTitle">{title}</h3>
        <p className="text">{description}</p>
      </div>

      <div className="projectMeta">
        <div>
          <div className="metaLabel">Tech</div>
          <ul className="chips">
            {tech.map((t) => (
              <li className="chip" key={t}>{t}</li>
            ))}
          </ul>
        </div>

        <div>
          <div className="metaLabel">Impact</div>
          <ul className="bullets">
            {impact.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="projectActions">
        {links.live && (
          <a className="btn primary" href={links.live} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        )}
        {links.code && (
          <a className="btn" href={links.code} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
      </div>
    </article>
  );
}
