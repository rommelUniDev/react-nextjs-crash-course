import { PokemonList } from '../components/PokemonList/PokemonList';
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
}

export default async function Home() {
  const pokemons = await getFavoritePokemonData();
  return (
    <main>
      <div className='pokemon-app'>
        <h1>My Pokemon App</h1>
        <h2>My Current Team</h2>
        <PokemonList pokemons={pokemons} />
        <h2>Search for Pokemon</h2>
        {/** Search component here */}
      </div>
    </main>
  );
}
