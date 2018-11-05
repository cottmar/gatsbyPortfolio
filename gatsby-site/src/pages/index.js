import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from '../components/Landing/landing';
import Header from '../components/header/header';
import '../pages/style.scss';

class IndexPage extends React.Component {
  render() {
    return (
      <div className='index'>
      <BrowserRouter>
      <div>
      <Header/>
      <Route exact path='/' component={Landing}/>
      </div>
      </BrowserRouter>
      </div>
    )
  }
}

export default IndexPage