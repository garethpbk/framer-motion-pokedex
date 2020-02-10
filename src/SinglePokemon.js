import React from "react";

function SinglePokemon({ location: { state } }) {
  const {
    singlePokemon: { name, sprites }
  } = state;

  return (
    <div>
      <h1>{name}</h1>
      <img src={sprites.front_default} alt={name} />
    </div>
  );
}

export default SinglePokemon;
