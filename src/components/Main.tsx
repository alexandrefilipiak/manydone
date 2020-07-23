import React, { Component } from "react";
import { Home, Login, Profile } from "./pages";
import Container from "react-bootstrap/Container";
import { HashRouter, Route, Switch } from "react-router-dom";

export default class Main extends Component {
  render() {
    return (
      <Container>
        <div className="starter-template">
          <HashRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </HashRouter>
        </div>
      </Container>
    );
  }
}
