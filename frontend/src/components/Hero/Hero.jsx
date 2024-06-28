import './hero.css'
import heroImg from '../../assets/images/hero-img.png'
import sun from '../../assets/images/sun.svg'
import moon from '../../assets/images/moon.svg'
import twitterDark from '../../assets/images/twitter-dark.svg'
import twitterLight from '../../assets/images/twitter-light.svg'
import githubDark from '../../assets/images/github-dark.svg'
import githubLight from '../../assets/images/github-light.svg'
import linkedinDark from '../../assets/images/linkedin-dark.svg'
import linkedinLight from '../../assets/images/linkedin-light.svg'
import Resume from '../../assets/images/cv.pdf'
import { useTheme } from '../../common/ThemeContext'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'

export default function Hero() {
  const { theme, toggleTheme } = useTheme()

  const [color, setColor] = useState('#e8e8e8')

  const themeIcon = theme === 'light' ? sun : moon
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark
  const githubIcon = theme === 'light' ? githubLight : githubDark
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark
  useEffect(() => {
    // Update the CSS variable whenever the color state changes
    document.documentElement.style.setProperty('--background-color', color)
  }, [color])

  const [letterClass, setLetterClass] = useState('text-animate-hover')
  const nameArray = ['', 'B', 'i', 'p', 'i', 'n']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 10)

    // Return a cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timer)
  }, [])
  return (
    <section id="hero" className="section-container">
      <div className="email">
        <a href="mailto:anbipin51@gmail.com" className="emailLink">
          anbipin51@gmail.com
        </a>
      </div>
      <div className="colorModeContainer fixblock">
        <img
          src={heroImg}
          alt="Profile Picture of Bipin Kalakheti"
          className="heroImg"
        />

        <div className="theme">
          <img
            src={themeIcon}
            className="colorMode"
            alt="Color mode icon"
            onClick={toggleTheme}
          />
        </div>
      </div>
      <div className="info">
        <div className="text-zone sectionTitle">
          <h1 className='sectionTitle'> 
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['H', 'i', ',']}
              idx={3}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['I', "'", 'm']}
              idx={3}
            />

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2> Frontend Developer / Python Developer / Gamer</h2>
        </div>
        <div>
          <a href={Resume} download>
            <button className="resumeButton block block-active">Resume</button>
          </a>
        </div>
      </div>
      {/* <div className="picker">
        <SliderPicker
          color={color}
          onChangeComplete={(color) => setColor(color.hex)}
        />
      </div> */}

      <div className="socialLinks ">
        <span>
          <a href="https://twitter.com" target="_blank">
            <img src={twitterIcon} alt="Twitter Icon" />
          </a>
        </span>
        <span>
          <a href="https://github.com" target="_blank">
            <img src={githubIcon} alt="github Icon" />
          </a>
        </span>
        <span>
          <a href="https://linkedin.com" target="_blank">
            <img src={linkedinIcon} alt="linkedin Icon" />
          </a>
        </span>
        <span></span>
      </div>
    </section>
  )
}
