import React from "react";
import "/src/css/style.css";

export const NavbarSigned = ({ className }) => {
  return (
    <div className={`navbar-general ${className}`}>
      <div className="div">
        <img className="justlogo" alt="Justlogo" src="/logos/just-logo-1.png" />
        <div className="title-2">JobQuest Central</div>
      </div>
      <div className="navigation">
        <div className="tab">Home</div>
        <div className="tab">Profile</div>
        <div className="tab">Posted Jobs</div>
        <div className="tab">Our Offers</div>
        <div className="tab">Notifications</div>
      </div>
    </div>
  );
};