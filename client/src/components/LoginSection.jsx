import React from "react";
import "/src/css/style.css";
import { Link } from "react-router-dom";

export const LoginSection = ({ className }) => {
  return (
    <div className={`login form-page ${className}`}>
      <div className="container">
        <div className="title-sign">Log in</div>
        <div className="input-frame">
            <label className="text-wrapper">Email:</label>
          <input className="textfield" type="email" />
        </div>
        <div className="input-frame">
          <label className="text-wrapper">Password:</label>
          <input className="textfield" type="password" />
          <span className="info">Forgot password?</span>
        </div>
        <div className="double-button-container">
          <Link to={"/"} className="button-styled primary-button">
            Cancel
          </Link>
          <button className="button-styled secondary-button">
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};