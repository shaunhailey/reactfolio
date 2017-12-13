import React, { Component } from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import About from './About.js'
import Contact from './Contact.js'
import Projects from './Projects.js'
import NaviBits1 from './NaviBits1.js'
import NaviBits2 from './NaviBits2.js'
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
          About Me
        </button>
        <button type="button" className="toggleIt" onClick={this.handleProjects}>
          Selected Projects
        </button>
        {this.state.about && <About />}

        {this.state.projects && <Projects />}
        <div className="emptyFill" />
      </div>
    )
  }
}

export default Space
