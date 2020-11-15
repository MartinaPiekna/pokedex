import React from 'react';
import './style.scss';
import search from '../img/search.svg';
import cancel from '../img/cancel.svg';

export const SearchInput = () => {
  return (
    <div className="search">
      <label className="search__icons">
        <a href="#" className="search__link">
          <img src={search} className="search__icon-search" />
        </a>
        <input type="search" className="search__input" />{' '}
        <a href="#" className="search__link">
          <img src={cancel} className="search__icon-cancel" />
        </a>
      </label>
    </div>
  );
};
