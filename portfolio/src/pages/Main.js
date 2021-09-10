import React, { useState, useRef } from 'react'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Connect from './Connect'

const Main = (props) => {
  const projectRef = useRef()
  const aboutMeRef = useRef()
  return (
    <div className="main">
      <Hero {...props} />
      <About />
      <Projects />
      <Connect {...props} />
    </div>
  )
}
export default Main
