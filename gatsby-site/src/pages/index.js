import React from 'react';
import AboutMe from '../components/About/AboutMe.js';
import forest from '../images/forest/forest.jpg';

const IndexPage = () => (
    <div className="index">
    <div className="backgroundImage">
    <img src={forest} alt="forest" width="1165px" height="1080px"/>
    </div>
      <div className="main">
        <h5>
          Hi, I'm <span className="bold">Cara Ottmar</span>
        </h5>
        <h3>
         I am a Full-Stack Software Developer (MERN) with a background working in the financial industry. <br></br>
         I have a passion for collaboration, innovation, and efficiency. <br></br>
         I love how technology brings these three passions together to help make the world a better place. 
        </h3>
      </div>
      <div className="aside">
        <div className="top">
          <AboutMe/>
        </div>
        <div className="bottom">
          {/* <Links /> */}
        </div>
      </div>
    </div>
)
export default IndexPage