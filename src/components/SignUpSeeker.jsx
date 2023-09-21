import React from "react";
import "/src/css/style.css";

export const SignUpSeeker = () => {
  return (
    <div className="sign-up-page form-page">
      <div className="container">
        <h2 className="title-sign">Sign up</h2>
        <div className="input-frame">
          <label className="text-wrapper">Full name:</label>
          <input className="textfield" type="text" />
        </div>
        <div className="input-frame">
          <label className="text-wrapper">Email:</label>
          <input className="textfield" type="email" />
        </div>
        <div className="input-frame">
          <label className="text-wrapper">Phone Number:</label>
          <input className="textfield" type="tel" />
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
          <div className="button-styled primary-button">
            Cancel
          </div>
          <div className="button-styled secondary-button">
            Sign up
          </div>
        </div>
      </div>
    </div>
  );
};
