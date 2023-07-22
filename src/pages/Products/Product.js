import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

import "./Product.css";
const Product = ({ name, id, imgURL, price, description }) => {
  
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        name,
        price,
        quantity: 1,
      })
    );
  }

  const [toggle, setToggle] = React.useState(false);
  const handleToggle =(e) =>{
    e.preventDefault();
    setToggle((prev) => !prev);
  }
  return (
    <div className="card">
      <div className="price">
        <p >${price}</p>
      </div>
      <div className="imgPart">
      <img src={imgURL} alt={name} />
      </div>
      
      {
        toggle ? (
          <div className="toggle" onClick={handleToggle}>
          <h2>Description:</h2>
          <p>${description}</p>
          </div>
        ):(
          <div className="details">
            <h2 className="title">{name}</h2>
      
      <div className="btns">
      <button className="desc" onClick={handleToggle}>Show Description</button>
      <button className="add"onClick={addToCart}>Add to cart</button>
      </div>
      
          </div>
        )
      }
      
    </div>
  );
};

export default Product;
