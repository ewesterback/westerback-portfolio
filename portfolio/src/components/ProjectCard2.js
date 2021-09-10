import React, { useState, useReducer } from 'react'
import github from '../photos/githubLogo.png'

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
const ProjectCard2 = (props) => {
  const [state, dispatch] = useReducer(reducer, iState)
  const { project, index } = props
  // onMouseEnter={() => dispatch({ type: 'project-focus', payload: true })}
  //     onMouseLeave={() => dispatch({ type: 'project-focus', payload: false })}
  return (
    <div className="project-card">
      <div
        className={
          index % 2 === 0
            ? 'project-desc project-desc-left'
            : 'project-desc project-desc-right'
        }
      >
        <div className="project-title">
          <a href={project.github} target="_blank">
            <img className="logo" src={project.logo} alt="GitHub" />
          </a>
          <h4>{project.name}</h4>
        </div>
        <div className="links">
          <a href={project.deployed} target="_blank">
            Deployed Project
          </a>
          <div className="teal-circle"></div>
          <a href={project.github} target="_blank">
            GitHub
          </a>
        </div>

        <div className="languages">
          {project.languages.map((language, i) =>
            i < project.languages.length - 1 ? (
              <div className="language-group">
                <p key={i}>{language}</p>
                <div className="yellow-circle"></div>
              </div>
            ) : (
              <div className="language-group">
                <p key={i}>{language}</p>
              </div>
            )
          )}
        </div>
        <p>{project.briefDescription}</p>
      </div>
      <div
        className={
          index % 2 === 0
            ? 'project-image project-img-right'
            : 'project-image project-img-left'
        }
      >
        <a href={project.github} target="_blank">
          <img src={project.image} alt={project.name} />
        </a>
      </div>
    </div>
  )
}
export default ProjectCard2
