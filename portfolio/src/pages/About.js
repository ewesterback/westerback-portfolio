import React, { useState } from 'react'

const About = (props) => {
  return (
    <div className="about">
      <p className="blurb">
        With experience as a technical solutions engineer, I excel at
        identifying root issues, anticipating problems, and constructing elegant
        solutions. I thrive in team environments, where I communicate with
        empathy and utilize everyone’s strengths to develop the best possible
        products.
      </p>
      <div className="timeline">
        <div className="year-group">
          <h4 className="year">2021</h4>
          <div className="timeline-description">
            <h5>General Assembly Software Engineering Immersive</h5>
            <p>500+ hour intensive full stack development program</p>
          </div>
        </div>
        <div className="year-group">
          <h4 className="year">2020-2021</h4>
          <div className="timeline-description">
            <h5>Manufacturing Engineer at Penumbra Inc</h5>
            <p>
              Global medical device company focused on innovative therapies in
              markets with significant unmet needs
            </p>
          </div>
        </div>
        <div className="year-group">
          <h4 className="year">2017-2020</h4>
          <div className="timeline-description">
            <h5>Technical Solutions Engineer at Epic Systems</h5>
            <p>
              International healthcare software company with over 250 million
              patient records in their system
            </p>
          </div>
        </div>
        <div className="year-group">
          <h4 className="year">2013-2017</h4>
          <div className="timeline-description">
            <h5>Double Major in Biomedical and Mechanical Engineering</h5>
            <p>
              Rose-Hulman Institute of Technology - Engineering University in
              Terre Haute, IN.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About
