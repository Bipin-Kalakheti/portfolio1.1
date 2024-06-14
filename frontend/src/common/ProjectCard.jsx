function ProjectCard({ src, link, projectTitle, projectDescription }) {
  return (
    <a href={link} target="_blank">
      <img src={src} className="hover" alt={`${projectTitle} logo`} />
      <h3>{projectTitle}</h3>
      <p>{projectDescription}</p>
    </a>
  )
}

export default ProjectCard
