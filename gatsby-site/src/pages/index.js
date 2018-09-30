import React from 'react'
// import { Link } from 'gatsby'
import AboutMe from '../components/About/aboutme/aboutme';

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi, I'm Cara Ottmar</h1>
    <h2>I am a Full-Stack Software Developer (MERN) with a background working in the financial industry. <br></br>
     I have a passion for collaboration, innovation, and efficiency. <br></br>
     I love how technology brings these three passions together to help make the world a better place.</h2>
     <AboutMe/>
  </Layout>
)

export default IndexPage
