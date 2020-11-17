import React, { useState, useEffect } from 'react';
import { Pokemons } from '../Pokemons/index.jsx';
import { Pagination } from '../Pagination/index.jsx';
import { SearchInput } from '../SearchInput/index.jsx';

export const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState('fail');
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(12);
  const [userValue, setUserValue] = useState('');

  const filtered = pokemons.filter((pokemon) => {
    return pokemon.name.includes(userValue);
  });

  useEffect(() => {
    setLoading('loading');
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data.results);
        setLoading('success');
      })
      .catch(() => setLoading('fail'));
  }, []);

  const lastPokemon = currentPage * pokemonsPerPage;
  const firstPokemon = lastPokemon - pokemonsPerPage;
  const currentPokemons = filtered.slice(firstPokemon, lastPokemon);
  const paginate = (number) => setCurrentPage(number);

  const handleFilter = (e) => {
    setUserValue(e);
  };
  return (
    <>
      <SearchInput
        paramSearch={(userValue) => handleFilter(userValue)}
        paramChange={userValue}
      />
      <Pokemons
        paramFromFilter={(e) => handleFilter(e)}
        userValue={userValue}
        pokemons={currentPokemons}
        loading={loading}
      />
      <Pagination
        pokemonsPerPage={pokemonsPerPage}
        totalPokemons={filtered.length}
        paginate={paginate}
      />
    </>
  );
};
