import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route } from 'react-router-dom'
import Header from './Header.js'
import Home from './Home.js'
import About from './About.js'
import Portfolio from './Portfolio.js'

const BaseLayout = () =>
  <Switch>
    <Route path="/About" component={About} />
    <Route path="/Portfolio" component={Portfolio} />
    <Route exact path="/" component={Home} />
  </Switch>

export default BaseLayout
