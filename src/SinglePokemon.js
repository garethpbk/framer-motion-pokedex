import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./SinglePokemon.css";

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96]
};

const imageVariants = {
  exit: { x: "100%", opacity: 0, transition },
  enter: {
    x: "0%",
    opacity: 1,
    transition
  }
};

const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } }
};

function getStatWidth(baseStat) {
  return (baseStat / 150) * 100;
}

function getRandom() {
  const random = Math.floor(Math.random() * 360);

  return random;
}

function SinglePokemon({ location: { state } }) {
  const {
    singlePokemon: { id, name, sprites, stats, types }
  } = state;

  const [randomColor, setRandomColor] = useState(getRandom());

  return (
    <motion.div
      className="single-pokemon-wrapper"
      initial="exit"
      animate="enter"
      exit="exit"
      variants={imageVariants}
    >
      <motion.div variants={backVariants}>
        <Link to="/">Return to Pokedex</Link>
      </motion.div>
      <h1>{name.toUpperCase()}</h1>
      <div className="single-pokemon-header">
        <div className="single-pokemon-left">
          <h2>#{id}</h2>
          <motion.img
            src={sprites.front_default}
            alt={name}
            whileTap={{ filter: `hue-rotate(${randomColor}deg)` }}
            onMouseOver={() => setRandomColor(getRandom())}
            drag
            dragConstraints={{ top: 100, right:  100, bottom: 100, left: 100 }}
          />
        </div>
        <div className="single-pokemon-right">
          <div>
            <h3>Types:</h3>
            <ul className="single-pokemon-types">
              {types.map(type => (
                <li key={type.type.name}>{type.type.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Stats:</h3>
            <ul className="single-pokemon-stats">
              {stats.map((stat, i) => (
                <li key={stat.stat.name}>
                  <p>{stat.stat.name}</p>
                  <div className="stat-background">
                    <motion.div
                      className="stat-stat"
                      animate={{
                        width: ["0%", `${getStatWidth(stat.base_stat)}%`]
                      }}
                      transition={{ delay: 1 * i, duration: 1 }}
                    >
                      {stat.base_stat}
                    </motion.div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default SinglePokemon;
