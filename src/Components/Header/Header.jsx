/* eslint-disable no-unused-vars */
import React from 'react';
import './Header.css';
import { assets } from '../../assets/assets';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={assets.logo} alt="Logo" className="logo-image" />
      </div>
      <nav>
        <ul>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/live-tracking">Live Tracking</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;