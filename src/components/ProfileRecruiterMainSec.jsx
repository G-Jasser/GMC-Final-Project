import React from "react";
import "/src/css/style.css";

export const ProfileRecruiterMainSec = () => {
    const companyDetailsMock = {
        //To be removed
    }
    return (
        <div className="section-container ProfileMainSection bottom-border max-height-sc">
            <div className="container max-width">
                <img src={
                    companyDetailsMock.logo? companyDetailsMock.logo: "/profile/avatar.svg"
                    } alt="" className="pfp" />
                <div className="info">
                    <div className="title-1">Company Name</div>
                    <div className="tag-styled">
                        Location: Country, City, Address
                    </div>
                    <div className="text-normal">About the company</div>
                    <button className="button-styled secondary-button">
                        Edit Profile
                    </button>
                </div>
                <button className="button-styled primary-button">
                    Sign out
                </button>
            </div>
        </div>
    );
};
