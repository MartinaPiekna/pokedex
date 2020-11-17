import React, { useState, useEffect } from 'react';
import './style.scss';
import search from '../img/search.svg';
import cancel from '../img/cancel.svg';

export const SearchInput = ({ paramSearch, paramChange }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChangeValue = (text) => {
    setSearchValue(text);
    paramSearch(text);
  };

  useEffect(() => {
    setSearchValue(paramChange);
  }, [paramChange]);
  return (
    <>
      <div className="search">
        <label className="search__icons">
          <img src={search} className="search__icon-search" alt="search-icon" />
          <input
            onChange={(e) => handleChangeValue(e.target.value)}
            type="text"
            value={searchValue}
            className="search__input"
          />{' '}
          <img src={cancel} className="search__icon-cancel" alt="cancel-icon" />
        </label>
      </div>
    </>
  );
};
