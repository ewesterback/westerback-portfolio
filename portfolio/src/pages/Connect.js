import React, { useState } from 'react'
import github from '../photos/githubLogo.png'
import linkedin from '../photos/linkedinlogo.png'

const Connect = (props) => {
  const onResumeClick = () => {
    props.history.push('/resume')
  }
  return (
    <div className="connect">
      <h2>Learn More About Me</h2>
      <button onClick={onResumeClick}>View Resume</button>
      <img src={linkedin} alt="Linkedin" />
      <a href="https://www.linkedin.com/in/emily-westerback/" target="_blank">
        /emily-westerback
      </a>
      <img className="logo" src={github} alt="GitHub" />
      <a href="https://github.com/ewesterback" target="_blank">
        /ewesterback
      </a>
    </div>
  )
}
export default Connect
