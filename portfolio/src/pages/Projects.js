import React, { useState, useReducer } from 'react'

const iState = {
  projects: [
    {
      name: 'Tetris',
      languages: ['HTML', 'CSS', 'Javascript']
    },
    {
      name: 'Recipe Database',
      languages: ['React', 'Mongoose', 'MongoDB']
    }
  ],
  project: null
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'project-focus':
      return { ...state, project: action.payload }
    case 'project-unfocus':
      return { ...state, project: null }
    default:
      return state
  }
}
const Projects = (props) => {
  const [state, dispatch] = useReducer(reducer, iState)
  return (
    <div className="projects">
      {state.projects.map((project) => (
        <h2>{project.name}</h2>
      ))}
    </div>
  )
}
export default Projects
