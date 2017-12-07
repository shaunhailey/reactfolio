import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
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
      <div className="superNaviBits2">
        <div className="naviBits2" onClick={() => this.onClick()}>
          <div className="buttonThree">Click Here for Sample Projects</div>
          <div className="wtf2">
            {this.state.projectsVisible ? <Projects /> : null}
          </div>
        </div>
        <div className="needSpace">Shaun Hailey 2017 </div>
      </div>
    )
  }

  onClick() {
    this.setState({ projectsVisible: !this.state.projectsVisible })
  }
}

export default NaviBits2
