import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="Nav">
      <Link to="/">
        <img
          className="logo"
          src="https://i.imgur.com/ZXdCWLR.png"
          alt="logo"
        />
      </Link>

      <Link to="/countries">
        <img
          className="country"
          src="https://i.imgur.com/UZYfLHH.png"
          alt="country"
        />
      </Link>

      <Link to="/categories">
        <img
          className="category"
          src="https://i.imgur.com/bZI9mIe.png"
          alt="catergory"
        />
      </Link>
    </nav>
  );
}

export default Navbar;
