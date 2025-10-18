"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect,useState } from "react";
import axios from "axios";
import PokemonItem from "./PokemonItem";

//Necesarios para el skeleton loader en el if (isLoading)
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type Pokemon = {
  name: string;
  url: string;
};

async function fetchPokemons(limit: number, offset: number) {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  return res.data.results as Pokemon[];
}

const PokemonList = () => {
  const [limit, setLimit] = useState(30);
  const { data: pokemons = [], isLoading } = useQuery({
    queryKey: ["pokemons", limit],
    queryFn: () => fetchPokemons(limit, 0),
  });

  const handleLoadMore = () => {
    setLimit((prev) => prev + 30);
  };

  //Se utilizá la librería   npm install react-loading-skeleton
  //para el skeleton loader
  if (isLoading) {
    return (
      <ul>
        {Array(10).fill(0).map((_, i) => (
          <li key={i}>
           <Skeleton height={40} />
          </li>
       ))}
      </ul>
    );
  }

  //CODIGO DE ACTIVIDAD5 COMENTADO
  //const [pokemons, setPokemons] = useState<{ name: string; url: string }[]>([]);
  //const [loading, setLoading] = useState(true);

  /*if (loading) {
    // Aquí podrías poner un skeleton loader
    return <p>Cargando Pokémons...</p>;
  }*/

  /*useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=30&offset=0")
      .then((res) => {
        setPokemons(res.data.results);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);*/


  /*return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {pokemons.map((pokemon) => (
        <PokemonItem key={pokemon.name} pokemon={pokemon} />
      ))}
    </ul>
  );*/
  return (
    <>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {pokemons.map((pokemon) => (
          <PokemonItem key={pokemon.name} pokemon={pokemon} />
        ))}
      </ul>
      <button onClick={handleLoadMore}>Cargar más</button>
    </>
  );
};

export default PokemonList;
