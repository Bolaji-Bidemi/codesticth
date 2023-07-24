import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../../store/auth-slice";
import "../Login/Auth.css";
import { useNavigate } from "react-router-dom";
import HeaderNav from "../../components/nav/HeaderNav";
import {toast} from 'react-toastify'
import { useSelector } from "react-redux";
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri'
import Validate from "../../Validate";

const RegisterAuth = () => {

  const [visiblePassword, setVisiblePassword] = useState(false)
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const message = useSelector((state)=> state.auth.Message)
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  })
  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault();
    const userDetails = {
     values
    };
    dispatch(signup(userDetails))
        .then(() => {
          toast.success("Created Successfully");
          navigate("/");
        })
        .catch((error) => {
          toast("Failed to register")
        });
    setErrors(Validate(values))
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    })
  }

   const handleVisiblePassword = () => {
      setVisiblePassword((visiblePass)=> !visiblePass)
     }

     const handleVisibleConfirmedPassword = () =>{
      setVisibleConfirmPassword(visible => !visible)
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
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
            <label className="label" htmlFor="password">Password</label>
            <div className="view">
        <input type={visiblePassword ? "text" : "password"} name="password" id="password" onChange={handleChange} value={values.password} />
        <div className="eye" onClick={handleVisiblePassword}>{visiblePassword ? <RiEyeOffLine style={{color: "white"}}/> : <RiEyeLine style={{color: "white"}}/>}</div>
        </div>
        {errors.password && <p className="error">{errors.password}</p>}
            <label className="label" htmlFor="password">Confirm Password</label>
            <div className="view">
        <input type={visibleConfirmPassword ? "text" : "password"} name="confirmPassword" id="confirmPassword" onChange={handleChange} value={values.confirmPassword} />
        <div className="eye" onClick={handleVisibleConfirmedPassword}>{visiblePassword ? <RiEyeOffLine style={{color: "white"}}/> : <RiEyeLine style={{color: "white"}}/>}</div>
        </div>
        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
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
