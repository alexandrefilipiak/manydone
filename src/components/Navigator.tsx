import React, { Component } from "react";

import { HashRouter, Route, Switch } from "react-router-dom";
import { Auth, Hub, Logger } from "aws-amplify";
import { HubCapsule } from "@aws-amplify/core";
import { MSignOut } from "./auth";

const HomeItems = (user: any) => {
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
        <a className="nav-link" href="#/profile">
          Profile
        </a>
      </li>
      <li className="nav-item">
        {/* <button className="btn btn-primary" onClick={() => signout()}>
          Signout
        </button> */}
        {user && <MSignOut />}
      </li>
    </>
  );
};

const LoginItems = (user: any) => {
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
        <a className="nav-link" href="#/profile">
          Profile
        </a>
      </li>
      <li className="nav-item">
        {/* <button className="btn btn-primary" onClick={() => signout()}>
          Signout
        </button> */}
        {user && <MSignOut />}
      </li>
    </>
  );
};

const ProfileItems = (user: any) => {
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
        <a className="nav-link" href="#/profile">
          Profile
        </a>
      </li>
      <li className="nav-item">
        {/* <button className="btn btn-primary" onClick={() => signout()}>
          Signout
        </button> */}
        {user && <MSignOut />}
      </li>
    </>
  );
};

const logger = new Logger("Navigator");

interface Props {}

interface State {
  user: {
    username: string;
  } | null;
}

export default class Navigator extends Component<Props, State> {
  state: State;

  constructor(props: Props) {
    super(props);

    this.loadUser = this.loadUser.bind(this);

    Hub.listen("auth", this.onHubCapsule); // Add this component as a listener of auth events.

    this.state = { user: null };
  }

  componentDidMount() {
    this.loadUser(); // The first check
  }

  onHubCapsule(capsule: HubCapsule) {
    logger.info("on Auth event", capsule);
    this.loadUser(); // Triggered every time user sign in / out.
  }

  loadUser() {
    Auth.currentAuthenticatedUser()
      .then((user) => this.setState({ user: user }))
      .catch((err) => this.setState({ user: null }));
  }

  render() {
    const { user } = this.state;

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
                <Route
                  exact
                  path="/"
                  component={() => HomeItems(this.state.user)}
                />
                <Route
                  exact
                  path="/login"
                  component={() => LoginItems(this.state.user)}
                />
                <Route
                  exact
                  path="/profile"
                  component={() => ProfileItems(this.state.user)}
                />
              </Switch>
            </HashRouter>
          </ul>
          <span className="navbar-text">
            {user ? "Hi " + user.username : "Please sign in"}
          </span>
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
