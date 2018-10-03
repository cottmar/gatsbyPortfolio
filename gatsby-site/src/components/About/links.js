import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Links extends Component {
  render() {
    return ( 
      <div className="Links">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"/>
        <ul className="smicons">
          <li className="icon">
          <a href="https://github.com/cottmar" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github"></i>
          </a>
          </li>
          <li className="icon">
            <a href="mailto:cara.ottmar@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-envelope"></i>
            </a>
          </li>
          <li className="icon">
            <a href="https://www.linkedin.com/in/cara-ottmar/" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Links