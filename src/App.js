import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import hooks
import { useFetchPokemon } from "./hooks";

// import component
import AllPokemonAnimated from "./AllPokemonAnimated";
import SinglePokemon from "./SinglePokemon";

function App() {
  const pokemon = useFetchPokemon();

  return (
    <div className="wrapper">
      <div className="pokedex-wrapper">
        <div className="pokedex-screen">
          <Router>
            <Route
              render={({ location }) => (
                <Switch location={location} key={location.pathname}>
                  <Route
                    exact
                    path="/"
                    render={props => (
                      <AllPokemonAnimated {...props} pokemon={pokemon} />
                    )}
                  />
                  <Route exact path="/pokemon/:id" component={SinglePokemon} />
                </Switch>
              )}
            />
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
