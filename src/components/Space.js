import React, { Component } from 'react'
import About from './About.js'
import Projects from './Projects.js'
import '../styles/space.css'

class Space extends Component {
  constructor(props) {
    super(props)
    this.state = {
      about: false,
      projects: false
    }
    this.handleAbout = this.handleAbout.bind(this)
    this.handleProjects = this.handleProjects.bind(this)
  }

  handleAbout = e => {
    this.setState({ about: !this.state.about })
  }

  handleProjects = e => {
    this.setState({ projects: !this.state.projects })
  }

  render() {
    return (
      <div className="space">
        <button type="button" className="toggleIt" onClick={this.handleAbout}>
          Click here to learn about Shaun Hailey
        </button>
        <button type="button" className="toggleIt" onClick={this.handleProjects}>
          Click here to view selected projects
        </button>
        {this.state.about && <About />}

        {this.state.projects && <Projects />}
        <div className="emptyFill" />
      </div>
    )
  }
}

export default Space
