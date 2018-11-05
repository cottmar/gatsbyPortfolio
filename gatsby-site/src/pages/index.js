import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from '../components/Landing/landing';
import '../pages/style.scss';

class IndexPage extends React.Component {
  render() {
    return (
      <div className='index'>
      <BrowserRouter>
      <Route exact path='/' component={Landing}/>
      </BrowserRouter>
      </div>
    )
  }
}

export default IndexPage