import React, { Component } from "react";
import { Auth } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";

interface Props {
  user: {
    username: string;
  } | null;
}

interface State {}

class Login extends Component<Props, State> {
  render() {
    const { user } = this.props;
    return (
      <>
        {!user && Auth.federatedSignIn()}
        {user && (
          <div>
            You are signed in as <i>{user.username}</i>.
          </div>
        )}
      </>
    );
  }
}

//export default withAuthenticator(Login);

export default Login;
