import React from "react";
import "/src/css/style.css";

export const NavbarUnsigned = ({ className }) => {
  return (
    <div className={`navbar-general ${className}`}>
      <div className="div">
        <img className="justlogo" alt="Justlogo" src="/logos/just-logo-1.png" />
        <div className="title-2">JobQuest Central</div>
      </div>
      <div className="frame">
        <div className="navigation">
          <div className="tab">Home</div>
          <div className="tab">Browse Jobs</div>
          <div className="tab">About Us</div>
          <div className="tab">Contact Us</div>
        </div>
        <div>
          <button className="button-styled primary-button">
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};