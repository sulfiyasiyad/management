import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS for styling


const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="">Home</Link>
        </li>
        <li>
          <Link to="/signin">Signin</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;

