import React, { useState } from 'react'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'

const Main = (props) => {
  return (
    <div className="main">
      <Hero />
      <Projects />
      <button>View Resume</button>
    </div>
  )
}
export default Main
