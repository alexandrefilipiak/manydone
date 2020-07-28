import React, { Component } from "react";
import { Auth } from "aws-amplify";
import { MSignIn, MConfirmSignIn, MSignUp } from "../auth";
import {
  Authenticator,
  SignIn,
  ConfirmSignIn,
  SignUp,
} from "aws-amplify-react";

// "@aws-amplify/ui-react";

// withAuthenticator,

interface Props {
  user: {
    username: string;
  } | null;
}

interface State {}

const CustomAuthenticator = () => (
  <Authenticator hide={[SignIn, ConfirmSignIn, SignUp]}>
    {/* hideDefault> */}
    <MSignIn />
    <MConfirmSignIn />
    <MSignUp />
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
