import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import Home from './Home.js'
import About from './About.js'
import Contact from './Contact.js'
import Projects from './Projects.js'
import NaviBits1 from './NaviBits1.js'
import NaviBits2 from './NaviBits2.js'
import '../styles/Navi.css'

class Navi extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      aboutVisible: false,
      projectsVisible: false
    }
  }

  render() {
    return (
      <div className="naviWrapper">
        <div className="navi">
          <NaviBits1 />
        </div>
        <div className="naviSecond">
          <NaviBits2 />
        </div>
      </div>
    )
  }
}

export default Navi
