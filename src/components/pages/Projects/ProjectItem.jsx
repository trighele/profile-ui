export default function ProjectItem({ project }) {
  return (
    <div className="project-item">
      <div
        className="project-header"
        style={{ backgroundColor: project.backgroundColor }}
      >
        <h2>{project.title}</h2>
        <div className="project-date">{project.projdate}</div>
      </div>
      <div className="project-details">
        <h3 className="project-subtitle">{project.subTitle}</h3>
        <p>{project.description}</p>
        <div className="project-keywords">
          {project.keywords.map((keyword, index) => (
            <div className="keyword" key={index}>
              {keyword}
            </div>
          ))}
        </div>
        <hr />
        <div className="project-links">
          {project.links.map((link, index) => (
            <div className="project-link" key={index}>
              <a href={link.url} target="_blank">
                <img src={link.icon} className="project-links-icon" />
                {link.linkTitle}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
