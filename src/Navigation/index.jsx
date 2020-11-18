import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export const Navigation = () => {
  const [opened, setOpened] = useState(false);
  const handleClick = () => {
    setOpened(true);
  };
  return (
    <>
      <nav className="navigation">
        <div className="navigation__logo">
          <img
            src="https://fontmeme.com/permalink/201115/64b16bcedd83c388fc339a1662553d79.png"
            alt="logo"
          />
        </div>
        <div className="navigation__mobile-menu">
          <button
            onClick={(opened) => handleClick(opened)}
            className="navigation__hamburger"
          ></button>
        </div>
        <ul
          className={
            opened
              ? 'navigation__list'
              : 'navigation__list navigation__list--closed '
          }
        >
          <Link to="/about" className="navigation__link">
            <li className="navigation__item">O nás</li>
          </Link>
          <Link to="/" className="navigation__link">
            <li className="navigation__item">Pokémoni</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};
