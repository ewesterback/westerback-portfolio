import React, { useState, useReducer } from 'react'
import projectArray from '../components/ProjectArray'
import ProjectCard from '../components/ProjectCard'
import ProjectCard2 from '../components/ProjectCard2'

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
      <h2>Projects</h2>
      <div className="project-list">
        {projectArray.map((project, i) => (
          <div>
            <ProjectCard2 project={project} key={i} index={i} />
            {i < projectArray.length - 1 ? (
              <hr size="2" width="90%" color="#feda65" />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}
export default Projects
