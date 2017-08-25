import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route, Link } from 'react-router-dom'

const Contact = () =>
  <div className="contact">
    <h2>Contact Info</h2>
    <ul className="digits">
      <li>'Phone = 555-5555'</li>
      <li>'Email = poos@latrine.com'</li>
      <li>'Smoke Signals = 0111010'</li>
    </ul>
  </div>

export default Contact
