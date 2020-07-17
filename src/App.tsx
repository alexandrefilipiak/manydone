import React from "react";
import Navigator from "./components/Navigator";
import Amplify, { Auth } from "aws-amplify";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Navigator />
      <Main />
    </>
  );
}

export default App;
