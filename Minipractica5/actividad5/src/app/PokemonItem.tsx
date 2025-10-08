"use client";

import Link from "next/link";

const PokemonItem = ({ pokemon }: { pokemon: { name: string; url: string } }) => {
  return (
    <li style={{ margin: "0.5rem 0" }}>
      <Link href={`/pokemon/${pokemon.name}`} style={{ textDecoration: "none", color: "blue" }}>
        <div style={{ border: "1px solid #ccc", padding: "0.5rem", borderRadius: "4px", cursor: "pointer" }}>
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </div>
      </Link>
    </li>
  );
};

export default PokemonItem;
