import React from 'react'
import '../styles/contact.css'

const Contact = () =>
  <div className="contact">
    <div className="contactInfo">Contact Info</div>
    <ul className="fa-ul">
      <li>
        <div className="link">
          <i className="fa fa-phone fa-lg" aria-hidden="true" />
          <a href="tel:813-760-5266">813-760-5266</a>
        </div>
      </li>
      <li>
        <div className="link">
          <a href="mailto:ediblelysol@gmail.com">
            {' '}<i className="fa fa-envelope fa-lg" aria-hidden="true" />ediblelysol@gmail.com
          </a>
        </div>
      </li>
      <li>
        <div className="link">
          <a href="https://www.linkedin.com/in/shaun-hailey-5a4473143" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin-square fa-lg" aria-hidden="true" />LinkedIn
          </a>
        </div>
      </li>
    </ul>
  </div>

export default Contact
