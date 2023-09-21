import React from "react";
import "/src/css/style.css";

export const RecruiterAboutUsSection = () => {
    return (
        <div className="section-container BenefitsSection bottom-border max-height-sc min-height-5">
            <div className="container max-width width100p">
                <div className="main-container-1">
                    <p className="title-1">About Us</p>
                    <p className="text-normal">Learn more about our company or contact us at:</p>
                    <div className="list-1">
                        <div className="item-1">
                            <div className="title-2">Company Website:</div>
                            <a className="text-normal" href="">
                                www.somethingsomewhere.com
                            </a>
                        </div>
                        <div className="item-1">
                            <div className="title-2">Phone Number:</div>
                            <p className="text-normal">
                                1234567890
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
