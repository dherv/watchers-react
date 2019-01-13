// React & Libraries
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Components
import Index from "./views/Index/Index";
import Show from "./views/Show/Show";
import Main from "./layouts/Main";

export default class App extends Component {
  render() {
    return (
      <Main>
        <Router>
          <Switch>
            <Route exact path="/movies" component={Index} />
            <Route exact path="/movies/:id" component={Show} />
            <Route exact path="/series" component={Index} />
            <Route exact path="/series/:id" component={Show} />
          </Switch>
        </Router>
      </Main>
    );
  }
}
