import React from 'react'
import '../styles/index.css'
import '../styles/App.css'
import BaseLayout from './BaseLayout.js'
import Heading from './Heading.js'
import Navi from './Navi.js'
import NaviBits1 from './NaviBits1.js'
import NaviBits2 from './NaviBits2.js'

const App = () =>
  <div>
    <Heading />
    <div className="naviWrapper">
      <NaviBits1 />
      <NaviBits2 />
    </div>
  </div>

export default App
