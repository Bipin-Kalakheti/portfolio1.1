import { useState } from 'react'
import './App.css'
import Sidebar from './components/sidebar/Sidebar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Projects from './components/Projects/Projects.jsx'
import ExpProj from './components/Projects/expProj.jsx'
import Skills from './components/Skills/Skills.jsx'

function App() {
  return (
    <>
      {/* <Sidebar /> */}
      <Hero />
      <Projects />
      <ExpProj />
      <Skills />
    </>
  )
}

export default App
