import React from "react";
import "/src/css/style.css";
import { Link } from "react-router-dom";

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
                    {/* <Link to={"/company/profile/edit/:applicantID"} className="button-styled secondary-button">
                        Edit Profile
                    </Link> */}
                </div>
                <button className="button-styled primary-button">
                    Sign out
                </button>
            </div>
        </div>
    );
};

export const ProfileSeekerMainSec = () => {
    return (
        <div className="section-container ProfileMainSection bottom-border max-height-sc">
            <div className="container max-width">
                <div className="info">
                    <div className="title-1">John Doe</div>
                    <div className="text-normal">Experienced Software Engineer</div>
                    <Link to={"/applicant/profile/edit/:applicantID"} className="button-styled secondary-button">
                        Edit Profile
                    </Link>
                </div>
                <button className="button-styled primary-button">
                    Sign out
                </button>
            </div>
        </div>
    );
};
