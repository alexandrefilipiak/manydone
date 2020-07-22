import React, { Component } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
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
