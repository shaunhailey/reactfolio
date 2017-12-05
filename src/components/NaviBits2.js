import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import Home from './Home.js'
import About from './About.js'
import Contact from './Contact.js'
import Projects from './Projects.js'
import '../styles/Navi.css'

class NaviBits2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      projectsVisible: false
    }
  }

  render() {
    return (
      <div className="naviBits2">
        <div className="buttonThree" onClick={() => this.onClick()}>
          Select for Sample Projects
        </div>
        <div className="wtf2">
          {this.state.projectsVisible ? <Projects /> : null}
        </div>
      </div>
    )
  }

  onClick() {
    this.setState({ projectsVisible: !this.state.projectsVisible })
  }
}

export default NaviBits2
