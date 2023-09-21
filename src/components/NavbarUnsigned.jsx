import React from "react";
import "/src/css/style.css";
import { Link } from "react-router-dom";

export const NavbarUnsigned = ({ className }) => {
  return (
    <div className={`navbar-general ${className}`}>
      <Link to={'/'} className="div">
        <img className="justlogo" alt="Justlogo" src="/logos/just-logo-1.png" />
        <div className="title-2">JobQuest Central</div>
      </Link>
      <div className="frame">
        <div className="navigation">
          <Link to={'/jobs/signed'} className="tab">Browse Jobs</Link>
          <Link to={'/'} className="tab">About Us</Link>
          <Link to={'/'} className="tab">Contact Us</Link>
        </div>
        <div>
          <Link to={'/login'} className="button-styled primary-button">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};