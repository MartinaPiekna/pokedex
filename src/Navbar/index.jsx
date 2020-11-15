import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="navbar__wrapper">
        <ul className="navbar__list">
          <Link to="/about" className="navbar__link">
            <li className="navbar__item">Profil</li>
          </Link>
          <Link to="/about" className="navbar__link">
            <li className="navbar__item">Statistiky</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};
