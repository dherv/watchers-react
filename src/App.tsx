// React & Libraries
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
// Components
import MediaGrid from "./components/MediaGrid/MediaGrid";
import MoviePage from "./views/MoviePage/MoviePage";
import LayoutPage from "./layout/LayoutPage";

export default class App extends Component {
  render() {
    return (
      <LayoutPage>
        <Switch>
          <Route exact path="/movies" component={MediaGrid} />
          <Route exact path="/movies/:id" component={MoviePage} />
          <Route exact path="/series" component={MediaGrid} />
          <Route exact path="/series/:id" component={MoviePage} />
        </Switch>
      </LayoutPage>
    );
  }
}
