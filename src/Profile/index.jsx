import React from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import './style.scss';
import { ProfileDetail } from '../ProfileDetail/index.jsx';
import { ProfileStatistic } from '../ProfileStatistic/index.jsx';

export const Profile = (match) => {
  const location = match.location.pathname;
  const pokemon = match.location.state;

  return (
    <>
      <div className="profile">
        <Link
          to={{
            pathname: '/',
          }}
          className="profile__link"
        >
          <svg
            className="navbar__icon"
            width="12"
            height="12"
            viewBox="0 0 492 492"
          >
            <path
              d="M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12
			C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084
			c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864
			l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"
            />
          </svg>
          Zpět na přehled
        </Link>
        <div className="navbar">
          <nav className="navbar__wrapper">
            <ul className="navbar__list">
              <Link
                to={{
                  pathname: `/pokemon/${pokemon.name}`,
                  state: pokemon,
                }}
                className="navbar__link"
              >
                <li
                  className={
                    location === `/pokemon/${pokemon.name}/statistic`
                      ? 'navbar__item navbar__item--inactive'
                      : 'navbar__item'
                  }
                >
                  <svg
                    className="navbar__icon"
                    viewBox="0 0 10 10"
                    width="20"
                    height="20"
                  >
                    <circle
                      cx="5"
                      cy="5"
                      r="4"
                      stroke="#ff3e4e"
                      strokeWidth=".75"
                      fill="transparent"
                    />
                    <circle
                      cx="3.5"
                      cy="4"
                      r=".75"
                      stroke="transparent"
                      fill="#ff3e4e"
                    />
                    <circle
                      cx="6.5"
                      cy="4"
                      r=".75"
                      stroke="transparent"
                      fill="#ff3e4e"
                    />
                    <path d="M3,6 A1 .75, 0, 0 0, 7 6" fill="#ff3e4e" />
                  </svg>
                  Profil
                </li>
              </Link>
              <Link
                to={{
                  pathname: `/pokemon/${pokemon.name}/statistic`,
                  state: pokemon,
                }}
                className="navbar__link"
              >
                <li
                  className={
                    location === `/pokemon/${pokemon.name}`
                      ? 'navbar__item navbar__item--inactive'
                      : 'navbar__item'
                  }
                >
                  <svg
                    className="navbar__icon"
                    viewBox="0 0 512 512"
                    width="20"
                    height="20"
                  >
                    <path
                      d="M73.092,164.452h255.813c4.949,0,9.233-1.807,12.848-5.424c3.613-3.616,5.427-7.898,5.427-12.847    c0-4.949-1.813-9.229-5.427-12.85L213.846,5.424C210.232,1.812,205.951,0,200.999,0s-9.233,1.812-12.85,5.424L60.242,133.331    c-3.617,3.617-5.424,7.901-5.424,12.85c0,4.948,1.807,9.231,5.424,12.847C63.863,162.645,68.144,164.452,73.092,164.452z"
                      fill="#ff3e4e"
                    />
                    <path
                      d="M328.905,237.549H73.092c-4.952,0-9.233,1.808-12.85,5.421c-3.617,3.617-5.424,7.898-5.424,12.847    c0,4.949,1.807,9.233,5.424,12.848L188.149,396.57c3.621,3.617,7.902,5.428,12.85,5.428s9.233-1.811,12.847-5.428l127.907-127.906    c3.613-3.614,5.427-7.898,5.427-12.848c0-4.948-1.813-9.229-5.427-12.847C338.139,239.353,333.854,237.549,328.905,237.549z"
                      fill="#ff3e4e"
                    />
                  </svg>
                  Statistiky
                </li>
              </Link>
            </ul>
          </nav>
        </div>
        {location === `/pokemon/${pokemon.name}/statistic` ? (
          <ProfileStatistic pokemon={pokemon} />
        ) : (
          <ProfileDetail pokemon={pokemon} />
        )}
      </div>
      <Route path="/:pokemon/:name" component={ProfileDetail} />
      <Route path="/:pokemon/:name/:tab" component={ProfileStatistic} />
    </>
  );
};
