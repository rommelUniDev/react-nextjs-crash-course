import { PokemonDisplay } from "../../../components/PokemonDisplay";

async function getPokemonData(pokemonNo) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNo}`);
  if (!res.ok) throw new Error("Failed to fetch data");
  const data = await res.json();
  return data;
}

export default async function PokemonDetail({ params }) {
  const pokemon = await getPokemonData(params.pokemonNo);
  return (
    <main>
      <div>
        <PokemonDisplay pokemon={pokemon} />
      </div>
    </main>
  );
}
