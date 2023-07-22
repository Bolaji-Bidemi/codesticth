import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { cartActions } from "./../store/cart-slice";
const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(cartActions.removeItem(id));
  };
  const addHandler = () => {
    dispatch(
      cartActions.addItem({
        id,
        name,
        price,
        
      })
    );
  };
  // cartItem
  return (
    <div className="modal-content">
      <h2> {name}</h2>
      <p>${price} </p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={removeHandler}>
        -
      </button>
      <button className="cart-actions" onClick={addHandler}>
        +
      </button>
    </div>
  );
};

export default CartItem;
