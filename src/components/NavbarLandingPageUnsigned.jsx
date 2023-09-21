import React from "react";
import "/src/css/style.css";
import { Link } from "react-router-dom";

export const NavbarLandingPage = ({ className }) => {
  return (
    <div className={`navbar-general ${className}`}>
      <Link to={'/'} className="div">
        <img className="justlogo" alt="Justlogo" src="/logos/just-logo-1.png" />
        <div className="title-2">JobQuest Central</div>
      </Link>
      <div className="frame">
        <div className="navigation">
          <Link to={'/company/signup'} className="tab">For Employers</Link>
          <Link to={'/applicant/signup'} className="tab">For Job Seekers</Link>
          <Link to={'/'} className="tab">About Us</Link>
        </div>
        <div>
          <Link to={'/login'} className="primary-button button-styled">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};