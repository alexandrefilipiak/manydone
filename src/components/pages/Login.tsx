import React, { Component } from "react";
import { Auth } from "aws-amplify";
// import { MSignIn, MConfirmSignIn, MSignUp } from "../auth";
import {
  AmplifyAuthenticator,
  AmplifySignIn,
  AmplifyConfirmSignIn,
  AmplifySignUp,
} from "@aws-amplify/ui-react";

// "@aws-amplify/ui-react";

// withAuthenticator,

interface Props {
  user: {
    username: string;
  } | null;
}

interface State {}

const CustomAuthenticator = () => (
  <AmplifyAuthenticator
  // hide={[AmplifySignIn, AmplifyConfirmSignIn, AmplifySignUp]}
  >
    {/* hideDefault> */}
    <div>Logged in</div>
  </AmplifyAuthenticator>
);

class Login extends Component<Props, State> {
  render() {
    const { user } = this.props;
    return (
      <>
        {/*Auth.federatedSignIn() */}
        {!user && <CustomAuthenticator />}
        {user && (
          <>
            You are signed in as <i>{user.username}</i>.
          </>
        )}
      </>
    );
  }
}

//export default withAuthenticator(Login);

export default Login;
