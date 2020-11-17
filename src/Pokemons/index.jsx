import React from 'react';
import './style.scss';
import { PokemonItem } from '../PokemonItem/index.jsx';
import { Filter } from '../Filter/index.jsx';
import pokebal from '../img/pokeball.svg';

export const Pokemons = ({ pokemons, userValue, paramFromFilter }) => {
  return (
    <>
      <div className="pokemons">
        <div className="pokemons__wrapper">
          <Filter
            paramFilter={(e) => paramFromFilter(e)}
            userValue={userValue}
          />

          {pokemons.length !== 0 ? (
            <ul className="pokemons__list">
              {pokemons.map((item) => (
                <PokemonItem pokemons={pokemons} key={item.name} item={item} />
              ))}
            </ul>
          ) : (
            <ul className="pokemons__list--empty">
              <div className="pokemons__empty">
                <img src={pokebal} alt="pokeball" alt="pokeball"/>
                <p>Žádné výsledky</p>
              </div>
            </ul>
          )}
        </div>
      </div>
    </>
  );
};
