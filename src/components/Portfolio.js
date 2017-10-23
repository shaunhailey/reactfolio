import React from 'react'
import Projects from './Projects.js'

const Portfolio = () =>
  <div className="portfolioWrapper">
    <div className="portfolio">
      <h1>Portfolio</h1>
      <h3> Github </h3>
      <div className="github-button">
        <a href="https://github.com/shaunhailey" className="githublink" target="_blank" rel="noopener noreferrer">
          <img src="../Images/GitHub-Mark-32px.png" />
        </a>
      </div>
      <div className="projects">
        <div className="projectLayout">
          <Projects />
        </div>
      </div>
    </div>
  </div>

export default Portfolio
