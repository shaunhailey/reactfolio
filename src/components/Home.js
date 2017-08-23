import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route, Link } from 'react-router-dom'

const Home = () =>
  <div className="homePage">
    <h1> Welcome Home!</h1>
    <h3> 'This is the Home Page' </h3>
    <p> Blah blah blah yadda yadda </p>
    <div>
      <button className="btn">
        <Link to="/Portfolio">'Check Out The Portfolio!'</Link>
      </button>
    </div>
  </div>

export default Home
