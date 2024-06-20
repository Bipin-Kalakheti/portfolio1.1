import { useRef } from 'react'
import './App.css'
import Sidebar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Projects from './components/Projects/Projects.jsx'
import Skills from './components/Skills/Skills.jsx'
import Contact from './components/Contact/Contact.jsx'

function App() {
  const heroRef = useRef(null)
  const projectsRef = useRef(null)
  const skillsRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Sidebar
        scrollToSection={scrollToSection}
        refs={{ heroRef, projectsRef, skillsRef, contactRef }}
      />
      <div ref={heroRef}>
        <Hero />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  )
}

export default App
