import React from "react";
import "/src/css/style.css";
import { Link } from "react-router-dom";

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