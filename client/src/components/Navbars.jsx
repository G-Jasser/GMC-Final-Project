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

export const NavbarSignedSeeker = ({ className }) => {
  return (
      <div className={`navbar-general ${className}`}>
          <Link to={'/'} className="div">
              <img className="justlogo" alt="Justlogo" src="/logos/just-logo-1.png" />
              <div className="title-2">JobQuest Central</div>
          </Link>
          <div className="navigation">
              <Link to={'/'} className="tab">Home</Link>
              <Link to={'/applicant/profile/CHANGETHISLATER'} className="tab">Profile</Link>
              <Link to={'/jobs'} className="tab">Browse Jobs</Link>
          </div>
      </div>
  );
};
