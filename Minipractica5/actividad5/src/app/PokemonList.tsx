"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import PokemonItem from "./PokemonItem";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState<{ name: string; url: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=30&offset=0")
      .then((res) => {
        setPokemons(res.data.results);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    // Aquí podrías poner un skeleton loader
    return <p>Cargando Pokémons...</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {pokemons.map((pokemon) => (
        <PokemonItem key={pokemon.name} pokemon={pokemon} />
      ))}
    </ul>
  );
};

export default PokemonList;
