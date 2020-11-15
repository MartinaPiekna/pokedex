import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export const PokemonItem = ({ item }) => {
  const [pokemonItem, setPokemonItem] = useState({});
  const [loading, setLoading] = useState('fail');
  useEffect(() => {
    setLoading('loading');
    fetch(item.url)
      .then((response) => response.json())
      .then((data) => {
        setPokemonItem(data);
        setLoading('success');
      })
      .catch(() => setLoading('fail'));
  }, [item]);

  const url = item.url;
  const id = url.substr(-3).replace(/^\/|\/$/g, '');

  let content = <h2>Nic tu není 😢</h2>;

  if (loading === 'success') {
    content = (
      <>
        <div className="pokemon__wrapper">
          <img
            src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
            className="pokemon__image"
          />
        </div>
        <p key={pokemonItem.name} className="pokemon__name">
          {pokemonItem.name}
        </p>
      </>
    );
  } else if (loading === 'loading') {
    content = <h2>Načítám...⏳</h2>;
  }

  return (
    <>
      {' '}
      <li className="pokemon__item">
        <Link
          to={{
            pathname: `/${pokemonItem.name}`,
            state: pokemonItem,
          }}
          className="pokemon__link"
        >
          {content}
        </Link>
      </li>
    </>
  );
};
