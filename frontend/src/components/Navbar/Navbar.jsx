import './navbar.css'
import Logos from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_subB.png'
import { useRef, useState } from 'react'
import { useEffect } from 'react'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import gsap from 'gsap-trial'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faCode,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)

  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()
  const didAnimate = useRef(false) // Add this useRef to track if animation has already run

  useEffect(() => {
    if (didAnimate.current) return // Check if animation has run before, if yes, do nothing
    didAnimate.current = true
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 15,
      })
    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 2,
        duration: 4,
      }
    )
  }, [])

  const scrollToSection = (sectionId) => {
    setShowNav(false) // Close the navbar if it's open
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="sidebar ">
      <nav className="links block">
        <a href="/" className="home-link inBlock" onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} />
        </a>
       
        <a
          className="portfolio-link"
          href="#Projects"
          onClick={() => scrollToSection('Projects')}
        >
          <FontAwesomeIcon icon={faSuitcase} />
        </a>
        <a
          className="skills-link"
          href="#Skills"
          onClick={() => scrollToSection('Skills')}
          >
          <FontAwesomeIcon icon={faCode} />
          </a>
        <a
          className="contact-link"
          href="#Contact"
          onClick={() => scrollToSection('Contact')}
        >
          <FontAwesomeIcon icon={faEnvelope}  />
        </a>
      </nav>
    </div>
  )
}

export default Sidebar
