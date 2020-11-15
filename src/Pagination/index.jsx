import React from 'react';
import './style.scss';

export const Pagination = ({ totalPokemons, pokemonsPerPage, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPokemons / pokemonsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="pagination">
      <ul className="pagination__list">
        {pageNumbers.map((number) => (
          <li key={number} className="pagination__item">
            <a
              onClick={() => paginate(number)}
              href="#"
              className="pagination__button"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
