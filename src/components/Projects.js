import React from 'react'
import SynthScreenShot from '../Images/SynthScreenShot.png'
import Worste from '../Images/worstescreenshot.png'
import Mars from '../Images/marsroverscreenshot.png'
import '../styles/projects.css'

const Projects = () =>
  <div className="Projects">
    <h2>Selected Projects</h2>
    <h3>Synth</h3>
    <p>
      Synth is a browser-based synthesizer utilizing the Tone.js API and Midi.js API. This was my final Demo Day project
      post-graduation from The Iron Yard. It remains a work in progress, as I designed it for my own usage as a quick
      "sketchpad" for laying down basic song structure without the distractions present in more fully-featured DAW
      software. To fully realize this utility, I intend to add a "draw function", multi-track capability, and finally
      the ability to save and export the MIDI track for final production in other software.
    </p>
    <div className="synthimagediv">
      <img src={SynthScreenShot} className="projectImages" alt="project screenshot" />
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
      <img src={Worste} className="projectImages" alt="project screenshot" />
      <a href="https://github.com/shaunhailey/worststore" target="_blank" rel="noopener noreferrer">
        Worste Store on Github
      </a>
    </div>
    <div className="projectsFoot" />
  </div>

export default Projects
