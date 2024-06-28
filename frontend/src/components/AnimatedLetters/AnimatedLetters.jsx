import React from 'react'
import './animatedLetters.scss'

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  const handleMouseEnter = (event) => {
    const element = event.target
    element.classList.remove('text-animate-active')
    // Trigger a reflow in between removing and adding the class back
    void element.offsetWidth
    element.classList.add('text-animate-active')
  }

  return (
    <span>
      {strArray.map((char, i) => (
        <span
          key={char + i}
          className={`${letterClass} _${i + idx} text-animate-hover`}
          onMouseEnter={handleMouseEnter}
        >
          {char}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
