import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='Nav'>
      <Link to='/'>
        <img
          className='logo'
          src='https://i.imgur.com/E0dSgwX.png'
          alt='logo'
        />
      </Link>
      <div className='nav-items'>
        <Link to='/countries'>
          <h4>Countries</h4>
        </Link>

        <Link to='/categories'>
          <h4>Categories</h4>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
