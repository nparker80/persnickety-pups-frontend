import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { loadUser } from "./redux/slices/authSlice";
import './App.css';

import Home from './contents/Home';
import Product from './contents/Product';
import Cart from './contents/Cart';

import Navbar from './components/Navbar';
import Back from './components/Back';
import Sidebar from './components/Sidebar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import CheckoutSuccess from './components/CheckoutSuccess';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser(null));
  }, [dispatch]);
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <Router>
      <Navbar click={() => { setSideToggle(true) }} />
      <Back show={sideToggle} click={() => { setSideToggle(false) }} />
      <Sidebar show={sideToggle} click={() => { setSideToggle(false) }} />
      <main>
        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route exact path="/product/:id" element={<Product />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout-success" element={<CheckoutSuccess />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
