import React from "react";
import "/src/css/style.css";
import { Link } from "react-router-dom";

export const SignUpRecruiter = ({ inputType = "password" }) => {
  return (
    <div className="sign-up-page form-page">
      <div className="container">
        <h2 className="title-sign">Sign up an account for your Company</h2>
        <div className="double-input-frame">
          <div className="input-frame">
            <label className="text-wrapper">Company Name:</label>
            <input className="textfield" type="text" />
          </div>
          <div className="input-frame">
            <label className="text-wrapper">Company Website:</label>
            <input className="textfield" type="url" />
          </div>
        </div>
        <div className="double-input-frame">
          <div className="input-frame">
            <label className="text-wrapper">Email:</label>
            <input className="textfield" type="email" />
          </div>
          <div className="input-frame">
            <label className="text-wrapper">Phone Number:</label>
            <input className="textfield" type="tel" />
          </div>
        </div>
        <div className="input-frame">
            <label className="text-wrapper">Country:</label>
            <input className="textfield" type="text" />
        </div>
        <div className="double-input-frame">
          <div className="input-frame">
            <label className="text-wrapper">City:</label>
            <input className="textfield" type="text" />
          </div>
          <div className="input-frame">
            <label className="text-wrapper">ZIP:</label>
            <input className="textfield" type="text" />
          </div>
        </div>
        <div className="input-frame">
            <label className="text-wrapper">Password:</label>
            <input className="textfield" type="password" />
        </div>
        <div className="input-frame">
            <label className="text-wrapper">Confirm Password:</label>
            <input className="textfield" type="password" />
        </div>
        <div className="agreement-checkbox">
          <input className="checkbox" type="checkbox"/>
          <p>I agree to the PRIVACY POLICY and TERMS OF USE and automatic renewal.</p>
        </div>
        <div className="double-button-container">
          <Link to={"/"} className="button-styled primary-button">
            Cancel
          </Link>
          <button className="button-styled secondary-button">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};