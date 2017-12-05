import React from 'react'
import Portfolio from './Portfolio'
import Contact from './Contact'
import About from './About'
import '../styles/FlexThisBox.css'

const Home = () =>
  <div className="homePage">
    <div className="flexThisBox">
      <div className="flexThisBox1">
        <Contact />
      </div>
      <div className="flexThisBox2" />
    </div>
  </div>

export default Home
