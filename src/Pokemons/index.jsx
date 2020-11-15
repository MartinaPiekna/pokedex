import React from 'react';
import './style.scss';
import grid from '../img/grid.svg';
import { PokemonItem } from '../PokemonItem/index.jsx';

export const Pokemons = ({ pokemons }) => {
  return (
    <>
      <div className="pokemon">
        <div className="pokemon__wrapper">
          <div className="pokemon__filter">
            <img src={grid} className="pokemon__icon-grid" />
            <span>Přehled Pokémonů</span>
          </div>
          <ul className="pokemon__list">
            {pokemons.map((item) => (
              <PokemonItem key={item.name} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
