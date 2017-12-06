import React from 'react'
import Contact from './Contact.js'
import '../styles/heading.css'
import Myself from '../Images/shaun.jpg'

const Heading = () =>
  <div className="heading">
    <div className="top">Shaun M Hailey</div>
    <img src={Myself} className="meImages" alt="me screenshot" />
    <div className="bottom">Front-End Developer</div>
    <Contact />
  </div>

export default Heading
