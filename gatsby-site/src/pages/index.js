import React from 'react';
import AboutMe from '../components/About/aboutme';
import Links from '../components/About/links';
import forest from '../images/forest/forest.jpg';
import '../pages/style.css';

const IndexPage = () => (
  <div id="backgroundImage">
    <img src={forest} alt="forest" width="100%"/>
    {/* {this.props.children} */}
  <div className="index">
  <div className="main">
        <h5>
          Hi, I'm <em className="bold">Cara Ottmar</em>
        </h5>
        <h3>
          I am a Full-Stack Software Developer (MERN) with a background working in the financial industry. <br></br>
          I have a passion for collaboration, innovation, and efficiency. <br></br>
          I love how technology brings these three passions together to help make the world a better place. 
        </h3>
      <div className="aside">
        <div className="top">
          <AboutMe/>
        </div>
        <div className="bottom">
          <Links />
        </div>
      </div>
      </div>
      </div>
  </div>
)

// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     width: null,
//     height: null,
//     resizeMode: 'cover'
//   }
// });

export default IndexPage