import React from 'react';
import RandomCam from './RandomCam';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div className='home-container'>
      <div className='home-bg-img'></div>
      <div className='home-card-container'>
        <Link to='/countries' className='home-countries'>
          <div>
            <h3>Countries</h3>
          </div>
        </Link>
        <Link to='/categories' className='home-categories'>
          <div>
            <h3>Categories</h3>
          </div>
        </Link>
      </div>
      <RandomCam />
    </div>
  );
}

export default Homepage;
