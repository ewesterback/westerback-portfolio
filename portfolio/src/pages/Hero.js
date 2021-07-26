import React, { useState } from 'react'
import mainPhoto from '../photos/launchPhoto.png'

const Hero = (props) => {
  return (
    <div className="hero">
      <div className="top-rectangle"></div>
      <div className="bottom-rectangle"></div>
      <div className="hero-left-side">
        <img src={mainPhoto} />
      </div>
      <div className="hero-right-side">
        <h1>Hi! I'm Emily Westerback</h1>
        <h2>Software developer based in the SF Bay Area</h2>
      </div>
    </div>
  )
}
export default Hero
