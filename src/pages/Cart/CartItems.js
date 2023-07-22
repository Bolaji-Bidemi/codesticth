import React from "react";
import CartItem from "../../components/CartItem";
import "./../Layouts/Layout.css";
import "../../components/Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import close from "../../assets/close.jpeg";
import { useNavigate } from "react-router-dom";

const CartItems = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showCart = () => {
    dispatch(cartActions.setShowCart());
  };

  const items = useSelector((state) => state.cart.item);
  let total = 0;

  if (items.length !== 0) {
    items.forEach((item) => {
      total += item.totalPrice;
    });
  }

  const handleClear = () => {
    dispatch(cartActions.clearCart());
  };

  return (
    <div className="cart-container">
      <div className="overlay">
        <img src={close} className="close" onClick={showCart} alt="close" />
      </div>
      <h2 className="tag">Your Cart</h2>
      <div className="block">
        <ul>
          {items.length === 0 ? (
            <h2 className="tags" style={{ textAlign: "center" }}>
              {" "}
              No item in cart
            </h2>
          ) : (
            items.map((item) => {
              return (
                <li key={item.id}>
                  <CartItem
                    id={item.id}
                    price={item.price}
                    quantity={item.quantity}
                    name={item.name}
                    total={item.totalPrice}
                  />
                </li>
              );
            })
          )}
        </ul>
      </div>
      <div className="total-price">
        <h3>Total: ${total}</h3>
        <div className="btn">
          <button className="orderBtn" onClick={() => navigate("/checkout")}>
            Place Order
          </button>
          <button className="closeBtn" onClick={handleClear}>
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
