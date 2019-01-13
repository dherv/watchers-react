// React & Libraries
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Components
import Movies from "./views/Movies/Movies";
import Movie from "./views/Movie/Movie";

export default class App extends Component {
  render() {
    console.log("App boot");
    return (
      <Router>
        <Switch>
          <Route exact path="/movies" component={Movies} />
          <Route exact path="/movie/:id" component={Movie} />
        </Switch>
      </Router>
    );
  }
}
