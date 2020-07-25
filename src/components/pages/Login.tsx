import React, { Component } from "react";
import { Auth } from "aws-amplify";
import { MSignIn } from "../auth";
import { Authenticator } from "aws-amplify-react";

// "@aws-amplify/ui-react";

// withAuthenticator,

interface Props {
  user: {
    username: string;
  } | null;
}

interface State {}

const CustomAuthenticator = () => (
  <Authenticator hideDefault>
    <MSignIn />
  </Authenticator>
);

class Login extends Component<Props, State> {
  render() {
    const { user } = this.props;
    return (
      <>
        {/*Auth.federatedSignIn() */}
        {!user && <CustomAuthenticator />}
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
