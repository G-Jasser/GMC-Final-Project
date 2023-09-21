import React from "react";
import "/src/css/style.css";
import { Link } from "react-router-dom";

export const FindDreamSection = () => {
    return (
        <div className="section-container FindDreamSection bottom-border max-height-sc">
            <div className="main-container">
                <div className="title-1">Find Your Dream Job</div>
                <p className="text-normal">Browse through thousands of job offers</p>
                <div className="sign-buttons-wrapper">
                    <div className="double-button-container">
                        <Link to={"/login"} className="button-styled primary-button">
                            Log In
                        </Link>
                        <Link to={"/applicant/signup"} className="button-styled secondary-button">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
