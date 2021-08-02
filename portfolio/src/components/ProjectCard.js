import React, { useState, useReducer } from 'react'

const iState = {
  selected: false
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'project-focus':
      return { ...state, selected: action.payload }
    case 'project-unfocus':
      return { ...state, selected: action.payload }
    default:
      return state
  }
}
const ProjectCard = (props) => {
  const [state, dispatch] = useReducer(reducer, iState)
  const { project } = props
  // onMouseEnter={() => dispatch({ type: 'project-focus', payload: true })}
  //     onMouseLeave={() => dispatch({ type: 'project-focus', payload: false })}
  return (
    <div className="project-card">
      {state.selected ? (
        <div className="project-card-details">
          <p>{project.name}</p>
          <a href={project.github} target="_blank">
            GitHub
          </a>
          <a href={project.deployed} target="_blank">
            Deployed Project
          </a>
          <div className="languages">
            {project.languages.map((language) => (
              <p>{language}</p>
            ))}
          </div>
          <p>{project.briefDescription}</p>
          <button
            onClick={() => dispatch({ type: 'project-focus', payload: false })}
          >
            Back
          </button>
        </div>
      ) : (
        <div>
          <img src={project.image} />
          <p>{props.project.name}</p>
          <button
            onClick={() => dispatch({ type: 'project-focus', payload: true })}
          >
            Learn More
          </button>
        </div>
      )}
    </div>
  )
}
export default ProjectCard
