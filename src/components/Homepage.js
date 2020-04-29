import React from 'react';
import RandomCam from './RandomCam';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div>
      <div className='Homepage-bg-img'>bg img stand-in</div>
      <div className='Homepage-card-container'>
        <Link to='/countries'>
          <div className='Homepage-countries-card'>
            <h3>Countries</h3>
          </div>
        </Link>
        <Link to='/categories'>
          <div className='Homepage-categories-card'>
            <h3>Categories</h3>
          </div>
        </Link>
      </div>
      <RandomCam />
    </div>
  );
}

export default Homepage;
