import React from 'react';
// import ContactUsModal from '../../components/Contact Modal/ContactUsModal';
import './navbar.css';
import { NavLink } from 'react-router-dom';
const Navbar = (props) => {


  // const [modalOpen, setModalOpen] = useState(false);

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/issues">Issues</NavLink>
        </li>
        <li>
          <NavLink to="/submission">Submission</NavLink>
        </li>
      </ul>

      <div className="logo">
        <p>Logo</p>
      </div>
      <div className="hamburger">
        <iconify-icon icon="bx:menu"></iconify-icon>
      </div>

      <ul className="nav-links">
        <li>
        <NavLink to="/editors">Editors</NavLink>
        </li>
        <li>
        <NavLink to="/publication-ethics">Ethics</NavLink>
        </li>
        <li
        onClick={( )=> props.contactmodal()}>Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
