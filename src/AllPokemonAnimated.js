import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Title from "./Title";

const variants = {
  visible: i => ({
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.3
    }
  }),
  hidden: { opacity: 0 },
  hover: { scale: 1.1 },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 0.5 }
  }
};

const imageVariants = {
  hover: {
    scale: 1.5,
    rotate: [0, 180, 360, 240, 0]
  }
};

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96]
};

const gridVariants = {
  exit: { x: "-100%", opacity: 0, transition },
  enter: {
    x: "0%",
    opacity: 1,
    transition
  }
};

function AllPokemon({ pokemon }) {
  if (pokemon === "loading")
    return (
      <motion.div
        className="pokedex-loading"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ opacity: { duration: 1, delay: 9 } }}
      >
        <Title />
      </motion.div>
    );

  return (
    <motion.div
      className="pokegrid"
      initial="exit"
      animate="enter"
      exit="exit"
      variants={gridVariants}
    >
      {pokemon.map((singlePokemon, i) => (
        <motion.div
          className="pokecard"
          key={singlePokemon.name}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={variants}
          whileHover="hover"
        >
          <Link
            to={{
              pathname: `/pokemon/${singlePokemon.id}`,
              state: { singlePokemon }
            }}
          >
            <motion.img
              src={singlePokemon.sprites.front_default}
              alt={singlePokemon.name}
              variants={imageVariants}
            />
            <h1>{singlePokemon.name}</h1>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default AllPokemon;
