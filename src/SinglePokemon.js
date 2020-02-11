import React from "react";
import { Link } from "react-router-dom";
import "./SinglePokemon.css";

function getStatWidth(baseStat) {
  return (baseStat / 150) * 100;
}

function SinglePokemon({ location: { state } }) {
  const {
    singlePokemon: { id, name, sprites, stats, types }
  } = state;

  return (
    <div className="single-pokemon-wrapper">
      <h1>{name.toUpperCase()}</h1>
      <div className="single-pokemon-header">
        <div className="single-pokemon-left">
          <h2>#{id}</h2>
          <img src={sprites.front_default} alt={name} />
        </div>
        <div class="single-pokemon-right">
          <div>
            <h3>Types:</h3>
            <ul class="single-pokemon-types">
              {types.map(type => (
                <li key={type.type.name}>{type.type.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Stats:</h3>
            <ul class="single-pokemon-stats">
              {stats.map(stat => (
                <li key={stat.stat.name}>
                  <p>{stat.stat.name}</p>
                  <div className="stat-background">
                    <div
                      className="stat-stat"
                      style={{ width: `${getStatWidth(stat.base_stat)}%` }}
                    >
                      {stat.base_stat}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Link to="/">Return to Pokedex</Link>
    </div>
  );
}

export default SinglePokemon;
