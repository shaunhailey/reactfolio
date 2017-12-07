import React, { Component } from 'react'
import About from './About.js'
import Projects from './Projects.js'
import '../styles/Navi.css'

class Navi extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.setState({
      name: e.target.name
    })
  }

  newComponentNode(name) {
    switch (name) {
      case 'About':
        return <About />
        break
      case 'Projects':
        return <Projects />
        break
      default:
        ;<Home />
    }
  }

  render() {
    return (
      <div className="navi">
        <div className="buttonTwo" onClick={this.handleClick} name="About">
          Select for About
        </div>
        <div className="buttonThree" onClick={this.handleClick} name="Projects">
          Select for Sample Projects
        </div>
      </div>
    )
  }
}
// export default Navi2
