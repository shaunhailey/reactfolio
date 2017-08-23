import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route, Link } from 'react-router-dom'
import Home from './Home.js'
import About from './About.js'
import Portfolio from './Portfolio.js'

const Header = () =>
  <div className="header">
    <header>
      <nav>
        <ul className="headerlist">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Portfolio">Portfolio</Link>
          </li>
        </ul>
      </nav>
    </header>
  </div>

export default Header
