import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Auth } from "@aws-amplify/auth";

export default class MSignOut extends Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    Auth.signOut();
  }

  render() {
    return (
      <Button onClick={this.signOut}>
        {/* style=light outline sm border="0" */}
        Sign Out
      </Button>
    );
  }
}
