import React from 'react';
import './style.scss';

export const ProfileDetail = (match) => {
  const pokemonProfile = match.pokemon;
  return (
    <>
      <div className="profile-detail">
        <div className="profile-detail__container">
          <div className="profile-detail__wrapper">
            <p className="profile-detail__name">{pokemonProfile.name}</p>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonProfile.id}.svg`}
              className="profile-detail__image"
              alt="pokemon-profile"
            />
          </div>
          <div className="profile-detail__info">
            <ul className="profile-detail__description">
              <li className="profile-detail__items">
                <span className="profile-detail__property">Typ</span>
                {pokemonProfile.types.map((index) => (
                  <span key={index.type.name} className="profile-detail__value">
                    {index.type.name}
                  </span>
                ))}
              </li>
              <li className="profile-detail__items">
                <span className="profile-detail__property">Výška</span>
                <span className="profile-detail__value">
                  {pokemonProfile.height / 100} m
                </span>
              </li>
              <li className="profile-detail__items">
                <span className="profile-detail__property">Váha</span>
                <span className="profile-detail__value">
                  {pokemonProfile.weight / 10} kg
                </span>
              </li>
              <li className="profile-detail__items">
                <span className="profile-detail__property profile-detail__property--last">
                  Dovednosti
                </span>
                {pokemonProfile.abilities.map((index) => (
                  <span
                    key={index.ability.name}
                    className="profile-detail__value"
                  >
                    {index.ability.name}
                  </span>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
