import React from 'react'
import Projects from './Projects.js'
import Github from '../Images/GitHub.png'

const Portfolio = () =>
  <div className="portfolioWrapper">
    <h4>Link to Github</h4>
    <div className="portfolio">
      <div className="github-button">
        <a href="https://github.com/shaunhailey" className="githublink" target="_blank" rel="noopener noreferrer">
          <img src={Github} className="gitBut" alt="Link to Github" />
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
