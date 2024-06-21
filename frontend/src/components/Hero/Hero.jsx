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

function Hero() {
  const { theme, toggleTheme } = useTheme()

  const themeIcon = theme === 'light' ? sun : moon
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark
  const githubIcon = theme === 'light' ? githubLight : githubDark
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark

  return (
    <section id="hero" className="section-container">
      <div className="colorModeContainer">
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
        <h1>
          Bipin <br />
          Kalakheti
        </h1>
        <h2>Frontend Developer</h2>
        <div className="socialLinks">
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
        </div>
        <p className="description">
          With a passion for developing modern web apps for commercial
          businesses.
        </p>
        <a href={Resume} download>
          <button className="resumeButton">Resume</button>
        </a>
      </div>
    </section>
  )
}

export default Hero
