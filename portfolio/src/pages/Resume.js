import React, { useState } from 'react'
import resume from '../assets/EmilyWesterbackResume0726PDF.pdf'

const Resume = (props) => {
  const onBackClick = () => {
    props.history.push('/')
  }
  return (
    <div className="resume">
      <button onClick={onBackClick}>Back to main page</button>
      <h2>Resume</h2>
      <iframe src={resume} width="100%" height="600px"></iframe>
    </div>
  )
}
export default Resume
