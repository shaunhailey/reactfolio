import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import Home from './Home.js'
import About from './About.js'
import Portfolio from './Portfolio.js'
import Contact from './Contact.js'
import References from './References.js'

const BaseLayout = () =>
  <div>
    <nav>
      <NavLink activeClassName="selected" className="nav-link" exact to="/">
        Home
      </NavLink>
      <NavLink activeClassName="selected" className="nav-link" exact to="/About">
        About
      </NavLink>
      <NavLink activeClassName="selected" className="nav-link" exact to="/Portfolio">
        Portfolio
      </NavLink>
      <NavLink activeClassName="selected" className="nav-link" exact to="/Contact">
        Contact
      </NavLink>
      <NavLink activeClassName="selected" className="nav-link" exact to="/References">
        References
      </NavLink>
    </nav>
    <Switch>
      <Route path="/About" component={About} />
      <Route path="/Portfolio" component={Portfolio} />
      <Route path="/Contact" component={Contact} />
      <Route path="/References" component={References} />
      <Route exact path="/" component={Home} />
    </Switch>
  </div>

export default BaseLayout
