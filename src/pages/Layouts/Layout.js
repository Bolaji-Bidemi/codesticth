import React from "react";
import Header from "../../components/nav/Header";
import Products from "../Products/Products";
import "./Layout.css";
import CartItems from "../Cart/CartItems";
import { useSelector } from "react-redux";
//import Notification from "../../components/Notification";

const Layout = () => {
 
  const showCart = useSelector((state) => state.cart.showCart);
  // const notification = useSelector(state=> state.ui.notification)

  return (
    <React.Fragment>
      {/* {notification && <Notification type={notification.type} message={notification.message} />} */}
     <div className="layout">
        <Header />
        <Products />
       {showCart && <CartItems /> }
       {" "}
      </div> 
    </React.Fragment>
  );
};

export default Layout;
