import React, { useState } from 'react'
import resume from '../assets/EmilyWesterbackResume0726PDF.pdf'

const Resume = (props) => {
  return (
    <div className="resume">
      {/* <a
        href="https://drive.google.com/file/d/1QMCC84UenuflG40-JumuqdpZCoQuKBxu/view?usp=sharing"
        target="_blank"
      >
        Click here for resume
      </a> */}
      <iframe src={resume} width="100%" height="500px"></iframe>
    </div>
  )
}
export default Resume
