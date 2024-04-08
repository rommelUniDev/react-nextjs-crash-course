import { PokemonList } from '../components/PokemonList/PokemonList';
import { PokemonSearch } from '../components/PokemonSearch/PokemonSearch';
import './page.css';

const getFavoritePokemonData = async () => {
  const pokemonIds = [1, 4, 7, 25, 133, 150];
  const pokemons = await Promise.all(
    pokemonIds.map(async (id) => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      if (!res.ok) throw new Error('Failed to fetch data');
      return res.json();
    })
  );
  return pokemons;
};

const getAllPokemonData = async () => {
  const pokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=1302`
  );
  if (!pokemonsResponse.ok) throw new Error('Failed to fetch data');
  const pokemonData = await pokemonsResponse.json();
  return pokemonData.results.map((pokemon) => pokemon.name);
};

export default async function Home() {
  const favoritePokemons = await getFavoritePokemonData();
  const allPokemons = await getAllPokemonData();
  return (
    <>
      <h2>My Current Team</h2>
      <PokemonList pokemons={favoritePokemons} />
      <h2>Search for Pokemon</h2>
      <PokemonSearch pokemonNames={allPokemons} />
    </>
  );
}
