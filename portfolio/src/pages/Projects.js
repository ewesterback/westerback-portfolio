import React, { useState, useReducer } from 'react'
import projectArray from '../components/ProjectArray'
import ProjectCard from '../components/ProjectCard'

// const iState = {
//   project: null
// }
// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'project-focus':
//       return { ...state, project: action.payload }
//     case 'project-unfocus':
//       return { ...state, project: null }
//     default:
//       return state
//   }
// }
const Projects = (props) => {
  //const [state, dispatch] = useReducer(reducer, iState)
  return (
    <div className="projects">
      {projectArray.map((project) => (
        <ProjectCard project={project} />
      ))}
    </div>
  )
}
export default Projects
