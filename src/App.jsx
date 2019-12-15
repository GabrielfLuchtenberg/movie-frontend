import React from "react";
import "./App.scss";
import { HomePage } from "./pages/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MovieDetails } from "./pages/details";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <MovieDetails />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
