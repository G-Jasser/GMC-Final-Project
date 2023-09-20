import React from "react";
import "/src/css/style.css";

export const LandingPageMainSection = () => {
    return (
        <div className="section-container LandingPageMainSection">
            <div className="container max-width">
                <img className="landing-page-logo" src="/logos/logo-full.png" />
                <div className="sign-buttons-wrapper">
                    <div className="double-button-container">
                        <button className="button-styled primary-button">
                            Find your next hire
                        </button>
                        <button className="button-styled secondary-button">
                            Find your next job
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
