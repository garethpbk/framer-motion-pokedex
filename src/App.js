import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import component
import AllPokemon from "./AllPokemon";
import SinglePokemon from "./SinglePokemon";
import Title from "./Title";

function App() {
  return (
    <div className="wrapper">
      <Title className="title" />
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
  );
}

export default App;
