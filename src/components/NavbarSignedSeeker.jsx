import React from "react";
import "/src/css/style.css";

export const NavbarSignedSeeker = ({ className }) => {
  return (
    <div className={`navbar-general ${className}`}>
      <div className="div">
        <img className="justlogo" alt="Justlogo" src="/logos/just-logo-1.png" />
        <div className="title-2">JobQuest Central</div>
      </div>
      <div className="navigation">
        <div className="tab">Home</div>
        <div className="tab">Profile</div>
        <div className="tab">Browse Jobs</div>
        <div className="tab">Notification</div>
      </div>
    </div>
  );
};