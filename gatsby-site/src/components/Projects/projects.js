import React from 'react';
import findersKeepers from '../../images/FindersKeep/findersKeepersCanvas.png';
import PlentyOfDogs from '../../images/PlentyOfDogs/plentyOfDogs.png';
import SOSSMS from '../../images/SOSSMS/sosnpm.png';
import Quiz from '../../images/Quiz/quiz.png';
import strafford from '..//../images/strafford/strafford.png';

class Projects extends React.Component {
  render() {
    return (
      <div className="projects">
      <h1>MY PROJECTS</h1>
      <div className="findersKeep">
        <h2><a href='https://finders-keepers-frontend.herokuapp.com/'></a><img src={findersKeepers} alt="game play" width='90px'/></h2>
        <p>Full stack real-time, multiplayer game where users compete against the clock to find the most stars. Utilizing socket.io, ReactJS</p>
      </div>
      <div className="strafford">
        <h2><a href='https://strafford-acres.herokuapp.com/'></a><img src={strafford} alt="website screenshot" width='90px'/></h2>
        <p>Client application advertising acreage marketed as "For Sale by Owner.</p>
      </div>
      <div className="PlentyofDogs">
      <h2><a href='http://plenty-of-dogs.site/'></a><img src={PlentyOfDogs} alt="dog site" width='90px'/></h2>
      <p>Application designed to help you select a breed of dog, matching you with available adoptable rescue dogs in the Seattle, WA area.</p>
      </div>
      <div className="SosSms">
      <h2><a href='https://www.npmjs.com/package/sos-sms'></a><img src={SOSSMS} alt="npm screenshot" width='90px'/></h2>
      <p>Easily enable an application to instantly notify developers of critical errors via SMS messages. Included custom NPM package.</p>
      </div>
      <div className="Quiz">
      <h2><a href='https://ggrieb.github.io/death-becomes-you/learn.html#sea'></a><img src={Quiz} alt="quiz" width='90px'/></h2>
      <p>Tongue-in-cheek quiz designed to help you decide what burial option to choose when "Death Becomes You" - a technological solution to a real-world problem.</p>
      </div>
      </div>
    )
  }
}

export default Projects;