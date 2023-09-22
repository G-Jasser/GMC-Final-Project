import React, { useState } from "react";
import "/src/css/style.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../JS/userSlice/userSlice";

export const LoginSection = ({ className }) => {
  const [login, setlogin] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const isAuth = localStorage.getItem("token");
  let navigate = useNavigate();
  return (
    <div className={`login form-page ${className}`}>
      <div className="container">
        <div className="title-sign">Log in</div>
        <div className="input-frame">
            <label className="text-wrapper">Email:</label>
          <input className="textfield" type="email"  onChange={(e) => setlogin({ ...login, email: e.target.value })}/>
        </div>
        <div className="input-frame">
          <label className="text-wrapper">Password:</label>
          <input className="textfield" type="password" onChange={(e) => setlogin({ ...login, password: e.target.value })} />
          <span className="info">Forgot password?</span>
        </div>
        <div className="double-button-container">
          <Link to={"/"} className="button-styled primary-button">
            Cancel
          </Link>
          <button className="button-styled secondary-button" onClick={() => {
              dispatch(userLogin(login));
              setTimeout(() => {
                navigate("/profil");
              }, 1000);
              setTimeout(() => {
                window.location.reload();
              }, 1000);
            }}>
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};