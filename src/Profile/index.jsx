import React from 'react';
import './style.scss';
import { Navbar } from '../Navbar/index.jsx';

export const Profile = (match) => {
  const pokemonProfile = match.location.state;
  console.log(pokemonProfile);
  return (
    <>
      <Navbar />
      <div className="profile">
        <div className="profile__wrapper">
          <p className="profile__name">{pokemonProfile.name}</p>
          <img
            src={`https://pokeres.bastionbot.org/images/pokemon/${pokemonProfile.id}.png`}
            className="profile__image"
          />
        </div>
        <div className="profile__info">
          <ul className="profile__description">
            <li className="profile__items">
              <span className="profile__property">Typ</span>
              {pokemonProfile.types.map((index) => (
                <span key={index.type.name} className="profile__value">
                  {index.type.name}s
                </span>
              ))}
            </li>
            <li className="profile__items">
              <span className="profile__property">Výška</span>
              <span className="profile__value">
                {pokemonProfile.height / 100} m
              </span>
            </li>
            <li className="profile__items">
              <span className="profile__property">Váha</span>
              <span className="profile__value">
                {pokemonProfile.weight / 10} kg
              </span>
            </li>
            <li className="profile__items">
              <span className="profile__property">Dovednosti</span>
              {pokemonProfile.abilities.map((index) => (
                <span key={index.ability.name} className="profile__value">
                  {index.ability.name}
                </span>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
