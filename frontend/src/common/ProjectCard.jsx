import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpand } from '@fortawesome/free-solid-svg-icons'

function ProjectCard({ src, link, projectTitle, projectDescription }) {
  return (
    <div className="main">
      <div className="card block block-active">
        
        <div className="card_content">
          <div className="card_image">
            <img src={src} alt="project" />
          </div>
        </div>

        <div className="card_back"></div>
      </div>
      <div className="data">
        <div className="img">
          <img src={src} alt="project" />
        </div>
        <div className="text">
          <div className="text_m">{projectTitle}</div>
          <div className="text_s">{projectDescription}</div>
        </div>
      </div>
      <div className="btns">
        <div className="likes">
          <span className="likes_text">22</span>
        </div>
        <div className="comments">
          <span className="comments_text">12</span>
        </div>
        <div className="views">
          <span className="views_text">332</span>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
