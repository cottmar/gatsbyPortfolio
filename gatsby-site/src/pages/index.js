import React from 'react';
// import AboutMe from '../components/About/aboutme';
// import Links from '../components/About/links';
// import Projects from '../components/Projects/projects';
import Landing from '../components/Landing/landing';
import forest from '../images/forest/forest.jpg';
import '../pages/style.scss';

const IndexPage = () => (
  <div className="index">
   <img src={forest} alt="forest" width="100%"/>
  <div>
    <Landing/>
  </div>
  </div>
)

// comment back out
// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     width: null,
//     height: null,
//     resizeMode: 'cover'
//   }
// });

export default IndexPage