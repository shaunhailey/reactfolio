import React from 'react'

const Heading = () =>
  <div className="heading">
    <div className="top">Shaun M Hailey</div>
    <div className="bottom">Front-End Developer</div>
    <h2>Contact Info</h2>
    <ul className="digits">
      <li>
        <div className="link">
          <a href="tel:813-760-5266">Phone: 813-760-5266</a>
        </div>
      </li>
      <li>
        <div className="link">
          <a href="mailto:ediblelysol@gmail.com">Email</a>
        </div>
      </li>
      <li>
        <div className="link">
          <a href="https://www.linkedin.com/in/shaun-hailey-5a4473143" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </li>
    </ul>
  </div>

export default Heading
