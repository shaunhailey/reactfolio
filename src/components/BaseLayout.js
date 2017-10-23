import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import Home from './Home.js'
import About from './About.js'
import Contact from './Contact.js'

const BaseLayout = () =>
  <div>
    <nav>
      <NavLink activeClassName="selected" className="nav-link" exact to="/">
        Home
      </NavLink>
      <NavLink activeClassName="selected" className="nav-link" exact to="/About">
        About
      </NavLink>
      <NavLink activeClassName="selected" className="nav-link" exact to="/Contact">
        Contact
      </NavLink>
    </nav>
    <Switch>
      <Route path="/About" component={About} />
      <Route path="/Contact" component={Contact} />
      <Route exact path="/" component={Home} />
    </Switch>
  </div>

export default BaseLayout
