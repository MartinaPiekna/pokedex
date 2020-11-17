import React from 'react';
import './style.scss';
import filter from '../img/filter.svg';
import grid from '../img/grid.svg';
import close from '../img/close.svg';

export const Filter = ({ userValue, paramFilter }) => {
  return (
    <>
      <div className="filter">
        {userValue !== '' ? (
          <>
            <div className="filter__results">
              <img src={filter} className="filter__icon-filter" alt="filter" />
              <span className="filter__grid">Výsledky hledání</span>
            </div>
            <div className="filter__results">
              <button
                onClick={() => paramFilter('')}
                className="filter__button"
              >
                <img src={close} className="filter__icon-cancel" alt="cancel" />
                Smazat filtry
              </button>
            </div>
          </>
        ) : (
          <div className="filter__results">
            <img src={grid} className="filter__icon-grid" alt="grid" />
            <span className="filter__grid">Přehled Pokémonů</span>
          </div>
        )}
      </div>
    </>
  );
};
