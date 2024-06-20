function ProjectCard({ src, link, projectTitle, projectDescription }) {
  return (
    <div className="card">
      <img src={src} className="hover" alt={`${projectTitle} logo`} />
      <div className="card__content">
        <p className="card__title">{projectTitle}</p>
        <p className="card__description">{projectDescription}</p>
        <button className="card__button">
          <a href={link} target="_blank" >Live Demo </a>
        </button>
        <button className="card__button secondary">Source Code</button>
      </div>
    </div>
  )
}

export default ProjectCard
