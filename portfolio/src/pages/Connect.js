import React, { useState } from 'react'
import github from '../photos/githubLogo.png'
import linkedin from '../photos/linkedinlogo.jpeg'

const Connect = (props) => {
  const onResumeClick = () => {
    props.history.push('/resume')
  }
  return (
    <div className="connect">
      <div className="top-rectangle"></div>
      <div className="bottom-rectangle"></div>
      <div className="top-right-rectangle"></div>
      <div className="bottom-left-rectangle"></div>
      <div className="connect-content">
        <h2>Learn More About Me</h2>
        <button onClick={onResumeClick}>View Resume</button>
        <div className="connect-links">
          <div className="logo-group">
            <img className="logo" src={linkedin} alt="Linkedin" />
            <a
              href="https://www.linkedin.com/in/emily-westerback/"
              target="_blank"
            >
              /emily-westerback
            </a>
          </div>
          <div className="logo-group">
            <img className="logo" src={github} alt="GitHub" />
            <a href="https://github.com/ewesterback" target="_blank">
              /ewesterback
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Connect
