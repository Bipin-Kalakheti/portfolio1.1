import { useEffect, useState } from 'react'
import Html from '../Icons/Html'
import './skills.css'
import SkillsIco from '../Icons/SkillsIco'
import { useRef } from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'

const Skills = () => {
  const [contentLoaded, setContentLoaded] = useState(false)

  useEffect(() => {
    const scrollers = document.querySelectorAll('.scroller')
    if (
      scrollers.length > 0 &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      addAnimation()
      setContentLoaded(true) // Indicate that content (and animations) are ready
    }
  }, [contentLoaded])

  function addAnimation() {
    const scrollers = document.querySelectorAll('.scroller')
    console.log('addAnimation')
    scrollers.forEach((scroller) => {
      scroller.setAttribute('data-animated', true)

      const scrollerInner = scroller.querySelector('.scroller_inner')
      const scrollerContent = Array.from(scrollerInner.children)

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        duplicatedItem.setAttribute('aria-hidden', true)
        scrollerInner.appendChild(duplicatedItem)
        console.log('Animating item:', item) // Check if items are selected and duplicated
        console.log("Yes we're animating")
      })
    })
  }

  const scrollersRef = useRef(null)

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 20)

    // Return a cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="skills" id="Skills">
      <div className="sectionTitle">
        <h1 className="sectionTitle">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['S', 'k', 'i', 'l', 'l', 's']}
            idx={15}
          />
        </h1>
      </div>
      <div className="scroller">
        <ul className="tag-list scroller_inner">
          <SkillsIco />
        </ul>
      </div>
      <div className="scroller" data-direction="right">
        <ul className="tag-list scroller_inner">
          <SkillsIco />
        </ul>
      </div>
      <div className="scroller">
        <ul className="tag-list scroller_inner">
          <SkillsIco />
        </ul>
      </div>
    </div>
  )
}

export default Skills
