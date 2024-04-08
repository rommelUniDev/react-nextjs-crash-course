'use client';

import { useState } from 'react';

export function PokemonSearch({ pokemonNames }) {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchClick = (event) => {
    event.preventDefault();
    const searchResult = pokemonNames.find(
      (name) => name.toLowerCase() === searchValue.toLowerCase()
    );
    if (searchResult) {
      alert(`Found ${searchResult}`);
    } else {
      alert('No pokemon found');
    }
  };

  return (
    <div className="pokemon-search">
      <form onSubmit={handleSearchClick}>
        <input
          type="text"
          placeholder="Search for a pokemon"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
        <button type='submit'>Search</button>
      </form>
    </div>
  );
}
