import React, { useState } from 'react'

const About = (props) => {
  return (
    <div className="about">
      <div className="about-left-side">
        <div className="about-group">
          <h3>Team Player</h3>
          <p>
            I thrive working on teams, and I feel that everyone performs their
            best in collaborative environments. While I could have solved past
            issues on my own, assembling a team allowed me to optimize my
            talents and to leverage the knowledge of my coworkers.
          </p>
          <p>
            What my teammates say: "Working with Emily is great. Any team would
            be lucky to have her."
          </p>
        </div>
        <div className="about-group">
          <h3>Learner's Mindset</h3>
          <p>
            Curious by nature, I’m always learning and learning quickly. While
            working a full-time job, I completed Codeacademy’s CS101 program in
            Python. During my bootcamp at General Assembly, I’ve completed 100%
            of my assignments and over 80% of the bonuses. Other students in the
            cohort have recognized my drive and passion for learning and often
            come to me for extra help when they don’t understand the assignment.
          </p>
        </div>
      </div>
      <div className="about-right-side">
        <div className="about-group">
          <h3>Excellent Communicator</h3>
          <p>
            Communication is key when working on teams. I have experience
            conveying technical issues to a variety of audiences, from CIOs of
            hospital system to physicians to technical analysts.
          </p>
          <p>
            What my teammates say: "I really want to highlight how great Emily
            was at communicating" and "Emily is a great person to work with, she
            has the ability to explain things in a layman terms and go over it
            why it should be the way it is"
          </p>
        </div>
        <div className="about-group">
          <h3>Client-Focused</h3>
          <p>
            I spent over 2 years advocating for my clients as a Technical
            Solutions Engineer at a healthcare software company. I’m experienced
            in taking feedback from a wide variety of end users and creating a
            software configuration that benefits all. I’ve found that excellent
            web applications and software is intuitive and meets the customer’s
            true needs.
          </p>
        </div>
      </div>
    </div>
  )
}
export default About
