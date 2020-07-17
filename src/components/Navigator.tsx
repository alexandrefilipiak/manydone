import React, { Component } from "react";

import { HashRouter, Route, Switch } from "react-router-dom";
import { Auth } from "aws-amplify";

const HomeItems = () => {
  function signout() {
    Auth.signOut()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }
  return (
    <>
      <li className="nav-item active">
        <a className="nav-link" href="#/">
          Home <span className="sr-only">(current)</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#/login">
          Login
        </a>
      </li>
      <li className="nav-item">
        <button className="btn btn-primary" onClick={() => signout()}>
          Signout
        </button>
      </li>
    </>
  );
};

const LoginItems = () => {
  function signout() {
    Auth.signOut()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }
  return (
    <>
      <li className="nav-item active">
        <a className="nav-link" href="#/">
          Home <span className="sr-only">(current)</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#/login">
          Login
        </a>
      </li>
      <li className="nav-item">
        <button onClick={() => signout()} />
      </li>
    </>
  );
};

export default class Navigator extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          GloryRoad.app
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <HashRouter>
              <Switch>
                <Route exact path="/" component={HomeItems} />
                <Route exact path="/login" component={LoginItems} />
              </Switch>
            </HashRouter>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}
