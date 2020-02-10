import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { useFetchPokemon } from "./hooks";

const variants = {
  visible: i => ({
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.3
    }
  }),
  hidden: { opacity: 0 }
};

function AllPokemon() {
  const pokemon = useFetchPokemon();

  return (
    <div className="pokegrid">
      {pokemon.map((singlePokemon, i) => (
        <motion.div
          className="pokecard"
          key={singlePokemon.name}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={variants}
        >
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
        </motion.div>
      ))}
    </div>
  );
}

export default AllPokemon;
