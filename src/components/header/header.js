import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
// import About from 
// import Portfolio

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <nav>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/About'>About Me</Link>
          </li>
          <li>
            <Link to='/Portfolio'>Portfolio</Link>
          </li>
        </nav>
      </div>
    )
  }
}

export default Header;