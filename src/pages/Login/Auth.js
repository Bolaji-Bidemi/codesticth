import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/auth-slice";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
import "./Auth.css";
import Header from "../../components/nav/Header";
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri'
import Validate from "../../Validate";
const Auth = () => {
  const navigate = useNavigate();

  const [visiblePassword, setVisiblePassword] = useState(false)
  

  const message = useSelector((state)=> state.auth.Message)
  const [values, setValues] = useState({
    email: "",
    password: ""
  })
  const [errors, setErrors] = useState({})
  // const error = useSelector((state)=>state.auth.error)
     const dispatch = useDispatch();

     const handleVisiblePassword = () => {
      setVisiblePassword((visiblePass)=> !visiblePass)
     }

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(login(values))
        .then(() => {
          toast.success("Login Successfully");
          navigate("/home");
        })
        .catch((error) => {
          toast.error("Failed to login");
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

    
  
  return (<>
  <Header />
    <div className="contain">
      
      <div className="background"></div>
      <div className="container">
  
      <h1 className="label">Login</h1>
      
      <form 
       onSubmit={handleSubmit}
      >
        <label className="label" htmlFor="id">Email</label>
        <input type="text" name="email" id="id" onChange={handleChange} />
        {errors.email && <p className="error">{errors.email}</p>}
        <label className="label" htmlFor="password">Password</label>
        <div className="view">
        <input type={visiblePassword ? "text" : "password"} name="password" id="password" onChange={handleChange} />
        <div className="eye" onClick={handleVisiblePassword}>{visiblePassword ? <RiEyeOffLine style={{color: "white"}}/> : <RiEyeLine style={{color: "white"}}/>}</div>
        </div>
        {errors.password && <p className="error">{errors.password}</p>}
        
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
      </div>
    </div>
    </>
  );
};

export default Auth;
