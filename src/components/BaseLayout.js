import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import Home from './Home.js'

const BaseLayout = () =>
  <div className="baseLayout">
    <Home />
  </div>

export default BaseLayout
