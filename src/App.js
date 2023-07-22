import React from "react";
import "./App.css";
import RegisterAuth from "./pages/Register/Register";
import Layout from "./pages/Layouts/Layout";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { fetchData, sendCartData } from "./store/cart-actions";
import Auth from "./pages/Login/Auth";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckoutPage from "./pages/Checkout/CheckoutPage";

function App() {
  
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/home" element={<Layout />} />

          <Route path="/" element={<Auth />} />

          <Route path="/register" element={<RegisterAuth />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
