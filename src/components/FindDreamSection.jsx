import React from "react";
import "/src/css/style.css";

export const FindDreamSection = () => {
    return (
        <div className="section-container FindDreamSection">
            <div className="main-container">
                <div className="title-1">Find Your Dream Job</div>
                <p className="text-normal">Browse through thousands of job offers</p>
                <div className="sign-buttons-wrapper">
                    <div className="double-button-container">
                        <button className="button-styled primary-button">
                            Log In
                        </button>
                        <button className="button-styled secondary-button">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
