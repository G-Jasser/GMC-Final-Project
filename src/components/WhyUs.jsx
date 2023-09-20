import React from "react";
import "/src/css/style.css";

export const WhyUs = () => {
    return (
        <div className="section-container WhyUs">
            <div className="main-container-1">
                <div className="title-1">Why Choose Us</div>
                <p className="text-normal">
                    We connect you with top companies and provide a seamless job application experience
                </p>
            </div>
            <div className="list-1">
                <div className="item-1">
                    <div className="title-2">User-Friendly Interface</div>
                    <p className="text-normal">Our platform is easy to navigate and ensures a smooth job search process</p>
                </div>
                <div className="item-1">
                    <div className="title-2">Wide Range of Opportunities</div>
                    <p className="text-normal">We have a vast selection of job offers from various industries</p>
                </div>
                <div className="item-1">
                    <div className="title-2">Quick and Easy Application</div>
                    <p className="text-normal">Apply to jobs with just a few clicks</p>
                </div>
            </div>
        </div>
    );
};
