import React from 'react';
import Projects from '../Projects/projects';
import AboutMe from '../About/aboutme';
import Links from '../About/links';
import './landing.scss';

class Landing extends React.Component {
  render() {
    return (
<div className="main">
        <h1>
          Hi, I'm <em className="bold">Cara Ottmar</em>
        </h1>
        <h3>
          I am a Full-Stack Software Developer (MERN) with a background working in the financial industry. <br></br>
          I have a passion for collaboration, innovation, and efficiency. <br></br>
          I love how technology brings these three passions together to help make the world a better place. 
        </h3>
        <Projects/>
      <div className="aside">
        <div className="top">
          <AboutMe/>
        </div>
        <div className="bottom">
          <Links />
        </div>
      </div>
    </div>
      )
    }
}

export default Landing;