import './projects.css'
import ChatApp from '../../assets/viberr.png'

function Projects() {
  return (
    <section id="projects" className="container">
      <h1 className="sectionTitle">Projects</h1>
      <div className="projectsContainer">
        <a href="https://github.com" target="_blank">
          <img src={ChatApp} className="hover" alt="ChatApp Logo" />
          <h3>ChatApp</h3>
          <p>Streaming App</p>
        </a>
      </div>
    </section>
  )
}

export default Projects
