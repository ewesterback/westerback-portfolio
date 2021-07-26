import React, { useState } from 'react'
import mainPhoto from '../photos/launchPhoto.png'

const Hero = (props) => {
  return (
    <div className="hero">
      <div className="top-rectangle"></div>
      <div className="bottom-rectangle"></div>
      <div className="top-right-rectangle"></div>
      <div className="bottom-left-rectangle"></div>
      <div className="hero-left-side">
        <img src={mainPhoto} />
      </div>
      <div className="hero-right-side">
        <div className="hero-top-group">
          <h1>Hi! I'm Emily Westerback</h1>
          <h2>Software developer based in the SF Bay Area</h2>
        </div>
        <div className="hero-bottom-group">
          <p>
            With experience in healthcare software and medical devices, I love
            constructing elegant solutions to improve the lives of others. When
            I'm not coding, catch me trying to pet all of the dogs and eat all
            of the food in the Bay Area. To learn more about me, check out my
            projects below, view my resume, or connect with me.
          </p>
        </div>
      </div>
    </div>
  )
}
export default Hero
