import React from 'react'
import ReactDOM from 'react-dom'
import '../styles/index.css'
import '../styles/App.css'
import BaseLayout from './BaseLayout.js'
import Header from './Header.js'
import { Switch, Route, Link } from 'react-router-dom'

const App = () =>
  <div>
    <Header />
    <BaseLayout />
  </div>

export default App
