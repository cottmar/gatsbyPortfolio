import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AboutMe from '../About/aboutme';
import Portfolio from '../Projects/projects';
// import Resume from '../Resume/';
import './header.scss';

class Header extends Component {
  render() {
    return (
      <div id="header">
        <nav>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Portfolio</Link>
          </li>
          {/* <li>
            <Link to="resume">Resume</Link>
          </li> */}
        </nav>
      </div>
    )
  }
}

export default Header;