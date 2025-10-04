'use client';

import { useState } from "react";

const PokemonItem = ({ pokemon }: { pokemon: { name: string; url: string } }) => {
  const [clickCount, setClickCount] = useState<number>(0);
  const [pokemonDetails, setPokemonDetails] = useState<any>(null);

  // Obtener los detalles de un pokemon al hacer clic
  const handleClick = () => {
    setClickCount(clickCount + 1);

    // Solo hacer la solicitud si no se ha cargado ya los detalles
    if (!pokemonDetails) {
      fetch(pokemon.url)
        .then((response) => response.json())
        .then((data) => setPokemonDetails(data))
        .catch((error) => console.error("Error fetching Pokémon details:", error));
    }
  };

  return (
    <li>
      <button onClick={handleClick}>
        {pokemon.name} (Clicked {clickCount} times)
      </button>
      {pokemonDetails && (
        <div>
          <p>Height: {pokemonDetails.height} decimeters</p>
          <p>Weight: {pokemonDetails.weight} hectograms</p>
          <img src={pokemonDetails.sprites.front_default} alt={pokemon.name} />
        </div>
      )}
    </li>
  );
};

export default PokemonItem;
