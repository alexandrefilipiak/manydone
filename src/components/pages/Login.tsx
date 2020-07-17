import React, { Component } from "react";
import { Auth } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";

class Login extends Component {
  render() {
    //return <h1>Login</h1>;
    return <>{Auth.federatedSignIn()}</>;
  }
}

//export default withAuthenticator(Login);

export default Login;
