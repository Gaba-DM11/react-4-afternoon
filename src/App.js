import React, { Component } from 'react';

import routes from './routes';
import{ Link } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <nav className='nav'>
          <div>DevMountain University</div> 
          <div className='link-wrap'>
              <Link to ='/' className='links'>Home</Link>
              <Link to='/about' className='links'>About</Link> 
          </div>
        </nav>
      
      {routes}

      </div>
    )
  }
}
