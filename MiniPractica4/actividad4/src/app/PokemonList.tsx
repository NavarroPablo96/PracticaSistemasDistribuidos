'use client';

import { useEffect, useState } from "react";
import axios from "axios";
import PokemonItem from "./PokemonItem"; // Importar el componente PokemonItem

const PokemonList = () => {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Obtener los primeros 20 pokemons de la PokeAPI
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((response) => {
        setPokemons(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Pokémon:", error);
        setLoading(false);
      });
  }, []); // Se ejecuta solo una vez, al montar el componente

  if (loading) {
    return <p>Cargando Pokémon...</p>;
  }

  return (
    <div>
      <h1>Lista de Pokémons</h1>
      <ul>
        {pokemons.map((pokemon, index) => (
          <PokemonItem key={index} pokemon={pokemon} />
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
