import React from "react";
import Navigator from "./components/Navigator";
import Amplify, { Auth } from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignUp } from "@aws-amplify/ui-react";
import Main from "./components/Main";

const federated_data = {
  facebookAppId: "286828136089750",
  googleClientId:
    "965464288608-eq384s4i76u0tq8kcmrsc9acrff9k75j.apps.googleusercontent.com",
};

function App() {
  return (
    <AmplifyAuthenticator>
      {/*federated={federated_data}*/}
      <AmplifySignUp
        slot="sign-up"
        formFields={[
          { type: "username" },
          {
            type: "password",
            label: "Custom Password Label",
            placeholder: "custom password placeholder",
          },
          { type: "email" },
        ]}
      />
      <Navigator />
      <Main />
    </AmplifyAuthenticator>
  );
}

export default App;

/*function App() {
  return (
    <>
      <Navigator />
      <Main />
    </>
  );
}


export default withAuthenticator(App);
*/
