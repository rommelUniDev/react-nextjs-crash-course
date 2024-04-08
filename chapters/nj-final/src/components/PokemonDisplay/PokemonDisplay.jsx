import Image from 'next/image';
import './PokemonDisplay.css';

export function PokemonDisplay({ pokemon }) {
  return (
    <div className="pokemon">
      <div className="pokemon-left">
        <h1>{pokemon.name}</h1>
        <h2>
          {pokemon.types.map((poketype) => poketype.type.name).join(', ')}
        </h2>
        <Image
          src={pokemon.sprites.front_default}
          alt={`${pokemon.name} Front Sprite`}
          width={200}
          height={200}
          className="image-container"
        />
      </div>
      <div className="pokemon-right">
        <h3>Stats</h3>
        <ul>
          {pokemon.stats.map((stat) => (
            <li key={stat.stat.name}>
              <strong>{stat.stat.name}</strong>: {stat.base_stat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
