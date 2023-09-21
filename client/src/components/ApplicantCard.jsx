import React from "react";
import "/src/css/card_style.css";

export const ApplicantCard = ({ applicantDetail }) => {

    return (
        <div className="job-card applicant-card">
            {/* WRAP IN A LINK LATER TO OUTLET */}
            <div className="card-frame">
                <div className="title">{applicantDetail.applicant_title}</div>
                <div className="company">{applicantDetail.applicant_fullname}</div>
                <div className="location">Applied on {applicantDetail.application_date}</div>
                <div className="button-frame">
                    <div className="button-styled primary-button">
                        Decline
                    </div>
                    <div className="button-styled secondary-button">
                        Accept
                    </div>
                </div>
            </div>

        </div>
    );
};