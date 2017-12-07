import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import About from './About.js'
import Contact from './Contact.js'
import Projects from './Projects.js'
import NaviBits1 from './NaviBits1.js'
import NaviBits2 from './NaviBits2.js'
import '../styles/Navi.css'

const Navi = () =>
  <div className="superDuperNaviWrapper">
    <div className="naviWrapper">
      <NaviBits1 />
    </div>
    <div className="naviWrapper">
      <NaviBits2 />
    </div>
  </div>

export default Navi
