import './projects.css'
import ProjectCard from '../../common/ProjectCard'
import ChatApp from '../../assets/images/viberr.png'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'

function Projects() {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    // Return a cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="Projects" className="container ">
      <h1 className="sectionTitle scroll-animate">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
          idx={15}
        />
      </h1>
      <div className="projectsContainer scroll-animate">
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
