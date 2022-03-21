import React, { Component, useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./CSS/homepage.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="homepage">
    <Form className="form">
        <h1>Login</h1>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label classname="text">Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label classname="text">Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" className="checkbox"/>
    </Form.Group>
    <Button variant="primary" type="submit">
      Login
    </Button>
  </Form>


</div>
  );
}
