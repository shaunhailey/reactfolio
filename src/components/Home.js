import React from 'react'
import { Link } from 'react-router-dom'

const Home = () =>
  <div className="homePage">
    <h1>Shaun M Hailey</h1>
    <h3>Front-End Developer</h3>
    <div>
      <button className="btn">
        <Link to="/Portfolio">'Check Out The Portfolio!'</Link>
      </button>
    </div>
  </div>

export default Home
