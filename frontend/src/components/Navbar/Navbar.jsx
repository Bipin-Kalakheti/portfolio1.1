import './navbar.css'
import Logos from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_subB.png'
import { useRef, useState } from 'react'
import { useEffect } from 'react'

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

  const scrollToSection = (sectionId) => {
    setShowNav(false) // Close the navbar if it's open
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.links'); // Adjust the selector as needed
    if (window.scrollY > 0) { // Change 0 to another value if you want some delay
      navbar.classList.remove('navbar-invisible');
      navbar.classList.add('navbar-visible');
    } else {
      navbar.classList.add('navbar-invisible');
      navbar.classList.remove('navbar-visible');
    }
  });

  return (
    <div className="sidebar ">
      <nav className="links ">
        <a
          href="/"
          className="home-link inBlock"
          onClick={() => setShowNav(false)}
        >
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
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </nav>
    </div>
  )
}

export default Sidebar
