import React, { Component, useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./CSS/homepage.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const path = useNavigate();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.get(`http://localhost:8083/pharmacy/login?email=${email}&password=${password}`)
    .then((response)=>{console.log(response.data)})
    .then(()=>
    {
      /*if(response.data!=null) */
        path('/Homepage1');
      
     
    })
    alert("Successfully Logged In");
  }

  return (
    <div className="homepage">
    <Form className="form">
        <h1>Login</h1>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label classname="text">Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label classname="text">Password</Form.Label>
      <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" className="checkbox"/>
    </Form.Group>
    <Button variant="primary" type="submit" onClick={handleSubmit}>
      Login
    </Button>
  </Form>


</div>
  );
}
