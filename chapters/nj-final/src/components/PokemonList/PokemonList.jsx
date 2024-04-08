import Image from 'next/image';
import Link from 'next/link';
import './PokemonList.css';

export function PokemonList({ pokemons }) {

  if (!pokemons.length)
    return (
      <div className='pokemon-list'>
        <h2>No Pokemons found</h2>
        <p>Add one by searching for a pokemon below</p>
      </div>
    );

  return (
    <div className='pokemon-list'>
      {pokemons.map((pokemon) => (
        <Link href={`/pokemon/${pokemon.id}`} key={pokemon.id} className='pokemon-card'>
          <div>
            <h2 className='pokemon-name'>{pokemon.name}</h2>
            <Image
              src={pokemon.sprites.front_default}
              alt={`${pokemon.name} Front Sprite`}
              width={200}
              height={200}
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
