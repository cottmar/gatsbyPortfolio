import React from 'react';
import { Link } from 'react-router-dom';
import forest from '../../images/forest/forest.jpg';
// import Projects from '../Projects/projects';
// import AboutMe from '../About/aboutme';
// import Links from '../About/links';
import './landing.scss';

class Landing extends React.Component {
  render() {
    return (
      
      <div classname='wrapper'>
      <img src={forest} alt="forest" width="100%" height="700vw"/>
      <div className="landing">
        <h1>
          Hi, I'm <em className="bold">Cara Ottmar</em>
        </h1>
        <h3>
          I am a Full-Stack Software Developer (MERN) with a background working in the financial industry. <br></br>
          I have a passion for collaboration, innovation, and efficiency. <br></br>
          I love how technology brings these three passions together to help make the world a better place. 
        </h3>
        <Link to='/projects'><button>Click Here For More</button></Link>
    </div>
    </div>
      )
    }
}

export default Landing;