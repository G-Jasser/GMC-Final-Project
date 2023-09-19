import React from "react";
import "/src/css/style.css";

export const NavbarLandingPage = ({ className }) => {
  return (
    <div className={`navbar-landing-page ${className}`}>
      <div className="div">
        <img className="justlogo" alt="Justlogo" src="/logos/just-logo-1.png" />
        <div className="title-2">JobQuest Central</div>
      </div>
      <div className="frame">
        <div className="navigation">
          <div className="tab">For Employers</div>
          <div className="tab">For Job Seekers</div>
          <div className="tab">About Us</div>
        </div>
        <div>
            <button className="primary-button button-styled">
                Log in
            </button>
        </div>
      </div>
    </div>
  );
};