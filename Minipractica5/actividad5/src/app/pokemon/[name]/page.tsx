// app/pokemon/[name]/page.tsx
import axios from "axios";
import Link from "next/link";

interface PokemonProps {
  params: { name: string };
}

export default async function PokemonDetail({ params }: PokemonProps) {
  const { name } = params;

  // Obtener datos del pokemon
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const pokemon = res.data;

  return (
    <div>
      <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Altura: {pokemon.height} decímetros</p>
      <p>Peso: {pokemon.weight} hectogramos</p>
      <p>Tipos: {pokemon.types.map((t: any) => t.type.name).join(", ")}</p>
      <Link href="/">Volver a la lista</Link>
    </div>
  );
}
