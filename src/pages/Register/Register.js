import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../../store/auth-slice";
import "../Login/Auth.css";
import { useNavigate } from "react-router-dom";
import HeaderNav from "../../components/nav/HeaderNav";
import {toast} from 'react-toastify'
import { useSelector } from "react-redux";
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri'

const RegisterAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [visiblePassword, setVisiblePassword] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const message = useSelector((state)=> state.auth.Message)

  const handleSubmit = (e) => {
    e.preventDefault();
    const userDetails = {
      email,
      password,
      confirmPassword,
    };
    dispatch(signup(userDetails))
        .then(() => {
          toast.success(message);
          navigate("/");
        })
        .catch((error) => {
          console.log(error)
        });
    
  };

   const handleVisiblePassword = () => {
      setVisiblePassword((visiblePass)=> !visiblePass)
     }

  return (
    <>
      <HeaderNav />
      <div className="contain">
        <div className="background"></div>
        <div className="container">
          <h1 className="label">Register</h1>{" "}
          <form onSubmit={handleSubmit}>
            <label className="label" htmlFor="id">Email</label>
            <input
              type="text"
              name="email"
              id="id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="label" htmlFor="password">Password</label>
            <div className="view">
        <input type={visiblePassword ? "text" : "password"} name="password" id="password" onChange={(e)=> setPassword(e.target.value)} />
        <div className="eye" onClick={handleVisiblePassword}>{visiblePassword ? <RiEyeOffLine style={{color: "white"}}/> : <RiEyeLine style={{color: "white"}}/>}</div>
        </div>
            <label className="label" htmlFor="password">Confirm Password</label>
            <div className="view">
        <input type={visiblePassword ? "text" : "password"} name="confirmPassword" id="confirmPassword" onChange={(e)=> setPassword(e.target.value)} />
        <div className="eye" onClick={handleVisiblePassword}>{visiblePassword ? <RiEyeOffLine style={{color: "white"}}/> : <RiEyeLine style={{color: "white"}}/>}</div>
        </div>
            <button className="login-btn" type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterAuth;
