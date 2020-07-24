import React, { Component } from "react";
import { Home, Login, Profile } from "./pages";
import Container from "react-bootstrap/Container";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Hub, HubCapsule, Logger } from "@aws-amplify/core";
import { Auth } from "@aws-amplify/auth";

const logger = new Logger("Main");

interface Props {}

interface State {
  user: {
    username: string;
  } | null;
}

export default class Main extends Component<Props, State> {
  state: State;

  constructor(props: Props) {
    super(props);

    this.loadUser = this.loadUser.bind(this);

    Hub.listen("auth", this.onHubCapsule);

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
      <Container>
        <div className="starter-template">
          <HashRouter>
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => <Home user={user} />}
                //component={Home}
              />
              <Route
                exact
                path="/login"
                render={(props) => <Login user={user} />}
                //component={Home}
              />
              {/* <Route
                exact
                path="/profile"
                render={(props) => <Profile user={user} />}
                //component={Home}
              /> */}
              {/* <Route exact path="/profile" component={Profile} />
              <Route exact path="/login" component={Login} /> */}
            </Switch>
          </HashRouter>
        </div>
      </Container>
    );
  }
}
