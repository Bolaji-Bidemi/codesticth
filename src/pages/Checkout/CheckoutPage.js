import React from "react";
import "./Checkout.css";
import BasicDetails from "./BasicDetails/BasicDetails";
import Item from "./Item/Item";
import HeaderNav from "../../components/nav/HeaderNav";

const CheckoutPage = () => {
  return (
    <>
      <HeaderNav />
      <div className="checkout-container">
        <BasicDetails />
        <Item />

        
      </div>
    </>
  );
};

export default CheckoutPage;
