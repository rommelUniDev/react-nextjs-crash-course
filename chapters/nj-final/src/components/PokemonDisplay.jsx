"use client";
import Image from "next/image";

export function PokemonDisplay({ pokemon }) {
  return (
    <>
      <h1 className="pokemon-name">{pokemon.name}</h1>
      <h2 className="pokemon-type">{pokemon.types.map((poketype) => poketype.type.name).join(", ")}</h2>
      <Image
        src={pokemon.sprites.front_default}
        alt={`${pokemon.name} Front Sprite`}
        width={200}
        height={200}
      />
      <div>
        <h3>Stats</h3>
        <ul>
          {pokemon.stats.map((stat) => (
            <li key={stat.stat.name}>
              <strong>{stat.stat.name}</strong>: {stat.base_stat}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}