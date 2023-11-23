// React & Libraries
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
// Components
import Hero from "./views/hero/Hero";
import Show from "./views/show/Show";
import Watchlist from "./views/watchlist/Watchlist";
import LayoutPage from "./layout/LayoutPage/LayoutPage";

export default class App extends Component {
  render() {
    return (
      <LayoutPage>
        <Switch>
          <Route exact path="/movies" component={Hero} />
          <Route exact path="/movies/:id" component={Show} />
          <Route exact path="/series" component={Hero} />
          <Route exact path="/series/:id" component={Show} />
          <Route exact path="/watchlist" component={Watchlist} />
        </Switch>
      </LayoutPage>
    );
  }
}
