import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import component
import AllPokemon from "./AllPokemon";
import SinglePokemon from "./SinglePokemon";

function App() {
  return (
    <div className="wrapper">
      <div className="pokedex-wrapper">
        <div className="pokedex-screen">
          <Router>
            <Route
              render={({ location }) => (
                <Switch location={location} key={location.pathname}>
                  <Route exact path="/" component={AllPokemon} />
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
