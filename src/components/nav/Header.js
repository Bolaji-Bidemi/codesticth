import React from "react";
import Cart from "../Cart";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth-slice";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(authActions.logout());
    navigate("/");
  };
  const handleSignUp = () => {
    navigate("/register");
  };
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <nav className="header-nav">
      {isLoggedIn ? (
        <ul className="header-ul">
          <li>
            <div className="logo" onClick={() => navigate("/home")}>
              <img src={logo} alt="logo" width="100" />

              <h2
                className="header-h2"
                style={{ fontFamily: "monospace", fontSize: "20px" }}
              >
                STORE
              </h2>
            </div>
          </li>
          <li>
            <Cart />
          </li>
          <li>
            <button className="but" onClick={logout}>
              Logout
            </button>
          </li>
        </ul>
      ) : (
        <ul className="header-ul">
          <li>
            <div className="logo">
              <img
                src={logo}
                alt="logo"
                width="100"
                onClick={() => navigate("/home")}
              />
              <h2
                className="header-h2"
                style={{ fontFamily: "monospace", fontSize: "20px" }}
              >
                STORE
              </h2>
            </div>
          </li>

          <li>
            <button className="but" onClick={handleSignUp}>
              Sign up
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Header;
