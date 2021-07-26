import React, { useState, useReducer } from 'react'

// const iState = {
//   projects: [
//     {
//       name: 'Tetris',
//       languages: ['HTML', 'CSS', 'Javascript']
//     },
//     {
//       name: 'Recipe Database',
//       languages: ['React', 'Mongoose', 'MongoDB']
//     }
//   ],
//   project: null
// }

const ProjectCard = (props) => {
  //const [state, dispatch] = useReducer(reducer, iState)
  const { state, dispatch } = props
  return (
    <div className="projects-card">
      {state.projects.map((project) => (
        <h2>{project.name}</h2>
      ))}
    </div>
  )
}
export default ProjectCard
