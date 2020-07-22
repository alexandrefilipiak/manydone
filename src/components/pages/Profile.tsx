import React, { Component } from "react";
import { Auth } from "aws-amplify";
import { Row, Container, Form } from "react-bootstrap";
import { withAuthenticator } from "@aws-amplify/ui-react";

class Profile extends Component {
  render() {
    //return <h1>Login</h1>;
    return (
      <Container>
        <h2>My Profile</h2>
        <Form.Group as={Row} controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control plaintext readOnly defaultValue="monEmail]@email.com" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      </Container>
    );
  }
}

//export default withAuthenticator(Login);

export default Profile;
