import React, { useState, useEffect } from 'react';
import { Pokemons } from '../Pokemons/index.jsx';
import { Pagination } from '../Pagination/index.jsx';
import { SearchInput } from '../SearchInput/index.jsx';

export const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState('fail');
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(12);

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
  const currentPokemons = pokemons.slice(firstPokemon, lastPokemon);
  const paginate = (number) => setCurrentPage(number);

  return (
    <>
      <SearchInput />
      <Pokemons pokemons={currentPokemons} loading={loading} />
      <Pagination
        pokemonsPerPage={pokemonsPerPage}
        totalPokemons={pokemons.length}
        paginate={paginate}
      />
    </>
  );
};
