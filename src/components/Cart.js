import React from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartActions } from "./../store/cart-slice";
import cart from '../assets/cart.jpeg'
const Cart = () => {
  const quantity = useSelector(state=> state.cart.totalQuantity);
  const dispatch = useDispatch();
  const showCart = () => {
    dispatch(cartActions.setShowCart());
  }

  return (
    <div className="cartIcon" onClick={showCart}>
      <img src={cart} className="cart" />
      <h3 className="count"> {quantity}</h3>
    </div>
  );
};

export default Cart;
