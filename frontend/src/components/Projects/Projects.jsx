import './projects.css'
import ProjectCard from '../../common/ProjectCard'
import ChatApp from '../../assets/images/fitlift.png'

function Projects() {
  return (
    <section id="projects" className="container">
      <h1 className="sectionTitle">Projects</h1>
      <div className="projectsContainer">
        <ProjectCard
          src={ChatApp}
          link="https://github.com"
          projectTitle="ChatApp"
          projectDescription="Online Chatting Web App"
        />
        <ProjectCard
          src={ChatApp}
          link="https://github.com"
          projectTitle="ChatApp"
          projectDescription="Online Chatting Web App"
        />
      </div>
    </section>
  )
}

export default Projects
