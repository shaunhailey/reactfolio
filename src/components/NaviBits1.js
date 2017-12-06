import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import Home from './Home.js'
import About from './About.js'
import Contact from './Contact.js'
import Projects from './Projects.js'
import '../styles/Navi.css'

class NaviBits1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      aboutVisible: false
    }
  }

  render() {
    return (
      <div className="naviBits1" onClick={() => this.onClick()}>
        <div className="buttonTwo">Click Here for Biography</div>
        <div className="wtf">
          {this.state.aboutVisible ? <About /> : null}
        </div>
      </div>
    )
  }

  onClick() {
    this.setState({ aboutVisible: !this.state.aboutVisible })
  }
}

export default NaviBits1
