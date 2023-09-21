import React from "react";
import "/src/css/style.css";
import { Link } from "react-router-dom";

export const NavbarSignedRecruiter = ({ className }) => {
  return (
    <div className={`navbar-general ${className}`}>
      <Link to={'/'} className="div">
        <img className="justlogo" alt="Justlogo" src="/logos/just-logo-1.png" />
        <div className="title-2">JobQuest Central</div>
      </Link>
      <div className="navigation">
        <Link to={'/'} className="tab">Home</Link>
        <Link to={'/company/profile/CHANGETHISLATER'} className="tab">Profile</Link>
        <Link to={'/company/job-posts'} className="tab">Posted Jobs</Link>
      </div>
    </div>
  );
};