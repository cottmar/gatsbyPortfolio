import React from 'react';
import forest from '../../images/forest/forest.jpg';

class BackgroundImage extends React.Component{
  render() {
    return (
    <div className="backgroundImage">
      <img src={forest} alt="forest" width="100%" height="auto"/>
    </div>
    )
  }
}

export default BackgroundImage