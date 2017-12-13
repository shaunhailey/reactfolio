import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import About from './About.js'
import Contact from './Contact.js'
import Projects from './Projects.js'
import NaviBits1 from './NaviBits1.js'
import NaviBits2 from './NaviBits2.js'
import Space from './Space.js'
import '../styles/Navi.css'

const Navi = () =>
  <div className="superDuperNaviWrapper">
    <div className="navi1Wrapper">
      <NaviBits1 />
    </div>
    <div className="navi2Wrapper">
      <NaviBits2 />
    </div>
    <div className="spaceWrapper" />
  </div>

export default Navi
