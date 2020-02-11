import React from "react";
import { Link } from "react-router-dom";

import { useFetchPokemon } from "./hooks";

function AllPokemon() {
  const pokemon = useFetchPokemon();

  return (
    <div className="pokegrid">
      {pokemon.map((singlePokemon, i) => (
        <div className="pokecard" key={singlePokemon.name}>
          <Link
            to={{
              pathname: `/pokemon/${singlePokemon.id}`,
              state: { singlePokemon }
            }}
          >
            <img
              src={singlePokemon.sprites.front_default}
              alt={singlePokemon.name}
            />
            <h1>{singlePokemon.name}</h1>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default AllPokemon;
