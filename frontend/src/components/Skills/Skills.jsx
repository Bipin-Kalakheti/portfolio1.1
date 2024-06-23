import { useEffect } from 'react'
import Html from '../Icons/Html'
import './skills.css'
import React from '../Icons/React'
import Css from '../Icons/Css'
import Tailwind from '../Icons/Tailwind'
import Wordpress from '../Icons/Wordpress'
import Python from '../Icons/Python'
import Firebase from '../Icons/Firebase'
import Node from '../Icons/Node'
import Java from '../Icons/Java'
import MySql from '../Icons/MySql'
import Mongodb from '../Icons/Mongodb'
import SkillsIco from '../Icons/SkillsIco'

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
      })
    })
  }

  useEffect(() => {
    addAnimation()
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
