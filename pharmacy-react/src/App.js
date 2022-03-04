import React, {Component} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Homepage';
import Register from './Register';
import StockEventsTable from './components/StockEventsTable';
import axios from 'axios';
import AddStockEvent from './components/AddStockEvent';
import AddProduct from './components/AddProduct';
import Login from './Login';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
      <Route exact path='/' element={< Homepage/>}></Route>
      <Route exact path='/register' element={< Register/>}></Route> 
      <Route exact path='/products' element={<AddProduct/>}></Route>
      <Route exact path='/stockevents/add' element={<AddStockEvent/>}></Route>
      <Route exact path='/stockevents' element={<StockEventsTable/>}></Route>
      <Route exact path='/Register' element={< Register/>}></Route>
      <Route exact path='/Login' element={<Login/>}></Route>
</Routes>
</Router>   
  );
}

export default App;
