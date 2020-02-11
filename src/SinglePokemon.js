import React from "react";
import { Link } from "react-router-dom";
import "./SinglePokemon.css";

function SinglePokemon({ location: { state } }) {
  const {
    singlePokemon: { id, name, sprites, stats, types }
  } = state;

  console.log(state);

  return (
    <div className="single-pokemon-wrapper">
      <h1>{name.toUpperCase()}</h1>
      <div className="single-pokemon-header">
        <h2>#{id}</h2>
        <img src={sprites.front_default} alt={name} />
        <div>
          <h3>Stats:</h3>
          <ul>
            {stats.map(stat => (
              <li key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Types:</h3>
          <ul>
            {types.map(type => (
              <li key={type.type.name}>{type.type.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <Link to="/">Return to Pokedex</Link>
    </div>
  );
}

export default SinglePokemon;
