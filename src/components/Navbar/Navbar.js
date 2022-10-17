import React from 'react';
import './navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>Home</li>
        <li>Issues</li>
        <li>Submissions</li>
      </ul>

      <div className='logo'>
        <p>Logo</p>
      </div>
      <div className='hamburger'>
      <iconify-icon icon="bx:menu"></iconify-icon>
      </div>


      <ul className="nav-links">
        <li>Editors</li>
        <li>Ethics</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
