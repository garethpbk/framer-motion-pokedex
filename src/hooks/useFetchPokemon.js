import { useEffect, useState } from "react";

async function fetchPokemon() {
  const allPokemon = await fetch("https://pokeapi.co/api/v2/pokemon?limit=15");

  const allPokemonJson = await allPokemon.json();

  const pokemonDetails = await Promise.all(
    allPokemonJson.results.map(async pokemon => {
      const thePokemon = await fetch(pokemon.url);

      const thePokemonJson = await thePokemon.json();

      return thePokemonJson;
    })
  );

  return pokemonDetails;
}

function useFetchPokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(
    pokemon => {
      fetchPokemon()
        .then(res => setPokemon(res))
        .then(() =>
          setTimeout(() => {
            setLoading(false);
          }, 5000)
        );
    },
    [pokemon.length]
  );

  if (loading) return "loading";

  return pokemon;
}

export default useFetchPokemon;
