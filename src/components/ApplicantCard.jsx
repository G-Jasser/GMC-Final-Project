import React from "react";
import "/src/css/card_style.css";

export const ApplicantCard = ({ ApplicantDetails }) => {
    const ApplicantDetailsMock = { //DELETE THIS LATER
        job_title: "Web developer",
        applicant_name: "John Doe",
        applied_on: "12th May",
        tags: [
            "Full-time",
            "Remote"
        ]
    }

    return (
        <div className="job-card applicant-card">
            {/* WRAP IN A LINK LATER TO OUTLET */}
            <div className="card-frame">
                <div className="title">{ApplicantDetailsMock.job_title}</div>
                <div className="company">{ApplicantDetailsMock.applicant_name}</div>
                <div className="location">Applied on {ApplicantDetailsMock.applied_on}</div>
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