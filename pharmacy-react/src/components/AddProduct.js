import React, { Component } from "react";
import axios from 'axios';
import "./product.css";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";

const AddProduct = () => {
  const [medicine_Name, setMedicine_Name] = useState("");
  const [offer, setOffer] = useState("");
  const [mrp, setMRP] = useState("");
  const [stock, setStock] = useState("");
  const [medicineid, setMedicineID] = useState(""); 
 
  const handleSubmit1 = (e) => {
    e.preventDefault();
    console.log(medicine_Name + offer + mrp + stock);
    axios.post("http://localhost:8083/pharmacy/add",{medicine_Name, offer, mrp, stock, medicineid}).then(()=>{
    console.log("Added Successfully");
    }).then(()=>{})
    setMedicine_Name("");
    setOffer("");
    setMRP("");
    setStock("");
    setMedicineID("");
    alert("Successfully updated cost");
  };

  return (
    <div className="product">
      <div>
        <h1 className="NPtagline">ADD OR UPDATE MEDICINE COST</h1>
      </div>
      <div className="AddProduct">
        <h3 className="NPtitle">Updation of Medicine</h3>
        <form className="medicine">
        <input
            type = "text"
            name = "medicineid"
            placeholder= "Enter Medicine ID"
            onChange= {(event) => setMedicineID(event.target.value)} 
          />
          <hr></hr>
          <input
            type="text"
            name="name"
            placeholder="Enter the Medicine name"
            onChange={(event) => setMedicine_Name(event.target.value)}
          />
          <hr></hr>
          <input
            type="text"
            name="cost"
            placeholder="Enter the Medicine Cost"
            onChange={(event) => setMRP(event.target.value)}
          />
          <hr></hr>
          <input
            type="text"
            name="stock"
            placeholder="Medicine Quantity to be Added"
            onChange={(event) => setStock(event.target.value)}
          />
          <hr></hr>
          <input
            type="text"
            name="offer"
            placeholder="Any offer to the Medicine"
            onChange={(event) => setOffer(event.target.value)}
          />
          
          <div class="welcome">
            <button
              className="CreateButton"
              type="submit"
              onClick={handleSubmit1}
            >
              <span></span> Update Cost{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddProduct;
