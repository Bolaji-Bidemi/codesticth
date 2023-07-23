import React from "react";
import "./Header.css";
import {  useSelector } from "react-redux";
import logo from "../../assets/logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { authActions } from "../../store/auth-slice";
import { useDispatch } from "react-redux";

const HeaderNav = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const dispatch = useDispatch();

  const handleLogin = () => {
    navigate("/");
  };
  const logout = () => {
    dispatch(authActions.logout());
    navigate("/");
  };

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <nav className="header-nav">
      {isLoggedIn && location.pathname === "/checkout" ?(
        <ul className="header-ul">
          <li>
            <div className="logo" onClick={()=> navigate("/home")}>
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
            <button className="but" onClick={logout}>Logout</button>
          </li>
        </ul>
      ): <ul className="header-ul">
      <li>
        <div className="logo">
          <img src={logo} alt="logo" width="100" onClick={()=> navigate("/")} />
          <h2
            className="header-h2"
            style={{ fontFamily: "monospace", fontSize: "20px" }}
          >
            STORE
          </h2>
        </div>
      </li>

      <li>
        <button className="but" onClick={handleLogin}>Sign in</button>
      </li>
    </ul>}
    </nav>
  );
};

export default HeaderNav;
