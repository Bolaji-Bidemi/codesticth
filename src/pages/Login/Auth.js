import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/auth-slice";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
import "./Auth.css";
import Header from "../../components/nav/Header";
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri'

const Auth = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [visiblePassword, setVisiblePassword] = useState(false)
  

  const message = useSelector((state)=> state.auth.Message)
  
  // const error = useSelector((state)=>state.auth.error)
     const dispatch = useDispatch();

     const handleVisiblePassword = () => {
      setVisiblePassword((visiblePass)=> !visiblePass)
     }

    const handleSubmit = (e) => {
      e.preventDefault();
      const userDetails = {
        email,
        password,
      };
      dispatch(login(userDetails))
        .then(() => {
          toast.success("Login Successfully");
          navigate("/home");
        })
        .catch((error) => {
          toast.error("Failed to login");
        });
    };

    
  
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
        <input type="text" name="email" id="id" onChange={(e)=> setEmail(e.target.value)} />
        <label className="label" htmlFor="password">Password</label>
        <div className="view">
        <input type={visiblePassword ? "text" : "password"} name="password" id="password" onChange={(e)=> setPassword(e.target.value)} />
        <div className="eye" onClick={handleVisiblePassword}>{visiblePassword ? <RiEyeOffLine style={{color: "white"}}/> : <RiEyeLine style={{color: "white"}}/>}</div>
        </div>
        
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
