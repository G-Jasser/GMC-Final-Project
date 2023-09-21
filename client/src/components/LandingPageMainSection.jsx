import React from "react";
import "/src/css/style.css";
import { Link } from "react-router-dom";

export const LandingPageMainSection = () => {
    return (
        <div className="section-container LandingPageMainSection bottom-border">
            <div className="container max-width">
                <img className="landing-page-logo" src="/logos/logo-full.png" />
                <div className="sign-buttons-wrapper">
                    <div className="double-button-container">
                        <Link to={"/company/signup"} className="button-styled primary-button">
                            Find your next hire
                        </Link>
                        <Link to={"/applicant/signup"} className="button-styled secondary-button">
                            Find your next job
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
