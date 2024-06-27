import { useEffect } from 'react'
import './skills.css'
import SkillsIco from '../Icons/SkillsIco'
import { useRef } from 'react'

const Skills = () => {
  const scrollers = document.querySelectorAll('.scroller')
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    addAnimation()
  }

  function addAnimation() {
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

  useEffect(() => {
    const scrollers = document.querySelectorAll('.scroller')
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          addAnimation()
        }
      })
    })

    const config = { childList: true, subtree: true }
    scrollers.forEach((scroller) => observer.observe(scroller, config))

    // Initial call to ensure animation is added on first load
    addAnimation()

    return () => observer.disconnect() // Cleanup observer on component unmount
  }, [])

  return (
    <div className="skills" id="Skills">
      <div className="titleSection">
        <h1>Skills</h1>
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
