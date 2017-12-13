import React from 'react'
import Contact from './Contact.js'
import '../styles/heading.css'
import Myself from '../Images/shaun.jpg'
import ButtonNav from './ButtonNav.js'

const Heading = () =>
  <div className="heading">
    <img src={Myself} className="meImages" alt="me screenshot" />
    <div className="top">Shaun M Hailey</div>
    <div className="bottom">Front-End Developer</div>
    <Contact />
  </div>

export default Heading
