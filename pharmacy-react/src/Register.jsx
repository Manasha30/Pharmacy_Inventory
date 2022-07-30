import React, { Component, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./CSS/homepage.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [firstname, setfirstName] = useState("");
  const [lastname, setlastName] = useState("");
  const [address, setAddress] = useState("");
  const [address_2, setAddress_2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");


  const path = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    console.log(firstname+lastname+address+address_2+city+state+zip+email+password+gender);
    axios.post("http://localhost:8083/pharmacy/register",{firstname, lastname, address, address_2, city, state, zip, email, password,gender,mobileNumber}).then(()=>{
      console.log("Added Successfully");
    }).then(()=>{path('/')})
    alert("Successfully Registered");

  }
  

  return (
    <div className="homepage">
      <Form className="form">
        <h1>Register</h1>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>FirstName</Form.Label>
            <Form.Control placeholder="First name" onChange={(e)=>setfirstName(e.target.value)}/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>LastName</Form.Label>
            <Form.Control placeholder="Last name" onChange={(e)=>setlastName(e.target.value)}/>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
          </Form.Group>
        </Row>

         <Form.Group as={Col} controlId="formGridGender">
           <Form.Label>Gender</Form.Label>
           <Form.Select defaultValue="Choose..." onChange={(e)=>setGender(e.target.value)}>
           <option>Choose...</option>
              <option>Male</option>
              <option>Female</option>
              <option>Others</option>
              <option>Do Not Wish to Disclose</option>
           </Form.Select>
         </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>House Number and Street</Form.Label>
          <Form.Control placeholder="Enter the Address" onChange={(e)=>setAddress(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>House Area </Form.Label>
          <Form.Control placeholder="Enter the Landmark or Area" onChange={(e)=>setAddress_2(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridMobileNumber">
          <Form.Label>Mobile Number </Form.Label>
          <Form.Control placeholder="Enter the Mobile Number" onChange={(e)=>setMobileNumber(e.target.value)} />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control onChange={(e)=>setCity(e.target.value)}/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose..." onChange={(e)=>setState(e.target.value)}>
              <option>Choose...</option>
              <option>Andhra Pradesh</option>
              <option>Andaman and Nicobar Islands</option>
              <option>Arunachal Pradesh</option>
              <option>Assam</option>
              <option>Bihar</option>
              <option>Chandigarh</option>
              <option>Chhattisgarh</option>
              <option>Dadar and Nagar Haveli</option>
              <option>Daman and Diu</option>
              <option>Delhi</option>
              <option>Lakshadweep</option>
              <option>Puducherry</option>
              <option>Goa</option>
              <option>Gujarat</option>
              <option>Haryana</option>
              <option>Himachal Pradesh</option>
              <option>Jammu and Kashmir</option>
              <option>Jharkhand</option>
              <option>Karnataka</option>
              <option>Kerala</option>
              <option>Madhya Pradesh</option>
              <option>Maharashtra</option>
              <option>Manipur</option>
              <option>Meghalaya</option>
              <option>Mizoram</option>
              <option>Nagaland</option>
              <option>Odisha</option>
              <option>Punjab</option>
              <option>Rajasthan</option>
              <option>Sikkim</option>
              <option>Tamil Nadu</option>
              <option>Telangana</option>
              <option>Tripura</option>
              <option>Uttar Pradesh</option>
              <option>Uttarakhand</option>
              <option>West Bengal</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control onChange={(e)=>setZip(e.target.value)} />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Register
        </Button>
      </Form>
    </div>
  );
}
