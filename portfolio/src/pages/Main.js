import React, { useState } from 'react'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Connect from './Connect'

const Main = (props) => {
  return (
    <div className="main">
      <Hero />
      <Projects />
      <Connect {...props} />
    </div>
  )
}
export default Main
