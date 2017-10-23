import React from 'react'
import SynthScreenShot from '../Images/SynthScreenShot.png'
import Worste from '../Images/worstescreenshot.png'
import Mars from '../Images/marsroverscreenshot.png'

const Projects = () =>
  <div className="Projects">
    <h3>Synth</h3>
    <p>
      Synth is a browser-based synthesizer utilizing the Tone.js API and Midi.js API. This was my final Demo Day project
      post-graduation from The Iron Yard. It remains a work in progress, as I designed it for my own usage as a quick
      "sketchpad" for laying down basic song structure without the distractions prsent in more fully-featured DAW
      software. To fully realize this utility, I intend to add a "draw function", multi-track capability, and finally
      the ability to save and export the MIDI track for final production in other software.
    </p>
    <div className="synthimagediv">
      <img src={SynthScreenShot} className="projectImages" />
      <a href="https://shaunhailey.github.io/synth/" target="_blank" rel="noopener noreferrer">
        Synth
      </a>
      <a href="https://github.com/shaunhailey/synth" target="_blank" rel="noopener noreferrer">
        Synth on Github
      </a>
    </div>
    <h3>Worste Store</h3>
    <p>
      "Worste Store" was created for a class assignment during my Iron Yard tenure. It is a mockup of a store website. I
      decided to have some fun with it and created the (intentionally!) worst store website ever! This is a React app,
      and the point of the assignment was to explore React Router and Navlinks, which are omnipresent throughout the
      project.
    </p>
    <div className="synthimagediv">
      <img src={Worste} className="projectImages" />
      <a href="https://github.com/shaunhailey/worststore" target="_blank" rel="noopener noreferrer">
        Worste Store
      </a>
    </div>
    <h3>Mars Rover</h3>
    <p>
      "Mars Rover" was also created for a class assignment during my Iron Yard tenure. By using the drop down boxes, one
      can obtain images from the Mars Rover via the Mars Rover API. The goal of the project was to use fetch to obtain
      the API data, along with props versus state concepts.
    </p>
    <div className="synthimagediv">
      <img src={Mars} className="projectImages" />
      <a href="https://github.com/shaunhailey/marsrover" target="_blank" rel="noopener noreferrer">
        Mars Rover
      </a>
    </div>
  </div>

export default Projects
