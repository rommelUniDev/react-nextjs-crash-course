import Link from "next/link";

import { PokemonDisplay } from "../../../components/PokemonDisplay/PokemonDisplay";

async function getPokemonData(pokemonNo) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNo}`);
  if (!res.ok) throw new Error("Failed to fetch data");
  const data = await res.json();
  return data;
}

export default async function PokemonDetailPage({ params }) {
  const pokemon = await getPokemonData(params.pokemonNo);
  return (
    <>
      <PokemonDisplay pokemon={pokemon} />
      <Link href="/">Go Back</Link>
    </>
  );
}
